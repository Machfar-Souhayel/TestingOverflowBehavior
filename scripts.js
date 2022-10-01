function toggleClass() {
  let toggledElement = event.target.children[0];

  if (!Array.from(toggledElement.classList).includes("show")) {
    toggledElement.classList.add("show");
  } else {
    toggledElement.classList.remove("show");
  }
}
// SCustom scroll
let listCardContainer = document.getElementsByClassName("card-list")[0];
listCardContainer.addEventListener("scroll", () => {
  console.log("scrolled");
});
