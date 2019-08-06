async function getArticle(path = "./data/article.txt") {
  const data = await fetch(path);
  const text = await data.text();
  
  return text
    .split('\n')
    .map(paragraph => `<p>${paragraph}</p>`)
    .join('');
}

export default getArticle;