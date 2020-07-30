import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {BookDetailsComponent} from "./components/book-details/book-details.component";
import {UpdateBookComponent} from "./components/update-book/update-book.component";
import {CreateBookComponent} from "./components/create-book/create-book.component";
import {ShopComponent} from "./shop/shop.component";
import {BlogComponent} from "./blog/blog.component";
import {ContactComponent} from "./contact/contact.component";
import {BlogDetailsComponent} from "./blog-details/blog-details.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog-details', component: BlogDetailsComponent},
  { path: '**', component: NotFoundComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
