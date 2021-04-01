import BaseElement from "./BaseElement";

const layoutCSS = `
.beta { 
    background: white;
    font-size: 85%;
    text-align: center;
    padding: 7px;
}
.beta > a {
  text-decoration: underline;
  color: slategrey;
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
