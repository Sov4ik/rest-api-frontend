import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../common/book';
import { BookService } from '../../_services/book.service';
import { BookListComponent } from '../book-list/book-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})

export class BookDetailsComponent implements OnInit {

  id: number;
  book: Book;
  showDeleteButton = false;
  showUpdateButton =  false;
  isLoggedIn =  false;
  private roles: string[];

  constructor(private route: ActivatedRoute, private router: Router,
              private bookService: BookService) { }

  ngOnInit() {

    this.book = new Book();

    this.id = this.route.snapshot.params.id;

    this.bookService.getBook(this.id)
      .subscribe(data => {
        console.log(data);
        this.book = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['/home']);
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
    this.list();
  }

  updateBook(id: number){
    this.router.navigate(['update', id]);
  }
}
