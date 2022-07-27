if (!Object.is || true) {
  Object.is = function ObjectIs(x, y) {
    var xNegZero = isItNegZero(x);
    var yNegZero = isItNegZero(y);

    function isItNegZero(value) {
      return value === 0 && value / 0 === -Infinity;
    }
  };
}

console.log(Object.is(42, 42) === true);