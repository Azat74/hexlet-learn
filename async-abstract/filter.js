const noop = () => {};

const once = (fn) => {
  let called = false;

  return (...args) => {
    if (called) return;
    called = true;
    fn(...args);
  };
};

// BEGIN (write your solution here)
const filter = (coll, iteratee, callback = noop) => {
  const oncedCallback = once(callback);
  let completed = 0;
  const { length } = coll;
  if (length === 0) {
    callback(null, []);
  }

  const mappedColl = [];
  const iteratorCallback = (item, index, err, result) => {
    if (err) {
      oncedCallback(err);
      return;
    }
    if (result) {
      mappedColl[index] = item;
    }
    completed += 1;
    if (completed === length) {
      oncedCallback(err, mappedColl.filter((v) => v !== undefined));
    }
  };

  coll.forEach((item, index) => iteratee(item, iteratorCallback.bind(null, item, index)));
};
// END

module.exports = {
  filter: filter
}