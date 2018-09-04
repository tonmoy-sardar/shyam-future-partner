"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var orientation = require('nativescript-orientation');
var application = require("tns-core-modules/application");
var router_1 = require("nativescript-angular/router");
var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        orientation.setOrientation("portrait");
        application.android.on(application.AndroidApplication.activityBackPressedEvent, function (args) {
            if (_this.router.canGoBack()) {
                args.cancel = true;
                _this.router.back();
            }
            else {
                args.cancel = false;
            }
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBMEM7QUFDMUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDdEQsMERBQTREO0FBQzVELHNEQUErRDtBQU8vRDtJQUdJLHNCQUFvQixNQUF3QjtRQUE1QyxpQkFVQztRQVZtQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QyxXQUFXLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsRUFBRSxVQUFDLElBQVM7WUFDdEYsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN4QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBYlEsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO3lDQUs4Qix5QkFBZ0I7T0FIbkMsWUFBWSxDQWlCeEI7SUFBRCxtQkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbnZhciBvcmllbnRhdGlvbiA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1vcmllbnRhdGlvbicpO1xyXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge1xyXG4gICAgICAgIG9yaWVudGF0aW9uLnNldE9yaWVudGF0aW9uKFwicG9ydHJhaXRcIik7XHJcbiAgICAgICAgYXBwbGljYXRpb24uYW5kcm9pZC5vbihhcHBsaWNhdGlvbi5BbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoYXJnczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJvdXRlci5jYW5Hb0JhY2soKSkge1xyXG4gICAgICAgICAgICAgICAgYXJncy5jYW5jZWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIuYmFjaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXJncy5jYW5jZWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==