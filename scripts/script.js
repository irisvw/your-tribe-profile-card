const spinButton = document.querySelector('button')
// const articles = document.querySelectorAll('article')

spinButton.addEventListener('click', spin)

// function spin() {
//   articles.forEach((article) => article.classList.toggle("spin"));
// }

const main = document.querySelector('main')

function spin() {
  main.classList.toggle("spin");
}