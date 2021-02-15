import { menuData } from "./data.json";

export default class Menus extends HTMLElement {
  constructor() {
    super();
    const menus = document.createElement("div");
    menus.style =
      "display: flex; justify-content: space-around; flex-wrap: wrap";

    const style = document.createElement("style");
    style.textContent = `
      a:hover {
        text-decoration: underline !important;
      }
    `;
    menus.innerHTML = Menus.getInnerHTML();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(style);
    shadow.appendChild(menus);
  }

  static getInnerHTML() {
    return menuData
      .map(
        ({ title, links }) => `
          <div style="width: 125px; margin-bottom: 6rem;">
            <h4 style="margin-bottom: 43px">${title}</h4>
            ${links
              .map(
                ({ name, href }) =>
                  `
                   <a
                       style="font-size: 16px; color: white; text-decoration: none;"
                       href="${href}"
                   >
                     ${name}
                   </a>
                   <br></br>
                 `
              )
              .join("")}
          </div>
        `
      )
      .join("");
  }
}
