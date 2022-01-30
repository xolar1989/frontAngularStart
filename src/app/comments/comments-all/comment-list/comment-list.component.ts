import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommentsService} from "../../../shared/services/comments.service";
import {CommentModel} from "../../../shared/models/comment.model";
import {Subscription} from "rxjs";
import {ErrorResponse} from "../../../shared/error-response.model";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit, OnDestroy {

  constructor(private commentsService: CommentsService) {
  }

  comments: CommentModel[] = [];

  commentsUpdatedSubscription: Subscription;

  isLoading = true;

  errorMessage: ErrorResponse = null;

  ngOnInit(): void {
    this.commentsService.fetchComments().subscribe(
      dataResponse => {
        console.log(dataResponse)
        this.isLoading = false;
        this.commentsService.loadComment(dataResponse);
      }, error => {
        console.log(error);
        this.isLoading = false;
        this.errorMessage = error;
      })
    this.commentsUpdatedSubscription = this.commentsService
      .commentsUpdated.subscribe(comments => {
        console.log(comments)
        this.comments = comments;
        console.log("jebac sad");
        console.log(this.comments);
      })

  }

  ngOnDestroy() {
    this.commentsUpdatedSubscription.unsubscribe();
  }

}
