window.onload = () => {
  const toggle = document.getElementById('theme-toggle');
  const icon = document.querySelector('.theme-icon');
  toggle.addEventListener('click', () => {
    if (toggle.checked) {
      icon.src = './img/svg/eclipse.svg';
      theme();
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      icon.src = './img/svg/moon.svg';
      theme();
      document.documentElement.setAttribute('data-theme', 'light');
    }
  });

  const theme = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout( () => {
      document.documentElement.classList.remove('transition')
    }, 1500);
  };
};