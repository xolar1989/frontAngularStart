import {InjectionToken, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {CommentsComponent} from './comments/comments.component';
import {UsersComponent} from './users/users.component';
import {AppRoutingModule} from "./app-routing.module";
import {BurgerDirective} from './header/burger.directive';
import {CommentFullItemComponent} from './comments/comment-full-item/comment-full-item.component';
import {CommentsAllComponent} from './comments/comments-all/comments-all.component';
import {CommentListComponent} from './comments/comments-all/comment-list/comment-list.component';
import {CommentMenuComponent} from './comments/comments-all/comment-menu/comment-menu.component';
import {CommentSearchComponent} from './comments/comments-all/comment-search/comment-search.component';
import {CommentSmallItemComponent} from './comments/comments-all/comment-list/comment-small-item/comment-small-item.component';
import {CommentModalFormComponent} from './comments/modal-form/comment-modal-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import { ErrorConnectingComponent } from './shared/error-connecting/error-connecting.component';


export const API_URL = new InjectionToken<string>('apiUrl')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CommentsComponent,
    UsersComponent,
    BurgerDirective,
    CommentFullItemComponent,
    CommentsAllComponent,
    CommentListComponent,
    CommentMenuComponent,
    CommentSearchComponent,
    CommentSmallItemComponent,
    CommentModalFormComponent,
    ErrorConnectingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: API_URL, useValue: environment.apiUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
