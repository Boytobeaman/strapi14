'use strict';

/**
 * Aliplatform.js controller
 *
 * @description: A set of functions called "actions" for managing `Aliplatform`.
 */

module.exports = {

  /**
   * Retrieve aliplatform records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.aliplatform.search(ctx.query);
    } else {
      return strapi.services.aliplatform.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a aliplatform record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.aliplatform.fetch(ctx.params);
  },

  /**
   * Count aliplatform records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.aliplatform.count(ctx.query);
  },

  /**
   * Create a/an aliplatform record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.aliplatform.add(ctx.request.body);
  },

  /**
   * Update a/an aliplatform record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.aliplatform.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an aliplatform record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.aliplatform.remove(ctx.params);
  }
};
