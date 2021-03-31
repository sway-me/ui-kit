const icons = (data, { width, height }) =>
  data
    .map(
      ({ tooltip, label, href, svgData }, i) => `<a style="${
        i > 0 ? "padding: 0 16px" : "padding-right: 24px;"
      }" title="${tooltip || ""}" href="${href}">
      <svg fill='white' width="${width}" height="${height}" viewBox="0 0 65 45">
        <path fill-rule="evenodd" d="${svgData}" />
      </svg>
      ${label || ""}
    </a>`
    )
    .join("");
export default icons;
