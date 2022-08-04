const template = document.createElement("div");
template.innerHTML = `
<style>
    p{
        color:red;
    }
    .blue{
        color:blue;
    }
</style>
<p>Text paragraph/p>
<p class="blue">Test with a class for styles </p>`;

// The class inherits directly from the API "HTMLElement"
class myElement extends HTMLElement {
  // Every class that generates a web component needs a constructor
  constructor() {
    //Call parent's constructor to use the methods of the HTMLElement class
    super();

    //Create an element
    this.p = document.createElement("p");
  }

  // look up for js class to know what to add to the DOM
  connectedCallback() {
    // call stablished class and add content
    this.p.textContent = "Test1";
    //Add variable to DOM
    this.appendChild(this.p);

    //Add template variable
    this.appendChild(template);
  }
}

// Turn the class into an html tag
customElements.define("my-element", myElement); // Tag's name, class name
