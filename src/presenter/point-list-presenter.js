import AddPointView from '../view/add-point/add-point-view.js';
import AddPointInfoView from '../view/add-point/components/add-point-info-view.js';
import AddPointDetailView from '../view/add-point/components/add-point-detail-view.js';
import AddPointDestinationView from '../view/add-point/components/add-point-destination-view.js';
import AddPointOfferListView from '../view/add-point/components/add-point-offer-list-view.js';
import EditPointView from '../view/edit-point/edit-point-view.js';
import EditPointInfoView from '../view/edit-point/components/edit-point-info-view.js';
import EditPointDetailView from '../view/edit-point/components/edit-point-detail-view.js';
import EditPointDestinationView from '../view/edit-point/components/edit-point-destination-view.js';
import EditPointOfferListView from '../view/edit-point/components/edit-point-offer-list-view.js';
import PointView from '../view/point/point-view.js';
import PointListView from '../view/point-list/point-list-view.js';
import { render } from '../render.js';


const POINT_COUNT = 3;


export default class PointListPresenter {
  pointListComponent = new PointListView();

  constructor({ pointListContainer }) {
    this.pointListContainer = pointListContainer;
  }

  init() {

  }
}
