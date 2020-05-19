const once = fn => {
  let called = false;
  return (...args) => {
    if (called) return;
    called = true;
    fn(...args);
  };
};

const callback = (text = 'text') => console.log(text);

const newCallback = once(callback);

newCallback('1235');
newCallback('1234');
