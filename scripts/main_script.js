'use strict';
// Page elements variables
const topMenu = document.body.querySelector('.top-menu');

// Change top menu color on scroll
document.addEventListener('scroll', function () {
  if (window.pageYOffset) {
    topMenu.style.background = 'white';
    topMenu.style.color = 'black';
    topMenu.style.boxShadow = '0 2px 2px gray';
  } else {
    topMenu.style.background = '';
    topMenu.style.color = '';
    topMenu.style.boxShadow = '';
  }
});

// Discribes how articles could be shown
class ArticlesPreview extends HTMLElement {
  constructor() {
    super();
    ArticlesPreview.articlesDB.sort((a, b) => a.date - b.date);
    this.loadArticles();
  }

  // Load +3 not used articles
  async loadArticles() {
    for (let i = 0; i < 2; i++) {
      let notUserArticle;

      for (let article of ArticlesPreview.articlesDB) {
        if (!this.querySelector(`[name="${article.name}"]`)) {
          notUserArticle = article;
          break;
        }
      }

      let htmlText;

      await fetch(`resources/articles/${notUserArticle.name}.html`)
        .then((response) => response.text())
        .then((html) => htmlText = html)

      this.insertAdjacentHTML('beforeEnd', htmlText);
      this.lastElementChild.setAttribute('name', notUserArticle.name)
    }
  }

  // Database with articles info
  static articlesDB = [
    {
      name: 'borsh',
      date: new Date('05/11/2020')
    },

    {
      name: 'vino',
      date: new Date('05/13/2020')
    }
  ];
}

customElements.define('articles-preview', ArticlesPreview);

