/* 
Create two functions that will work like _.debounce from lodash.

    debounce: don't worry about the options.
    opDebounce: implement the leading options.
 */

function debounce(func, wait) {
  let timeout;

  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

// const logMessage = debounce(() => console.log("Debounced!"), 1000);

// logMessage();

function opDebounce(func, wait, options = {}) {
  let timeout;
  let leadingCalled = false;

  return function (...args) {
    const context = this;

    if (options.leading && !leadingCalled) {
      func.apply(context, args);
      leadingCalled = true;
    }

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (options.trailing) {
        func.apply(context, args);
      }
      leadingCalled = false;
    }, wait);
  };
}

// const logMessageWithTrailing = opDebounce(
//   () => console.log("Debounced with trailing!"),
//   1000,
//   true
// );
// logMessageWithOptions();
