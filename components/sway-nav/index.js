import BaseElement from "../BaseElement";
import data from "./nav-data.json";
import icons from "../shared-templates/icons";
import toggleScroll from "../../utils/toggleScroll";
import { sidebarHTML, sidebarCSS } from "./sidebar";

const layoutCSS = `
.nav-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
}

.nav-center,
.nav-container,
.nav-left {
    display: flex;
}

.nav-left {
    align-items: center;
}

.nav-toggle {
    display: none;
    margin-right: 8px;
}

.nav-overlay {
    display: none;
    background: rgba(0, 0, 0, 0.6);
    height: 100vh;
    width: 100vw;
}

.nav-sidebar {
    background: var(--light-gray-grad);
    width: 75vw;
    height: 100vh;
    transform: translateX(-100%);
    transition: var(--transition);
}

.nav-overlay,
.nav-sidebar {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
}
@media (max-width: 980px) {
    .nav-center {
        display: none;
    }

    .nav-toggle {
        display: block;
    }

    .nav-logo a svg,
    .nav-right a svg {
        transform: scale(0.66);
    }
}
`;

const dims = {
  lg: { width: 65, height: 45 },
  sm: { width: 43, height: 30 },
  none: { width: 0, height: 0 },
};

const getVal = (max, min = 0) => Math.max(min, max - window.scrollY / 5);
const setSvgAttributes = (svg, { lg, sm }) => {
  svg.setAttribute("height", getVal(lg.height, sm.height));
  svg.setAttribute("width", getVal(lg.width, sm.width));
  svg.style.transform = "scale(1)";
};

const navHTML = () => `
      <div class="nav-overlay"></div>
      <div class="nav-sidebar">${sidebarHTML(data.icons)}</div>
      <div class="nav-container">
        <div class="nav-left">
          <a title="toggle" class="nav-toggle">
              <svg width="30" height="30" viewBox="0 0 30 30">
                <path
                  stroke="white"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M4 7h22M4 15h22M4 23h22"
                />
              </svg> 
          
          </a>
        <div class="nav-logo">${icons(data.icons.slice(0, 1), dims.lg)}</div>
      </div>
        <div class="nav-center">${icons(data.icons.slice(1, -1), dims.lg)}</div>
        <div class="nav-right">${icons(data.icons.slice(-1), dims.lg)}</div>
      </div>
    `;
export default class Nav extends BaseElement {
  constructor() {
    const nav = document.createElement("nav");
    super(nav, layoutCSS + sidebarCSS);
    this.nav = nav;
  }

  connectedCallback() {
    this.nav.innerHTML = navHTML();
    this.showSidebar();

    const fullNavEnabled = this.getAttribute("full") === "";
    const fullNavDisabled = this.getAttribute("full") === null;
    if (fullNavDisabled) {
      this.nav.style.height = "60px";
      const { noLabelSvgs, labelSvgs } = this.getSvgs();
      labelSvgs.forEach((svg) => {
        svg.style.display = "none";
      });
      noLabelSvgs.forEach((svg) => {
        svg.style.transform = "scale(0.66)";
      });
    }
    if (fullNavEnabled) {
      this.enableDynamicScroll();
    }
  }

  enableDynamicScroll() {
    const { noLabelSvgs, labelSvgs } = this.getSvgs();

    window.onscroll = () => {
      if (window.innerWidth > 982) {
        this.nav.style.height = `${getVal(100, 60)}px`;
        noLabelSvgs.forEach((svg) => {
          setSvgAttributes(svg, dims);
        });
        labelSvgs.forEach((svg) => {
          setSvgAttributes(svg, { ...dims, sm: { height: 0, width: 0 } });
        });
      }
    };
  }

  getSvgs() {
    const noLabelSvgs = Array.from(
      //  svgs with a title that is not empty uses a tooltip instead of label. See  icons.js
      this.nav.querySelectorAll("a:not([title='']) svg")
    );
    const labelSvgs = Array.from(this.nav.querySelectorAll("a[title=''] svg"));
    return { noLabelSvgs, labelSvgs };
  }

  showSidebar() {
    const toggleEl = this.nav.querySelector(".nav-toggle");
    const overlayEl = this.nav.querySelector(".nav-overlay");
    const sidebarEl = this.nav.querySelector(".nav-sidebar");

    toggleEl.onclick = () => {
      toggleScroll({ enable: false });
      overlayEl.style.display = "block";
      sidebarEl.style.transform = "translateX(0%)";
    };
    overlayEl.onclick = () => {
      toggleScroll({ enable: true });
      overlayEl.style.display = "none";
      sidebarEl.style.transform = "translateX(-100%)";
    };
  }
}
