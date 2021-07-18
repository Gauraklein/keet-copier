const self = (module.exports = {});

// adds a delay takes number of ms as arg
self.delay = (t) => {
  return new Promise((resolve) => setTimeout(resolve, t));
};

// recursive function that either returns the arg or iterates through its values
// there are obvious edge cases in this execution an example would be a Date object
self.deepCopy = (src) => {
  if (typeof src !== "object" || src === null) {
    return src;
  }

  if (src instanceof Array) {
    return src.reduce((arr, item, i) => {
      arr[i] = self.deepCopy(item);
      return arr;
    }, []);
  }

  if (src instanceof Object) {
    return Object.keys(src).reduce((newObj, key) => {
      newObj[key] = self.deepCopy(src[key]);
      return newObj;
    }, {});
  }
};
