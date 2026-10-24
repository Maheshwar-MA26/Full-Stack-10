function bro() {
  alert("broooo plz cll me");
}

document.getElementById("buttonOfBro").addEventListener("click", sir);

function sir() {
  alert("sir jiii plz cll me");
}

document.getElementById("buttonOfBro").addEventListener("click", () => {
  document.getElementById("buttonOfBro").innerText = "brother can u cll me now......";
});

