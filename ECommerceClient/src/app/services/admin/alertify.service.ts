import { Injectable } from '@angular/core';
declare var alertify: any

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message(message: string, messageType: MessageType, position: Position, delay: number, dismissOthers: boolean = false) {
    alertify.set('notifier', 'position', position);
    alertify.set('notifier', 'delay', delay);
    const msg = alertify[messageType](message);
    if (dismissOthers)
      msg.dismissOthers();
  }

  dissmiss() {
    alertify.dismissAll()
  }
}

export enum MessageType {
  Error = "error",
  Success = "success",
  Warning = "warning",
  Notify = "notify",
  Message = "message"
}

export enum Position {
  TopRight = "top-right",
  TopLeft = "top-left",
  TopCenter = "top-center",
  BottomRight = "bottom-right",
  BottomLeft = "bottom-left",
  BottomCenter = "bottom-center"
}
