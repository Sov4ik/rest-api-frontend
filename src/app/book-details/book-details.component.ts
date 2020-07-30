import { Component, OnInit } from '@angular/core';
import {Book} from "../common/book";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../_services/book.service";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  id: number;
  book: Book;

  constructor(private route: ActivatedRoute,
              private bookService: BookService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;

    this.bookService.getBook(this.id)
      .subscribe(data => {
        console.log(data);
        this.book = data;
      }, error => console.log(error));
  }



}
