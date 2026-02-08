let one = document.getElementById("one");
let two = document.getElementById("two");
let output = document.getElementById("output");

function doAdd() {
  output.innerHTML = String(Number(one.value) + Number(two.value));
  ifNegative();
}

function doSubtract() {
  output.innerHTML = String(Number(one.value) - Number(two.value));
  ifNegative();
}

function doMultiply() {
  output.innerHTML = String(Number(one.value) * Number(two.value));
  ifNegative();
}

function doDivision() {
  output.innerHTML = String(Number(one.value) / Number(two.value));
  ifNegative();
}

function doExponentiation() {
  let result = 1;
  let base = Number(one.value);
  let exponent = Number(two.value);

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  output.innerHTML = String(result);
  ifNegative();
}

function doClear() {
  one.value = "";
  two.value = "";
  output.innerHTML = "";
  output.style.color = "black";
}

function ifNegative() {
  if (Number(output.innerHTML) < 0) {
    output.style.color = "red";
  } else {
    output.style.color = "black";
  }
}
