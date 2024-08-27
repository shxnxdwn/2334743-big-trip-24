import AddPointView from '../view/add-point-view.js';
import EditPointView from '../view/edit-point-view.js';
import FilterListView from '../view/filter-list-view.js';
import PointsListView from '../view/points-list-view.js';
import PointView from '../view/point-view.js';
import SortListView from '../view/sort-list-view.js';
import TitleView from '../view/title-view.js';
import { render } from '../render.js';

export default class Presenter {
  constructor({  }) {
  }

  list = new PointsListView();
}
