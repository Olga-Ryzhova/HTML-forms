export class Popover {
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
    const { left, top } = this.element.getBoundingClientRect();
    this.popoverItem.style.left = `${left + this.element.offsetWidth / 2 - this.popoverItem.offsetWidth / 2 + "px"}`;
    this.popoverItem.style.top = `${top - this.popoverItem.offsetHeight - 10 + "px"}`;
  }
}
