let str = "masai"; 
// count how many times each character is present 
let obj={}
let count=1; 
for(let i=0; i<=str.length-1; i++){
    if(obj[str[i]] == undefined){
        obj[str[i]]=1; 
    }else{
        obj[str[i]]++;
    }
}
console.log(obj)

