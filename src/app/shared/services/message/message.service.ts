import { Injectable } from '@angular/core';

export interface IMessage {
  type: string;
  message: string;
  status: number | undefined;
  help: string | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  get(key: string): IMessage {
    switch (key) {
      case 'ERROR':
        return {
          type: 'error',
          message: 'An error occurred while performing the action',
          status: undefined,
          help: undefined
        };
      case 'LOGIN_SUCCESS':
          return {
            type: 'success',
            message: 'You have successfully logged in',
            status: undefined,
            help: undefined
          };
      case 'LOGOUT_SUCCESS':
        return {
          type: 'success',
          message: 'You have successfully logged out',
          status: undefined,
          help: undefined
        };
      default:
          return {
            type: 'success',
            message: 'Item Successfully saved',
            status: undefined,
            help: undefined
          };
    }
  }
}
