const fs = require('fs')
const { print } = require('./async-code')

test('readFile', (done) => {
  const results = [];
  const { log } = console;
  console.log = jest.fn((...args) => {
    results.push(...args);
    log(...args);
  });
  print(`${__dirname}/printer.test.js`);

  setTimeout(() => {
    const expected = [fs.readFileSync(`${__dirname}/printer.test.js`, 'utf-8')];
    expect(results).toEqual(expected);
    done();
  }, 2000);
});
