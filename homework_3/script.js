// Task 1
/**
 * Необходимо вывести сообщение в консоль "все теги прогрузились", когда все
 * теги будут созданы браузером.
 */

document.addEventListener("DOMContentLoaded", () => {
    console.log("все теги прогрузились");
});

// Task 2
/**
 * Необходимо вывести сообщение в консоль "страница загрузилась", когда все
 * ресурсы страницы будут загружены.
 */

window.addEventListener("load", () => {
    console.log("Страница загрузилась");
});

// Task 3
/**
 * При клике на какой-либо тег на странице в консоль должно выводиться
 * сообщение следующего вида:
 *   ○ Класс "super_element" присутствует в элементе "div".
 *   ○ Сообщение должно определять присутствует ли класс "super_element" у
 *     элемента и выводить в нижнем регистре верный тег в данной строке, по
 *     которому был совершен клик.
 *   ○ Необходимо использовать делегирование.
 */
const body = document.querySelector("body");
/**
 * Functioon for check class super_element in all HTML-document.
 * Outputs to console name tag with class super_element.
 * @param {*} e - event
 */
const targetFunction = (e) => {
    if (e.target.classList.contains("super_element")) {
        console.log(
            `Класс "super_element" присутствует в элементе "${e.target.tagName.toLowerCase()}"`
        );
    } else {
        console.log(
            `Нужного класса нет в элементе "${e.target.tagName.toLowerCase()}"`
        );
    }
};
document.body.addEventListener("click", targetFunction);

// Task 4
/**
 * Сделайте так, чтобы при наведении на <textarea> в консоли появлялось
 * сообщение: "Вы навели на textarea."
 */

const textarea = document.querySelector("textarea");
textarea.addEventListener("mouseenter", () => {
    console.log(`Вы навели на textarea`);
});

// Task 5
/**
 * Необходимо повесить событие клика на тег <ul>. В обработчике события в
 * консоль выводите текст, который записан внутри элемента кнопки, по которой
 * был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно.
 * Необходимо использовать делегирование.
 */

const ul = document.querySelector("ul");
/**
 * Function for output to console the text from tag
 * @param {*} e  - event
 */
function targetFunctionUl(e) {
    if (e.target.tagName == "BUTTON") {
        console.log(e.target.innerText);
    }
}
ul.addEventListener("click", targetFunctionUl);

// Task 6
/**
 * Вопрос: Почему в console.log сначала пишется текст из 5 задания и только
 * потом текст из 3 задания, если мы кликаем по кнопкам в <ul>? Ответ
 * необходимо написать здесь же, под этим комментарием, своими словами.
 *
 * Ответ:
 * Потому что обработчик из задания 5 привязан к ul и на момент всплытия он срабатывает раньше,
 * чем body
 */

// Task 7
/**
 * С помощью JS необходимо изменить цвет заднего фона каждого второго тега <li>
 */
const liFromUl = [...ul.children];
for (let index = 0; index < liFromUl.length; index++) {
    if (index % 2 != 0) {
        console.log(liFromUl[index]);
        liFromUl[index].style.backgroundColor = "#ccc";
    }
}
