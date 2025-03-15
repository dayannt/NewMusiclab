class News extends HTMLElement {
    constructor() {         
        super();           
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ["titulo", "subtitulo", "info", "author", "fecha", "img", "imagenautor"]; 
    }

    attributeChangedCallback() {  
        this.render();
    }

    connectedCallback() { 
        this.render();
    }

    render() {     
        const imgSrc = this.getAttribute("img");
        const showImage = imgSrc && imgSrc !== "./none"; 

        this.shadowRoot.innerHTML = 
         `
            <style>
                * {
                    box-sizing: border-box;
                }

                :host {
                    display: flex;
                    flex-direction: column;
                     background-color: rgba(255, 255, 255, 0.2); 
                    color: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
                    font-family: 'Arial', sans-serif;
                }

                :host(:hover) {
                    transform: translateY(-5px);
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
                }

                .news-img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    display: ${showImage ? "block" : "none"};
                }

                .news-content {
                    padding: 15px;
                }

                .news-title {
                    font-size: 18px;
                    font-weight: bold;
                    margin-bottom: 5px;
                }

                .news-subtitle {
                    font-size: 16px;
                    color: #b0b0b0;
                    margin-bottom: 10px;
                }

                .news-info {
                    font-size: 14px;
                    color: #d1d5db;
                    line-height: 1.4;
                }

                .news-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px 15px;
                    font-size: 12px;
                    color: #888;
                    background-color:rgba(0, 188, 125, 0.56);
                    border-top: 1px solid rgba(160, 3, 232, 0.1);
                }

                .author-container {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .author-img {
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    object-fit: cover;
                }

                .author-name {
                    font-size: 14px;
                    color: #e5e7eb;
                }

                .news-date {
                    font-size: 12px;
                    color: #9ca3af;
                }
            </style>
            
            <div class="news-card">
                ${showImage ? `<img class="news-img" src="${imgSrc}" alt="Imagen de la noticia">` : ""} 
                <div class="news-content">
                    <div class="news-title">${this.getAttribute("titulo") || "Sin título"}</div>
                    <div class="news-subtitle">${this.getAttribute("subtitulo") || "Dayan Miranda"}</div>
                    <div class="news-info">${this.getAttribute("info") || "Sin información disponible"}</div>
                </div>
                <div class="news-footer">
                    <div class="author-container">
                        <img class="author-img" src="${this.getAttribute("imagenautor") || ""}" alt="Autor">
                        <span class="author-name">${this.getAttribute("author") || "Anónimo"}</span>
                    </div>
                    <span class="news-date">${this.getAttribute("fecha") || "Fecha desconocida"}</span>
                </div>
            </div>
        `;
    }
}

export default News;