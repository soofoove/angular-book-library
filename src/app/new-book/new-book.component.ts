import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-book',
    templateUrl: './new-book.component.html',
    styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
    id: number;
    title: string;
    author: string;
    year: number;

    constructor(private bookService: BookService, private router: Router) { }

    ngOnInit() {

    }

    addBook(id: number, title: string, author: string, year: number) {
        this.bookService.addBook(new Book(id, title, author, year));
        this.router.navigate(['/books', id]);
    }
}
