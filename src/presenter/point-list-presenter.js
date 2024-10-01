import PointView from '../view/point/point-view';
import PointListView from '../view/point-list/point-list-view';
import { render } from '../render';


export default class PointListPresenter {
  constructor({ pointListContainer, pointsModel }) {
    this.pointListContainer = pointListContainer;
    this.pointsModel = pointsModel;
  }

  pointListComponent = new PointListView();

  init() {
    this.pointList = [...this.pointsModel.getPoints()];


    for (let i = 0; i < this.pointsModel; i++) {
      render(new PointView(), this.pointListComponent.getElement());
    }

    render(this.pointListComponent, this.pointListContainer);
  }
}
