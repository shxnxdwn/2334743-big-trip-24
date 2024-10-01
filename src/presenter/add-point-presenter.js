import AddPointView from '../view/add-point/add-point-view';
import PointInfoView from '../view/components/point-info-view';
import PointDetailView from '../view/components/point-detail-view';
import AddPointDestinationView from '../view/components/add-point-destination-view';
import PointOfferListView from '../view/components/point-offer-list-view';
import { render, RenderPosition } from '../render';


export default class AddPointPresenter {
  constructor({ addPointContainer }) {
    this.pointContainer = addPointContainer;
  }

  addPointComponent = new AddPointView();
  addPointDetailComponent = new PointDetailView();

  init() {
    render(this.addPointComponent, this.pointContainer, RenderPosition.AFTERBEGIN);
    render(this.addPointDetailComponent, this.addPointComponent.getElement().firstElementChild);
    render(new PointInfoView(), this.addPointComponent.getElement().firstElementChild, RenderPosition.AFTERBEGIN);
    render(new PointOfferListView(), this.addPointDetailComponent.getElement());
    render(new AddPointDestinationView(), this.addPointDetailComponent.getElement());
  }
}
