const nav = document.querySelector("nav.top");
const background = document.querySelector(".dropdownBackground");
const triggers = document.querySelectorAll(".cool > li");

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(() => {
    this.classList.contains("trigger-enter") && this.classList.add("trigger-enter-active");
  }, 150);
  background.classList.add("open")

  const dropdown = this.querySelector(".dropdown")
  const dropdownCoords = dropdown.getBoundingClientRect()
  const navCoords = nav.getBoundingClientRect()

  const Coords = {
    width : dropdownCoords.width,
    height : dropdownCoords.height,
    top : dropdownCoords.top - navCoords.top,
    left : dropdownCoords.left - navCoords.left,
  }

  background.style.setProperty("width",`${Coords.width}px`);
  background.style.setProperty("height",`${Coords.height}px`);
  background.style.setProperty("transform", `translate(${Coords.left}px, ${Coords.top}px)`)
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open")

}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
