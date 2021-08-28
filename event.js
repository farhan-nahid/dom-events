function bgRed() {
  document.body.style.backgroundColor = "red";
}

// handle blue button by using id & function

const handleBlue = document.getElementById("bg__blue");
// just set the name of function
handleBlue.onclick = bgBlue;

function bgBlue() {
  document.body.style.background = "blue";
}

// handle event using anonymous function

const handleGreen = document.getElementById("bg__green");

// anonymous function

handleGreen.onclick = function () {
  document.body.style.background = "green";
};

// handle event using add event listener

const handleGoldenrod = document.getElementById("bg__goldenrod");

// event listener

handleGoldenrod.addEventListener("click", bgGoldenrod);

function bgGoldenrod() {
  document.body.style.background = "goldenrod";
}

// handle event using add event listener & anonymous function
const handelHotPink = document.getElementById("bg__hotpink");
handelHotPink.addEventListener("click", function () {
  document.body.style.backgroundColor = "hotpink";
});

// direct shortcut of add event listener
document.getElementById("bg__lightblue").addEventListener("click", function () {
  document.body.style.backgroundColor = "lightblue";
});
