// Renders the portfolio and funds grids from data/data.js.
// To reorder or edit entries, edit data/data.js (no build step needed).

(function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  var data = (window.LAMBDA || { portfolio: [], funds: [] });

  function cell(item) {
    var a = document.createElement("a");
    a.className = "logo-cell";
    a.href = item.url || "#";
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.title = item.name;

    var img = document.createElement("img");
    img.src = "assets/logos/" + item.logo;
    img.alt = item.name;
    img.loading = "lazy";

    // If the logo file is missing, show the company name instead.
    img.onerror = function () {
      var span = document.createElement("span");
      span.className = "logo-fallback";
      span.textContent = item.name;
      a.replaceChild(span, img);
    };

    a.appendChild(img);
    return a;
  }

  function render(items, mountId) {
    var mount = document.getElementById(mountId);
    if (!mount) return;
    mount.innerHTML = "";
    (items || [])
      .filter(function (it) { return !it.hidden; })
      .forEach(function (it) { mount.appendChild(cell(it)); });
    mount.setAttribute("aria-busy", "false");
  }

  render(data.portfolio, "portfolio-grid");
  render(data.funds, "funds-grid");
})();
