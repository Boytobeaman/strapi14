'use strict';

/**
 * Survey.js controller
 *
 * @description: A set of functions called "actions" for managing `Survey`.
 */

module.exports = {

  /**
   * Retrieve survey records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.survey.search(ctx.query);
    } else {
      return strapi.services.survey.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a survey record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.survey.fetch(ctx.params);
  },

  /**
   * Count survey records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.survey.count(ctx.query);
  },

  /**
   * Create a/an survey record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.survey.add(ctx.request.body);
  },

  /**
   * Update a/an survey record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.survey.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an survey record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.survey.remove(ctx.params);
  }
};
