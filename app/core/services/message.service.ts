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

  createChatSessionView(param, data) {
    return this.http.post(Globals.apiEndpoint + 'messages/' + param, data)
  }

  getMessageListByCustomer(thread) {
    return this.http.get(Globals.apiEndpoint + 'messages/' + thread + "/")
  }
  // http://192.168.24.208:8000/chat_members/?user=3&user_type=app_master
  getChatMembersDetails(param){
    return this.http.get(Globals.apiEndpoint + 'chat_members/'+ param)
  }

}
