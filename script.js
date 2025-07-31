let display = document.getElementById("display");
let isDark = false;

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  display.value += operator;
}

function appendFunction(func) {
  if (func === 'pow(') {
    display.value += 'Math.pow(';
  } else {
    display.value += func;
  }
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Theme toggle
document.getElementById("theme-switch").addEventListener("change", () => {
  document.body.classList.toggle("dark");
});


// Mode toggle
document.getElementById("scientific-btn").addEventListener("click", () => {
  document.getElementById("scientific-buttons").style.display = "grid";
});
document.getElementById("standard-btn").addEventListener("click", () => {
  document.getElementById("scientific-buttons").style.display = "none";
});
