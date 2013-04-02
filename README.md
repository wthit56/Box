# Box

This library is for educational purposes only; it doesn't have much value beyond showing a programmer how a value can be boxed and unboxed.


## What is Boxing?

Boxing is the process of turning a regular primitive value into an object. Objects are stored in a different type of memory, the "heap", whereas primitive values are stored in "stack" memory. Values stored in the "stack" are passed as data, effectively creating copies of that data when, for example, they are passed as a parameter in a function call, whereas objects in the "heap" are passed as references to the same data.

Unboxing is the process of getting the original primitive value back out of the box object. In JavaScript, you can do this by using an object's `.valueOf()` method.


## The Library

The source code in the _.js_ file should be self-explanatory. The general idea is to have a function that turns a value into it's corresponding object type. For example the value `1` is of the primitive type "number". So to box it, we can create a new "Number" object, like so: `new Number(1)`.

Using the library, you can send any value to the `Box` function, and it will return the boxed value. This works with any data type. If you use the _new_ keyword when calling the `Box` function, this will force it to wrap the value in a new Box object, rather than the corresponding object type. So, in the example above, using the _new_ keyword would result in a new `Box` object, as opposed to a new `Number` object.
