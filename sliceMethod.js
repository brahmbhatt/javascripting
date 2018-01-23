let arr = [1,2,3,4,5,6];
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(Array.prototype.slice.call(arr, 2, 4));
