import { Popover } from "./popover";
export class ButtonWidget {
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
    this.btn.addEventListener("click", (e) => {
      e.preventDefault();

      // создаем экземпляр Popover
      const popover = new Popover(this.btn);
      // получаем Popover
      let popoverElement = document.querySelector(".popover-item");
      // заполняем текстом
      if (!popoverElement) {
        popover.show(
          "Popover title",
          "And here's some amazing content. It's very engaging. Right?",
        );
      } else {
        popoverElement.remove();
      }
    });
  }
}
