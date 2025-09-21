// Activity 1: Variables and Functions
let name = "Nelia Miranda";
let age = 22;

function greetUser(n, a) {
  return "Hello, I am " + n + " and I am " + a + " years old.";
}

// show greeting in the page
document.getElementById("intro").innerText = greetUser(name, age);

// Activity 2 & 3: DOM Manipulation + Debugging
let btnMiranda = document.getElementById("btn");
let textMiranda = document.getElementById("colorText");

function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

btnMiranda.onclick = function() {
  console.log("Before:", document.body.style.backgroundColor);
  let newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  textMiranda.innerText = "Current color: " + newColor;
  alert("Background changed to " + newColor);
  console.log("After: Background is", newColor);
}
