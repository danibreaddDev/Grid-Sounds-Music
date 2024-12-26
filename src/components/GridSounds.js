class GridSounds extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.Callback();
  }
  static get styles() {
    return `
     .container{
     display:grid;
     
     background:white;
     width:100%;
     heigth:100%;
     }
      `;
  }
  Callback() {
    this.render();
  }
  render() {
    const html = `
       <style>${GridSounds.styles}</style>
       <div class="container">ds</div>
       `;
    this.shadowRoot.setHTMLUnsafe(html);
  }
}
customElements.define("grid-sounds", GridSounds);
