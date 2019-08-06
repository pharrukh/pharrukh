import getArticle from './app/fetchData.js';
import render from './app/render.js';
import allowThemeSwitch from './app/toggleTheme.js';

async function renderArticle() {
  const container = document.querySelector('article');
  const article = await getArticle();
  render(article, container);
}

renderArticle();
allowThemeSwitch();