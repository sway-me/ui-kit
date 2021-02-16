import data from "./data.json";

export default class Icons extends HTMLElement {
  constructor() {
    super();
    const icons = document.createElement("div");
    icons.style = `display: flex; justify-content: flex-end;`;
    icons.innerHTML = Icons.getInnerHTML();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(icons);
  }

  static getInnerHTML() {
    return data.iconData
      .map(
        ({ href, svgData }) => ` <a style="margin-left: 1.6rem" href="${href}">
        <svg width="33" height="31">
          ${svgData
            .map((d) => ` <path fill-rule="evenodd" d="${d}" /> `)
            .join("")}
        </svg>
      </a>
      <br></br>
      `
      )
      .join("");
  }
}
