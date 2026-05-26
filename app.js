// Renders the portfolio, LP funds and co-investor grids from data/data.js.
// To reorder or edit entries, edit data/data.js (no build step needed),
// or open the site with ?edit=1 to drag logos and copy the new order.

(function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  var data = (window.LAMBDA || { portfolio: [], lpFunds: [], coinvestors: [] });

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

    if (item.sold) {
      var badge = document.createElement("span");
      badge.className = "logo-badge logo-badge--sold";
      badge.textContent = "Sold";
      a.appendChild(badge);
    }

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
  render(data.lpFunds, "lp-funds-grid");
  render(data.coinvestors, "funds-grid");

  // ---- Edit mode: drag & drop reordering (open with ?edit=1) ----
  if (new URLSearchParams(location.search).get("edit") === "1" && window.Sortable) {
    var controls = document.getElementById("edit-controls");
    if (controls) controls.hidden = false;

    ["portfolio-grid", "lp-funds-grid", "funds-grid"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) new window.Sortable(el, { animation: 150, ghostClass: "logo-cell--ghost" });
    });

    var copyBtn = document.getElementById("copy-order");
    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        var result = {};
        ["portfolio-grid", "lp-funds-grid", "funds-grid"].forEach(function (id) {
          result[id] = Array.from(document.getElementById(id).children)
            .map(function (a) { return a.title; });
        });
        navigator.clipboard.writeText(JSON.stringify(result, null, 2));
        copyBtn.textContent = "Copied!";
        setTimeout(function () {
          copyBtn.textContent = "Copy current order to clipboard";
        }, 2000);
      });
    }
  }
})();
