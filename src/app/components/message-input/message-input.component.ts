import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {
  name = new FormControl('');
  constructor() { }

  ngOnInit() {
  }

}
