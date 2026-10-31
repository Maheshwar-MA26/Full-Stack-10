let form = document.getElementById("myForm");
let formName = document.getElementById("name");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let formName1 = formName.value.trim();

  // Check full name validity
  let flag = true;
  for (let i = 0; i < formName1.length; i++) {
    const element = formName1[i];
    // console.log(element);
    if (
      (element >= "A" && element <= "Z") ||
      (element >= "a" && element <= "z") ||
      element == " "
    ) {
      flag = true;
    } else {
      flag = false;
      break;
    }
  }

  if (flag === true) {
    console.log("valid ");
  } else {
    console.log("Invalid ");
  }
});

//   if (formName1 === "") {
//     console.log("Full name cannot be empty");
//   } else if (!/^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/.test(formName1)) {
//     console.log("Please enter a valid full name");
//   } else {
//     console.log("Full name is valid!");
//   }
