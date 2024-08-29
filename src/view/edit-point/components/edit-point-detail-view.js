import { createElement } from '../../../render.js';


const createDetailEditTemplate = () => '<section class="event__details"></section>';


export default class EditPointDetailView {
  getTemplate() {
    return createDetailEditTemplate();
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
