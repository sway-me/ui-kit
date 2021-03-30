const checkBoxCss = `
  .checkbox {
    background: var(--pink-grad);
    font-size: 1rem;
    color: white;
    cursor: pointer;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: var(--border);
    box-shadow: var(--light-shadow);
    -moz-user-select: none;
    -webkit-user-select: none;
  }
`;
export default class Checkbox extends HTMLElement {
  constructor() {
    super();

    const checkbox = document.createElement("div");
    const inlineStyles = this.getAttribute("style");
    checkbox.setAttribute("style", inlineStyles);
    checkbox.setAttribute("class", "checkbox");
    const style = document.createElement("style");
    style.textContent = checkBoxCss;

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(style);
    shadow.appendChild(checkbox);
    checkbox.onclick = () => {
      if (!checkbox.textContent) {
        checkbox.textContent = "✓";
        this.setAttribute("checked", "checked");
      } else {
        checkbox.textContent = "";
        this.removeAttribute("checked");
      }
    };
  }
}
