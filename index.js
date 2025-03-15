import NewsContainer from './src/components/news/NewsContainer.js';
import SearchBarCategories from './src/components/search/search.js';
import News from './src/components/news/News.js';

customElements.define("noticia-container", NewsContainer);
customElements.define('search-bar-categories', SearchBarCategories);
customElements.define("news-element", News);