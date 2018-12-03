# Measure.js

A utility to handle values with unit (i.e. css values). It work by wrapping a value with a unit in a function, so you dont have to keep track of the unit when manipulating the value.

```js
var size = measure("10px");
```

now you can output the value with its unit, or change the value and keep the unit :

```js
size();   // "10px"
size(16); // "16px"
size();   // "16px"
size(24); // "24px"
size();   // "24px"
```

If you want, you can access to the value or the unit individually :

```js
size.value();   // 24
size.unit();    // "px"
```

or mutate them (please note that it doesn't handle conversion between different units) :

```js
size.value(16);
size(); // "16px"
size.unit("rem");
size(); // "16rem"
```

Note that these functions return the wrapper function when used as mutator, so you can chain them:

```js
size.value(50).unit("%")(); // "50%""
size(); // "50%""
size.value(10) === size; // true
size(); // "10%"
```

Also attached to the wrapper function are two "relative" mutators, wich dont return the wrapper function but the new output :

```js
size.add(40);   // "50%"
size.add(-25);  // "25%"
size.mult(4);   // "100%"
size.mult(.5);  // "50%"
size();         // "50%"
```
