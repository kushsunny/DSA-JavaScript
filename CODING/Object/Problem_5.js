let apple_product = [
    {name: 'macbook', rating: 4.5, price: 180000},
    {name: 'iphone', rating: 4.0, price: 80000},
    {name: 'ipad', rating: 4.2, price: 55000},
    {name: 'Airpods', rating: 4.3, price: 20000},
]; 
// print the products name whose ratings are more than 4.2

for(let i=0; i<=apple_product.length-1; i++){
    if(apple_product[i]['rating']>4.2){
        console.log(apple_product[i]['name']);
    }
}