import {Inject, Injectable} from '@angular/core';
import {CommentModel} from "../models/comment.model";
import {BehaviorSubject, catchError, map, Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {API_URL} from "../../app.module";
import {ErrorResponse} from "../error-response.model";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  comments: CommentModel[] = [];


  constructor(
    @Inject(API_URL) private apiUrl: string,
    private http: HttpClient) {
  }

  public commentsUpdated = new BehaviorSubject(this.getComments());

  getComments() {
    return this.comments.slice();
  }

  getComment(index: number) {
    if (isNaN(index) && this.comments.length <= index) {
      return null;
    }
    return this.comments[index];
  }

  loadComment(comments: CommentModel[]) {
    this.comments = comments;
    this.commentsUpdated.next(this.getComments());
  }

  addComment(comment: CommentModel) {
    this.comments.push(comment);
    this.commentsUpdated.next(this.getComments());
  }

  fetchComments() : Observable<CommentModel[]>{
    console.log(this.apiUrl);
    return this.http.get(`${this.apiUrl}/comments`)
      .pipe(catchError(this.handleError), map(response => {
        return response['comments'].map(jsonComment => {
          return new CommentModel(
            jsonComment.id,
            jsonComment.value,
            jsonComment.imageUrl,
            jsonComment.createdOn
          )
        })
      }))
  }

  postComment(comment: CommentModel) {
    return this.http.post(`${this.apiUrl}/comments`, comment)
  }

  handleError(err: HttpErrorResponse) {

    let errorResult: ErrorResponse = {errorMessage: err.statusText, status: err.status}
    if (err.statusText != null && err.status !== null) {
      return throwError(errorResult);
    }
    return throwError(err);

  }


}
