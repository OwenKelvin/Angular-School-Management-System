import { Component, OnInit } from '@angular/core';
import { IDialogData } from '../error-dialog/error-dialog.component';
import { IMessage } from 'src/app/shared/services/message/message.service';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-error-message-top-bar',
  templateUrl: './error-message-top-bar.component.html',
  styleUrls: ['./error-message-top-bar.component.css']
})
export class ErrorMessageTopBarComponent implements OnInit {

  message: IMessage;
  showMessage: boolean;
  constructor(private store: Store<any>) {
    this.resetMessages();
  }

  ngOnInit() {
    this.showMessage = false;
    this.store.pipe(select(state => state.app)).subscribe(
      app => {
        if (app) {
          if (app.showMessage) {
            this.message = app.showMessage;
            this.openDialog();
          } else {
            this.resetMessages();
          }
        }
      });
  }
  closeDialog() {
    this.resetMessages();
  }
  openDialog() {
    this.showMessage = true;
  }
  resetMessages() {
    this.showMessage = false;
    this.message = {
      message: '',
      type: '',
      help: '',
      status: undefined
    };
  }

}
