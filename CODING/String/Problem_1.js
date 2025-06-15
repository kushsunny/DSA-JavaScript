let str = 'Donald'; 
let bag=''; 

for(let i=0; i<str.length; i++){
    if(str[i]=='D'){
        bag=bag+'R';
    }else{
        bag+=str[i];
    }
}
console.log(bag);