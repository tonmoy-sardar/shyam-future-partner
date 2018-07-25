"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var created_app_service_1 = require("../../../core/services/created-app.service");
var ManageAppComponent = /** @class */ (function () {
    function ManageAppComponent(route, CreatedAppService) {
        this.route = route;
        this.CreatedAppService = CreatedAppService;
        this.app_data = {
            logo: '',
            business_name: ''
        };
    }
    ManageAppComponent.prototype.ngOnInit = function () {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
        this.getAppDetails(this.app_id);
    };
    ManageAppComponent.prototype.getAppDetails = function (id) {
        var _this = this;
        this.CreatedAppService.getCreatedAppDetails(id).subscribe(function (res) {
            _this.app_details = res;
            _this.app_data.logo = _this.app_details.logo;
            _this.app_data.business_name = _this.app_details.business_name;
            _this.visible_key = true;
            console.log(res);
        }, function (error) {
            console.log(error);
        });
    };
    ManageAppComponent = __decorate([
        core_1.Component({
            selector: 'manage-app',
            moduleId: module.id,
            templateUrl: "manage-app.component.html",
            styleUrls: ["manage-app.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            created_app_service_1.CreatedAppService])
    ], ManageAppComponent);
    return ManageAppComponent;
}());
exports.ManageAppComponent = ManageAppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYW5hZ2UtYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFDakQsa0ZBQStFO0FBUy9FO0lBUUksNEJBQ1ksS0FBcUIsRUFDckIsaUJBQW9DO1FBRHBDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFQaEQsYUFBUSxHQUFHO1lBQ1AsSUFBSSxFQUFFLEVBQUU7WUFDUixhQUFhLEVBQUMsRUFBRTtTQUNqQixDQUFBO0lBS0MsQ0FBQztJQUVMLHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCwwQ0FBYSxHQUFiLFVBQWMsRUFBRTtRQUFoQixpQkFjRztRQWJDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ3ZELFVBQUEsR0FBRztZQUNELEtBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQzVDLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxHQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1lBQzlELEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFbEIsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDcEIsQ0FBQyxDQUNGLENBQUE7SUFDSCxDQUFDO0lBakNNLGtCQUFrQjtRQVA5QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDMUMsQ0FBQzt5Q0FXcUIsdUJBQWM7WUFDRix1Q0FBaUI7T0FWdkMsa0JBQWtCLENBb0M5QjtJQUFELHlCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7QUFwQ1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENyZWF0ZWRBcHBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvc2VydmljZXMvY3JlYXRlZC1hcHAuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21hbmFnZS1hcHAnLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBgbWFuYWdlLWFwcC5jb21wb25lbnQuaHRtbGAsXHJcbiAgICBzdHlsZVVybHM6IFtgbWFuYWdlLWFwcC5jb21wb25lbnQuY3NzYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYW5hZ2VBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYXBwX2lkOiBzdHJpbmc7XHJcbiAgICBhcHBfZGV0YWlsczogYW55O1xyXG4gICAgYXBwX2RhdGEgPSB7XHJcbiAgICAgICAgbG9nbzogJycsXHJcbiAgICAgICAgYnVzaW5lc3NfbmFtZTonJ1xyXG4gICAgICB9XHJcbiAgICB2aXNpYmxlX2tleTogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgQ3JlYXRlZEFwcFNlcnZpY2U6IENyZWF0ZWRBcHBTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuYXBwX2lkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdKTtcclxuICAgICAgICB0aGlzLmdldEFwcERldGFpbHModGhpcy5hcHBfaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFwcERldGFpbHMoaWQpIHtcclxuICAgICAgICB0aGlzLkNyZWF0ZWRBcHBTZXJ2aWNlLmdldENyZWF0ZWRBcHBEZXRhaWxzKGlkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFwcF9kZXRhaWxzID0gcmVzO1xyXG4gICAgICAgICAgICB0aGlzLmFwcF9kYXRhLmxvZ28gPSAgdGhpcy5hcHBfZGV0YWlscy5sb2dvO1xyXG4gICAgICAgICAgICB0aGlzLmFwcF9kYXRhLmJ1c2luZXNzX25hbWUgPSAgdGhpcy5hcHBfZGV0YWlscy5idXNpbmVzc19uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnZpc2libGVfa2V5ID0gdHJ1ZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcblxyXG5cclxufSJdfQ==