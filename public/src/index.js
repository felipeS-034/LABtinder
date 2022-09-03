import * as components from "./components/index.js"
import data from "./components/data.js"

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        data.forEach((element) => {
        this.shadowRoot.innerHTML += `
        <my-profile
        image="${element.image}"
        age="${element.age}"
        location="${element.location}"
        nameuser="${element.nameuser}"
        distance="${element.distance}"
        ></my-profile>
        `
        this.shadowRoot.innerHTML += `<my-counter>
        <section class="cuadroGeneral">
        <section class="cuadro">
          <h1 class="textolikes">${this.count || 0}</h1>
          <button class="like">like</button>
        </section>

        <section class="cuadro2">  
          <h1 class="textodislikes">${this.dislikes || 0}</h1>
          <button class="dislike">dislikes</button>
        </section>
        </section></my-counter> `
        });
        

    }
}

customElements.define("app-container", AppContainer);