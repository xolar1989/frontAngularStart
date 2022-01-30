import { Component, OnInit } from '@angular/core';
import {CommentsService} from "../../shared/services/comments.service";

@Component({
  selector: 'app-comments-all',
  templateUrl: './comments-all.component.html',
  styleUrls: ['./comments-all.component.css']
})
export class CommentsAllComponent implements OnInit {

  constructor(private commentsService:CommentsService) { }



  ngOnInit(): void {
  }

}
