"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var created_app_service_1 = require("../../core/services/created-app.service");
var nativescript_secure_storage_1 = require("nativescript-secure-storage");
var router_1 = require("nativescript-angular/router");
// registerElement('CardView', () => CardView);
var explore_service_1 = require("../../core/services/explore.service");
var application_settings_1 = require("application-settings");
var Globals = require("../../core/globals");
var AppCreateComponent = /** @class */ (function () {
    function AppCreateComponent(exploreService, createdAppService, router) {
        this.exploreService = exploreService;
        this.createdAppService = createdAppService;
        this.router = router;
        this.category_list = [];
        this.base_url = Globals.img_base_url;
        this.processing = false;
        this.loader = new nativescript_loading_indicator_1.LoadingIndicator();
        this.lodaing_options = {
            message: 'Loading...',
            progress: 0.65,
            android: {
                indeterminate: true,
                cancelable: false,
                cancelListener: function (dialog) { console.log("Loading cancelled"); },
                max: 100,
                progressNumberFormat: "%1d/%2d",
                progressPercentFormat: 0.53,
                progressStyle: 1,
                secondaryProgress: 1
            },
            ios: {
                details: "Additional detail note!",
                margin: 10,
                dimBackground: true,
                color: "#4B9ED6",
                backgroundColor: "yellow",
                userInteractionEnabled: false,
                hideBezel: true,
            }
        };
        this.secureStorage = new nativescript_secure_storage_1.SecureStorage();
    }
    AppCreateComponent.prototype.ngOnInit = function () {
        this.user_id = application_settings_1.getString('user_id');
        this.getCategoryList();
    };
    AppCreateComponent.prototype.chooseCategory = function (id) {
        var data = {
            app_category: id
        };
        this.setCreateAppData(data);
        this.router.navigate(['/app-create/business-info']);
    };
    AppCreateComponent.prototype.setCreateAppData = function (data) {
        this.secureStorage.set({
            key: 'create_app_data',
            value: JSON.stringify(data)
        }).then(function (success) {
            console.log(success);
        });
    };
    ;
    AppCreateComponent.prototype.getCategoryList = function () {
        var _this = this;
        this.loader.show(this.lodaing_options);
        this.createdAppService.getCategoryList().subscribe(function (res) {
            _this.category_list = res;
            _this.loader.hide();
        }, function (error) {
            console.log(error);
            _this.loader.hide();
        });
    };
    AppCreateComponent = __decorate([
        core_1.Component({
            selector: "app-create",
            moduleId: module.id,
            templateUrl: "./app-create.component.html",
            styleUrls: ['./app-create.component.css']
        }),
        __metadata("design:paramtypes", [explore_service_1.ExploreService,
            created_app_service_1.CreatedAppService,
            router_1.RouterExtensions])
    ], AppCreateComponent);
    return AppCreateComponent;
}());
exports.AppCreateComponent = AppCreateComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNyZWF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAtY3JlYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCxpRkFBaUU7QUFDakUsK0VBQTRFO0FBQzVFLDJFQUE0RDtBQUM1RCxzREFBK0Q7QUFDL0QsK0NBQStDO0FBRS9DLHVFQUFxRTtBQUNyRSw2REFBMkY7QUFDM0YsNENBQThDO0FBUzlDO0lBZ0NJLDRCQUNZLGNBQThCLEVBQzlCLGlCQUFvQyxFQUNwQyxNQUF3QjtRQUZ4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQWpDcEMsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFDeEIsYUFBUSxHQUFXLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDeEMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUduQixXQUFNLEdBQUcsSUFBSSxpREFBZ0IsRUFBRSxDQUFDO1FBQ2hDLG9CQUFlLEdBQUc7WUFDZCxPQUFPLEVBQUUsWUFBWTtZQUNyQixRQUFRLEVBQUUsSUFBSTtZQUNkLE9BQU8sRUFBRTtnQkFDTCxhQUFhLEVBQUUsSUFBSTtnQkFDbkIsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLGNBQWMsRUFBRSxVQUFVLE1BQU0sSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUEsQ0FBQyxDQUFDO2dCQUN0RSxHQUFHLEVBQUUsR0FBRztnQkFDUixvQkFBb0IsRUFBRSxTQUFTO2dCQUMvQixxQkFBcUIsRUFBRSxJQUFJO2dCQUMzQixhQUFhLEVBQUUsQ0FBQztnQkFDaEIsaUJBQWlCLEVBQUUsQ0FBQzthQUN2QjtZQUNELEdBQUcsRUFBRTtnQkFDRCxPQUFPLEVBQUUseUJBQXlCO2dCQUNsQyxNQUFNLEVBQUUsRUFBRTtnQkFDVixhQUFhLEVBQUUsSUFBSTtnQkFDbkIsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLGVBQWUsRUFBRSxRQUFRO2dCQUN6QixzQkFBc0IsRUFBRSxLQUFLO2dCQUM3QixTQUFTLEVBQUUsSUFBSTthQUNsQjtTQUNKLENBQUE7UUFPRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksMkNBQWEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxnQ0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUUzQixDQUFDO0lBRUQsMkNBQWMsR0FBZCxVQUFlLEVBQUU7UUFFYixJQUFJLElBQUksR0FBRztZQUNQLFlBQVksRUFBRSxFQUFFO1NBQ25CLENBQUE7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUE7SUFDdkQsQ0FBQztJQUVELDZDQUFnQixHQUFoQixVQUFpQixJQUFJO1FBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDO1lBQ25CLEdBQUcsRUFBRSxpQkFBaUI7WUFDdEIsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQzlCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFBQSxDQUFDO0lBRUYsNENBQWUsR0FBZjtRQUFBLGlCQVlHO1FBWEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxTQUFTLENBQ2hELFVBQUEsR0FBRztZQUNELEtBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDbEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQ0YsQ0FBQTtJQUNILENBQUM7SUE5RU0sa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUM1QyxDQUFDO3lDQWtDOEIsZ0NBQWM7WUFDWCx1Q0FBaUI7WUFDNUIseUJBQWdCO09BbkMzQixrQkFBa0IsQ0FpRjlCO0lBQUQseUJBQUM7Q0FBQSxBQWpGRCxJQWlGQztBQWpGWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcclxuaW1wb3J0IHsgQ2FyZFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtY2FyZHZpZXcnO1xyXG5pbXBvcnQgeyBMb2FkaW5nSW5kaWNhdG9yIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2FkaW5nLWluZGljYXRvclwiXHJcbmltcG9ydCB7IENyZWF0ZWRBcHBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2NvcmUvc2VydmljZXMvY3JlYXRlZC1hcHAuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTZWN1cmVTdG9yYWdlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zZWN1cmUtc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG4vLyByZWdpc3RlckVsZW1lbnQoJ0NhcmRWaWV3JywgKCkgPT4gQ2FyZFZpZXcpO1xyXG5cclxuaW1wb3J0IHsgRXhwbG9yZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vY29yZS9zZXJ2aWNlcy9leHBsb3JlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIGdldEJvb2xlYW4sIHNldEJvb2xlYW4sIGNsZWFyIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCAqIGFzIEdsb2JhbHMgZnJvbSAnLi4vLi4vY29yZS9nbG9iYWxzJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1jcmVhdGVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC1jcmVhdGUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2FwcC1jcmVhdGUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDcmVhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgdXNlcl9pZDogc3RyaW5nO1xyXG4gICAgY2F0ZWdvcnlfbGlzdDogYW55ID0gW107XHJcbiAgICBiYXNlX3VybDogc3RyaW5nID0gR2xvYmFscy5pbWdfYmFzZV91cmw7XHJcbiAgICBwcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICBzZWN1cmVTdG9yYWdlOiBTZWN1cmVTdG9yYWdlO1xyXG5cclxuICAgIGxvYWRlciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XHJcbiAgICBsb2RhaW5nX29wdGlvbnMgPSB7XHJcbiAgICAgICAgbWVzc2FnZTogJ0xvYWRpbmcuLi4nLFxyXG4gICAgICAgIHByb2dyZXNzOiAwLjY1LFxyXG4gICAgICAgIGFuZHJvaWQ6IHtcclxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhbmNlbExpc3RlbmVyOiBmdW5jdGlvbiAoZGlhbG9nKSB7IGNvbnNvbGUubG9nKFwiTG9hZGluZyBjYW5jZWxsZWRcIikgfSxcclxuICAgICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgICAgIHByb2dyZXNzTnVtYmVyRm9ybWF0OiBcIiUxZC8lMmRcIixcclxuICAgICAgICAgICAgcHJvZ3Jlc3NQZXJjZW50Rm9ybWF0OiAwLjUzLFxyXG4gICAgICAgICAgICBwcm9ncmVzc1N0eWxlOiAxLFxyXG4gICAgICAgICAgICBzZWNvbmRhcnlQcm9ncmVzczogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW9zOiB7XHJcbiAgICAgICAgICAgIGRldGFpbHM6IFwiQWRkaXRpb25hbCBkZXRhaWwgbm90ZSFcIixcclxuICAgICAgICAgICAgbWFyZ2luOiAxMCxcclxuICAgICAgICAgICAgZGltQmFja2dyb3VuZDogdHJ1ZSxcclxuICAgICAgICAgICAgY29sb3I6IFwiIzRCOUVENlwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIsXHJcbiAgICAgICAgICAgIHVzZXJJbnRlcmFjdGlvbkVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBoaWRlQmV6ZWw6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZXhwbG9yZVNlcnZpY2U6IEV4cGxvcmVTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgY3JlYXRlZEFwcFNlcnZpY2U6IENyZWF0ZWRBcHBTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5zZWN1cmVTdG9yYWdlID0gbmV3IFNlY3VyZVN0b3JhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnVzZXJfaWQgPSBnZXRTdHJpbmcoJ3VzZXJfaWQnKTtcclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2V0Q2F0ZWdvcnlMaXN0KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNob29zZUNhdGVnb3J5KGlkKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICBhcHBfY2F0ZWdvcnk6IGlkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0Q3JlYXRlQXBwRGF0YShkYXRhKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwLWNyZWF0ZS9idXNpbmVzcy1pbmZvJ10pXHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3JlYXRlQXBwRGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5zZWN1cmVTdG9yYWdlLnNldCh7XHJcbiAgICAgICAgICAgIGtleTogJ2NyZWF0ZV9hcHBfZGF0YScsXHJcbiAgICAgICAgICAgIHZhbHVlOiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgICAgIH0pLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3MpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldENhdGVnb3J5TGlzdCgpIHtcclxuICAgICAgICB0aGlzLmxvYWRlci5zaG93KHRoaXMubG9kYWluZ19vcHRpb25zKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWRBcHBTZXJ2aWNlLmdldENhdGVnb3J5TGlzdCgpLnN1YnNjcmliZShcclxuICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlfbGlzdCA9IHJlcztcclxuICAgICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuXHJcbiAgICBcclxufSJdfQ==