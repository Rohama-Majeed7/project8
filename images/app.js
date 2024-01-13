const link = document.querySelector(".side-link");
const icon = document.querySelector(".icon");
function toggleSection(label) {
  const section = label.parentNode;
  const content = section.querySelector(".accordion-content");
  const icon = label.querySelector(".icon");
  if (section.classList.contains("active")) {
    content.style.display = "none";
    icon.innerHTML = `<i class="fa fa-chevron-down"></i>`;
    section.classList.remove("active");
  } else {
    content.style.display = "block";
    icon.innerHTML = `<i class="fa fa-chevron-up"></i>`;
    section.classList.add("active");
    link.style.color = "#33c2ff";
    icon.style.color = "#33c2ff";
  }
}
// ==========================
const btn = document.querySelector(".hum");
const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".cross");
btn.addEventListener("click", () => {
  sidebar.classList.add("showbar");
});
cross.addEventListener("click", () => {
  sidebar.classList.remove("showbar");
});
// =============================
document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.querySelector(".fixed");

  window.onscroll = function () {
    showScrollButton();
  };

  function showScrollButton() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }

  scrollToTopBtn.addEventListener("click", function () {
    scrollToTop();
  });

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
});
// =========================
