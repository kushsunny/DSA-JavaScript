function printPattern(n) {
    if (n % 2 !== 0 && n >= 3) { // Check if n is odd and >= 3
        for (let i = 1; i <= n + 2; i++) {
            let row = "* "; // First *

            // First middle space or 'e'
            for (let j = 1; j <= n; j++) {
                if (i === Math.floor((n + 2) / 2) + 1) {
                    row += "e ";
                } else {
                    row += "  ";
                }
            }

            // Middle * column
            for (let k = 1; k <= n + 2; k++) {
                if (i !== 1 && i !== (n + 2)) {
                    row += "* ";
                } else {
                    row += "  ";
                }
            }

            // Second middle space or 'e'
            for (let j1 = 1; j1 <= n; j1++) {
                if (i === Math.floor((n + 2) / 2) + 1) {
                    row += "e ";
                } else {
                    row += "  ";
                }
            }

            row += "* "; // Last *

            console.log(row);
        }
    } else {
        console.log("Please enter an odd number which is greater than or equal to 3");
    }
}

// Example usage:
printPattern(5);
