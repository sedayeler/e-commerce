import { Component } from '@angular/core';
import { AlertifyService, MessageType, Position } from '../../../services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private alertify: AlertifyService) { }

  ngOnInit(): void {

  }

  m() {
    this.alertify.message("Selam", MessageType.Notify, Position.TopRight, 10, true)
  }

  d() {
    this.alertify.dissmiss()
  }
}
