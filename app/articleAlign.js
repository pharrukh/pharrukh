export function articleAlign() {
  const toggle = document.getElementById("switch-text-align");
  const article = document.querySelectorAll("p");

  const align = (text, alignment) => {
    text.forEach(element => {
      element.style.textAlign = alignment;
    });
  }

  toggle.addEventListener("change", event => {
    (toggle.checked) ? align(article, "left") : align(article, "justify");
  });
}