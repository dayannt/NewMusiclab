import NewsContainer from './src/components/news/NewsContainer.js';
import SearchBarCategories from './src/components/search/search.js';
import News from './src/components/news/News.js';
import Card from './src/components/card/Card.js';
import CardContainer from './src/components/card/CardContainer.js';
import CustoDial from './src/components/dial/dial.js';


customElements.define("noticia-container", NewsContainer);
customElements.define('search-bar-categories', SearchBarCategories);
customElements.define("news-element", News);
customElements.define("card-element", Card);
customElements.define("card-container", CardContainer);
customElements.define("custom-dial", CustoDial);
