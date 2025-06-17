function countArray(arr){
    for(let i=0; i<=arr.length-1; i++){
        let count=0;
        for(let j=1; j<=arr[i]; j++ ){
            if(arr[i]%j==0){
               count++; 
            }
        }
    let x;
    let outputCount=0;
        if(count==2){
             arr[i]='prime';
             if(arr[i-1]=arr[i] || arr[i+1]==x){
                 outputCount++
             }
             console.log(outputCount);
        }
    }
}
countArray ([2,6,7,12,19,10]); 

// given an array of intergers, find the count of such occurrence of elements in the array where one of the neighbours of the element is prime number. input = [2,6,7,12,19,10]