export default function allowThemeSwitch() {
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  toggle.addEventListener('click', event => {
    root.dataset.theme = (root.dataset.theme === "light") ? "dark" : "light";  
  });
}

export function allowThemeSwitchAnimate() {
  const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('click', event => {
    event.preventDefault();
    toggle.classList.toggle('animate-toggle');
  });
}