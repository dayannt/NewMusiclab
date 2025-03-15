import Card from "./Card.js"; 
import getCards from "./getcards.js"; 

class CardContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        this.render();
    }

    async render() {
        const cards = getCards(); 

        console.log(" Datos obtenidos de getCards():", cards); 

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
                ${cards.map(card => `
                    <card-element 
                        titulo="${card.titulo}"
                        descripcion="${card.descripcion}"
                        autor="${card.autor}"
                        fecha="${card.fecha}"
                        imagen-perfil="${card["imagen-perfil"]}"
                    ></card-element>
                `).join("")}
            </div>
        `;
    }
}

customElements.define("card-container", CardContainer);
export default CardContainer;