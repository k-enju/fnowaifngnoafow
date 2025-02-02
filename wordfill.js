function autoSortAndValidate() {
    // Sort the answers in the correct order
    I.sort((a, b) => {
        return a[1][0][0][0].localeCompare(b[1][0][0][0]);
    });

    // Apply the sorted values to the input fields
    for (let i = 0; i < I.length; i++) {
        if (document.getElementById("Gap" + i)) {
            document.getElementById("Gap" + i).value = I[i][1][0][0]; // Set correct answer
        }
    }

    // Validate automatically
    CheckAnswers();
}

// Run the auto-sort and validate function
autoSortAndValidate();