const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const reset = document.getElementById("reset");
const number = document.getElementById("number");

plus.addEventListener("click", addUp);
function addUp() {
  let currentNumber = number.innerHTML;
  number.innerHTML = Number(currentNumber) + 1;
}

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

document.addEventListener("keydown", e => {
  if (e.key === "a" || e.key === "+") {
    addUp();
  } else if (e.key === "s" || e.key === "-") {
    subDown();
  } else if (e.key === "r" || e.key === "0") {
    resetIt();
  }
});
