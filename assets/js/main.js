// Theme toggle, mobile menu and abstract buttons.
(function () {
  var root = document.documentElement;
  function setTheme(t) {
    root.setAttribute("data-theme", t);
    try { localStorage.setItem("theme", t); } catch (e) {}
    var btn = document.querySelector(".theme-toggle i");
    if (btn) btn.className = t === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  if (!saved && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) saved = "dark";
  setTheme(saved || "light");

  document.addEventListener("DOMContentLoaded", function () {
    setTheme(root.getAttribute("data-theme"));

    var tt = document.querySelector(".theme-toggle");
    if (tt) tt.addEventListener("click", function () {
      setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });

    var mt = document.querySelector(".menu-toggle");
    var nl = document.querySelector(".nav-links");
    if (mt && nl) mt.addEventListener("click", function () { nl.classList.toggle("open"); });

    document.querySelectorAll("[data-abstract]").forEach(function (b) {
      b.addEventListener("click", function () {
        var box = document.getElementById(b.getAttribute("data-abstract"));
        var open = box.classList.toggle("open");
        b.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });

    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  });
})();
