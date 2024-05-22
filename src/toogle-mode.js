export function modeDarkLight() {
  const timer = document.querySelector("#toggle-mode");
  const darkModeHtml = document.querySelector("html");
  const sun = document.querySelector(".ph-sun");
  timer.addEventListener("click", () => {
    darkModeHtml.classList.toggle("dark");

    sun.classList.toggle("hide");
  });
}
