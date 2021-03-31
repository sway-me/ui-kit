import BaseElement from "./BaseElement";

const layoutCSS = `
.beta { 
    background: var(--pink-grad);
    color: white;
    text-align: center;
    padding: 2px 0;
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
        <b>Beta:</b> Currently being developed. Many features are not implemented.  &nbsp; <a href='https://gitlab.com/sway-me'> Contributions welcome</a> 🚀  
    </div>`;
  }
}
