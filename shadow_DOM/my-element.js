// The class inherits directly from the API "HTMLElement"
class myElement extends HTMLElement {
  // Every class that generates a web component needs a constructor
  constructor() {
    //Call parent's constructor to use the methods of the HTMLElement class
    super();
    this.attachShadow({ mode: "open" });
  }

  // generate a new method
  getTemplate() {
    // Create template tag
    const template = document.createElement("template");
    // Populate template
    template.innerHTML = `
      <section>
        <h2>Test title</h2>
        <div>
          <p>Test paragraph</p>
        </div>
      </section>
      ${this.getstyles()}
      `;
    // To show the template it is necessary to return it
    return template;
  }

  getstyles() {
    return `
      <style>
        h2{
          color:red;
        }
      </style>`;
  }

  render() {
    //search template tag in shadow DOM
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  // look up for js class to know what to add to the DOM
  connectedCallback() {
    this.render();
  }
}

// Turn the class into an html tag
customElements.define("my-element", myElement); // Tag's name, class name
