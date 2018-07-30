"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var router_2 = require("nativescript-angular/router");
var created_app_service_1 = require("../../../core/services/created-app.service");
var ReportComponent = /** @class */ (function () {
    function ReportComponent(route, formBuilder, router, createdAppService) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.router = router;
        this.createdAppService = createdAppService;
        this.processing = false;
        this.order_list = [];
    }
    ReportComponent.prototype.ngOnInit = function () {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
        this.getOrderList(this.app_id);
    };
    ReportComponent.prototype.getOrderList = function (id) {
        var _this = this;
        this.createdAppService.getAppOrderList(id).subscribe(function (res) {
            console.log(res);
            // res.forEach(x => {
            //     var sum = 0
            //     x.order_details.forEach(y => {
            //         sum += y.total_cost
            //     })
            //     x['total_cost'] = sum;
            //     this.order_list.push(x);
            // })
            _this.order_list = res;
            _this.visible_key = true;
        }, function (error) {
            console.log(error);
        });
    };
    ReportComponent = __decorate([
        core_1.Component({
            selector: 'report',
            moduleId: module.id,
            templateUrl: "report.component.html",
            styleUrls: ["report.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            forms_1.FormBuilder,
            router_2.RouterExtensions,
            created_app_service_1.CreatedAppService])
    ], ReportComponent);
    return ReportComponent;
}());
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMENBQWlEO0FBQ2pELHdDQUFvRTtBQUNwRSxzREFBK0Q7QUFDL0Qsa0ZBQStFO0FBUS9FO0lBTUkseUJBQ1ksS0FBcUIsRUFDckIsV0FBd0IsRUFDeEIsTUFBd0IsRUFDeEIsaUJBQW9DO1FBSHBDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFSaEQsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUduQixlQUFVLEdBQVEsRUFBRSxDQUFDO0lBTWpCLENBQUM7SUFFTCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsc0NBQVksR0FBWixVQUFhLEVBQUU7UUFBZixpQkFtQkM7UUFsQkcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ2hELFVBQUMsR0FBVTtZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEIscUJBQXFCO1lBQ3JCLGtCQUFrQjtZQUNsQixxQ0FBcUM7WUFDckMsOEJBQThCO1lBQzlCLFNBQVM7WUFDVCw2QkFBNkI7WUFDN0IsK0JBQStCO1lBQy9CLEtBQUs7WUFDTCxLQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUN0QixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUM1QixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN0QixDQUFDLENBQ0osQ0FBQTtJQUNMLENBQUM7SUF0Q1EsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0FTcUIsdUJBQWM7WUFDUixtQkFBVztZQUNoQix5QkFBZ0I7WUFDTCx1Q0FBaUI7T0FWdkMsZUFBZSxDQXlDM0I7SUFBRCxzQkFBQztDQUFBLEFBekNELElBeUNDO0FBekNZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ3JlYXRlZEFwcFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9jcmVhdGVkLWFwcC5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdyZXBvcnQnLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBgcmVwb3J0LmNvbXBvbmVudC5odG1sYCxcclxuICAgIHN0eWxlVXJsczogW2ByZXBvcnQuY29tcG9uZW50LmNzc2BdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVwb3J0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGZvcm06IEZvcm1Hcm91cDtcclxuICAgIHByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgIGFwcF9pZDogc3RyaW5nO1xyXG4gICAgdmlzaWJsZV9rZXk6IGJvb2xlYW47XHJcbiAgICBvcmRlcl9saXN0OiBhbnkgPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgY3JlYXRlZEFwcFNlcnZpY2U6IENyZWF0ZWRBcHBTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuYXBwX2lkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdKTtcclxuICAgICAgICB0aGlzLmdldE9yZGVyTGlzdCh0aGlzLmFwcF9pZClcclxuICAgIH1cclxuXHJcbiAgICBnZXRPcmRlckxpc3QoaWQpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZWRBcHBTZXJ2aWNlLmdldEFwcE9yZGVyTGlzdChpZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgLy8gcmVzLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdmFyIHN1bSA9IDBcclxuICAgICAgICAgICAgICAgIC8vICAgICB4Lm9yZGVyX2RldGFpbHMuZm9yRWFjaCh5ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgc3VtICs9IHkudG90YWxfY29zdFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgeFsndG90YWxfY29zdCddID0gc3VtO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMub3JkZXJfbGlzdC5wdXNoKHgpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJfbGlzdCA9IHJlczsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGVfa2V5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==