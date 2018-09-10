"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Globals = require("../../core/globals");
var CreatedAppService = /** @class */ (function () {
    function CreatedAppService(http) {
        this.http = http;
    }
    CreatedAppService.prototype.getCreatedAppDetails = function (id) {
        return this.http.get(Globals.apiEndpoint + 'app_all_details/' + id + '/');
    };
    CreatedAppService.prototype.getCategoryList = function () {
        return this.http.get(Globals.apiEndpoint + 'all_categories/');
    };
    CreatedAppService.prototype.updateAppInfo = function (app_id, data) {
        return this.http.put(Globals.apiEndpoint + 'edit_applogo_&_appname/' + app_id + '/', data);
    };
    CreatedAppService.prototype.getProductCategoryDetails = function (id) {
        return this.http.get(Globals.apiEndpoint + 'edit_app_products_category/' + id + '/');
    };
    CreatedAppService.prototype.updateProductCategory = function (id, data) {
        return this.http.put(Globals.apiEndpoint + 'edit_app_products_category/' + id + '/', data);
    };
    CreatedAppService.prototype.createProductCategory = function (data) {
        return this.http.post(Globals.apiEndpoint + 'create_app_products_category/', data);
    };
    CreatedAppService.prototype.deleteProductCategory = function (id, data) {
        return this.http.put(Globals.apiEndpoint + 'delete_app_products_category/' + id + '/', data);
    };
    CreatedAppService.prototype.getProductDetails = function (id) {
        return this.http.get(Globals.apiEndpoint + 'edit_app_products/' + id + '/');
    };
    CreatedAppService.prototype.updateProduct = function (id, data) {
        return this.http.put(Globals.apiEndpoint + 'edit_app_products/' + id + '/', data);
    };
    CreatedAppService.prototype.createProduct = function (data) {
        return this.http.post(Globals.apiEndpoint + 'create_app_products/', data);
    };
    CreatedAppService.prototype.deleteProduct = function (id, data) {
        return this.http.put(Globals.apiEndpoint + 'delete_app_products/' + id + '/', data);
    };
    CreatedAppService.prototype.getDesignationDropdown = function () {
        return this.http.get(Globals.apiEndpoint + 'dropdown_designations/');
    };
    CreatedAppService.prototype.getOwnerInfo = function (id) {
        return this.http.get(Globals.apiEndpoint + 'edit_owner_info/' + id + '/');
    };
    CreatedAppService.prototype.editOwnerInfo = function (data) {
        return this.http.put(Globals.apiEndpoint + 'edit_owner_info/' + data.id + '/', data);
    };
    CreatedAppService.prototype.getAppOrderList = function (id) {
        return this.http.get(Globals.apiEndpoint + 'all_order_by_app_id/' + id + '/');
    };
    CreatedAppService.prototype.getAppOrderDetails = function (id) {
        return this.http.get(Globals.apiEndpoint + 'all_order_details/' + id + '/');
    };
    CreatedAppService.prototype.editOwnerLogo = function (data) {
        return this.http.put(Globals.apiEndpoint + 'edit_ownerlogo/' + data.id + '/', data);
    };
    CreatedAppService.prototype.editAppLogo = function (data) {
        return this.http.put(Globals.apiEndpoint + 'edit_applogo/' + data.id + '/', data);
    };
    CreatedAppService.prototype.updateBusinessImages = function (data) {
        return this.http.post(Globals.apiEndpoint + 'delete_create_business_images/', data);
    };
    CreatedAppService.prototype.updateCustomerOrderPayment = function (data) {
        return this.http.put(Globals.apiEndpoint + 'order_payment/' + data.id + '/', data);
    };
    CreatedAppService.prototype.updateCustomerOrderDelivery = function (data) {
        return this.http.put(Globals.apiEndpoint + 'order_delivery/' + data.id + '/', data);
    };
    CreatedAppService.prototype.getSocialMediaType = function () {
        return this.http.get(Globals.apiEndpoint + 'social_media_type_dropdown/');
    };
    CreatedAppService.prototype.getAppSocialMedia = function (id) {
        return this.http.get(Globals.apiEndpoint + 'app_social_media/' + id + '/');
    };
    CreatedAppService.prototype.updateAppSocialMedia = function (id, data) {
        return this.http.put(Globals.apiEndpoint + 'app_social_media/' + id + '/', data);
    };
    CreatedAppService.prototype.createNewApp = function (data) {
        return this.http.post(Globals.apiEndpoint + 'add_new-app/', data);
    };
    CreatedAppService.prototype.getPriceList = function () {
        return this.http.get(Globals.apiEndpoint + 'dropdown_price_master/');
    };
    CreatedAppService.prototype.getSubscriptionTypeList = function () {
        return this.http.get(Globals.apiEndpoint + 'dropdown_subscriptions_type/');
    };
    CreatedAppService.prototype.getOfferList = function () {
        return this.http.get(Globals.apiEndpoint + 'dropdown_offer_code/');
    };
    CreatedAppService.prototype.paytmFormValue = function (app_id, order_amount) {
        return this.http.get(Globals.apiEndpoint + 'get_payment_details/?app_id=' + app_id + '&order_amount=' + order_amount + '&type=app');
    };
    CreatedAppService.prototype.appSubscription = function (data) {
        return this.http.post(Globals.apiEndpoint + 'app_subscription/', data);
    };
    CreatedAppService.prototype.customerOrderSeen = function (id) {
        return this.http.put(Globals.apiEndpoint + 'order_seen_activity/' + id + '/', {});
    };
    CreatedAppService.prototype.getOrderSeenActivity = function (id) {
        return this.http.get(Globals.apiEndpoint + 'order_seen_activity_count/' + id + '/');
    };
    CreatedAppService.prototype.updateAppSubscription = function (id, data) {
        return this.http.put(Globals.apiEndpoint + 'app_subscription/' + id + '/', data);
    };
    CreatedAppService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CreatedAppService);
    return CreatedAppService;
}());
exports.CreatedAppService = CreatedAppService;
var RadioOption = /** @class */ (function () {
    function RadioOption(text, id) {
        this.selected = false;
        this.text = text;
        this.id = id;
    }
    return RadioOption;
}());
exports.RadioOption = RadioOption;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlZC1hcHAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZWQtYXBwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBSzhCO0FBRzlCLDRDQUE4QztBQUU5QztJQUVFLDJCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQUd6QyxnREFBb0IsR0FBcEIsVUFBcUIsRUFBRTtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUE7SUFDM0UsQ0FBQztJQUVELDJDQUFlLEdBQWY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxDQUFBO0lBQy9ELENBQUM7SUFFRCx5Q0FBYSxHQUFiLFVBQWMsTUFBTSxFQUFFLElBQUk7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcseUJBQXlCLEdBQUcsTUFBTSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUM1RixDQUFDO0lBRUQscURBQXlCLEdBQXpCLFVBQTBCLEVBQUU7UUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsNkJBQTZCLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFBO0lBQ3RGLENBQUM7SUFFRCxpREFBcUIsR0FBckIsVUFBc0IsRUFBRSxFQUFFLElBQUk7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsNkJBQTZCLEdBQUcsRUFBRSxH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QUFFO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLHNCQUFzQixHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDbkYsQ0FBQztJQUVELGdEQUFvQixHQUFwQixVQUFxQixFQUFFO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLDRCQUE0QixHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQTtJQUNyRixDQUFDO0lBRUYsaURBQXFCLEdBQXJCLFVBQXNCLEVBQUUsRUFBQyxJQUFJO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLG1CQUFtQixHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDbEYsQ0FBQztJQXpJVSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTt5Q0FHZSxpQkFBVTtPQUZ6QixpQkFBaUIsQ0EySTdCO0lBQUQsd0JBQUM7Q0FBQSxBQTNJRCxJQTJJQztBQTNJWSw4Q0FBaUI7QUE4STlCO0lBS0UscUJBQVksSUFBWSxFQUFFLEVBQVU7UUFGcEMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUd4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBIdHRwQ2xpZW50LFxyXG4gIEh0dHBIZWFkZXJzLFxyXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxyXG4gIEh0dHBQYXJhbXMsXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgdGhyb3dFcnJvciB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgKiBhcyBHbG9iYWxzIGZyb20gJy4uLy4uL2NvcmUvZ2xvYmFscyc7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENyZWF0ZWRBcHBTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcblxyXG4gIGdldENyZWF0ZWRBcHBEZXRhaWxzKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2FwcF9hbGxfZGV0YWlscy8nICsgaWQgKyAnLycpXHJcbiAgfVxyXG5cclxuICBnZXRDYXRlZ29yeUxpc3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnYWxsX2NhdGVnb3JpZXMvJylcclxuICB9XHJcblxyXG4gIHVwZGF0ZUFwcEluZm8oYXBwX2lkLCBkYXRhKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnZWRpdF9hcHBsb2dvXyZfYXBwbmFtZS8nICsgYXBwX2lkICsgJy8nLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgZ2V0UHJvZHVjdENhdGVnb3J5RGV0YWlscyhpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdlZGl0X2FwcF9wcm9kdWN0c19jYXRlZ29yeS8nICsgaWQgKyAnLycpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVQcm9kdWN0Q2F0ZWdvcnkoaWQsIGRhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnZWRpdF9hcHBfcHJvZHVjdHNfY2F0ZWdvcnkvJyArIGlkICsgJy8nLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlUHJvZHVjdENhdGVnb3J5KGRhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2NyZWF0ZV9hcHBfcHJvZHVjdHNfY2F0ZWdvcnkvJywgZGF0YSlcclxuICB9XHJcblxyXG4gIGRlbGV0ZVByb2R1Y3RDYXRlZ29yeShpZCwgZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdkZWxldGVfYXBwX3Byb2R1Y3RzX2NhdGVnb3J5LycgKyBpZCArICcvJywgZGF0YSlcclxuICB9XHJcblxyXG4gIGdldFByb2R1Y3REZXRhaWxzKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2VkaXRfYXBwX3Byb2R1Y3RzLycgKyBpZCArICcvJylcclxuICB9XHJcblxyXG4gIHVwZGF0ZVByb2R1Y3QoaWQsIGRhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnZWRpdF9hcHBfcHJvZHVjdHMvJyArIGlkICsgJy8nLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlUHJvZHVjdChkYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoR2xvYmFscy5hcGlFbmRwb2ludCArICdjcmVhdGVfYXBwX3Byb2R1Y3RzLycsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBkZWxldGVQcm9kdWN0KGlkLCBkYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2RlbGV0ZV9hcHBfcHJvZHVjdHMvJyArIGlkICsgJy8nLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgZ2V0RGVzaWduYXRpb25Ecm9wZG93bigpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnZHJvcGRvd25fZGVzaWduYXRpb25zLycpXHJcbiAgfVxyXG5cclxuICBnZXRPd25lckluZm8oaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnZWRpdF9vd25lcl9pbmZvLycgKyBpZCArICcvJylcclxuICB9XHJcblxyXG4gIGVkaXRPd25lckluZm8oZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdlZGl0X293bmVyX2luZm8vJyArIGRhdGEuaWQgKyAnLycsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBnZXRBcHBPcmRlckxpc3QoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnYWxsX29yZGVyX2J5X2FwcF9pZC8nICsgaWQgKyAnLycpXHJcbiAgfVxyXG5cclxuICBnZXRBcHBPcmRlckRldGFpbHMoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnYWxsX29yZGVyX2RldGFpbHMvJyArIGlkICsgJy8nKVxyXG4gIH1cclxuXHJcblxyXG4gIGVkaXRPd25lckxvZ28oZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdlZGl0X293bmVybG9nby8nICsgZGF0YS5pZCArICcvJywgZGF0YSlcclxuICB9XHJcblxyXG5cclxuICBlZGl0QXBwTG9nbyhkYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2VkaXRfYXBwbG9nby8nICsgZGF0YS5pZCArICcvJywgZGF0YSlcclxuICB9XHJcblxyXG4gIHVwZGF0ZUJ1c2luZXNzSW1hZ2VzKGRhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2RlbGV0ZV9jcmVhdGVfYnVzaW5lc3NfaW1hZ2VzLycsIGRhdGEpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVDdXN0b21lck9yZGVyUGF5bWVudChkYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ29yZGVyX3BheW1lbnQvJyArIGRhdGEuaWQgKyAnLycsIGRhdGEpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVDdXN0b21lck9yZGVyRGVsaXZlcnkoZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdvcmRlcl9kZWxpdmVyeS8nICsgZGF0YS5pZCArICcvJywgZGF0YSlcclxuICB9XHJcblxyXG4gIGdldFNvY2lhbE1lZGlhVHlwZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnc29jaWFsX21lZGlhX3R5cGVfZHJvcGRvd24vJylcclxuICB9XHJcblxyXG4gIGdldEFwcFNvY2lhbE1lZGlhKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2FwcF9zb2NpYWxfbWVkaWEvJyArIGlkICsgJy8nKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQXBwU29jaWFsTWVkaWEoaWQsIGRhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnYXBwX3NvY2lhbF9tZWRpYS8nICsgaWQgKyAnLycsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVOZXdBcHAoZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnYWRkX25ldy1hcHAvJywgZGF0YSlcclxuICB9XHJcblxyXG4gIGdldFByaWNlTGlzdCgpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnZHJvcGRvd25fcHJpY2VfbWFzdGVyLycpXHJcbiAgfVxyXG5cclxuICBnZXRTdWJzY3JpcHRpb25UeXBlTGlzdCgpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnZHJvcGRvd25fc3Vic2NyaXB0aW9uc190eXBlLycpXHJcbiAgfVxyXG5cclxuICBnZXRPZmZlckxpc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2Ryb3Bkb3duX29mZmVyX2NvZGUvJylcclxuICB9XHJcblxyXG4gIHBheXRtRm9ybVZhbHVlKGFwcF9pZCxvcmRlcl9hbW91bnQpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdnZXRfcGF5bWVudF9kZXRhaWxzLz9hcHBfaWQ9JythcHBfaWQrJyZvcmRlcl9hbW91bnQ9JyArIG9yZGVyX2Ftb3VudCsnJnR5cGU9YXBwJylcclxuICB9XHJcblxyXG4gIGFwcFN1YnNjcmlwdGlvbihkYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoR2xvYmFscy5hcGlFbmRwb2ludCArICdhcHBfc3Vic2NyaXB0aW9uLycsIGRhdGEpXHJcbiAgfVxyXG4gIFxyXG4gIGN1c3RvbWVyT3JkZXJTZWVuKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ29yZGVyX3NlZW5fYWN0aXZpdHkvJyArIGlkICsgJy8nLCB7fSlcclxuICB9XHJcblxyXG4gIGdldE9yZGVyU2VlbkFjdGl2aXR5KGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ29yZGVyX3NlZW5fYWN0aXZpdHlfY291bnQvJyArIGlkICsgJy8nKVxyXG4gIH1cclxuXHJcbiB1cGRhdGVBcHBTdWJzY3JpcHRpb24oaWQsZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdhcHBfc3Vic2NyaXB0aW9uLycgKyBpZCArICcvJywgZGF0YSlcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJhZGlvT3B0aW9uIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcsIGlkOiBudW1iZXIpIHtcclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==