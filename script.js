const form = document.getElementById("form")

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
    }
}

form.addEventListener('submit', addBookToLibrary)

