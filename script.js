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
        displayLibrary(newBook)
    }
}

function displayLibrary(newBook) {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('i')
    img.classList.add('fas', 'fa-book', 'fa-10x')

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card-container')

    const removeBtn = document.createElement('button')
    removeBtn.dataset.book = myLibrary.indexOf(newBook)
    removeBtn.textContent = 'Remove'

    library.appendChild(card)
    card.appendChild(img)
    card.appendChild(cardContainer)
    card.appendChild(removeBtn)

    myLibrary.forEach(book => {
        if (cardContainer.textContent.includes(book.title)) {
            return
        }
        cardContainer.textContent = book.info()
    })
}

function removeBook(e) {
    if (e.target.dataset.book) {
        const index = [...e.target.parentElement.parentElement.childNodes].indexOf(e.target.parentElement)
        myLibrary.splice(index, 1)
        library.removeChild(e.target.parentElement)
    }
}

form.addEventListener('submit', addBookToLibrary)
library.addEventListener('click', removeBook)
