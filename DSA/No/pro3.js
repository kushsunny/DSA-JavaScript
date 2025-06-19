function printPattern(n) {
    if (n % 2 !== 0 && n >= 3) { // Check if n is odd and >= 3
        for (let i = 1; i <= n; i++) {
            let row = "* "; // First *

            // First middle block (spaces or 'e')
            for (let j = 1; j <= n + 2; j++) {
                if (i === Math.floor(n / 2) + 1) {
                    row += "e ";
                } else {
                    row += "  ";
                }
            }

            // Middle * block
            for (let k = 1; k <= n + 2; k++) {
                row += "* ";
            }

            // Second middle block (spaces or 'e')
            for (let j1 = 1; j1 <= n + 2; j1++) {
                if (i === Math.floor(n / 2) + 1) {
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
