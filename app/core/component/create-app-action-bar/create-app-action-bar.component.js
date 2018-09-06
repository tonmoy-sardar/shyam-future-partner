"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var application_settings_1 = require("application-settings");
var created_app_service_1 = require("../../services/created-app.service");
var AppActionBarComponent = /** @class */ (function () {
    function AppActionBarComponent(_routerExtensions, createdAppService, routerExtensions) {
        this._routerExtensions = _routerExtensions;
        this.createdAppService = createdAppService;
        this.routerExtensions = routerExtensions;
        this.product_list = [];
    }
    AppActionBarComponent.prototype.ngOnInit = function () {
        if (application_settings_1.getBoolean('isLoggedin')) {
            this.isLoggedin = application_settings_1.getBoolean('isLoggedin');
        }
        this.getAppDetails(this.appId);
    };
    AppActionBarComponent.prototype.getAppDetails = function (id) {
        var _this = this;
        this.createdAppService.getCreatedAppDetails(id).subscribe(function (res) {
            _this.app_details = res;
            _this.app_details.app_product_categories.forEach(function (x) {
                x.products.forEach(function (y) {
                    _this.product_list.push(y);
                });
            });
            console.log(res);
            console.log(_this.product_list);
            _this.visible_key = true;
        }, function (error) {
            console.log(error);
        });
    };
    AppActionBarComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    AppActionBarComponent.prototype.logout = function () {
        application_settings_1.clear();
        this._routerExtensions.navigate(["/login"], { clearHistory: true });
    };
    __decorate([
        core_1.Input('appId'),
        __metadata("design:type", String)
    ], AppActionBarComponent.prototype, "appId", void 0);
    AppActionBarComponent = __decorate([
        core_1.Component({
            selector: "app-action-bar",
            moduleId: module.id,
            templateUrl: "./app-action-bar.component.html",
            styleUrls: ['./app-action-bar.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            created_app_service_1.CreatedAppService,
            router_1.RouterExtensions])
    ], AppActionBarComponent);
    return AppActionBarComponent;
}());
exports.AppActionBarComponent = AppActionBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWFjdGlvbi1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLWFjdGlvbi1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCw2REFBMkY7QUFDM0YsMEVBQXVFO0FBUXZFO0lBTUksK0JBQ1ksaUJBQW1DLEVBQ25DLGlCQUFvQyxFQUNwQyxnQkFBa0M7UUFGbEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNuQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFQOUMsaUJBQVksR0FBUSxFQUFFLENBQUM7SUFVdkIsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDSSxFQUFFLENBQUEsQ0FBQyxpQ0FBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLGlDQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCw2Q0FBYSxHQUFiLFVBQWMsRUFBRTtRQUFoQixpQkFpQkM7UUFoQkcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDckQsVUFBQSxHQUFHO1lBQ0MsS0FBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDdkIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2dCQUM3QyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7b0JBQ2hCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUM3QixDQUFDLENBQUMsQ0FBQTtZQUNOLENBQUMsQ0FBQyxDQUFBO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUM5QixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUM1QixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN0QixDQUFDLENBQ0osQ0FBQTtJQUNMLENBQUM7SUFDRCxzQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxzQ0FBTSxHQUFOO1FBQ0ksNEJBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQTNDZTtRQUFmLFlBQUssQ0FBQyxPQUFPLENBQUM7O3dEQUFlO0lBSHJCLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUNoRCxDQUFDO3lDQVFpQyx5QkFBZ0I7WUFDaEIsdUNBQWlCO1lBQ2xCLHlCQUFnQjtPQVRyQyxxQkFBcUIsQ0FnRGpDO0lBQUQsNEJBQUM7Q0FBQSxBQWhERCxJQWdEQztBQWhEWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIGdldEJvb2xlYW4sIHNldEJvb2xlYW4sIGNsZWFyIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IENyZWF0ZWRBcHBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NyZWF0ZWQtYXBwLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWFjdGlvbi1iYXJcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC1hY3Rpb24tYmFyLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9hcHAtYWN0aW9uLWJhci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcEFjdGlvbkJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBhcHBfZGV0YWlsczogYW55O1xyXG4gICAgcHJvZHVjdF9saXN0OiBhbnkgPSBbXTtcclxuICAgIEBJbnB1dCgnYXBwSWQnKSBhcHBJZDogc3RyaW5nO1xyXG4gICAgdmlzaWJsZV9rZXk6IGJvb2xlYW5cclxuICAgIGlzTG9nZ2VkaW46IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgY3JlYXRlZEFwcFNlcnZpY2U6IENyZWF0ZWRBcHBTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xyXG4gICAgKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmKGdldEJvb2xlYW4oJ2lzTG9nZ2VkaW4nKSl7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2dnZWRpbiA9IGdldEJvb2xlYW4oJ2lzTG9nZ2VkaW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXRBcHBEZXRhaWxzKHRoaXMuYXBwSWQpO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBnZXRBcHBEZXRhaWxzKGlkKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkQXBwU2VydmljZS5nZXRDcmVhdGVkQXBwRGV0YWlscyhpZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBfZGV0YWlscyA9IHJlcztcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwX2RldGFpbHMuYXBwX3Byb2R1Y3RfY2F0ZWdvcmllcy5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHgucHJvZHVjdHMuZm9yRWFjaCh5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X2xpc3QucHVzaCh5KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9kdWN0X2xpc3QpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGVfa2V5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKXtcclxuICAgICAgICBjbGVhcigpO1xyXG4gICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbn0iXX0=