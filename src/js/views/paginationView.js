import View from './view';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      console.log(btn);
    });
    handler();
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );
    console.log(numPages);

    const generateMarkUpBtnNext = () => {
      return `
      <button class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
        </button
      `;
    };

    const generateMarkUpBtnPrev = () => {
      return `
        <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
        </button>
        `;
    };

    // Page 1, and other pages
    if (curPage === 1 && numPages > 1) {
      return generateMarkUpBtnNext();
    }

    // last page
    if (curPage === numPages && numPages > 1) {
      return generateMarkUpBtnPrev();
    }

    //other page
    if (curPage < numPages) {
      return `${generateMarkUpBtnPrev()} ${generateMarkUpBtnNext()}`;
    }

    // page 1, no other pages
    // return `only 1 page `;
  }
}

export default new PaginationView();
