import { createElement } from '../../render';


const createEditPointTemplate = () => (`
  <li class="trip-events__item">
    <form class="event event--edit" action="#" method="post"></form>
  </li>
`);


export default class EditPointView {
  getTemplate() {
    return createEditPointTemplate();
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
