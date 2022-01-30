import {Inject, Injectable} from '@angular/core';
import {CommentModel} from "../models/comment.model";
import {API_URL} from "../../app.module";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, map, throwError} from "rxjs";
import {ErrorResponse} from "../error-response.model";
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: UserModel[] = [];


  constructor(
    @Inject(API_URL) private apiUrl: string,
    private http: HttpClient) {
  }

  public usersUpdated = new BehaviorSubject(this.getUsers());

  getUsers() {
    return this.users.slice();
  }

  getUser(index: number) {
    if (isNaN(index) && this.users.length <= index) {
      return null;
    }
    return this.users[index];
  }

  loadUser(users: UserModel[]) {
    this.users = users;
    this.usersUpdated.next(this.getUsers());
  }

  addUsers(user: UserModel) {
    this.users.push(user);
    this.usersUpdated.next(this.getUsers());
  }

  fetchUsers() {
    console.log(this.apiUrl);
    return this.http.get(`${this.apiUrl}/comments`)
      .pipe(catchError(this.handleError), map(response => {
        return response['users'].map(jsonComment => {
          return new CommentModel(
            jsonComment.id,
            jsonComment.value,
            jsonComment.imageUrl,
            jsonComment.createdOn
          )
        })
      }))
  }

  handleError(err: HttpErrorResponse) {

    let errorResult: ErrorResponse = {errorMessage: err.statusText, status: err.status}
    if (err.statusText != null && err.status !== null) {
      return throwError(errorResult);
    }
    return throwError(err);

  }


}
