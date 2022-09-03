class MyCounter extends HTMLElement {
  static get observedAttributes() {
    return ["contarlikes", "contardislikes"];

  }

  attributeChangedCallback(propName, oldValue, newValue) {
    this[propName] = newValue;
    this.mount();
  }

  connectedCallback() {
    console.log("mounted");
    this.mount();
  }

  dissconnectedCallback() {
    console.log("unmounted");
    this.removeEventListeners();

  }

  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.onButtonClicked = this.onButtonClicked.bind(this);
    this.onButtonClickedDislikes = this.onButtonClickedDislikes.bind(this);
  }

  mount() {
    this.render();
    this.addEventListeners();
  }

  addEventListeners() {
    this.shadowRoot
      .querySelector(".like")
      .addEventListener("click", this.onButtonClicked);

    this.shadowRoot
      .querySelector(".dislike")
      .addEventListener("click", this.onButtonClickedDislikes);

  }

  render() {
    console.log("render");
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./src/components/profile/style.css">
      <section class="cuadros">
          <section class="cuadro">
            <h1 class="textolikes">${this.contarlikes || 0}</h1>
            <button class="like">like</button>
          </section>

          <section class="cuadro2">  
            <h1 class="textodislikes">${this.contardislikes || 0}</h1>
            <button class="dislike">dislikes</button>
          </section>
      </section>
          
      `;
  }

  removeEventListeners() {
    this.shadowRoot
      .querySelector("button")
      .removeEventListener("click", this.onButtonClicked);
  }


  onButtonClicked() {
    console.log("clicked");
    const currentValue = Number(this.getAttribute("contarlikes")) || 0;
    this.setAttribute("contarlikes", currentValue + 1);
  }

  onButtonClickedDislikes() {
    console.log("clicked");
    const currentValue = Number(this.getAttribute("contardislikes")) || 0;
    this.setAttribute("contardislikes", currentValue + 1);
  }
}

customElements.define("my-counter", MyCounter);
export default MyCounter;