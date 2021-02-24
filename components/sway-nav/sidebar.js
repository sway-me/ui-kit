import icons from "../shared-templates/icons";

export const sidebarCSS = `
  .sidebar-header {
    height: 60px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    padding: 0 16px;
  }
  .sidebar-labels {
    padding: 8px; 4px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .sidebar-labels div {
    width: 95%;
    display: flex;
    padding: 4px 16px;
    border-radius: 3px;
  }
  .sidebar-labels div:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const sidebarHTML = (iconData) => `<div>
  <div class="sidebar-header">
    ${icons(iconData.slice(0, 1), { width: 45, height: 30 })}
  </div>
  <div class="sidebar-labels">
  
    ${iconData
      .filter((icon) => icon.label)
      .map(
        ({ label, href }) => `<div>
    <a href="${href}">${label}</a>
</div>
`
      )
      .join("")}
    <div>
    
    ${icons(iconData.slice(-1), { width: 33, height: 33 })}
</div>    
    </div>
</div>`;
