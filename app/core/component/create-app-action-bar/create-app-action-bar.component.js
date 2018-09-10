"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var application_settings_1 = require("application-settings");
var created_app_service_1 = require("../../services/created-app.service");
var CreateAppActionBarComponent = /** @class */ (function () {
    function CreateAppActionBarComponent(_routerExtensions, createdAppService, routerExtensions) {
        this._routerExtensions = _routerExtensions;
        this.createdAppService = createdAppService;
        this.routerExtensions = routerExtensions;
    }
    CreateAppActionBarComponent.prototype.ngOnInit = function () {
        if (application_settings_1.getBoolean('isLoggedin')) {
            this.isLoggedin = application_settings_1.getBoolean('isLoggedin');
        }
    };
    CreateAppActionBarComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    CreateAppActionBarComponent.prototype.logout = function () {
        application_settings_1.clear();
        this._routerExtensions.navigate(["/login"], { clearHistory: true });
    };
    CreateAppActionBarComponent = __decorate([
        core_1.Component({
            selector: "create-app-action-bar",
            moduleId: module.id,
            templateUrl: "./create-app-action-bar.component.html",
            styleUrls: ['./create-app-action-bar.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            created_app_service_1.CreatedAppService,
            router_1.RouterExtensions])
    ], CreateAppActionBarComponent);
    return CreateAppActionBarComponent;
}());
exports.CreateAppActionBarComponent = CreateAppActionBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWFwcC1hY3Rpb24tYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS1hcHAtYWN0aW9uLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBQy9ELDZEQUEyRjtBQUMzRiwwRUFBdUU7QUFRdkU7SUFHSSxxQ0FDWSxpQkFBbUMsRUFDbkMsaUJBQW9DLEVBQ3BDLGdCQUFrQztRQUZsQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUc5QyxDQUFDO0lBRUQsOENBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQSxDQUFDLGlDQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsaUNBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQyxDQUFDO0lBRUwsQ0FBQztJQUVELDRDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELDRDQUFNLEdBQU47UUFDSSw0QkFBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBekJRLDJCQUEyQjtRQU52QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztTQUN2RCxDQUFDO3lDQUtpQyx5QkFBZ0I7WUFDaEIsdUNBQWlCO1lBQ2xCLHlCQUFnQjtPQU5yQywyQkFBMkIsQ0EyQnZDO0lBQUQsa0NBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSxrRUFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBnZXRTdHJpbmcsIHNldFN0cmluZywgZ2V0Qm9vbGVhbiwgc2V0Qm9vbGVhbiwgY2xlYXIgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgQ3JlYXRlZEFwcFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY3JlYXRlZC1hcHAuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJjcmVhdGUtYXBwLWFjdGlvbi1iYXJcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NyZWF0ZS1hcHAtYWN0aW9uLWJhci5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY3JlYXRlLWFwcC1hY3Rpb24tYmFyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlQXBwQWN0aW9uQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuIFxyXG4gICAgaXNMb2dnZWRpbjogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBjcmVhdGVkQXBwU2VydmljZTogQ3JlYXRlZEFwcFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXHJcbiAgICApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYoZ2V0Qm9vbGVhbignaXNMb2dnZWRpbicpKXtcclxuICAgICAgICAgICAgdGhpcy5pc0xvZ2dlZGluID0gZ2V0Qm9vbGVhbignaXNMb2dnZWRpbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0gICAgXHJcblxyXG4gICAgZ29CYWNrKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCl7XHJcbiAgICAgICAgY2xlYXIoKTtcclxuICAgICAgICB0aGlzLl9yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG59Il19