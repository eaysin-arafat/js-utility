/**
 * Utility functions for manipulating Arrays.
 *
 * This module exports various functions for common array operations.
 */

const head = require("./head");
const indexOf = require("./indexOf");
const initialize = require("./initialize");
const intersection = require("./intersection");
const intersectionByIndex = require("./intersectionByIndex");
const join = require("./join");
const last = require("./last");
const lastIndexOf = require("./lastIndexOf");
const nth = require("./nth");
const pull = require("./pull");
const pullAll = require("./pullAll");
const pullAllBy = require("./pullAllBy");
const pullAt = require("./pullAt");
const remove = require("./remove");
const reverse = require("./reverse");
const slice = require("./slice");
const sortedIndex = require("./sortedIndex");
const sortedIndexBy = require("./sortedIndexBy");
const sortedIndexOf = require("./sortedIndexOf");
const sortedLastIndex = require("./sortedLastIndex");
const sortedLastIndexOf = require("./sortedLastIndexOf");
const sortedUniq = require("./sortedUniq");
const sortedUniqBy = require("./sortedUniqBy");
const tail = require("./tail");
const take = require("./take");
const takeRight = require("./takeRight");
const union = require("./union");
const unionBy = require("./unionBy");
const uniq = require("./uniq");
const uniqBy = require("./uniqBy");
const unzip = require("./unzip");

module.exports = {
  head,
  indexOf,
  intersection,
  last,
  pull,
  unzip,
  uniqBy,
  uniq,
  unionBy,
  union,
  takeRight,
  take,
  tail,
  sortedIndex,
  sortedIndexBy,
  sortedLastIndex,
  sortedLastIndexOf,
  sortedIndexOf,
  initialize,
  intersectionByIndex,
  join,
  lastIndexOf,
  nth,
  pullAll,
  pullAllBy,
  pullAt,
  remove,
  reverse,
  slice,
  sortedUniq,
  sortedUniqBy,
};
