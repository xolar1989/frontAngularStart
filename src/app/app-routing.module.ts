import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./users/users.component";
import {CommentsComponent} from "./comments/comments.component";
import {CommentsAllComponent} from "./comments/comments-all/comments-all.component";
import {CommentFullItemComponent} from "./comments/comment-full-item/comment-full-item.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/comments', pathMatch: 'full'},
  {
    path: 'comments', component: CommentsComponent, children: [
      {path: '', component: CommentsAllComponent},
      {path: ':id', component: CommentFullItemComponent}
    ]
  },
  {path: 'users', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
