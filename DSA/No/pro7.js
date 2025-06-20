function printPattern(n) {
    if (n % 2 !== 0 && n >= 3) {

        for (let i = 1; i <= n; i++) {
            let row = "";

            // First section (spaces or 'e')
            for (let j = 1; j <= n; j++) {
                if (i === Math.floor(n / 2) + 1) {
                    row += "e ";
                } else {
                    row += "  ";
                }
            }

            // Middle '@' section
            for (let j = 1; j <= n + 2; j++) {
                row += "@ ";
            }

            // Second section (spaces or 'e')
            for (let j = 1; j <= n; j++) {
                if (i === Math.floor(n / 2) + 1) {
                    row += "e ";
                } else {
                    row += "  ";
                }
            }

            console.log(row); // Print the row
        }

    } else {
        console.log("Please enter an odd number greater than or equal to 3.");
    }
}

// Example usage:
printPattern(5);
