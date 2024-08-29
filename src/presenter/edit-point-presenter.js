import EditPointView from '../view/edit-point/edit-point-view.js';
import EditPointInfoView from '../view/edit-point/components/edit-point-info-view.js';
import EditPointDetailView from '../view/edit-point/components/edit-point-detail-view.js';
import EditPointDestinationView from '../view/edit-point/components/edit-point-destination-view.js';
import EditPointOfferListView from '../view/edit-point/components/edit-point-offer-list-view.js';
import { render } from '../render.js';


export default class EditPointPresenter {
  constructor({ editPointContainer }) {
    this.editPointContainer = editPointContainer;
  }

  editPointComponent = new EditPointView();
  editPointDetailComponent = new EditPointDetailView();

  init() {
    render(new EditPointDestinationView(), this.editPointDetailComponent);
    render(new EditPointOfferListView(), this.editPointDetailComponent);
    render(new EditPointInfoView(), this.editPointComponent);
    render(this.editPointDetailComponent, this.editPointComponent);
    render(this.editPointComponent, this.editPointContainer);
  }
}
