import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  removeBook(id: number){
    this.bookService.removeBookById(id);
  }

}
