import {ElementRef, Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {ModalInfo} from "../../shared/modal-info";

@Injectable({
  providedIn: 'root'
})
export class CommentStatePageService {

  addCommentModalIsOpen = false;
  isOpenModal = new BehaviorSubject<boolean>(this.addCommentModalIsOpen);

  isEditMode = new BehaviorSubject<ModalInfo>(null)

  constructor() {
  }

  switchModal() {
    this.addCommentModalIsOpen = !this.addCommentModalIsOpen;
    this.isOpenModal.next(this.addCommentModalIsOpen);
  }

  onOpenModal(modalInfo:ModalInfo) {
    this.isEditMode.next(modalInfo);
    this.switchModal();
  }


}
