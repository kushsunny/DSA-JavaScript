let arr = [1,1,3,4,5,5,6,7,8,8]; 
// occurance 2 times 
let obj={}
for(let i=0; i<=arr.length-1; i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1;
    }else{
        obj[arr[i]]++;
    }
}
let sum=0; 
for(let i in obj){
    if(obj[i]==2){
        sum+=Number(i);
    }
}
console.log(sum);

// let obj={
//     name: 'sunny', 
//     age: 23
// }
// console.log(obj);
// delete obj['age']; 
// console.log(obj);
// obj['location']='kanpur'
// console.log(obj);