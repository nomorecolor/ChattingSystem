import { Component, OnInit } from "@angular/core";
import { DataService } from "../../service/data/data.service";
import { Message } from "../../models/message/message";

@Component({
  selector: "app-message-conversation",
  templateUrl: "./message-conversation.component.html",
  styleUrls: ["./message-conversation.component.scss"]
})
export class MessageConversationComponent implements OnInit {
  messages: Message;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getMessages().subscribe(data => {
      this.messages = data;
      console.log(this.messages);
    });
  }
}
