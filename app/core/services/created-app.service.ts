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
export class CreatedAppService {

  constructor(private http: HttpClient) { }

  getCreatedAppDetails(id) {
    return this.http.get(Globals.apiEndpoint + 'app_all_details/' + id + '/')
  }

  updateAppInfo(app_id, data): Observable<any> {
    return this.http.put(Globals.apiEndpoint + 'edit_applogo_&_appname/' + app_id + '/', data)
  }

  getProductCategoryDetails(id) {
    return this.http.get(Globals.apiEndpoint + 'edit_app_products_category/' + id + '/')
  }

  updateProductCategory(id, data) {
    return this.http.put(Globals.apiEndpoint + 'edit_app_products_category/' + id + '/', data)
  }

  createProductCategory(data) {
    return this.http.post(Globals.apiEndpoint + 'create_app_products_category/', data)
  }

  getProductDetails(id) {
    return this.http.get(Globals.apiEndpoint + 'edit_app_products/' + id + '/')
  }

  updateProduct(id, data) {
    return this.http.put(Globals.apiEndpoint + 'edit_app_products/' + id + '/', data)
  }

  createProduct(data) {
    return this.http.post(Globals.apiEndpoint + 'create_app_products/', data)
  }

  getDesignationDropdown() {
    return this.http.get(Globals.apiEndpoint + 'dropdown_designations/')
  }

  getOwnerInfo(id) {
    return this.http.get(Globals.apiEndpoint + 'edit_owner_info/' + id + '/')
  }

  editOwnerInfo(data) {
    return this.http.put(Globals.apiEndpoint + 'edit_owner_info/' + data.id + '/', data)
  }

  getAppOrderList(id) {
    return this.http.get(Globals.apiEndpoint + 'all_order_by_app_id/' + id + '/')
  }

}
