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
    CreatedAppService.prototype.getProductDetails = function (id) {
        return this.http.get(Globals.apiEndpoint + 'edit_app_products/' + id + '/');
    };
    CreatedAppService.prototype.updateProduct = function (id, data) {
        return this.http.put(Globals.apiEndpoint + 'edit_app_products/' + id + '/', data);
    };
    CreatedAppService.prototype.createProduct = function (data) {
        return this.http.post(Globals.apiEndpoint + 'create_app_products/', data);
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
    CreatedAppService.prototype.editOwnerLogo = function (data) {
        return this.http.put(Globals.apiEndpoint + 'edit_ownerlogo/' + data.id + '/', data);
    };
    CreatedAppService.prototype.updateBusinessImages = function (data) {
        return this.http.put(Globals.apiEndpoint + 'update_business_images/' + data.id + '/', data);
    };
    CreatedAppService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CreatedAppService);
    return CreatedAppService;
}());
exports.CreatedAppService = CreatedAppService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlZC1hcHAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZWQtYXBwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBSzhCO0FBRzlCLDRDQUE4QztBQUU5QztJQUVFLDJCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQUV6QyxnREFBb0IsR0FBcEIsVUFBcUIsRUFBRTtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUE7SUFDM0UsQ0FBQztJQUVELHlDQUFhLEdBQWIsVUFBYyxNQUFNLEVBQUUsSUFBSTtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyx5QkFBeUIsR0FBRyxNQUFNLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzVGLENBQUM7SUFFRCxxREFBeUIsR0FBekIsVUFBMEIsRUFBRTtRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyw2QkFBNkIsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUE7SUFDdEYsQ0FBQztJQUVELGlEQUFxQixHQUFyQixVQUFzQixFQUFFLEVBQUUsSUFBSTtRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyw2QkFBNkIsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzVGLENBQUM7SUFFRCxpREFBcUIsR0FBckIsVUFBc0IsSUFBSTtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRywrQkFBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNwRixDQUFDO0lBRUQsNkNBQWlCLEdBQWpCLFVBQWtCLEVBQUU7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFBO0lBQzdFLENBQUM7SUFFRCx5Q0FBYSxHQUFiLFVBQWMsRUFBRSxFQUFFLElBQUk7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNuRixDQUFDO0lBRUQseUNBQWEsR0FBYixVQUFjLElBQUk7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDM0UsQ0FBQztJQUVELGtEQUFzQixHQUF0QjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLHdCQUF3QixDQUFDLENBQUE7SUFDdEUsQ0FBQztJQUVELHdDQUFZLEdBQVosVUFBYSxFQUFFO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFBO0lBQzNFLENBQUM7SUFFRCx5Q0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUN0RixDQUFDO0lBRUQsMkNBQWUsR0FBZixVQUFnQixFQUFFO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLHNCQUFzQixHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQTtJQUMvRSxDQUFDO0lBR0QseUNBQWEsR0FBYixVQUFjLElBQUk7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDckYsQ0FBQztJQUdELGdEQUFvQixHQUFwQixVQUFxQixJQUFJO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLHlCQUF5QixHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzdGLENBQUM7SUE1RFUsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7eUNBR2UsaUJBQVU7T0FGekIsaUJBQWlCLENBOEQ3QjtJQUFELHdCQUFDO0NBQUEsQUE5REQsSUE4REM7QUE5RFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgSHR0cENsaWVudCxcclxuICBIdHRwSGVhZGVycyxcclxuICBIdHRwRXJyb3JSZXNwb25zZSxcclxuICBIdHRwUGFyYW1zLFxyXG59IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIHRocm93RXJyb3IgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0ICogYXMgR2xvYmFscyBmcm9tICcuLi8uLi9jb3JlL2dsb2JhbHMnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVkQXBwU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIGdldENyZWF0ZWRBcHBEZXRhaWxzKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2FwcF9hbGxfZGV0YWlscy8nICsgaWQgKyAnLycpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVBcHBJbmZvKGFwcF9pZCwgZGF0YSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2VkaXRfYXBwbG9nb18mX2FwcG5hbWUvJyArIGFwcF9pZCArICcvJywgZGF0YSlcclxuICB9XHJcblxyXG4gIGdldFByb2R1Y3RDYXRlZ29yeURldGFpbHMoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnZWRpdF9hcHBfcHJvZHVjdHNfY2F0ZWdvcnkvJyArIGlkICsgJy8nKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUHJvZHVjdENhdGVnb3J5KGlkLCBkYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2VkaXRfYXBwX3Byb2R1Y3RzX2NhdGVnb3J5LycgKyBpZCArICcvJywgZGF0YSlcclxuICB9XHJcblxyXG4gIGNyZWF0ZVByb2R1Y3RDYXRlZ29yeShkYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoR2xvYmFscy5hcGlFbmRwb2ludCArICdjcmVhdGVfYXBwX3Byb2R1Y3RzX2NhdGVnb3J5LycsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBnZXRQcm9kdWN0RGV0YWlscyhpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdlZGl0X2FwcF9wcm9kdWN0cy8nICsgaWQgKyAnLycpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVQcm9kdWN0KGlkLCBkYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2VkaXRfYXBwX3Byb2R1Y3RzLycgKyBpZCArICcvJywgZGF0YSlcclxuICB9XHJcblxyXG4gIGNyZWF0ZVByb2R1Y3QoZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnY3JlYXRlX2FwcF9wcm9kdWN0cy8nLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgZ2V0RGVzaWduYXRpb25Ecm9wZG93bigpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnZHJvcGRvd25fZGVzaWduYXRpb25zLycpXHJcbiAgfVxyXG5cclxuICBnZXRPd25lckluZm8oaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnZWRpdF9vd25lcl9pbmZvLycgKyBpZCArICcvJylcclxuICB9XHJcblxyXG4gIGVkaXRPd25lckluZm8oZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdlZGl0X293bmVyX2luZm8vJyArIGRhdGEuaWQgKyAnLycsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBnZXRBcHBPcmRlckxpc3QoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnYWxsX29yZGVyX2J5X2FwcF9pZC8nICsgaWQgKyAnLycpXHJcbiAgfVxyXG5cclxuXHJcbiAgZWRpdE93bmVyTG9nbyhkYXRhKXtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnZWRpdF9vd25lcmxvZ28vJyArIGRhdGEuaWQgKyAnLycsIGRhdGEpXHJcbiAgfVxyXG5cclxuXHJcbiAgdXBkYXRlQnVzaW5lc3NJbWFnZXMoZGF0YSl7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ3VwZGF0ZV9idXNpbmVzc19pbWFnZXMvJyArIGRhdGEuaWQgKyAnLycsIGRhdGEpXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=