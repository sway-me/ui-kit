import Menus from "./Menus";
import Icons from "./Icons";

customElements.define("footer-menus", Menus);
customElements.define("footer-icons", Icons);

const footerCss = `
  footer {
    background: var(--light-gray-grad);
    width: 100vw;
    color: white;
    fill: white;
  }
`;

export default class Footer extends HTMLElement {
  constructor() {
    super();

    const footer = document.createElement("footer");
    const inlineStyles = this.getAttribute("style");
    footer.setAttribute("style", inlineStyles);
    const style = document.createElement("style");
    style.textContent = footerCss;

    footer.innerHTML = Footer.getInnerHTML();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(style);
    shadow.appendChild(footer);
  }

  static getInnerHTML() {
    return `
      <div
        style="display: flex; flex-direction: column;  padding: 5.4rem 4rem 5rem;"
      >
        <footer-menus></footer-menus>
        <div style="text-align: center; font-size: 90%; margin-bottom: 2rem;">© Sway 2021. Opening gardens 🌻. </div>
        <footer-icons></footer-icons>
      </div>
    `;
  }
}
