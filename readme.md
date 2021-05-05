# Validator
The is a small utility object that has methods like isNumber, isString, isBoolean etc.
# Why will we need these methods instead of using javascript built in such functions?
Since these functions are wrappers around the built in javascript functions and provide extra flexibility like throwing errors etc.
# Almost Every method has a shout method
incase we want any method to throw an error and stop the execution of the programme we can set shout = true and incase of failure to validate an error will be thrown.
#   THERE WILL BE BREAKING CHANGES IN NEAR FUTURE-----

# Methods signature
- isNumber(no:number,shout=false,message="This is not a Number");
will return true or false or throw error if shout = true.

- isInteger(no:number,shout=false,message="This is not an Integer");
will return true or false or throw error if shout = true.

- isSmaller(smaller:number,bigger:number,shout=false,message="First Number is not smaller than the second number"):boolean
will return true or false or throw error if shout = true.

- wholeNumber(no:number,shout=false):number
will return a "whole number (no decimals)" or throw error if shout = true.

- isString(str:string,shout=false,message="This value is not string")
will return true or false or throw error if shout = true.

- isBoolean(b:boolean,shout=false,message="This value is not boolean");
will return true or false or throw error if shout = true.

- isSNB(snb:string|number|boolean,shout=false,message="This value is not boolean or string or number");
- this method will return true if the argument sent is either a string or a boolean or a number. (SNB stands for string number boolean).