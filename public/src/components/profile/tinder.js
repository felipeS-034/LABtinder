class MyProfile extends HTMLElement {
  static get observedAttributes() {
    return ['image', 'nameuser','age', 'location', 'distance'];
  }

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }
  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(propName, oldValue, newValue) {
    this[propName] = newValue;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/src/components/profile/style.css">
            <section class="recuadro">
                <img class="contenido"src="${this.image}"></img>
                <h1 class="nameuser">${this.nameuser}</h1>
                <h1 class="location">${this.location}</h1>
                <h1 class="age">${this.age}</h1>
                <h1 class="distance">${this.distance}</h1>

                <image class="rayo"src="./image/rayo.jpg"></image>
                <image class="usuario" src="./Image/user.png"></image>
                <image class="logo" src="./Image/tinder.png"></image>
                <image class="cerrar" src="./Image/close.jpg"></image>
                <image class="likes"src="./Image/like.jpg"></image>
                <image class="atras" src="./Image/back.jpg"></image>
                <image class="estrella" src="./Image/star.jpg"></image>
                </section>
            
                `;
  }
}

customElements.define('my-profile', MyProfile);
export default MyProfile;