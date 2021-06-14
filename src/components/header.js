// get today's date
let today = new Date()
let day = today.getDate()
let month = today.getMonth()
let year = today.getFullYear()

if(day < 10){
  month = '0' + month
}
today = month + '/' + day + '/' + year
// console.log(today)


const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // create elements
  const header = document.createElement('div')
  const dateSpan = document.createElement('span')
  const titleH1 = document.createElement('h1')
  const tempSpan = document.createElement('span')
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // add classes
  header.classList.add('header')
  dateSpan.classList.add('date')
  tempSpan.classList.add('temp')
  // append children
  header.appendChild(dateSpan)
  header.appendChild(titleH1)
  header.appendChild(tempSpan)
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // fill with content
  dateSpan.textContent = date
  titleH1.textContent = title
  tempSpan.textContent = temp
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  return header
}

const headerAppender = (selector) => {
  selector = document.querySelector(selector)
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  selector.appendChild(Header('My Title', today, 82))

  return selector

}

export { Header, headerAppender }
