import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommentStatePageService} from "./services/comment-state-page.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {

  constructor(public commentStatePage: CommentStatePageService) {
  }

  isOpenModal: boolean = false;

  openModalSubscription: Subscription;

  ngOnInit(): void {

    this.openModalSubscription = this.commentStatePage
      .isOpenModal.subscribe(value => {
        this.isOpenModal = value;
      })
  }

  ngOnDestroy() {
    this.openModalSubscription.unsubscribe();
  }


}
