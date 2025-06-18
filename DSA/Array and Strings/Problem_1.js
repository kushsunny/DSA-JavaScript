let arr = [ 2,7,6,8,2,5,7]; 
// count of number which is greater than both it's neighbors
let count=0;
let emptyArr=[]; 
for(let i=0; i<arr.length-1; i++){
    if(arr[i-1]<arr[i] && arr[i]>arr[i+1]){
        emptyArr.push(arr[i]);
        count++;
    }
}
console.log(emptyArr,"\n","Total count of numbers = ",count);

console.log('interview Day');