const formConditions = document.querySelector(".conditions");
const inputCondtions = document.querySelector(".input__conditions");
const error = document.querySelector(".error");
formConditions.addEventListener("submit", function (e) {
    if (inputCondtions.checked) {
        console.log("Условия выполнены");
    } else {
        e.preventDefault();
        error.textContent = "Необходимо согласится с условиями";
    }
});
