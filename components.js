export class Checkbox extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        // Create a shadow root
        const shadow = this.attachShadow({mode: 'open'});

        const checkbox = document.createElement('div')
        checkbox.setAttribute('class', 'checkbox')

        const inlineStyles = this.getAttribute('style')
        checkbox.setAttribute('style', inlineStyles)

        // Create some CSS to apply to the shadow dom
        const style = document.createElement('style');

        style.textContent = `
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

        // Attach the created elements to the shadow dom
        shadow.appendChild(style);
        shadow.appendChild(checkbox);


        checkbox.onclick = () => {
               if(!checkbox.textContent) {
                   checkbox.textContent = "✓"
                   this.setAttribute('checked', 'checked')
               } else {
                   checkbox.textContent = ""
                   this.removeAttribute('checked')
               }



        }
    }
}

customElements.define('check-box', Checkbox);
