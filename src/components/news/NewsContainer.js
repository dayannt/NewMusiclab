import getNews from "./getnews.js"; 
import "./News.js";

class NewsContainer extends HTMLElement { 
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() { 
        const news = getNews();
        this.shadowRoot.innerHTML = 
        
        `
            <style>
                :host {
                    display: flex;
                    justify-content: center;
                    padding: 20px;
                    width: 100%;
                }

                .news-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 20px;
                    max-width: 1000px;
                    width: 100%;
                }
            </style>
         
            <div class="news-grid">
                ${news
                    .map(
                        (noticia) => `
                        <news-element 
                            titulo="${noticia.title}" 
                            info="${noticia.summary}"
                            author="${noticia.author1}"
                            fecha="${noticia.date}"
                            img="${noticia.imgSrc1}"
                            imagenautor="${noticia.imgSrc2}">
                        </news-element>
                    `
                    )
                    .join("")}
            </div>
        `;
    } 
}

 
export default NewsContainer; 
