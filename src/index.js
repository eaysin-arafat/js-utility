/**
 * Utility functions for arrays and objects.
 *
 * This module combines utility functions from separate modules (./array.js and ./object.js)
 * for efficient array and object manipulation.
 */

const arrayUtils = require("./utils/array");
const objectUtils = require("./utils/object");

module.exports = {
  ...arrayUtils,
  ...objectUtils,
};
