// Task 1
/**
 * Ко всем элементам, имеющим класс dropdown-item, добавьте еще один класс
 * super-dropdown. Используйте методы forEach и querySelectorAll, а
 * также свойство classList у элементов.
 */
const dropdown_item = document.querySelectorAll(".dropdown-item");
console.log(dropdown_item);
dropdown_item.forEach((element) => {
  element.classList.add("super-dropdown");
});

// Task 2
/**
 * У элемента с классом btn необходимо убрать класс btn-secondary, если он
 * присутствует у этого элемента, либо добавить, если такого класса у элемента
 * не было.
 */

const btn = document.querySelector(".btn");
console.log("Всего классов: " + btn.classList);
if (btn.classList.contains("btn-secondary")) {
  btn.classList.remove("btn-secondary");
  console.log("удалили класс btn-secondary");
  console.log(btn.classList);
} else {
  btn.classList.add("btn-secondary btn-secondary");
  console.log("Добавили класс");
  console.log(btn.classList);
}

// Task 2
/**
 * Необходимо удалить класс dropdown-menu у элемента, у которого
 * присутствует класс menu.
 */

const dropdown_menu = document.querySelector(".dropdown-menu");
console.log(dropdown_menu.classList);
dropdown_menu.classList.remove("dropdown-menu");
console.log(dropdown_menu.classList);

// Task 3
/**
 * Используя метод insertAdjacentHTML, добавьте после div с классом
 * dropdown следующую разметку: <a href="#">link</a>.
 */

const dropdown = document.querySelector(".dropdown");
dropdown.insertAdjacentHTML("afterend", '<a href="#">link</a>');

// Task 4
/**
 * У элемента с id="dropdownMenuButton" замените id на superDropdown.
 */

const dropdownMenuButton = document.querySelector("#dropdownMenuButton");
dropdownMenuButton.id = "superDropdown";

// Task 5
/**
 * Добавьте атрибут data-dd со значением 3 элементу, у которого существует
 * атрибут aria-labelledby, равный dropdownMenuButton, используя
 * dataset.
 */
const higthTag = document.querySelector(".dropdown");
const parentTag = higthTag.parentNode;
const allTags = [...parentTag.children];
console.log("Все дочерние элементы:", allTags);
console.log(allTags);
function addAttribute(nameFindAttribute, dataFindAtribut, list) {
  list.forEach((element) => {
    if (element.hasAttribute(nameFindAttribute)) {
      if (element.getAttribute(nameFindAttribute) === dataFindAtribut) {
        element.dataset.dd = 3;
        console.log("Атрибут добавлен");
      } else {
        console.log("У элемента " + element + " не такое значение атрибута");
      }
    } else {
      console.log("У элемента " + element + " нет такого атрибута");
    }
    if (element.children.length > 0) {
      console.log("у " + element + " есть дочерние элементы");
      const newList = [...element.children];
      console.log(element.children);
      addAttribute(nameFindAttribute, dataFindAtribut, newList);
    }
  });
}
addAttribute("aria-labelledby", "dropdownMenuButton", allTags);

// Task 6
/**
 * Удалите атрибут type у элемента с классом dropdown-toggle
 */

const dropdown_toggle = document.querySelector(".dropdown-toggle");
console.log(dropdown_toggle.removeAttribute("type"));
