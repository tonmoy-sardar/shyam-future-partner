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
    CreatedAppService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CreatedAppService);
    return CreatedAppService;
}());
exports.CreatedAppService = CreatedAppService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlZC1hcHAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZWQtYXBwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBSzhCO0FBRzlCLDRDQUE4QztBQUU5QztJQUVFLDJCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQUd6QyxnREFBb0IsR0FBcEIsVUFBcUIsRUFBRTtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUE7SUFDM0UsQ0FBQztJQUVELDJDQUFlLEdBQWY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxDQUFBO0lBQy9ELENBQUM7SUFFRCx5Q0FBYSxHQUFiLFVBQWMsTUFBTSxFQUFFLElBQUk7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcseUJBQXlCLEdBQUcsTUFBTSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUM1RixDQUFDO0lBRUQscURBQXlCLEdBQXpCLFVBQTBCLEVBQUU7UUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsNkJBQTZCLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFBO0lBQ3RGLENBQUM7SUFFRCxpREFBcUIsR0FBckIsVUFBc0IsRUFBRSxFQUFFLElBQUk7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsNkJBQTZCLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUM1RixDQUFDO0lBRUQsaURBQXFCLEdBQXJCLFVBQXNCLElBQUk7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsK0JBQStCLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDcEYsQ0FBQztJQUVELGlEQUFxQixHQUFyQixVQUFzQixFQUFFLEVBQUUsSUFBSTtRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRywrQkFBK0IsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzlGLENBQUM7SUFFRCw2Q0FBaUIsR0FBakIsVUFBa0IsRUFBRTtRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxvQkFBb0IsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUE7SUFDN0UsQ0FBQztJQUVELHlDQUFhLEdBQWIsVUFBYyxFQUFFLEVBQUUsSUFBSTtRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxvQkFBb0IsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ25GLENBQUM7SUFFRCx5Q0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBRUQseUNBQWEsR0FBYixVQUFjLEVBQUUsRUFBRSxJQUFJO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLHNCQUFzQixHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDckYsQ0FBQztJQUVELGtEQUFzQixHQUF0QjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLHdCQUF3QixDQUFDLENBQUE7SUFDdEUsQ0FBQztJQUVELHdDQUFZLEdBQVosVUFBYSxFQUFFO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFBO0lBQzNFLENBQUM7SUFFRCx5Q0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUN0RixDQUFDO0lBRUQsMkNBQWUsR0FBZixVQUFnQixFQUFFO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLHNCQUFzQixHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQTtJQUMvRSxDQUFDO0lBRUQsOENBQWtCLEdBQWxCLFVBQW1CLEVBQUU7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFBO0lBQzdFLENBQUM7SUFHRCx5Q0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNyRixDQUFDO0lBR0QsdUNBQVcsR0FBWCxVQUFZLElBQUk7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxlQUFlLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDbkYsQ0FBQztJQUVELGdEQUFvQixHQUFwQixVQUFxQixJQUFJO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLGdDQUFnQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3JGLENBQUM7SUFFRCxzREFBMEIsR0FBMUIsVUFBMkIsSUFBSTtRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNwRixDQUFDO0lBRUQsdURBQTJCLEdBQTNCLFVBQTRCLElBQUk7UUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDckYsQ0FBQztJQUVELDhDQUFrQixHQUFsQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLDZCQUE2QixDQUFDLENBQUE7SUFDM0UsQ0FBQztJQUVELDZDQUFpQixHQUFqQixVQUFrQixFQUFFO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLG1CQUFtQixHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQTtJQUM1RSxDQUFDO0lBRUQsZ0RBQW9CLEdBQXBCLFVBQXFCLEVBQUUsRUFBRSxJQUFJO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLG1CQUFtQixHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDbEYsQ0FBQztJQUVELHdDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ25FLENBQUM7SUF6R1UsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7eUNBR2UsaUJBQVU7T0FGekIsaUJBQWlCLENBMkc3QjtJQUFELHdCQUFDO0NBQUEsQUEzR0QsSUEyR0M7QUEzR1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgSHR0cENsaWVudCxcclxuICBIdHRwSGVhZGVycyxcclxuICBIdHRwRXJyb3JSZXNwb25zZSxcclxuICBIdHRwUGFyYW1zLFxyXG59IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIHRocm93RXJyb3IgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0ICogYXMgR2xvYmFscyBmcm9tICcuLi8uLi9jb3JlL2dsb2JhbHMnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVkQXBwU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG5cclxuICBnZXRDcmVhdGVkQXBwRGV0YWlscyhpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdhcHBfYWxsX2RldGFpbHMvJyArIGlkICsgJy8nKVxyXG4gIH1cclxuXHJcbiAgZ2V0Q2F0ZWdvcnlMaXN0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2FsbF9jYXRlZ29yaWVzLycpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVBcHBJbmZvKGFwcF9pZCwgZGF0YSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2VkaXRfYXBwbG9nb18mX2FwcG5hbWUvJyArIGFwcF9pZCArICcvJywgZGF0YSlcclxuICB9XHJcblxyXG4gIGdldFByb2R1Y3RDYXRlZ29yeURldGFpbHMoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnZWRpdF9hcHBfcHJvZHVjdHNfY2F0ZWdvcnkvJyArIGlkICsgJy8nKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUHJvZHVjdENhdGVnb3J5KGlkLCBkYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2VkaXRfYXBwX3Byb2R1Y3RzX2NhdGVnb3J5LycgKyBpZCArICcvJywgZGF0YSlcclxuICB9XHJcblxyXG4gIGNyZWF0ZVByb2R1Y3RDYXRlZ29yeShkYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoR2xvYmFscy5hcGlFbmRwb2ludCArICdjcmVhdGVfYXBwX3Byb2R1Y3RzX2NhdGVnb3J5LycsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBkZWxldGVQcm9kdWN0Q2F0ZWdvcnkoaWQsIGRhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnZGVsZXRlX2FwcF9wcm9kdWN0c19jYXRlZ29yeS8nICsgaWQgKyAnLycsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBnZXRQcm9kdWN0RGV0YWlscyhpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdlZGl0X2FwcF9wcm9kdWN0cy8nICsgaWQgKyAnLycpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVQcm9kdWN0KGlkLCBkYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2VkaXRfYXBwX3Byb2R1Y3RzLycgKyBpZCArICcvJywgZGF0YSlcclxuICB9XHJcblxyXG4gIGNyZWF0ZVByb2R1Y3QoZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnY3JlYXRlX2FwcF9wcm9kdWN0cy8nLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgZGVsZXRlUHJvZHVjdChpZCwgZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdkZWxldGVfYXBwX3Byb2R1Y3RzLycgKyBpZCArICcvJywgZGF0YSlcclxuICB9XHJcblxyXG4gIGdldERlc2lnbmF0aW9uRHJvcGRvd24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2Ryb3Bkb3duX2Rlc2lnbmF0aW9ucy8nKVxyXG4gIH1cclxuXHJcbiAgZ2V0T3duZXJJbmZvKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2VkaXRfb3duZXJfaW5mby8nICsgaWQgKyAnLycpXHJcbiAgfVxyXG5cclxuICBlZGl0T3duZXJJbmZvKGRhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnZWRpdF9vd25lcl9pbmZvLycgKyBkYXRhLmlkICsgJy8nLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgZ2V0QXBwT3JkZXJMaXN0KGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2FsbF9vcmRlcl9ieV9hcHBfaWQvJyArIGlkICsgJy8nKVxyXG4gIH1cclxuXHJcbiAgZ2V0QXBwT3JkZXJEZXRhaWxzKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2FsbF9vcmRlcl9kZXRhaWxzLycgKyBpZCArICcvJylcclxuICB9XHJcblxyXG5cclxuICBlZGl0T3duZXJMb2dvKGRhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnZWRpdF9vd25lcmxvZ28vJyArIGRhdGEuaWQgKyAnLycsIGRhdGEpXHJcbiAgfVxyXG5cclxuXHJcbiAgZWRpdEFwcExvZ28oZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdlZGl0X2FwcGxvZ28vJyArIGRhdGEuaWQgKyAnLycsIGRhdGEpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVCdXNpbmVzc0ltYWdlcyhkYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoR2xvYmFscy5hcGlFbmRwb2ludCArICdkZWxldGVfY3JlYXRlX2J1c2luZXNzX2ltYWdlcy8nLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ3VzdG9tZXJPcmRlclBheW1lbnQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdvcmRlcl9wYXltZW50LycgKyBkYXRhLmlkICsgJy8nLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ3VzdG9tZXJPcmRlckRlbGl2ZXJ5KGRhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnb3JkZXJfZGVsaXZlcnkvJyArIGRhdGEuaWQgKyAnLycsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBnZXRTb2NpYWxNZWRpYVR5cGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ3NvY2lhbF9tZWRpYV90eXBlX2Ryb3Bkb3duLycpXHJcbiAgfVxyXG5cclxuICBnZXRBcHBTb2NpYWxNZWRpYShpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdhcHBfc29jaWFsX21lZGlhLycgKyBpZCArICcvJylcclxuICB9XHJcblxyXG4gIHVwZGF0ZUFwcFNvY2lhbE1lZGlhKGlkLCBkYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2FwcF9zb2NpYWxfbWVkaWEvJyArIGlkICsgJy8nLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlTmV3QXBwKGRhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2FkZF9uZXctYXBwLycsIGRhdGEpXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=