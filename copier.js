const util = require("./util");

module.exports = class Copier {
  constructor(src) {
    this.src = src;
  }
  get() {
    // returns a promise which returns the original argument after 1 second
    return util.delay(1000).then(() => {
      return this.src;
    });
  }
  delete() {
    // returns a promise which throws an error after 2 seconds
    return util.delay(2000).then(() => {
      throw Error("Cannot Delete!");
    });
  }
  copy() {
    // returns a copy of argument, if object should be a deep copy and should
    // iterate over the source object recursively
    return util.deepCopy(this.src);
  }
};
