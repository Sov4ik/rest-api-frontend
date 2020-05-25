import { Component, OnInit } from '@angular/core';
import { Book } from '../../common/book';
import { BookService } from '../../_services/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Observable<Book[]>;
  private roles: string[];
  showDeleteButton = false;
  showUpdateButton = false;
  isLoggedIn = false;


  constructor(private bookService: BookService,
              private router: Router,
              private tokenStorageService: TokenStorageService) {}

  ngOnInit() {

     this.isLoggedIn = !!this.tokenStorageService.getToken();

     if (this.isLoggedIn) {
       const user = this.tokenStorageService.getUser();
       this.roles = user.roles;
       this.showDeleteButton = this.roles.includes('ROLE_ADMIN');
       this.showUpdateButton = this.roles.includes('ROLE_ADMIN') || this.roles.includes('ROLE_MODERATOR');

     }
     this.reloadData();
  }

  reloadData() {
    this.books = this.bookService.getBookList();
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  bookDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateBook(id: number){
    this.router.navigate(['update', id]);
  }
}
