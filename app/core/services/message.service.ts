import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";
import { Observable, BehaviorSubject, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import * as Globals from '../../core/globals';

@Injectable()
export class MessageService {

  constructor(private http: HttpClient) { }  

  createChatSessionView(data) {
    return this.http.post(Globals.apiEndpoint + 'chats/', data)
  }

  getMessageListByCustomer(uri) {
    return this.http.get(Globals.apiEndpoint + 'chats/' + uri + '/messages/')
  }

  messageToCustomer(data, uri) {
    return this.http.post(Globals.apiEndpoint + 'chats/' + uri + '/messages/', data)
  }

  getChatMembersDetails(data){
    return this.http.post(Globals.apiEndpoint + 'chat_members_details/', data)
  }

}
