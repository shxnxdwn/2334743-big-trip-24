import { getRandomPoint } from '../mock/points';
import { getDestinationsList } from '../mock/destinations';
import { getOffersList } from '../mock/offers';
import { POINT_COUNT } from '../constants';


export default class PointsModel {
  points = Array.from({ length: POINT_COUNT }, getRandomPoint);
  destinations = getDestinationsList();
  offers = getOffersList();

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}
