'use strict';

// Temp database that will be moved to backend
const database = {
  // Information about articles
  articles : [
    {
      name: 'borsh',
      date: new Date('05/11/2020')
    },

    {
      name: 'vino',
      date: new Date('05/13/2020')
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

// Load first three not used articles
async function loadArticles() {
  const contentElement = document.body.querySelector('.content');

  for (let i = 0; i < 2; i++) {
    let notUserArticle;

    for (let article of database.articles) {
      if (!contentElement.querySelector(`[name="${article.name}"]`)) {
        notUserArticle = article;
        break;
      }
    }

    await fetch(`resources/articles/${notUserArticle.name}.html`)
      .then((response) => response.text())
      .then((html) => contentElement.insertAdjacentHTML('beforeEnd', html));

      contentElement.lastElementChild.setAttribute('name', notUserArticle.name);
  }
}

// Call function to load articles when page is opened first time
loadArticles();