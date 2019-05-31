import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../../models/message/message';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  firstClick() {
    return console.log('clicked');
  }

  getMessages(): Observable<Message> {
    return this.http.get<Message>('http://alainelemia-001-site1.htempurl.com/api/Messages');
  }
}
