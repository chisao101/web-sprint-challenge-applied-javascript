import axios from "axios"

const Card = ( {headline, authorPhoto, authorName} ) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  const card = document.createElement('div')
  const articleHeadline = document.createElement('div')
  const author = document.createElement('div')
  const imgContainer = document.createElement('div')
  const authorImg = document.createElement('img')
  const nameOfAuthor = document.createElement('span')
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  card.classList.add('card')
  articleHeadline.classList.add('headline')
  author.classList.add('author')
  imgContainer.classList.add('img-container')
  authorImg.src = authorPhoto
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  articleHeadline.textContent = headline
  nameOfAuthor.textContent = authorName

  card.appendChild(articleHeadline)
  card.appendChild(author)
  author.appendChild(imgContainer)
  imgContainer.appendChild(authorImg)
  author.appendChild(nameOfAuthor)



  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  card.addEventListener('click', () => {
    console.log(articleHeadline)
  })
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
return card

}

const cardAppender = (selector) => {
  const articlesContainer = document.querySelector(selector)
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then(res => {    
    const newBootStrapArticles = res.data.articles.bootstrap
    const newJavascriptArticles = res.data.articles.javascript
    const newTechnologyArticles = res.data.articles.technology
    const newJqueryArticles = res.data.articles.jquery
    const newNodeJsArticles = res.data.articles.node



    newBootStrapArticles.forEach(article => {
      articlesContainer.appendChild(Card(article))
    })

    newJavascriptArticles.forEach(article => {
      articlesContainer.appendChild(Card(article))
    })

    newTechnologyArticles.forEach(article => {
      articlesContainer.appendChild(Card(article))
    })

    newJqueryArticles.forEach(article => {
      articlesContainer.appendChild(Card(article))
    })


    newNodeJsArticles.forEach(article => {
      articlesContainer.appendChild(Card(article))
    })

})
.catch(err => console.log(err))
  
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
