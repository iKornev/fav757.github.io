'use strict';

// Temp database that will be moved to backend
const database = {
  // Information about articles
  articles: [
    {
      name: 'borsh',
      date: new Date('05/11/2020')
    },

    {
      name: 'vino',
      date: new Date('05/13/2020')
    },

    {
      name: 'food-for-homeless',
      date: new Date('05/10/2020')
    }
  ],
};

// Change top menu color on scroll
document.addEventListener('scroll', function () {
  const topMenu = document.body.querySelector('.top-menu');

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

class ArticlesPreviews extends HTMLElement {
  constructor() {
    super();

    const buttonForMoreArticle = document.createElement('i');
    buttonForMoreArticle.className = 'fas fa-plus';
    buttonForMoreArticle.addEventListener('click', ArticlesPreviews.loadArticles);

    this.after(buttonForMoreArticle);
  }

  static async loadArticles() {
    const element = document.querySelector('.content');
    let notUserArticle;
  
    for (let article of database.articles) {
      if (!element.querySelector(`[name="${article.name}"]`)) {
        notUserArticle = article;
        break;
      }
    }
  
    await fetch(`resources/articles/${notUserArticle.name}.html`)
      .then((response) => response.text())
      .then((html) => element.insertAdjacentHTML('beforeEnd', html));
  
      element.lastElementChild.setAttribute('name', notUserArticle.name);
  }
}

customElements.define('articles-preview', ArticlesPreviews);