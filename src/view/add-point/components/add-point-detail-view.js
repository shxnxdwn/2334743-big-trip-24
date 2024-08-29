import { createElement } from '../../../render.js';


const createAddPointDetailTemplate = () => '<section class="event__details"></section>';


export default class AddPointDetailView {
  getTemplate() {
    return createAddPointDetailTemplate();
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
