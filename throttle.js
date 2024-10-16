/* Create two functions that will work like _.throttle from lodash.

    throttle: don't worry about the options.
    opThrottle: implement the trailing and leading options.
*/
function throttle(func, limit) {
  let lastCall = 0;

  return function (...args) {
    const context = this;
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(context, args);
    }
  };
}

function opThrottle(func, limit, options = {}) {
  let lastCall = 0;
  let timeout;

  return function (...args) {
    const context = this;
    const now = Date.now();

    if (!lastCall && options.leading !== false) {
      lastCall = now;
      func.apply(context, args);
    }

    if (now - lastCall >= limit) {
      lastCall = now;
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      func.apply(context, args);
    } else if (options.trailing !== false) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        lastCall = 0;
        func.apply(context, args);
      }, limit - (now - lastCall));
    }
  };
}
// function add() {
//     return 1;
// }

// (async () => {
// const result = await run(opThrottle(add, 26, { trailing: true }), 16, 4);
// console.log(result);
// })();
