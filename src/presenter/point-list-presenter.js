import PointView from '../view/point/point-view.js';
import PointListView from '../view/point-list/point-list-view.js';
import { render } from '../render.js';
import { POINT_COUNT } from '../constants.js';


export default class PointListPresenter {
  constructor({ pointListContainer }) {
    this.pointListContainer = pointListContainer;
  }

  pointListComponent = new PointListView();

  init() {
    for (let i = 0; i < POINT_COUNT; i++) {
      render(new PointView(), this.pointListComponent.getElement());
    }

    render(this.pointListComponent, this.pointListContainer);
  }
}
