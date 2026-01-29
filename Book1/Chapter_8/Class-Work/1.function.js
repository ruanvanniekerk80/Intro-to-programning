//CREATING A FUNCTION:

// We are creating a function and assigning it to a variable named 'ourFirstFunction'
var ourFirstFunction = function () {
    // This line will print "Hello world!" to the console when the function is called
    console.log("Hello world!");
};

//CALLING A FUNCTION:
ourFirstFunction();

//PASSING ARGUMENTS:
// This function takes one parameter called 'name'
var sayHelloTo = function (name, age, surname, color) {
    console.log("Hello " + name + surname + "You are " + age + " " + "years" + color);
};

// Calling the function with the argument:
sayHelloTo("Alice", 25, ' Jones ', "blue");



var two = function (number) {
    return number * 2;

}
console.log(two(4));
