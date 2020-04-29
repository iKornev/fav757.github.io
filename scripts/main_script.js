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

    for (let i = 0; i < 2; i++) {
      fetch('resources/articles/borsh.html')
        .then((response) => response.text())
        .then((html) => this.insertAdjacentHTML('beforeEnd', html))
    }
  }

  static articlesDB = [
    {
      name: 'borsh',
      date: new Date('05/28/2020'),
    },

    {
      name: 'vino',
      date: new Date('05/27/2020')
    }
  ];
}

customElements.define('articles-preview', ArticlesPreview);

