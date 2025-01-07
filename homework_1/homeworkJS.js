// Task 1
/**
 *  Найдите элемент по id, используя getElementById, элемент с id равным
 *  "super_link" и выведите этот элемент в консоль.
 */

const superLink = document.getElementById("super_link");
console.log(superLink);

// Task 2
/**
 * Внутри всех элементов на странице, которые имеют класс card-link,
 * поменяйте текст внутри элемента на "ссылка".
 */

const cardLinks = document.querySelectorAll(".card-link");
cardLinks.forEach((element) => {
  element.textContent = "ссылка";
});

// Task 3
/**
 * Найдите все элементы на странице с классом card-link, которые лежат в
 * элементе с классом card-body, и выведите полученную коллекцию в консоль.
 */
const cardLinksInBody = document.querySelectorAll(".card-body > .card-link");
cardLinksInBody.forEach((element) => {
  console.log("in card-body: ");
  console.log(element);
});

// Task 4
/**
 * Найдите первый попавшийся элемент на странице, у которого есть атрибут
 * data-number со значением 50, и выведите его в консоль.
 */

const elementWithdata = document.querySelector('[data-number="50"]');
console.log(elementWithdata);

// Task 5

/**
 * Выведите содержимое тега title в консоль.
 */

const title = document.querySelector("title");
console.log(title.textContent);

// Task 6
/**
 * Получите элемент с классом card-title и выведите его родительский узел в
 * консоль.
 */

const cardTitle = document.querySelector(".card-title");
console.log(cardTitle.parentElement);

// Task 7
/**
 * Создайте тег <p>, запишите внутри него текст "Привет" и добавьте созданный
 * тег в начало элемента, который имеет класс card.
 */

const tagHi = document.createElement("p");
const card = document.querySelector(".card");
const cardChilds = card.childNodes;
tagHi.textContent = "Привет";
if (cardChilds.length > 0) {
  card.insertBefore(tagHi, cardChilds[0]);
} else {
  card.appendChild(tagHi);
}

// Task 8
/**
 * Удалите тег h6 на странице.
 */
const h6 = document.querySelector("h6");
h6.remove();
