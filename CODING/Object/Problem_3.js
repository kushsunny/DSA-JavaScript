let arr = [2,3,4,5,5,6,6,6,7,7,7,8]; 

let obj = {}

for(let i=0; i<=arr.length-1; i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1; 
    }else{
        obj[arr[i]]++;
    }
}
for(let i in obj){
    if(obj[i]==1){
        console.log(i,obj[i]);
    }
}