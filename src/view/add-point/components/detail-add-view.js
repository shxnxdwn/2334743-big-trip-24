import { createElement } from '../../../render.js';


const createDetailAddTemplate = () => '<section class="event__details"></section>';


export default class DetailAddView {
  getTemplate() {
    return createDetailAddTemplate();
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
