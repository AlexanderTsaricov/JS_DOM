// Task 1
/**
 *  При изменении значения в <input> с id="from", значение, содержащееся
 * в нем, должно моментально отображаться в <span>.
 */
const inputFrom = document.querySelector("#from");
const span = document.querySelector("span");
inputFrom.addEventListener("input", () => {
    span.innerText = inputFrom.value;
});

// Task 2
/**
 * При клике на кнопку с классом messageBtn необходимо выполнить
 * следующие действия для элемента с классом message:
 *  ○ Добавить два класса: animate_animated и animate_fadeInLeftBig.
 *  ○ Установить стиль visibility в значение 'visible'.
 */
const messageBtn = document.querySelector(".messageBtn");
const message = document.querySelector(".message");

messageBtn.addEventListener("click", function (e) {
    message.classList.add("animate_animated");
    message.classList.add("animate_fadeInLeftBig");
    message.style.visibility = "visible";
});

// Task 3
/**
 * При отправке формы проверьте, заполнены ли все поля.
 *     ○ Если какое-либо поле не заполнено, форма не должна отправляться.
 *     ○ Незаполненные поля должны быть подсвечены (добавлен класс error).
 *     ○ Как только пользователь начинает заполнять поле, выполните проверку:
 *        ■ Если поле пустое, подсветите его (добавьте класс error).
 *        ■ Если поле заполнено, уберите подсветку (удалите класс error).
 */
const form = document.querySelector("form");
const inputControl = document.querySelector('input[class="form-control"]');
const selectControl = document.querySelector('select[class="form-control"]');
inputControl.addEventListener("input", function (e) {
    if (inputControl.value.length == 0) {
        inputControl.classList.add("error");
    } else {
        inputControl.classList.remove("error");
    }
});

selectControl.addEventListener("change", function (e) {
    if (selectControl.value == "") {
        selectControl.classList.add("error");
    } else {
        selectControl.classList.remove("error");
    }
});

form.addEventListener("submit", function (e) {
    if (inputControl.value.length == 0) {
        e.preventDefault();
        inputControl.classList.add("error");
    }
    if (selectControl.value == "") {
        e.preventDefault();
        selectControl.classList.add("error");
    }
});
