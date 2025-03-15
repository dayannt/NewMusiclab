import "./card.js";
import getCards from "./getcards.js";

class CommentContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        this.render();
    }

    async render() {
        const cards = await getComments();

        console.log("✅ Datos obtenidos de getCards():", comment ); //

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    justify-content: center;
                    padding: 0px;
                }
                .grid-noticias {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 20px;
                    max-width: 1200px;
                }
            </style>
            <div class="grid-noticias">
                ${comments.map(comment => `
                    <news-card 
                        categoria="${comment.categoria}"
                        titulo="${comment.titulo}"
                        descripcion="${card.descripcion}"
                        autor="${comment.autor}"
                        fecha="${comment.fecha}"
                        imagen-src="${comment["imagen-src"]}"
                        imagen-perfil="${comment["imagen-perfil"]}"
                    ></news-comments>
                `).join("")}
            </div>
        `;
    }
}

customElements.define("comment-container", CommentContainer);
export default CommentContainer;
