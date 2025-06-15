let arr = ["Amit","Nrupul","Ankit","Varun","Aman","Pulkit","Ajay","Shivam","Sunny"]; 

let ele_count=[];
for(let i=0; i<arr.length; i++){
    let count; 
    for(let j=0; j<arr[i].length; j++){
        if(arr[i][j]=="A" || arr[i][j]=="a"){
            ele_count.push(count=1);
            break;
        }else{
            count=0; 
        }
    }
    // console.log(count);
}
console.log(ele_count.length);