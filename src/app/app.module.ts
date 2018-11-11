import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookService } from './book.service';
import { BookComponent } from './book/book.component';

import { Routes, RouterModule, Router } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { NewBookComponent } from './new-book/new-book.component';
import { FormsModule } from '@angular/forms';
import { BookInfoComponent } from './book-info/book-info.component';

const routes: Routes = [
    {path: "", component: BookListComponent},
    { path: 'books', component: BookListComponent },
    { path: 'books/add', component: NewBookComponent },
    { path: 'books/:id', component: BookInfoComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        BookComponent,
        BookListComponent,
        NewBookComponent,
        BookInfoComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [BookService],
    bootstrap: [AppComponent]
})
export class AppModule { }
