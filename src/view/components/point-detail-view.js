import { createElement } from '../../render';


const createPointDetailTemplate = () => '<section class="event__details"></section>';


export default class PointDetailView {
  getTemplate() {
    return createPointDetailTemplate();
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
