// first input value

const input1 = document.getElementById("number1");
document.getElementById("input__one").addEventListener("click", function () {
  const output1 = document.getElementById("1__number");
  if (input1.value === "") {
    return alert("Please Enter a Number");
  }
  output1.innerText = input1.value;
  input1.value = "";
});

// second input value

const input2 = document.getElementById("number2");
document.getElementById("input__two").addEventListener("click", function () {
  const output2 = document.getElementById("2__number");
  if (input2.value === "") {
    return alert("Please Enter a Number");
  }
  output2.innerText = input2.value;
  input2.value = "";
});

// find total of input fields

document.getElementById("total__sum").addEventListener("click", function () {
  if (input1.value === "" || input2.value === "") {
    return alert("Please Fill Up the Input Fields");
  }
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  document.getElementById("sum__number").innerText = num1 + num2;
});
