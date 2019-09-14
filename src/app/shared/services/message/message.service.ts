import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

interface IMessage {
  type: string;
  message: string;
}
export class MessageService {

  constructor() { }
  get(key: string): IMessage {
    switch (key) {
      case 'ERROR':
        return {
          type: 'error',
          message: 'An error occurred while performing the action'
        };
      case 'LOGIN_SUCCESS':
          return {
            type: 'success',
            message: 'You have successfully logged in'
          };
      case 'LOGOUT_SUCCESS':
        return {
          type: 'success',
          message: 'You have successfully logged out'
        };
      default:
          return {
            type: 'success',
            message: 'Item Successfully saved'
          };
    }
  }
}
