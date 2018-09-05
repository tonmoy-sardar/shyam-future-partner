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
export class NotificationService {

  constructor(private http: HttpClient) { }

  updateDeviceToken(id, data) {
    return this.http.put(Globals.apiEndpoint + 'partner_device_token/' + id + '/', data)
  }

  getCustomerDeviceToken(customer) {
    return this.http.get(Globals.apiEndpoint + 'customer_device_token/' + customer + '/')
  }

  sendPushNotification(token, value) {
    var data = {
      notification: {
        title: value.title,
        subtitle: value.subtitle,
        text: value.text,
        badge: "1",
        sound: "default",
        showWhenInForeground: true
      },
      content_available: false,
      data: {

      },
      priority: "High",
      to: token
    }
    return this.http.post(Globals.firebase_url, data, {
      headers: new HttpHeaders().set('Authorization', 'key=' + Globals.server_key)
    })
  }

}
