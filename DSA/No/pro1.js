function printPattern(n) {
    if (n % 2 !== 0 && n >= 3) {  // Odd aur 3 ya usse bada number check
        for (let i = 1; i <= n + 2; i++) {
            let row = "";

            // Pehla *
            row += "* ";

            // Pehla middle part
            for (let j = 1; j <= n; j++) {
                if (i === Math.floor((n + 2) / 2) + 1) {
                    row += "e ";
                } else {
                    row += "  ";
                }
            }

            // Beech ka *
            for (let k = 1; k <= n; k++) {
                if (i !== 1 && i !== (n + 2)) {
                    row += "* ";
                } else {
                    row += "  ";
                }
            }

            // Dusra middle part
            for (let j = 1; j <= n; j++) {
                if (i === Math.floor((n + 2) / 2) + 1) {
                    row += "e ";
                } else {
                    row += "  ";
                }
            }

            // Aakhri *
            row += "* ";

            console.log(row);
        }
    } else {
        console.log("Please enter an odd number which is greater than or equal to 3");
    }
}

// Example usage:
printPattern(5);


/*
------- pattern start ------

*                               *
*           * * * * *           *
*           * * * * *           *
* e e e e e * * * * * e e e e e *
*           * * * * *           *
*           * * * * *           *
*                               *

------- pattern end -------
*/