import EditPointView from '../view/edit-point/edit-point-view.js';
import PointInfoView from '../view/components/point-info-view.js';
import PointDetailView from '../view/components/point-detail-view.js';
import EditPointDestinationView from '../view/components/edit-point-destination-view.js';
import PointOfferListView from '../view/components/point-offer-list-view.js';
import { render, RenderPosition } from '../render.js';


export default class EditPointPresenter {
  constructor({ editPointContainer }) {
    this.pointContainer = editPointContainer;
  }

  editPointComponent = new EditPointView();
  editPointDetailComponent = new PointDetailView();

  init() {
    render(this.editPointComponent, this.pointContainer, RenderPosition.AFTERBEGIN);
    render(this.editPointDetailComponent, this.editPointComponent.getElement().firstElementChild);
    render(new PointInfoView(), this.editPointComponent.getElement().firstElementChild, RenderPosition.AFTERBEGIN);
    render(new PointOfferListView(), this.editPointDetailComponent.getElement());
    render(new EditPointDestinationView(), this.editPointDetailComponent.getElement());
  }
}
