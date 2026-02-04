// sum
let a,b;
function sum(a,b){
    let result = a+b;
    console.log(result);
}
sum(7,7);

// fibbonacci
let n = 7;
function fib(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    let ans = fib(n-1)+fib(n-2);
    return ans;
}
let result = fib(n);
console.log(result);

// factorial
function fact(n){
    if(n==0 || n==1){
        return 1;
    }
    let ans = n*fact(n-1)
    return ans;
    
}
let res = fact(n);
console.log(res);