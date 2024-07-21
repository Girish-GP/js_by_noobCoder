//1
const book = {
    title: "Sncjd",
    author: "Mr dnaf",
    year: 2024,
}
console.log(book)

//2
console.log("Title of the book is ",book?.title)
console.log("Author of the book is ",book?.author)

//3
book.getData = (()=> {
    console.log(`Title of the book is ${this.title} and author is ${this.author}`)
    console.log("This context inside arrow functions",this)
}).bind(book)
book.getData2 =function() {
    console.log(`Title of the book is ${this.title} and author is ${this.author}`)
    console.log("This context inside regular functions",this)
}
console.log(book.getData())
console.log(book.getData2())

//4

book.updateYear = function(val){
    book.year = val;
    console.log(book,book.year)
}
book.updateYear(2023)

//5
const library = {
    name: "Lib1",
    books: [{
        title: "Sncjd",
        author: "Mr dnaf",
        year: 2024,
    },
    {
        title: "we2eefs",
        author: "Ms 344naf",
        year: 2124,
    }]
}
console.log(library);

//6
console.log(library?.name)
library?.books.forEach(obj => console.log(obj?.title))

//8
for(let item in book){
    console.log(`${item}: ${book[item]}`)
}

//9
console.log(Object?.keys(book))
console.log(Object?.values(book))
console.log(Object?.entries(book))