import AddPointView from '../view/add-point/add-point-view.js';
import AddPointInfoView from '../view/add-point/components/add-point-info-view.js';
import AddPointDetailView from '../view/add-point/components/add-point-detail-view.js';
import AddPointDestinationView from '../view/add-point/components/add-point-destination-view.js';
import AddPointOfferListView from '../view/add-point/components/add-point-offer-list-view.js';
import { render } from '../render.js';


export default class AddPointPresenter {
  constructor({ addPointContainer }) {
    this.addPointContainer = addPointContainer;
  }

  addPointComponent = new AddPointView();
  addPointDetailComponent = new AddPointDetailView();

  init() {
    render(new AddPointDestinationView(), this.addPointDetailComponent);
    render(new AddPointOfferListView(), this.addPointDetailComponent);
    render(new AddPointInfoView(), this.addPointComponent);
    render(this.addPointDetailComponent, this.addPointComponent);
    render(this.addPointComponent, this.addPointContainer);
  }
}
