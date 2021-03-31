import BaseElement from "./BaseElement";

const layoutCSS = `
.beta { 
    background: var(--pink-grad);
    color: white;
    font-size: 85%;
    text-align: center;
    padding: 7px 0;
}
.beta > a {
  text-decoration: underline;
}
`;

export default class Beta extends BaseElement {
  constructor() {
    const beta = document.createElement("div");
    super(beta, layoutCSS);
    this.beta = beta;
  }

  connectedCallback() {
    this.beta.innerHTML = `<div class="beta" >
        <b>BETA:</b> &nbsp; Many features not implemented. &nbsp; <a href='https://gitlab.com/groups/sway-me/-/boards/'>Contributions welcome</a> &nbsp; 🚀
    </div>`;
  }
}
