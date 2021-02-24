const menus = (data) =>
  data
    .map(
      ({ title, links }) => `
          <div>
            <h4>${title}</h4>
            ${links
              .map(
                ({ name, href }) => `
                   <a  href="${href}" >
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

export default menus;
