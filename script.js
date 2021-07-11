const form = document.getElementById("form")
const library = document.querySelector('.library')

let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
        let readStatus
        if (this.read) {
            readStatus = 'finished'
        } else {
            readStatus = 'not read yet'
        }
        return `${title} by ${author}, ${pages} pages, ${readStatus}`
    }
}

function addBookToLibrary(form) {
    form.preventDefault()

    const titleValue = document.getElementById("title").value
    const authorValue = document.getElementById("author").value
    const pagesValue = Number(document.getElementById("pages").value)
    const readValue = document.getElementById("read").checked

    const newBook = new Book(titleValue, authorValue, pagesValue, readValue)

    if (myLibrary.some(book => book.title.toLowerCase() === newBook.title.toLowerCase())) {
        alert("This book is already in your library!")
    } else {
        myLibrary.push(newBook)
        displayLibrary()
    }
}

function displayLibrary() {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('i')
    img.classList.add('fas', 'fa-book', 'fa-10x')

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card-container')

    library.appendChild(card)
    card.appendChild(img)
    card.appendChild(cardContainer)

    myLibrary.forEach(book => {
        if (cardContainer.textContent.includes(book.title)) {
            return
        }
        cardContainer.textContent = book.info()
    })
}

form.addEventListener('submit', addBookToLibrary)

