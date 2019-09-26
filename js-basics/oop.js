//declare a class(constructor) that represents a book
function Book(title,pages,isbn){
  this.title = title
  this.pages = pages
  this.isbn = isbn
  //a class can contain methods
  Book.prototype.printTitle = function () {
    console.log(this.title)
  }
}

//instantiate this class
const monkeyBook = new Book('The Coolest Chimp',23000,'tada')
monkeyBook.printTitle()
