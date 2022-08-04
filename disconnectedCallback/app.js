class MyCustomElement extends HTMLElement {
  // First life cycle -> constructor
  constructor() {
    super();
    console.log("Hi from constructor-memory");
  }

  // Second life cycle Create element in DOM
  connectedCallback() {
    console.log("Hi from DOM");
  }

  // Third life cycle -> Remove element from DOM
  disconnectedCallback() {
    console.log("Bye from DOM");
  }
}

// Turn the class into an html tag
customElements.define("my-custom-element", MyCustomElement);

// Delete node (element) from DOM
document.querySelector("my-custom-element").remove();
