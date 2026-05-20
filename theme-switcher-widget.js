(function () {
  if (window.self !== window.top) return;
  if (document.getElementById("statlynk-theme-switcher-widget")) return;

  const themes = [
    {
      name: "Modern Red",
      file: "modern-red.html",
      color: "#b20017"
    },
    {
      name: "Forest Green",
      file: "forest-green.html",
      color: "#012d1d"
    },
    {
      name: "Bright Blue",
      file: "alokesh-color-code.html",
      color: "#0050e2"
    }
  ];

  const currentFile = (window.location.pathname.split("/").pop() || "alokesh-color-code.html").toLowerCase();
  const currentTheme = themes.find((theme) => theme.file.toLowerCase() === currentFile) || themes[0];

  const style = document.createElement("style");
  style.textContent = `
    #statlynk-theme-switcher-widget {
      position: fixed;
      right: 18px;
      bottom: 18px;
      z-index: 99999;
      width: min(330px, calc(100vw - 32px));
      color: #17202a;
      font-family: Inter, Hanken Grotesk, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    #statlynk-theme-switcher-widget * {
      box-sizing: border-box;
    }

    .statlynk-theme-panel {
      overflow: hidden;
      background: rgba(255, 255, 255, 0.96);
      border: 1px solid rgba(23, 32, 42, 0.14);
      border-radius: 8px;
      box-shadow: 0 18px 52px rgba(23, 32, 42, 0.2);
      backdrop-filter: blur(14px);
    }

    .statlynk-theme-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 12px 12px 10px;
      border-bottom: 1px solid rgba(23, 32, 42, 0.1);
    }

    .statlynk-theme-title {
      margin: 0;
      font-size: 13px;
      font-weight: 800;
      line-height: 1.2;
    }

    .statlynk-theme-subtitle {
      display: block;
      margin-top: 3px;
      color: #617082;
      font-size: 11px;
      font-weight: 600;
    }

    .statlynk-theme-toggle {
      width: 34px;
      height: 34px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #17202a;
      background: #eef2f7;
      border: 1px solid rgba(23, 32, 42, 0.1);
      border-radius: 8px;
      cursor: pointer;
    }

    .statlynk-theme-body {
      display: grid;
      gap: 8px;
      padding: 10px;
    }

    .statlynk-theme-link,
    .statlynk-theme-review {
      min-height: 38px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 9px 10px;
      color: #17202a;
      background: #ffffff;
      border: 1px solid rgba(23, 32, 42, 0.12);
      border-radius: 8px;
      font-size: 13px;
      font-weight: 800;
      text-decoration: none;
    }

    .statlynk-theme-link:hover,
    .statlynk-theme-review:hover {
      border-color: rgba(23, 32, 42, 0.28);
    }

    .statlynk-theme-link.is-active {
      border-color: var(--statlynk-theme-color);
      box-shadow: inset 0 0 0 1px var(--statlynk-theme-color);
    }

    .statlynk-theme-dot {
      width: 12px;
      height: 12px;
      flex: 0 0 auto;
      border-radius: 50%;
      background: var(--statlynk-theme-color);
    }

    .statlynk-theme-name {
      flex: 1;
      min-width: 0;
    }

    .statlynk-theme-status {
      color: #617082;
      font-size: 11px;
      font-weight: 700;
    }

    .statlynk-theme-review {
      justify-content: center;
      color: #ffffff;
      background: #17202a;
      border-color: #17202a;
    }

    #statlynk-theme-switcher-widget.is-collapsed {
      width: auto;
    }

    #statlynk-theme-switcher-widget.is-collapsed .statlynk-theme-body,
    #statlynk-theme-switcher-widget.is-collapsed .statlynk-theme-title {
      display: none;
    }

    #statlynk-theme-switcher-widget.is-collapsed .statlynk-theme-head {
      padding: 8px;
      border-bottom: 0;
    }

    @media (max-width: 640px) {
      #statlynk-theme-switcher-widget {
        right: 12px;
        bottom: 12px;
        width: calc(100vw - 24px);
      }
    }
  `;

  const root = document.createElement("div");
  root.id = "statlynk-theme-switcher-widget";
  root.innerHTML = `
    <div class="statlynk-theme-panel">
      <div class="statlynk-theme-head">
        <p class="statlynk-theme-title">
          Theme switcher
          <span class="statlynk-theme-subtitle">Current: ${currentTheme.name}</span>
        </p>
        <button class="statlynk-theme-toggle" type="button" aria-label="Collapse theme switcher" aria-expanded="true">-</button>
      </div>
      <div class="statlynk-theme-body">
        ${themes.map((theme) => `
          <a class="statlynk-theme-link${theme.file === currentTheme.file ? " is-active" : ""}" style="--statlynk-theme-color: ${theme.color}" href="${theme.file}">
            <span class="statlynk-theme-dot" aria-hidden="true"></span>
            <span class="statlynk-theme-name">${theme.name}</span>
            <span class="statlynk-theme-status">${theme.file === currentTheme.file ? "Selected" : "View"}</span>
          </a>
        `).join("")}
        <a class="statlynk-theme-review" href="theme-switcher.html">Compare all themes</a>
      </div>
    </div>
  `;

  document.head.appendChild(style);
  document.body.appendChild(root);

  const toggle = root.querySelector(".statlynk-theme-toggle");
  toggle.addEventListener("click", () => {
    const collapsed = root.classList.toggle("is-collapsed");
    toggle.textContent = collapsed ? "+" : "-";
    toggle.setAttribute("aria-expanded", String(!collapsed));
    toggle.setAttribute("aria-label", collapsed ? "Expand theme switcher" : "Collapse theme switcher");
  });
})();
