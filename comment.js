// Step-1: Add button event handler

document
  .getElementById("comment__button")
  .addEventListener("click", function () {
    // Step-2: Get user comment

    const textBox = document.getElementById("comment__input");
    if (textBox.value === "") {
      return alert("Please Write Something");
    }

    // Step 3 : create paragraph

    const p = document.createElement("p");
    p.innerText = textBox.value;

    // Step 4: append the comment

    document.getElementById("comment__area").appendChild(p);

    // step 5: clear the text area

    textBox.value = "";
  });
