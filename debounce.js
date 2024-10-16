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

function opDebounce(
  func,
  wait,
  trailing = true,
  leading = false,
  maxWeight = 1
) {
  let timeout;

  return function (...args) {
    const context = this;
    const callNow = !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (trailing) func.apply(context, args);
    }, wait);

    if (callNow && !trailing) {
      func.apply(context, args);
    }
  };
}

// const logMessageWithTrailing = opDebounce(
//   () => console.log("Debounced with trailing!"),
//   1000,
//   true
// );
// logMessageWithOptions();
