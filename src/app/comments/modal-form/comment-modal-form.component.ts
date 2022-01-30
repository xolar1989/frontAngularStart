import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommentStatePageService} from "../services/comment-state-page.service";
import {Subscription} from "rxjs";
import {ModalInfo} from "../../shared/modal-info";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-comment-modal-form',
  templateUrl: './comment-modal-form.html',
  styleUrls: ['./comment-modal-form.css']
})
export class CommentModalFormComponent implements OnInit, OnDestroy {

  constructor(public commentStatePage: CommentStatePageService) {
  }

  modalInfo: ModalInfo = null;

  editModeSubscription: Subscription;

  commentForm: FormGroup;

  ngOnInit(): void {
    this.editModeSubscription = this.commentStatePage
      .isEditMode.subscribe(value => {
        this.modalInfo = value;
        console.log(`modal is edit = ${this.modalInfo.isEditMode}`)
      })
    this.commentForm = new FormGroup({
      'text': new FormControl(null),
      'image': new FormControl(null),
      'user': new FormControl(null)
    })

  }

  ngOnDestroy() {
    this.editModeSubscription.unsubscribe();
  }

  onCloseModal() {
    this.commentStatePage.switchModal();
  }


  onSubmit() {
    console.log("submit")
    console.log(this.commentForm.value)
  }
}
