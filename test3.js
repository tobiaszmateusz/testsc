javascript: (function() {
    var coinsElement = document.getElementById("coin_mint_fill_max");

    // --- Input Validation and Error Handling ---
    if (!coinsElement) {
        console.error("Element with ID 'coin_mint_fill_max' not found.");
        alert("Error: Could not find the coins element.  Please check the page structure."); // User-friendly message
        return; // Stop execution
    }

    var coins = coinsElement.textContent.trim(); // Use textContent and trim whitespace
    coins = coins.substring(1, coins.length - 1);

    // --- Convert coins to a number (important for input validation) ---
    var coinsNum = parseInt(coins, 10);
    if (isNaN(coinsNum)) {
        console.error("Invalid coins value:", coins);
        alert("Error: The coins value is not a valid number.");
        return;
    }

    var countInput = document.getElementsByName('count')[0];

    // --- Input Validation ---
    if (!countInput) {
        console.error("Input element with name 'count' not found.");
        alert("Error: Could not find the input field for the count.");
        return;
    }
    countInput.value = coinsNum; // Set the value (using the numeric version)


    // --- Find and Click the Submit Button ---
    var buttons = document.getElementsByClassName("btn btn-default");
    var submitButton = null;

    // Iterate through buttons to find the submit button (more robust)
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].value === "Wybić" && buttons[i].type === "submit") { // Check both value AND type
            submitButton = buttons[i];
            break; // Stop searching once found
        }
    }

    if (!submitButton) {
        console.error("Submit button not found.");
        alert("Error: Could not find the submit button.");
        return;
    }

    // --- Trigger the Submit Action (using .click() is best) ---
    submitButton.click();  // This is the most reliable way to submit the form

    // --- Alternative (less reliable) ways to submit (if .click() doesn't work) ---
    // 1.  Submit the form directly (if you know the form's ID or can find it)
    //     var form = submitButton.form; // Get the form containing the button
    //     if (form) {
    //         form.submit();
    //     }
    //
    // 2.  Dispatch a submit event (can be less reliable if event listeners prevent it)
    //     var event = new Event('submit', { bubbles: true, cancelable: true });
    //     submitButton.form.dispatchEvent(event);


    // --- (Optional) Focus on the input (usually not needed after submit) ---
    // countInput.focus(); // Usually not necessary after submission

})();
