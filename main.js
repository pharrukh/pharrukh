renderArticle({
  path: "./public/article.txt",
  container: document.querySelector("#article-contents")
});

allowThemeToggle();


async function renderArticle({ path, container }) {
  /**
   * Renders article from .txt file.
   * @param {String} path file location.
   * @param {HTMLElement} container specified document node to render the article.
   * @returns {undefined}
   */
  const fileData = await fetch(path);
  const text = await fileData.text();
  const article = text
    .split('\n')
    .map(paragraph => `<p>${paragraph}</p>`)
    .join('');

  container.insertAdjacentHTML("beforeend", article);
}

function allowThemeToggle() {
  /**
   * Switch data-theme attr of the root element.
   */
  const toggle = document.getElementById("theme-toggle");
  toggle.addEventListener("click", () => {
    document.documentElement.setAttribute("data-theme", 
      (document.documentElement.dataset.theme === "light")
        ? "dark"
        : "light"
    );
  })
}
