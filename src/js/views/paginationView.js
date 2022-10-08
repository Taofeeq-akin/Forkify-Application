import View from './view';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = this._data.results.length / this._data.resultPerPage;
    console.log(numPages);
    // Page 1, and other pages
    // page 1, no other pages
    // last page
    //other page
    return `
    
    `;
  }
}

export default new PaginationView();
