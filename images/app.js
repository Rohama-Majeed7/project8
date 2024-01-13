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
  }
}
// ==========================
const btn = document.querySelector(".hum");
const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".cross");
btn.addEventListener("click",() =>{
sidebar.classList.add("showbar")
})
cross.addEventListener("click",() =>{
    sidebar.classList.remove("showbar")
})