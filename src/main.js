import TitleInfoView from './view/title-info/title-info-view.js';
import FilterListView from './view/filter-list/filter-list-view.js';
import PointListPresenter from './presenter/point-list-presenter.js';
import AddPointPresenter from './presenter/add-point-presenter.js';
import EditPointPresenter from './presenter/edit-point-presenter.js';
import SortListView from './view/sort-list/sort-list-view.js';
import { render, RenderPosition } from './render.js';


const renderHeader = () => {
  const tripMainContainer = document.querySelector('.trip-main');
  const tripFiltersContainer = tripMainContainer.querySelector('.trip-controls__filters');

  render(new TitleInfoView(), tripMainContainer, RenderPosition.AFTERBEGIN);
  render(new FilterListView(), tripFiltersContainer);
};


const renderMain = () => {
  const tripListContainer = document.querySelector('.trip-events');
  render(new SortListView(), tripListContainer);

  const pointListPresenter = new PointListPresenter({ pointListContainer: tripListContainer });
  pointListPresenter.init();

  const pointList = tripListContainer.querySelector('.trip-events__list');

  const editPointPresenter = new EditPointPresenter({ editPointContainer: pointList });
  editPointPresenter.init();

  const addPointPresenter = new AddPointPresenter({ addPointContainer: pointList });
  addPointPresenter.init();
};


renderHeader();
renderMain();
