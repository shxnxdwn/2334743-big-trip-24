import AddPointView from '../view/add-point/add-point-view.js';
import AddPointInfoView from '../view/add-point/components/add-point-info-view.js';
import AddPointDetailView from '../view/add-point/components/add-point-detail-view.js';
import AddPointDestinationView from '../view/add-point/components/add-point-destination-view.js';
import AddPointOfferListView from '../view/add-point/components/add-point-offer-list-view.js';
import PointView from '../view/point/point-view.js';
import PointListView from '../view/point-list/point-list-view.js';
import { render, RenderPosition } from '../render.js';

const POINT_COUNT = 3;


export default class PointListPresenter {
  constructor({ pointListContainer }) {
    this.pointListContainer = pointListContainer;
  }

  pointListComponent = new PointListView();
  addPointComponent = new AddPointView();
  addPointDetailComponent = new AddPointDetailView();

  init() {
    render(this.addPointComponent, this.pointListComponent.getElement());
    render(this.addPointDetailComponent, this.addPointComponent.getElement().firstElementChild);
    render(new AddPointInfoView(), this.addPointComponent.getElement().firstElementChild, RenderPosition.AFTERBEGIN);
    render(new AddPointOfferListView(), this.addPointDetailComponent.getElement());
    render(new AddPointDestinationView(), this.addPointDetailComponent.getElement());

    for (let i = 0; i < POINT_COUNT; i++) {
      render(new PointView(), this.pointListComponent.getElement());
    }

    render(this.pointListComponent, this.pointListContainer);
  }
}
