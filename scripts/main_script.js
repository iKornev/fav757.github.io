'use strict';

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