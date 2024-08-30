import { createElement } from '../../render.js';


const createAddPointTemplate = () => (`
  <li class="trip-events__item">
    <form class="event event--edit" action="#" method="post"></form>
  </li>
`);


export default class AddPointView {
  getTemplate() {
    return createAddPointTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
