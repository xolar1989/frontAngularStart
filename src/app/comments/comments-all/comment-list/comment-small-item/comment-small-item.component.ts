import {Component, Input, OnInit} from '@angular/core';
import {CommentModel} from "../../../../shared/models/comment.model";

@Component({
  selector: 'app-comment-small-item',
  templateUrl: './comment-small-item.component.html',
  styleUrls: ['./comment-small-item.component.css']
})
export class CommentSmallItemComponent implements OnInit {

  @Input() comment:CommentModel;

  constructor() { }

  ngOnInit(): void {
  }

}
