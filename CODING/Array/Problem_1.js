let arr = [1,4,2,50,7,33,10,23,87,9,23,43]; 

let max = -Infinity; 

for(let i=0; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max);