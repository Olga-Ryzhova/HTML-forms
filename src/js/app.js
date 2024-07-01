import { ButtonWidget } from "./widget";

// получаем контейнер из верстки:
const container = document.querySelector(".container");
const btnForm = new ButtonWidget(container);

// отрисовка виджета
btnForm.bindToDom();
