'use strict';
// Page elements variables
const topMenu = document.body.querySelector('.top-menu');

// Discribes how article could be shown
class ArticlePreview extends HTMLElement {
  connectedCallback() {
    this.className = 'content_article';
    
    fetch(`resources/articles/${this.dataset.articleName}.html`)
      .then((response) => response.text())
      .then((text) => this.innerHTML = text);
  }
}

customElements.define('app-article-preview', ArticlePreview);

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