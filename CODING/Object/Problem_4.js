let obj ={ 
    name: 'sunny', 
    age: 23, 
    address: {
        houseNumber: '106/322', 
        streetName: 'Gandhi Nagar Kanpur Nagar', 
        pincode: 208012
    }, 
    user_hobbies: ['reading','sleeping','biking','movies']
}
// console.log(obj['user_hobbies'][3]);

for(let i=0; i<=obj.user_hobbies.length-1; i++){
    console.log(obj.user_hobbies[i]);
}