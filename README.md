# Javascript Exercises :: Frontend Master Courses

1. Object.is ( custom polyfill )

## 1. Fundamentals Objects

Recommend to use ``new`` keyword

1. Object()
2. Array()
3. Function()
4. Date()
5. RegExp()
6. Error()

Not Recomm  end to use ``new`` keyword

1. String()
2. Number()
3. Boolean()

## 2. Abstract Operations

1. ToPrimitive
2. ToString
3. ToNumber
4. ToBoolean

## 3. Falsy Lookup Table

Boolean(anyValueOnList) === false, sometime else return true 

1. "" or ''
2. 0 or -0
3. null
4. NaN
5. false
5. undefined

## 4. Corners Cases

### Number

> **NOTE**

This fundamental operation, first strips off all leading and trailing whitespaces before doing coercion.

```
    Number("")              // 0 
    Number("    ")          // 0 
    Number(null)            // 0 
    Number(undefined)       // Nan
    Number([])              // 0 
    Number([1, 2, 3])       // NaN
    Number([null])          // 0 
    Number([undefined])     // 0
    Number({})              // NaN
```
### String
```
    String(-0)              // "0" 
    String(null)            // "null"
    String(undefined)       // "undefined"
    String([null])          // "" damm
    String([undefined])     // "" wtf!
```
### Boolean
```
    1 < 2                   // true
    2 < 3                   // true
    1 < 2 < 3               // true

    (1 < 2) < 3
    (true) < 3
    1 < 3                   // true

    3 > 2                   // true
    2 > 1                   // true
    3 > 2 > 1               // false (Oops!)

    (3 > 2) > 1
    (true) > 1
    1 > 1                   // false

```
## 5. The 3 Javascript Core Components

1. Memory Allocation
2. Thread Execution
3. Call Stack