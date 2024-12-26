import "./GridSounds.js"
class GridMusicContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.Callback();
  }
  static get styles() {
    return `
    .title{
    font-size:36px;
    font-weight:bolder;
    display:flex;
    justify-content:center;
    }
    h1{
    color:white;
    }
    `;
  }
  Callback() {
    this.render();
  }
  render() {
    const html = `
     <style>${GridMusicContainer.styles}</style>
     <div class="title"><h1>GridMusicSounds</h1></div>
     <grid-sounds></grid-sounds>
     `;
    this.shadowRoot.setHTMLUnsafe(html);
  }
}
customElements.define("grid-music", GridMusicContainer);
