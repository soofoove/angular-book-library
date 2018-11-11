import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
    selector: 'app-book-info',
    templateUrl: './book-info.component.html',
    styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {
    book: Book;
    constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) {
        activatedRoute.params.subscribe(params => {
            try{
            this.book = bookService.getBookById(params['id'])
            }
            catch (error){
                this.book = new Book(0, "Error", "Error", 0);
            }
        });
    }

    ngOnInit() {
    }

}
