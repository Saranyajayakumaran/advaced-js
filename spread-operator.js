
//vanilla javascript
let arr1=[1,2,3];
let arr2=arr1;
console.log(arr1);
console.log(arr2);

arr2.push(5)

console.log(arr1);
console.log(arr2);

//spread operator[...]

let arr3=[4,5,6];
let arr4=[...arr3]

console.log(arr3);
console.log(arr4);

let arr5=[...arr4, 7];
console.log(arr5);

let obj1={ a:1,b:2,c:3}
console.log(obj1);

let obj2={...obj1,d:4}
console.log(obj2)

let arr6=[...arr1,{...obj1},...arr3,"x","y","z"];
console.log(arr6);
