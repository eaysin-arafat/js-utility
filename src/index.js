// Import your utility functions from the 'array' module
const head = require("./array/head");
const indexOf = require("./array/indexOf");
const initialize = require("./array/initialize");
const intersection = require("./array/intersection");
const intersectionByIndex = require("./array/intersectionByIndex");
const join = require("./array/join");
const last = require("./array/last");
const lastIndexOf = require("./array/lastIndexOf");
const nth = require("./array/nth");
const pull = require("./array/pull");
const pullAll = require("./array/pullAll");
const pullAllBy = require("./array/pullAllBy");
const pullAt = require("./array/pullAt");
const remove = require("./array/remove");
const reverse = require("./array/reverse");
const slice = require("./array/slice");
const sortedIndex = require("./array/sortedIndex");
const sortedIndexBy = require("./array/sortedIndexBy");
const sortedIndexOf = require("./array/sortedIndexOf");
const sortedLastIndex = require("./array/sortedLastIndex");
const sortedLastIndexOf = require("./array/sortedLastIndexOf");
const sortedUniq = require("./array/sortedUniq");
const sortedUniqBy = require("./array/sortedUniqBy");
const tail = require("./array/tail");
const take = require("./array/take");
const takeRight = require("./array/takeRight");
const union = require("./array/union");
const unionBy = require("./array/unionBy");
const uniq = require("./array/uniq");
const uniqBy = require("./array/uniqBy");
const unzip = require("./array/unzip");

// Import your utility functions from the 'object' module
const differenceBy = require("./object/differenceBy");
const sortedLastIndexBy = require("./object/sortedLastIndexBy");
const takeRightWhile = require("./object/takeRightWhile");
const chunk = require("./object/chunk");
const compact = require("./object/compact");
const concat = require("./object/concat");
const difference = require("./object/difference");
const drop = require("./object/drop");
const dropRight = require("./object/dropRight");
const fill = require("./object/fill");
const flatten = require("./object/flatten");
const flattenDeep = require("./object/flattenDeep");
const flattenDepth = require("./object/flattenDepth");
const fromPairs = require("./object/fromPairs");

// Export all utility functions as an object
module.exports = {
  head,
  indexOf,
  initialize,
  intersection,
  intersectionByIndex,
  join,
  last,
  lastIndexOf,
  nth,
  pull,
  pullAll,
  pullAllBy,
  pullAt,
  remove,
  reverse,
  slice,
  sortedIndex,
  sortedIndexBy,
  sortedIndexOf,
  sortedLastIndex,
  sortedLastIndexOf,
  sortedUniq,
  sortedUniqBy,
  tail,
  take,
  takeRight,
  union,
  unionBy,
  uniq,
  uniqBy,
  unzip,
  differenceBy,
  sortedLastIndexBy,
  takeRightWhile,
  chunk,
  compact,
  concat,
  difference,
  drop,
  dropRight,
  fill,
  flatten,
  flattenDeep,
  flattenDepth,
  fromPairs,
  // Add other utility functions here
};
