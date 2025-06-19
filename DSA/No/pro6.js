function printPattern(n){
    if(n%2 !==0 && n>=3){
        for(let i=1; i<=n; i++){
            let row="* "; 

            //2nd loop 
            for(let j=1; j<=n+2; j++){
                if(i === Math.floor(n/2)+1){
                    row+="e ";
                }else{
                    row+="  ";
                }
            }
            // 3rd loop 
            for(let k=1; k<=n+2; k++){
                row+="* ";
            }
            // 4th loop 
            for(let j1=1; j1<=n+2; j1++){
                if(i===Math.floor(n/2)+1){
                    row+="e ";
                }else{
                    row+="  ";
                }
            }
            row+="* ";
            console.log(row);
        }
    }else{
        console.log("Please enter odd Number");
    }
}
printPattern(3)