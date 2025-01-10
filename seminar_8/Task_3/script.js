const form = document.querySelector(".passwordForm");
const inputPass = document.querySelector(".inputPassword");
const error = document.querySelector(".error");
console.log(error);

inputPass.addEventListener("input", function (e) {
    if (inputPass.value == "пароль") {
        inputPass.classList.add("inputPassword_green");
    } else {
        inputPass.classList.remove("inputPassword_green");
    }
});

form.addEventListener("submit", function (e) {
    if (inputPass.value != "пароль") {
        e.preventDefault();
        inputPass.classList.remove("inputPassword_green");
        inputPass.classList.add("inputPassword_red");
        error.textContent = "Пароль неверный";
    }
});
