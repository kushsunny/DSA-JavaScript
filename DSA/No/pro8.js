function printPattern(n){
    if(n%2!==0 && n>=3){
        for(let i=1; i<=n; i++){
            let row="";
            for(let j=1; j<=n; j++){
                if(i===Math.floor(n/2)+1){
                    row+="e ";
                }else{
                    row+="  ";
                }
            }
            for(let j=1; j<=n+2; j++){
                row+="@ ";
            }
            for(let j=1; j<=n; j++){
                if(i===Math.floor(n/2)+1){
                    row+="e ";
                }else{
                    row+="  ";
                }
            }
            console.log(row);
        }
    }else{
        console.log("Enter Odd Number");
    }
}
printPattern(2);