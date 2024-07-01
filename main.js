/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/popover.js
class Popover {
  constructor(element) {
    this.element = element;
  }

  // метод для верстки popover
  static get markup() {
    return `
			<div class="popover-header"></div>
			<div class="popover-text"></div>
			<div class="popover-arrow"></div>
        `;
  }

  // создаем popover
  createPopoverItem() {
    this.popoverItem = document.createElement("div");
    this.popoverItem.classList.add("popover-item");
    this.popoverItem.innerHTML = Popover.markup;
    this.element.insertAdjacentElement("afterEnd", this.popoverItem);
    return this.popoverItem;
  }

  // алгоритм отображения popover
  show(header, text) {
    // если нет popover, то он будет создан
    if (!this.popoverItem) {
      this.createPopoverItem();
    }

    // получаем элементы со страницы
    const popoverHeader = document.querySelector(".popover-header");
    const popoverText = document.querySelector(".popover-text");

    // заполняем элемент текстом
    popoverHeader.textContent = header;
    popoverText.textContent = text;

    // позиционируем на странице относительно кнопки
    const {
      left,
      top
    } = this.element.getBoundingClientRect();
    this.popoverItem.style.left = `${left + this.element.offsetWidth / 2 - this.popoverItem.offsetWidth / 2 + "px"}`;
    this.popoverItem.style.top = `${top - this.popoverItem.offsetHeight - 10 + "px"}`;
  }
}
;// CONCATENATED MODULE: ./src/js/widget.js

class ButtonWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  // метод для верстки кнопки
  static get markup() {
    return `
		<form class="form-widget">
			<button class="btn">Click to toggle popover</button>
		</form>
		`;
  }
  // получаем элементы со страницы
  static get formSelector() {
    return ".form-widget";
  }
  static get btnSelector() {
    return ".btn";
  }

  // метод для отрисовки виджета
  bindToDom() {
    this.parentEl.innerHTML = ButtonWidget.markup;

    // находим элементы с заданным селектором внутри parentEl:
    this.element = this.parentEl.querySelector(ButtonWidget.formSelector);
    this.btn = this.element.querySelector(ButtonWidget.btnSelector);
    this.onClick();
  }

  //действия при клике на кнопку
  onClick() {
    this.btn.addEventListener("click", e => {
      e.preventDefault();

      // создаем экземпляр Popover
      const popover = new Popover(this.btn);
      // получаем Popover
      let popoverElement = document.querySelector(".popover-item");
      // заполняем текстом
      if (!popoverElement) {
        popover.show("Popover title", "And here's some amazing content. It's very engaging. Right?");
      } else {
        popoverElement.remove();
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


// получаем контейнер из верстки:
const container = document.querySelector(".container");
const btnForm = new ButtonWidget(container);

// отрисовка виджета
btnForm.bindToDom();
;// CONCATENATED MODULE: ./src/index.js





// TODO: write your code in app.js
/******/ })()
;