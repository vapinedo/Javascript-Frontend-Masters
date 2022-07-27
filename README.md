# Javascript practice code :: Frontend Master Courses

## Object.is custom polyfill

This take care for 2 corners cases: -0 and NaN where === operator lies

```
    if (!Object.is || true) {
    Object.is = function ObjectIs(x, y) {
        var xNegZero = isItNegZero(x);
        var yNegZero = isItNegZero(y);

        function isItNegZero(value) {
        return value === 0 && value / 0 === -Infinity;
        }
    };
    }
```
