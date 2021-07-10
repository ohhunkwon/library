function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = false
    this.info = () => {
        let readStatus
        if (this.authorread) {
            readStatus = 'finished'
        } else {
            readStatus = 'not read yet'
        }
        return `${title} by ${author}, ${pages} pages, ${readStatus}`
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295)
console.log(theHobbit.info())