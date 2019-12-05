import { Component, OnInit } from '@angular/core';
import { IMessage } from 'src/app/shared/services/message/message.service';
import { Store, select } from '@ngrx/store';
import { TOGGLE_DIALOGUE } from 'src/app/store/reducers';

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
    this.store.pipe(select(state => state.app)).subscribe(app => {
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
    this.store.dispatch({
      type: TOGGLE_DIALOGUE,
      payload: false
    });
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
