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
    CreatedAppService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CreatedAppService);
    return CreatedAppService;
}());
exports.CreatedAppService = CreatedAppService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlZC1hcHAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZWQtYXBwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBSzhCO0FBRzlCLDRDQUE4QztBQUU5QztJQUVFLDJCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQUV6QyxnREFBb0IsR0FBcEIsVUFBcUIsRUFBRTtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUE7SUFDM0UsQ0FBQztJQUVELHlDQUFhLEdBQWIsVUFBYyxNQUFNLEVBQUUsSUFBSTtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyx5QkFBeUIsR0FBRyxNQUFNLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzVGLENBQUM7SUFFRCxxREFBeUIsR0FBekIsVUFBMEIsRUFBRTtRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyw2QkFBNkIsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUE7SUFDdEYsQ0FBQztJQUVELGlEQUFxQixHQUFyQixVQUFzQixFQUFFLEVBQUUsSUFBSTtRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyw2QkFBNkIsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzVGLENBQUM7SUFFRCxpREFBcUIsR0FBckIsVUFBc0IsSUFBSTtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJ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RUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNuRixDQUFDO0lBRUQsZ0RBQW9CLEdBQXBCLFVBQXFCLElBQUk7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsZ0NBQWdDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDckYsQ0FBQztJQUVELHNEQUEwQixHQUExQixVQUEyQixJQUFJO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLGdCQUFnQixHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3BGLENBQUM7SUFFRCx1REFBMkIsR0FBM0IsVUFBNEIsSUFBSTtRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNyRixDQUFDO0lBcEZVLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFO3lDQUdlLGlCQUFVO09BRnpCLGlCQUFpQixDQXNGN0I7SUFBRCx3QkFBQztDQUFBLEFBdEZELElBc0ZDO0FBdEZZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIEh0dHBDbGllbnQsXHJcbiAgSHR0cEhlYWRlcnMsXHJcbiAgSHR0cEVycm9yUmVzcG9uc2UsXHJcbiAgSHR0cFBhcmFtcyxcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCB0aHJvd0Vycm9yIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCAqIGFzIEdsb2JhbHMgZnJvbSAnLi4vLi4vY29yZS9nbG9iYWxzJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlZEFwcFNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICBnZXRDcmVhdGVkQXBwRGV0YWlscyhpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdhcHBfYWxsX2RldGFpbHMvJyArIGlkICsgJy8nKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQXBwSW5mbyhhcHBfaWQsIGRhdGEpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdlZGl0X2FwcGxvZ29fJl9hcHBuYW1lLycgKyBhcHBfaWQgKyAnLycsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBnZXRQcm9kdWN0Q2F0ZWdvcnlEZXRhaWxzKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2VkaXRfYXBwX3Byb2R1Y3RzX2NhdGVnb3J5LycgKyBpZCArICcvJylcclxuICB9XHJcblxyXG4gIHVwZGF0ZVByb2R1Y3RDYXRlZ29yeShpZCwgZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdlZGl0X2FwcF9wcm9kdWN0c19jYXRlZ29yeS8nICsgaWQgKyAnLycsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVQcm9kdWN0Q2F0ZWdvcnkoZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnY3JlYXRlX2FwcF9wcm9kdWN0c19jYXRlZ29yeS8nLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgZGVsZXRlUHJvZHVjdENhdGVnb3J5KGlkLCBkYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2RlbGV0ZV9hcHBfcHJvZHVjdHNfY2F0ZWdvcnkvJyArIGlkICsgJy8nLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgZ2V0UHJvZHVjdERldGFpbHMoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnZWRpdF9hcHBfcHJvZHVjdHMvJyArIGlkICsgJy8nKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUHJvZHVjdChpZCwgZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdlZGl0X2FwcF9wcm9kdWN0cy8nICsgaWQgKyAnLycsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVQcm9kdWN0KGRhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2NyZWF0ZV9hcHBfcHJvZHVjdHMvJywgZGF0YSlcclxuICB9XHJcblxyXG4gIGRlbGV0ZVByb2R1Y3QoaWQsIGRhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnZGVsZXRlX2FwcF9wcm9kdWN0cy8nICsgaWQgKyAnLycsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBnZXREZXNpZ25hdGlvbkRyb3Bkb3duKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdkcm9wZG93bl9kZXNpZ25hdGlvbnMvJylcclxuICB9XHJcblxyXG4gIGdldE93bmVySW5mbyhpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdlZGl0X293bmVyX2luZm8vJyArIGlkICsgJy8nKVxyXG4gIH1cclxuXHJcbiAgZWRpdE93bmVySW5mbyhkYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2VkaXRfb3duZXJfaW5mby8nICsgZGF0YS5pZCArICcvJywgZGF0YSlcclxuICB9XHJcblxyXG4gIGdldEFwcE9yZGVyTGlzdChpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdhbGxfb3JkZXJfYnlfYXBwX2lkLycgKyBpZCArICcvJylcclxuICB9XHJcblxyXG4gIGdldEFwcE9yZGVyRGV0YWlscyhpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdhbGxfb3JkZXJfZGV0YWlscy8nICsgaWQgKyAnLycpXHJcbiAgfVxyXG5cclxuXHJcbiAgZWRpdE93bmVyTG9nbyhkYXRhKXtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnZWRpdF9vd25lcmxvZ28vJyArIGRhdGEuaWQgKyAnLycsIGRhdGEpXHJcbiAgfVxyXG5cclxuXHJcbiAgZWRpdEFwcExvZ28oZGF0YSl7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2VkaXRfYXBwbG9nby8nICsgZGF0YS5pZCArICcvJywgZGF0YSlcclxuICB9XHJcblxyXG4gIHVwZGF0ZUJ1c2luZXNzSW1hZ2VzKGRhdGEpe1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnZGVsZXRlX2NyZWF0ZV9idXNpbmVzc19pbWFnZXMvJywgZGF0YSlcclxuICB9XHJcblxyXG4gIHVwZGF0ZUN1c3RvbWVyT3JkZXJQYXltZW50KGRhdGEpe1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdvcmRlcl9wYXltZW50LycgKyBkYXRhLmlkICsgJy8nLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ3VzdG9tZXJPcmRlckRlbGl2ZXJ5KGRhdGEpe1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdvcmRlcl9kZWxpdmVyeS8nICsgZGF0YS5pZCArICcvJywgZGF0YSlcclxuICB9XHJcblxyXG59XHJcbiJdfQ==