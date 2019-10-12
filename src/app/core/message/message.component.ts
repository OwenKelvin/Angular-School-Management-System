import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() type: 'success' | 'error' | 'warning' | 'info';

  constructor() { }

  ngOnInit() {
  }

}
