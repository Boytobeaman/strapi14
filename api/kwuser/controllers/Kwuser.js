'use strict';

/**
 * Kwuser.js controller
 *
 * @description: A set of functions called "actions" for managing `Kwuser`.
 */

module.exports = {

  /**
   * Retrieve kwuser records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.kwuser.search(ctx.query);
    } else {
      return strapi.services.kwuser.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a kwuser record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.kwuser.fetch(ctx.params);
  },

  /**
   * Count kwuser records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.kwuser.count(ctx.query);
  },

  /**
   * Create a/an kwuser record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.kwuser.add(ctx.request.body);
  },

  /**
   * Update a/an kwuser record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.kwuser.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an kwuser record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.kwuser.remove(ctx.params);
  }
};
