let inputBox = document.getElementById("inputbox"); // Get input box
let buttons = document.querySelectorAll("button"); // Get all buttons

let expression = ""; // Store the calculation

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonValue = button.innerText; // Get button text

        if (buttonValue === "=") {
            try {
                expression = eval(expression); // Evaluate the expression
                inputBox.value = expression; // Show result
            } catch {
                inputBox.value = "Error"; // Handle invalid input
                expression = "";
            }
        } else if (buttonValue === "AC") {
            expression = ""; // Clear everything
            inputBox.value = "";
        } else if (buttonValue === "DEL") {
            expression = expression.slice(0, -1); // Remove last character
            inputBox.value = expression;
        } else if (buttonValue === "÷") {
            expression += "/"; // Convert ÷ to /
            inputBox.value = expression;
        } else {
            expression += buttonValue; // Add button value to expression
            inputBox.value = expression;
        }
    });
});
