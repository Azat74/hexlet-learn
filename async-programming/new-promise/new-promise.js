const newPromise = (duration) => {
  return new Promise((res) => {
    setTimeout(() => res('time is over'), duration)
  })
}

module.exports = newPromise

/*

timer.js
Реализуйте таймер в виде промиса.

import wait from './timer.js';

wait(100).then(() => console.log('time is over!'));
Экспортируйте функцию по умолчанию.

*/
