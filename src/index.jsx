class CustomWebComponent extends HTMLElement {
  constructor() {
    super();
  }

  // part of Web Component spec, ran on mount to DOM
  connectedCallback() {
    // create Web Component's shadow dom for styling encapsulation
    this.attachShadow({ mode: "open" });

    // create react mount point inside of the shadow dom
    createReactMountPoint(this.shadowRoot);

    // code split App which contains css
    const appImportPromise = import("./App.jsx");

    // render React app
    appImportPromise.then(({ default: App }) => {
      App();
    });
  }
}

// create Web Component
customElements.define("custom-web-component", CustomWebComponent);

function createReactMountPoint(shadowRoot) {
  const reactRoot = document.createElement("div");
  reactRoot.setAttribute("id", "react-root");
  reactRoot.style.height = "100%";
  reactRoot.style.width = "100%";

  shadowRoot.appendChild(reactRoot);
}
