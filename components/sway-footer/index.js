import BaseElement from "../BaseElement";
import icons from "../shared-templates/icons";
import data from "./footer-data.json";
import menus from "./menus";

const css = (str) => str;
const layoutCSS = css`
  .footer-container {
    display: flex;
    flex-direction: column;
    padding: 4rem 4rem 3rem;
  }
  .footer-copy {
    text-align: center;
    font-size: 90%;
    margin-bottom: 2rem;
  }

  .footer-icons {
    display: flex;
    justify-content: flex-end;
  }

  .footer-menus {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 4rem;
  }
  .footer-menus h4 {
    margin-bottom: 43px;
  }

  @media (max-width: 980px) {
    .footer-icons {
      justify-content: center;
    }
  }
`;

export default class Footer extends BaseElement {
  constructor() {
    const footer = document.createElement("footer");
    super(footer, layoutCSS);
    this.footer = footer;
  }

  connectedCallback() {
    this.footer.innerHTML = `<div class="footer-container" >
        <div class="footer-menus">
        
        ${menus(data.menus)}
</div>
        <div class="footer-copy">© Sway 2021. Opening gardens 🌻 </div>
        <div class="footer-icons">
            ${icons(data.icons, { height: 45, width: 45 })}
        </div>
    </div>`;
  }
}
