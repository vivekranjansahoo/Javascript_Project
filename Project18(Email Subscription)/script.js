const scriptURL =
  "https://script.google.com/macros/s/AKfycbwSv9pwa_7qnj67Ks0M-lAAJuXgVBhfOCN8OhxgDPWnxh1HEJSMdbRMNulOFuNx_PIV/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank you for subscribing";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
