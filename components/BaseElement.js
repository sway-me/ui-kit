const css = (str) => str;
const sharedStyles = css`
  a {
    color: white;
    opacity: 0.9;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    opacity: 1;
  }

  footer,
  nav {
    display: flex;
    flex-direction: column;
    background: var(--light-gray-grad);
    color: white;
    fill: white;
  }

  nav {
    position: sticky;
    top: 0;
    min-height: 60px;
    height: 123px;
    display: flex;
    z-index: 999;
  }
  nav a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.5;
    font-weight: 500;
    white-space: nowrap;
  }

  @media (max-width: 980px) {
    nav {
      height: 60px;
    }
  }
`;

export default class BaseElement extends HTMLElement {
  constructor(element, elementStyles) {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const styleElement = document.createElement("style");
    styleElement.textContent = sharedStyles + elementStyles;
    shadow.appendChild(styleElement);
    shadow.appendChild(element);
  }
}
