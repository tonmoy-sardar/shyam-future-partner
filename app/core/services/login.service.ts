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
export class LoginService {

  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    return this.http.post(Globals.apiEndpoint + 'login/', data)
  }

  signup(data): Observable<any> {
    return this.http.post(Globals.apiEndpoint + 'customer_registration/', data)
  }
}
