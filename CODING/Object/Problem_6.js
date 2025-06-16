let product = ['macbook','iphone','ipad','airpods']; 
let price = [180000, 80000, 55000, 20000]; 
let arr = []; 
for(let i=0; i<=product.length-1; i++){
    let obj={}
    obj.name=product[i];
    obj.price=price[i]; 
    arr.push(obj);
}
console.log(arr);