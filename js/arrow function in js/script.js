// named function
function greet(){
    console.log("Hello!");
}
greet();

// anonymous function
let greet2 = function(){
    console.log("Hello!");
}
greet2();

// arrow function
let greet3 = () => {
    console.log("Hello!");
}
greet3();

const greet4 = (count) => {
    console.log("Hello!",count);
}
greet4(2);

const square = (x) => {
    return x*x;
}

console.log(square(2));