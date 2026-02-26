//var,let,const
// function

var a = 10; // global scope
console.log(a);
/**
 * functions are of 2 types
 * 1. defination of function
 * 2. calling of function 
 */

// defination of function

//var

function abc() {
    console.log("hi how are you doing today");
    var a = 20;
    console.log(a);
    if (true) {
        a = 30;
        console.log(a);

    }

    console.log("let a=", a);


}

// calling of function 
abc();

// let

function abcd() {
    console.log("what's the temperature");
    let b = 20;//local scope
    console.log(b);

    if (true) {
        let b = 5;
        console.log(b);//5
    }
    console.log("let b =", b);

}
// calling the function 
abcd();

// const
const pi = 3.14;
// pi = 3.145;// must initialize the value at declaration

console.log(pi);    