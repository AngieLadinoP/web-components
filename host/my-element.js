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
        <h2>
          <slot name="title"></slot>
        </h2>
        <div>
          <p>
            <slot name="body"></slot>
          </p>
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
     :host{
        display : inline-block;
        width : 100%;
        min-width : 150px;
        max-width : 400px;
        font-size : 20px;
        background: aqua;
        border: solid aquamarine;
        color:white;
    }

   /*  Looks up within the components the one that has this class */
    :host(.red) {
        background-color:crimson;
    }

    /*  Looks up within the components the one that has this atribute */
    :host([green]){
        background-color:greenYellow;
    }

    /*  Looks up within the components the one that has this atribute and changes font's color*/
    :host([green]) h2 {
        color:green;
    }

    /*  Looks up within the components the one that has this parent tag with thay class */
    :host-context(article.card){
        background-color:yellow;
    }

    </style>
   
      `;
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
