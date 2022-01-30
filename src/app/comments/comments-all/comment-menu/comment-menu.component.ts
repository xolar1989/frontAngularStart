import {Component, OnInit} from '@angular/core';
import {CommentStatePageService} from "../../services/comment-state-page.service";

@Component({
  selector: 'app-comment-menu',
  templateUrl: './comment-menu.component.html',
  styleUrls: ['./comment-menu.component.css']
})
export class CommentMenuComponent implements OnInit {

  constructor(private commentStatePage: CommentStatePageService) {
  }

  ngOnInit(): void {
  }

  onOpenModal() {
    this.commentStatePage.onOpenModal({isEditMode: false});
  }
}
