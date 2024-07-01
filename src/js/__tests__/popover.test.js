import { ButtonWidget } from "../widget";

test("проверяем отображение виджета", () => {
  document.body.innerHTML = '<div class="container"></div>';
  const container = document.querySelector(".container");
  const widget = new ButtonWidget(container);
  widget.bindToDom();
  expect(container.innerHTML).toEqual(ButtonWidget.markup);
});

test("проверяем отображение popover относительно кнопки", () => {
  document.body.innerHTML = '<div class="container"></div>';
  const container = document.querySelector(".container");
  const widget = new ButtonWidget(container);
  widget.bindToDom();
  widget.btn.click();

  const popover = container.querySelector(".popover-item");
  expect(popover).toBeTruthy();
});
