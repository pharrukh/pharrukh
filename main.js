import getArticle from './app/fetchData.js';
import render from './app/render.js';

import allowThemeSwitch from './app/toggleTheme.js';
import { articleAlign } from './app/articleAlign.js';

import { upButton } from './app/upButton.js';

async function renderArticle() {
  const container = document.querySelector('article');
  const article = await getArticle();
  render(article, container);
  // render before align would be possible
  articleAlign();
}

renderArticle();
allowThemeSwitch();
upButton();