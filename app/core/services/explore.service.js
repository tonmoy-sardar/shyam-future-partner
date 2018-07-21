"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Globals = require("../../core/globals");
var ExploreService = /** @class */ (function () {
    function ExploreService(http) {
        this.http = http;
    }
    ExploreService.prototype.getCategoryList = function () {
        return this.http.get(Globals.apiEndpoint + 'all_categories/');
    };
    ExploreService.prototype.getMostViewAppList = function () {
        return this.http.get(Globals.apiEndpoint + 'most_viewed_app/');
    };
    ExploreService.prototype.getAllAppList = function (params) {
        return this.http.get(Globals.apiEndpoint + 'search_app/' + params);
    };
    ExploreService.prototype.getUserDashboardAppList = function (id) {
        return this.http.get(Globals.apiEndpoint + 'customer_dashbord/' + id + '/');
    };
    ExploreService.prototype.getAppAndUserDetailsByUserID = function (id) {
        return this.http.get(Globals.apiEndpoint + 'app_and_user_details/' + id + '/');
    };
    ExploreService.prototype.appAttachAndDisattachToDashboard = function (data) {
        return this.http.post(Globals.apiEndpoint + 'mapping_app_and_customer/', data);
    };
    ExploreService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ExploreService);
    return ExploreService;
}());
exports.ExploreService = ExploreService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwbG9yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwbG9yZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUs4QjtBQUc5Qiw0Q0FBOEM7QUFHOUM7SUFFRSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFekMsd0NBQWUsR0FBZjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDLENBQUE7SUFDL0QsQ0FBQztJQUVELDJDQUFrQixHQUFsQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLGtCQUFrQixDQUFDLENBQUE7SUFDaEUsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxNQUFNO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLGFBQWEsR0FBRyxNQUFNLENBQUMsQ0FBQTtJQUNwRSxDQUFDO0lBRUQsZ0RBQXVCLEdBQXZCLFVBQXdCLEVBQUU7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFBO0lBQzdFLENBQUM7SUFFRCxxREFBNEIsR0FBNUIsVUFBNkIsRUFBRTtRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyx1QkFBdUIsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUE7SUFDaEYsQ0FBQztJQUVELHlEQUFnQyxHQUFoQyxVQUFpQyxJQUFJO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLDJCQUEyQixFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ2hGLENBQUM7SUExQlUsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQUdlLGlCQUFVO09BRnpCLGNBQWMsQ0E0QjFCO0lBQUQscUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIEh0dHBDbGllbnQsXHJcbiAgSHR0cEhlYWRlcnMsXHJcbiAgSHR0cEVycm9yUmVzcG9uc2UsXHJcbiAgSHR0cFBhcmFtcyxcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCB0aHJvd0Vycm9yIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCAqIGFzIEdsb2JhbHMgZnJvbSAnLi4vLi4vY29yZS9nbG9iYWxzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEV4cGxvcmVTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgZ2V0Q2F0ZWdvcnlMaXN0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2FsbF9jYXRlZ29yaWVzLycpXHJcbiAgfVxyXG5cclxuICBnZXRNb3N0Vmlld0FwcExpc3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnbW9zdF92aWV3ZWRfYXBwLycpXHJcbiAgfVxyXG5cclxuICBnZXRBbGxBcHBMaXN0KHBhcmFtcyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ3NlYXJjaF9hcHAvJyArIHBhcmFtcylcclxuICB9XHJcblxyXG4gIGdldFVzZXJEYXNoYm9hcmRBcHBMaXN0KGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2N1c3RvbWVyX2Rhc2hib3JkLycgKyBpZCArICcvJylcclxuICB9XHJcblxyXG4gIGdldEFwcEFuZFVzZXJEZXRhaWxzQnlVc2VySUQoaWQpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdhcHBfYW5kX3VzZXJfZGV0YWlscy8nICsgaWQgKyAnLycpXHJcbiAgfVxyXG5cclxuICBhcHBBdHRhY2hBbmREaXNhdHRhY2hUb0Rhc2hib2FyZChkYXRhKXtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ21hcHBpbmdfYXBwX2FuZF9jdXN0b21lci8nLCBkYXRhKVxyXG4gIH1cclxuXHJcbn1cclxuIl19