import View from './view';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto; // for the btn to know the page to goTo
      //   console.log(goToPage);

      handler(goToPage); // This will call controlPagination from controller js file
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );

    const generateMarkUpBtnNext = () => {
      return `
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1} of ${numPages}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
        </button
      `;
    };

    const generateMarkUpBtnPrev = () => {
      return `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1} of ${numPages}</span>
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
    return '';
  }
}

export default new PaginationView();
