"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var router_2 = require("nativescript-angular/router");
var created_app_service_1 = require("../../../core/services/created-app.service");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var common_1 = require("@angular/common");
var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent(route, formBuilder, router, createdAppService, location) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.router = router;
        this.createdAppService = createdAppService;
        this.location = location;
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
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
        var full_location = this.location.path().split('/');
        this.app_id = full_location[2].trim();
        this.order_id = this.route.snapshot.params["order"];
        this.getAppOrderDetails(this.order_id);
    };
    OrderDetailsComponent.prototype.getAppOrderDetails = function (id) {
        var _this = this;
        this.loader.show(this.lodaing_options);
        this.createdAppService.getAppOrderDetails(id).subscribe(function (res) {
            _this.order_details = res[0];
            _this.visible_key = true;
            console.log(res);
            _this.loader.hide();
        }, function (error) {
            console.log(error);
            _this.loader.hide();
        });
    };
    OrderDetailsComponent.prototype.getDiscount = function (price, discounted_price) {
        return Math.floor(((price - discounted_price) * 100) / price) + '%';
    };
    OrderDetailsComponent.prototype.updateCustomerOrderPayment = function () {
        var _this = this;
        var data = {
            id: this.app_id,
        };
        this.loader.show(this.lodaing_options);
        this.createdAppService.updateCustomerOrderPayment(data).subscribe(function (res) {
            console.log("Success");
            _this.loader.hide();
            _this.getAppOrderDetails(_this.order_id);
        }, function (error) {
            _this.loader.hide();
            console.log(error);
        });
    };
    OrderDetailsComponent.prototype.updateCustomerOrderDelivery = function () {
        var _this = this;
        var data = {
            id: this.app_id,
        };
        this.loader.show(this.lodaing_options);
        this.createdAppService.updateCustomerOrderDelivery(data).subscribe(function (res) {
            console.log("Success");
            _this.loader.hide();
            _this.getAppOrderDetails(_this.order_id);
        }, function (error) {
            _this.loader.hide();
            console.log(error);
        });
    };
    OrderDetailsComponent = __decorate([
        core_1.Component({
            selector: 'order-details',
            moduleId: module.id,
            templateUrl: "order-details.component.html",
            styleUrls: ["order-details.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            forms_1.FormBuilder,
            router_2.RouterExtensions,
            created_app_service_1.CreatedAppService,
            common_1.Location])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());
exports.OrderDetailsComponent = OrderDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwwQ0FBaUQ7QUFDakQsd0NBQW9FO0FBQ3BFLHNEQUErRDtBQUMvRCxrRkFBK0U7QUFDL0UsaUZBQWtFO0FBQ2xFLDBDQUEyQztBQVEzQztJQWdDSSwrQkFDWSxLQUFxQixFQUNyQixXQUF3QixFQUN4QixNQUF3QixFQUN4QixpQkFBb0MsRUFDcEMsUUFBa0I7UUFKbEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBbkM5QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBTW5CLFdBQU0sR0FBRyxJQUFJLGlEQUFnQixFQUFFLENBQUM7UUFDaEMsb0JBQWUsR0FBRztZQUNkLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsT0FBTyxFQUFFO2dCQUNMLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixVQUFVLEVBQUUsS0FBSztnQkFDakIsY0FBYyxFQUFFLFVBQVUsTUFBTSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQSxDQUFDLENBQUM7Z0JBQ3RFLEdBQUcsRUFBRSxHQUFHO2dCQUNSLG9CQUFvQixFQUFFLFNBQVM7Z0JBQy9CLHFCQUFxQixFQUFFLElBQUk7Z0JBQzNCLGFBQWEsRUFBRSxDQUFDO2dCQUNoQixpQkFBaUIsRUFBRSxDQUFDO2FBQ3ZCO1lBQ0QsR0FBRyxFQUFFO2dCQUNELE9BQU8sRUFBRSx5QkFBeUI7Z0JBQ2xDLE1BQU0sRUFBRSxFQUFFO2dCQUNWLGFBQWEsRUFBRSxJQUFJO2dCQUNu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LENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkIsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUUxQyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3RCLENBQUMsQ0FDSixDQUFBO0lBRUwsQ0FBQztJQTVHUSxxQkFBcUI7UUFQakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzdDLENBQUM7eUNBbUNxQix1QkFBYztZQUNSLG1CQUFXO1lBQ2hCLHlCQUFnQjtZQUNMLHVDQUFpQjtZQUMxQixpQkFBUTtPQXJDckIscUJBQXFCLENBZ0hqQztJQUFELDRCQUFDO0NBQUEsQUFoSEQsSUFnSEM7QUFoSFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ3JlYXRlZEFwcFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9jcmVhdGVkLWFwcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IExvYWRpbmdJbmRpY2F0b3IgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ29yZGVyLWRldGFpbHMnLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBgb3JkZXItZGV0YWlscy5jb21wb25lbnQuaHRtbGAsXHJcbiAgICBzdHlsZVVybHM6IFtgb3JkZXItZGV0YWlscy5jb21wb25lbnQuY3NzYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBPcmRlckRldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZm9ybTogRm9ybUdyb3VwO1xyXG4gICAgcHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgb3JkZXJfaWQ6IHN0cmluZztcclxuICAgIHZpc2libGVfa2V5OiBib29sZWFuO1xyXG4gICAgb3JkZXJfZGV0YWlscztcclxuICAgIGFwcF9pZDogc3RyaW5nO1xyXG5cclxuICAgIGxvYWRlciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XHJcbiAgICBsb2RhaW5nX29wdGlvbnMgPSB7XHJcbiAgICAgICAgbWVzc2FnZTogJ0xvYWRpbmcuLi4nLFxyXG4gICAgICAgIHByb2dyZXNzOiAwLjY1LFxyXG4gICAgICAgIGFuZHJvaWQ6IHtcclxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhbmNlbExpc3RlbmVyOiBmdW5jdGlvbiAoZGlhbG9nKSB7IGNvbnNvbGUubG9nKFwiTG9hZGluZyBjYW5jZWxsZWRcIikgfSxcclxuICAgICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgICAgIHByb2dyZXNzTnVtYmVyRm9ybWF0OiBcIiUxZC8lMmRcIixcclxuICAgICAgICAgICAgcHJvZ3Jlc3NQZXJjZW50Rm9ybWF0OiAwLjUzLFxyXG4gICAgICAgICAgICBwcm9ncmVzc1N0eWxlOiAxLFxyXG4gICAgICAgICAgICBzZWNvbmRhcnlQcm9ncmVzczogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW9zOiB7XHJcbiAgICAgICAgICAgIGRldGFpbHM6IFwiQWRkaXRpb25hbCBkZXRhaWwgbm90ZSFcIixcclxuICAgICAgICAgICAgbWFyZ2luOiAxMCxcclxuICAgICAgICAgICAgZGltQmFja2dyb3VuZDogdHJ1ZSxcclxuICAgICAgICAgICAgY29sb3I6IFwiIzRCOUVENlwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIsXHJcbiAgICAgICAgICAgIHVzZXJJbnRlcmFjdGlvbkVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBoaWRlQmV6ZWw6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBjcmVhdGVkQXBwU2VydmljZTogQ3JlYXRlZEFwcFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHZhciBmdWxsX2xvY2F0aW9uID0gdGhpcy5sb2NhdGlvbi5wYXRoKCkuc3BsaXQoJy8nKTtcclxuICAgICAgICB0aGlzLmFwcF9pZCA9IGZ1bGxfbG9jYXRpb25bMl0udHJpbSgpO1xyXG4gICAgICAgIHRoaXMub3JkZXJfaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcIm9yZGVyXCJdO1xyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5nZXRBcHBPcmRlckRldGFpbHModGhpcy5vcmRlcl9pZClcclxuICAgIH1cclxuXHJcbiAgICBnZXRBcHBPcmRlckRldGFpbHMoaWQpIHtcclxuICAgICAgICB0aGlzLmxvYWRlci5zaG93KHRoaXMubG9kYWluZ19vcHRpb25zKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWRBcHBTZXJ2aWNlLmdldEFwcE9yZGVyRGV0YWlscyhpZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcl9kZXRhaWxzID0gcmVzWzBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlX2tleSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGlzY291bnQocHJpY2UsIGRpc2NvdW50ZWRfcHJpY2UpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigoKHByaWNlIC0gZGlzY291bnRlZF9wcmljZSkgKiAxMDApIC8gcHJpY2UpICsgJyUnO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUN1c3RvbWVyT3JkZXJQYXltZW50KCkge1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgaWQ6dGhpcy5hcHBfaWQsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9hZGVyLnNob3codGhpcy5sb2RhaW5nX29wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZEFwcFNlcnZpY2UudXBkYXRlQ3VzdG9tZXJPcmRlclBheW1lbnQoZGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBcHBPcmRlckRldGFpbHModGhpcy5vcmRlcl9pZClcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlQ3VzdG9tZXJPcmRlckRlbGl2ZXJ5KCkge1xyXG4gICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICBpZDp0aGlzLmFwcF9pZCxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2FkZXIuc2hvdyh0aGlzLmxvZGFpbmdfb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkQXBwU2VydmljZS51cGRhdGVDdXN0b21lck9yZGVyRGVsaXZlcnkoZGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBcHBPcmRlckRldGFpbHModGhpcy5vcmRlcl9pZClcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxufSJdfQ==