const input = document.querySelector(".input");
const h1 = document.querySelector("h1");
input.addEventListener("input", function (e) {
    if (input.value.length > 0) {
        h1.textContent = input.value;
    } else {
        h1.textContent = "Заголовок";
    }
});
