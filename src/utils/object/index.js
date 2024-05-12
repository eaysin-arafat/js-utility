/**
 * Utility functions for manipulating objects.
 *
 * This module exports various functions for common object operations.
 */

const chunk = require("./chunk");
const compact = require("./compact");
const differenceBy = require("./differenceBy");
const sortedLastIndexBy = require("./sortedLastIndexBy");
const takeRightWhile = require("./takeRightWhile");
const concat = require("./concat");
const difference = require("./difference");
const drop = require("./drop");
const dropRight = require("./dropRight");
const fill = require("./fill");
const flatten = require("./flatten");
const flattenDeep = require("./flattenDeep");
const flattenDepth = require("./flattenDepth");
const fromPairs = require("./fromPairs");

module.exports = {
  chunk,
  compact,
  differenceBy,
  sortedLastIndexBy,
  takeRightWhile,
  concat,
  difference,
  drop,
  dropRight,
  fill,
  flatten,
  flattenDeep,
  flattenDepth,
  fromPairs,
};
