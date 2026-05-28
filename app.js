// Renders the portfolio, LP funds and co-investor grids from data/data.js.
// To reorder or edit entries, edit data/data.js (no build step needed),
// or open the site with ?edit=1 to drag logos and copy the new order.

(function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  var data = (window.LAMBDA || { portfolio: [], lpFunds: [], coinvestors: [] });

  function cell(item, withCaption) {
    var a = document.createElement("a");
    a.className = "logo-cell" + (withCaption ? " logo-cell--with-caption" : "");
    a.href = item.url || "#";
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.title = item.name;

    var img = document.createElement("img");
    img.src = "assets/logos/" + item.logo;
    img.alt = item.name;
    img.loading = "lazy";

    // If the logo file is missing:
    //  - withCaption=true  → remove the img; the caption below already shows the name.
    //  - withCaption=false → replace the img with the company name as text fallback.
    img.onerror = function () {
      if (withCaption) {
        if (img.parentNode) img.parentNode.removeChild(img);
      } else {
        var span = document.createElement("span");
        span.className = "logo-fallback";
        span.textContent = item.name;
        a.replaceChild(span, img);
      }
    };

    a.appendChild(img);

    if (withCaption) {
      var cap = document.createElement("span");
      cap.className = "logo-caption";
      cap.textContent = item.name;
      a.appendChild(cap);
    }

    if (item.sold) {
      var badge = document.createElement("span");
      badge.className = "logo-badge logo-badge--sold";
      badge.textContent = "Sold";
      a.appendChild(badge);
    }

    return a;
  }

  function render(items, mountId, withCaption) {
    var mount = document.getElementById(mountId);
    if (!mount) return;
    mount.innerHTML = "";
    (items || [])
      .filter(function (it) { return !it.hidden; })
      .forEach(function (it) { mount.appendChild(cell(it, withCaption)); });
    mount.setAttribute("aria-busy", "false");
  }

  render(data.portfolio, "portfolio-grid", true);
  render(data.lpFunds, "lp-funds-grid", true);
  render(data.coinvestors, "funds-grid", true);

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
