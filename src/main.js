import TitleInfoView from './view/title-info/title-info-view.js';
import FilterListView from './view/filter-list/filter-list-view.js';
import SortListView from './view/sort-list/sort-list-view.js';
import PointListPresenter from './presenter/point-list-presenter.js';
import { render, RenderPosition } from './render.js';


const renderHeader = () => {
  const tripMainContainer = document.querySelector('.trip-main');
  const tripFiltersContainer = tripMainContainer.querySelector('.trip-controls__filters');

  render(new TitleInfoView(), tripMainContainer, RenderPosition.AFTERBEGIN);
  render(new FilterListView(), tripFiltersContainer);
};


const renderMain = () => {
  const tripPointsContainer = document.querySelector('.trip-events');
  const pointListPresenter = new PointListPresenter({ pointListContainer: tripPointsContainer });

  render(new SortListView(), tripPointsContainer);
  pointListPresenter.init();
};


renderHeader();
renderMain();
