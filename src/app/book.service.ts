import { Book } from "./book";

export class BookService{
    private _books: Array<Book> = [
        new Book(1, "Harry Potter", "J.K.Rolling", 1993),
        new Book(2, "C++ Programming Language", "B.Straustrup", 2015)
    ];

    public get books(): Array<Book>{
        return this._books;
    }

    public addBook(newBook: Book){
        this._books.push(newBook);
    }

    public getBookById(id: number): Book{
        var book = this._books.find(b => b.id == id);

        if(book == undefined) throw new Error("Book with id " + id + "doesn't exist");
        return book;
    }

    public removeBookById(id: number){
        var index = this._books.findIndex(b => b.id == id);

        if (index < 0) throw new Error("No book with such id");

        this._books.splice(index, 1);
    }

}