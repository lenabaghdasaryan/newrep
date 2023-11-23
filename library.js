function Library(name, type) {
    this.name = name;
    this.type = type;
    this.availibility = true;

    this.borrow = () => {
        this.availability = false
    };
    this.returnBook = () => {
        this.availability = true;

    };
    this.checkAvailability = () => {
        return this.availability ?`${this.name} book is available!` :`${this.name} book is unavailable!`;
        }
    }
const book1 = new Library('The Financier', 'Realism');
const book2 = new Library('The Great Gatsby', 'Tragedy')
book1.borrow()
console.log(book1.checkAvailability());
book1.returnBook();
console.log(book1.checkAvailability());
book1.borrow();
console.log(book2.checkAvailability())