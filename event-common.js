// using onclick function

function handleFunction() {
  const p = document.getElementById("clicking__method");
  p.innerText = "By Using On Click Function";
  p.style.color = "green";
  p.style.padding = "10px";
  p.style.background = "#00800042";
  p.style.marginTop = "40px";
}

// anonymous function

document
  .getElementById("direct__function")
  .addEventListener("click", function () {
    const p = document.getElementById("clicking__method");
    p.innerText = "By Using Direct Add Event Listener Function";
    p.style.color = "green";
    p.style.padding = "10px";
    p.style.background = "#00800042";
    p.style.marginTop = "40px";
  });

// anonymous function

document.getElementById("submit__value").addEventListener("click", function () {
  let input = document.getElementById("text__input");
  const p = document.getElementById("clicking__method");
  if (input.value === "") {
    return alert("Please Write Something");
  }
  p.innerText = input.value;
  input.value = "";
  p.style.color = "green";
  p.style.padding = "10px";
  p.style.background = "#00800042";
  p.style.marginTop = "40px";
});
