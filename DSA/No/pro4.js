function printPattern(n){
    if(n%2!==0 && n>=3){
        for(let i=1; i<=n+2; i++){
            let row=""; 
            row+="* ";

            // med
            for(let j=1; j<=n; j++){
                if(i===Math.floor((n+2)/2)+1){
                    row+="e ";
                }else{
                    row+="  ";
                }
            }
            // mid part 
            for(let k=1; k<=n; k++){
                if(i!==1 & i!==(n+2)){
                    row+="* ";
                }else{
                    row+="  ";
                }
            }
            for(let j=1; j<=n; j++){
                if(i===Math.floor((n+2)/2)+1){
                    row+="e ";
                }else{
                    row+="  ";
                }
            }
            row+="* "; 
            console.log(row);
        }
    }else{
        console.log("Opps! You enter a wrong Number. Please Enter a Odd Number")
    }
}
printPattern(3);