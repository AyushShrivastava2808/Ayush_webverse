let arr = [1,2,3,4,5];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

let arr1 = ["x","y","z",1,2,3,true,false];

for(let i=0; i<arr1.length; i++){
    console.log(arr1[i]);
}

//push
arr1.push("hello");

for(let i=0; i<arr1.length; i++){
    console.log(arr1[i]);
}

console.log(arr1.length);


//pop
arr1.pop();

for(let i=0; i<arr1.length; i++){
    console.log(arr1[i]);
}

console.log(arr1.length);

//sort
let marks = [2,4,3,1,5];
marks.sort();
console.log(marks);

//reverse
marks.reverse();
console.log(marks);

//slicing
console.log(marks.slice(2,4));

//indexOf
console.log(marks.indexOf(3));