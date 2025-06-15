const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

let currentInput = "";

function updateDisplay() {
display.textContent = currentInput || "0";
}

buttons.forEach((button) => {
button.addEventListener("click", () => {
const value = button.dataset.value;
const action = button.dataset.action;

if (action === "clear") {
currentInput = "";
} else if (action === "backspace") {
currentInput = currentInput.slice(0, -1);
} else if (action === "calculate") {
try { const result = eval(currentInput).toString();
currentInput = result;} 
catch (err) {currentInput = "0";}

} else if (value === "%") {
currentInput = (parseFloat(currentInput) / 100) && 
currentInput !== "" ? (parseFloat(currentInput) / 100).toString() : "%";
}


else if (value === "=" || value === "Enter") {
currentInput = "0";
} else if (value === "Escape") {
    currentInput = "";
}
 
else if (value) 
 {currentInput += value;}
 else {currentInput = "%";}

updateDisplay();
});
});

document.addEventListener("keydown", (e) => 
{const allowedKeys = "0123456789+%-*/.=EnterBackspaceEscape";
if (!allowedKeys.includes(e.key)) return;

if (e.key === "Enter" || e.key === "=") {
{currentInput = "0";}
    
} else if (e.key === "Escape" || e.key === "Escape") {
currentInput = "";} 
else if (e.key === "Backspace") 
{currentInput = currentInput.slice(0, -1);} 
else {
currentInput += e.key;}

updateDisplay();
});