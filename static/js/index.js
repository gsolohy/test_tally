let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let reset = document.getElementById("reset");
let number = document.getElementById("number");

plus.addEventListener("click", addUp);
function addUp() {
  let currentNumber = number.innerHTML;
  number.innerHTML = Number(currentNumber) + 1;
}
plus.addEventListener("keydown", keys => {
  if (keys === "a") {
    addUp()
  }
});

minus.addEventListener("click", subDown);
function subDown() {
  let currentNumber = number.innerHTML;
  if (currentNumber > 0) {
    number.innerHTML = Number(currentNumber) - 1;
  }
}

reset.addEventListener("click", resetIt);
function resetIt() {
  number.innerHTML = 0;
}
