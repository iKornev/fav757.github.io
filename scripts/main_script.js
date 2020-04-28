'use strict';

// Discribes how article could be shown
class ArticlePreview extends HTMLElement {
  connectedCallback() {
    this.className = 'content_article';
    this.innerHTML = `<div class="content_article_preview-img">
    <img src="resources/images/preview_for_artcicle1.jpg" alt="Превью новости"></img>
  </div>

  <div class="content_article_preview-text">
    <h3>Кулинары предупреждают: борщ не прощает ошибок</h3>
    <p>Борщ считается одним из главных блюд у разных народов, и имеет множество рецептов приготовления. Но
      кулинары
      уверены, что в любом случае при его приготовлении непростительны ошибки, передает «МИР 24»</p>
    <p>This article is about ${this.dataset.articleName}</p>
  </div>`;
  }
}

customElements.define('app-article-preview', ArticlePreview);