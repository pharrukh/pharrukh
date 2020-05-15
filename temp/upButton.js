export function upButton() {
  const upButton = document.querySelector(".up-button-container");

  // hide button while scrolling up
  let previousScroll = window.pageYOffset;
     
  document.addEventListener( 'scroll', event => {
    let currentScroll = window.pageYOffset;
    (previousScroll < currentScroll)
      ? upButton.classList.add("up-button-container--hidden")
      : upButton.classList.remove("up-button-container--hidden");
    previousScroll = currentScroll;
  }, { capture: false, passive: true });

  upButton.addEventListener('click', scrollToTop);

  // smooth scroll to top
  const speed = 15; // bigger -> slower
  function scrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / speed);
    }
  }
}