const cafeForm = document.querySelector(".cafeForm");
const chai = document.querySelector(".radioChai");
const cofee = document.querySelector(".radioCofee");
const message = document.querySelector(".message");
cafeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (chai.checked) {
        message.textContent = "Чай закончился";
    } else {
        message.textContent = "Кофе закончился";
    }
});
