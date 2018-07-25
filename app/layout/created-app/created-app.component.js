"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var created_app_service_1 = require("../../core/services/created-app.service");
var CreatedAppComponent = /** @class */ (function () {
    function CreatedAppComponent(route, CreatedAppService) {
        this.route = route;
        this.CreatedAppService = CreatedAppService;
        this.app_data = {
            logo: '',
            business_name: ''
        };
    }
    CreatedAppComponent.prototype.ngOnInit = function () {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
        this.getAppDetails(this.app_id);
    };
    CreatedAppComponent.prototype.getAppDetails = function (id) {
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
    CreatedAppComponent = __decorate([
        core_1.Component({
            selector: 'created-app',
            moduleId: module.id,
            templateUrl: "created-app.component.html",
            styleUrls: ["created-app.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            created_app_service_1.CreatedAppService])
    ], CreatedAppComponent);
    return CreatedAppComponent;
}());
exports.CreatedAppComponent = CreatedAppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlZC1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlZC1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCwrRUFBNEU7QUFTNUU7SUFVRSw2QkFDVSxLQUFxQixFQUNyQixpQkFBb0M7UUFEcEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVA5QyxhQUFRLEdBQUc7WUFDVCxJQUFJLEVBQUUsRUFBRTtZQUNSLGFBQWEsRUFBQyxFQUFFO1NBQ2pCLENBQUE7SUFLRSxDQUFDO0lBRUosc0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDJDQUFhLEdBQWIsVUFBYyxFQUFFO1FBQWhCLGlCQWNDO1FBYkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDdkQsVUFBQSxHQUFHO1lBQ0QsS0FBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDdkIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDNUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDOUQsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUVsQixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNwQixDQUFDLENBQ0YsQ0FBQTtJQUNILENBQUM7SUFwQ1UsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN6QyxDQUFDO3lDQVlpQix1QkFBYztZQUNGLHVDQUFpQjtPQVpuQyxtQkFBbUIsQ0FzQy9CO0lBQUQsMEJBQUM7Q0FBQSxBQXRDRCxJQXNDQztBQXRDWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ3JlYXRlZEFwcFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vY29yZS9zZXJ2aWNlcy9jcmVhdGVkLWFwcC5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBHbG9iYWxzIGZyb20gJy4uLy4uL2NvcmUvZ2xvYmFscyc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY3JlYXRlZC1hcHAnLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IGBjcmVhdGVkLWFwcC5jb21wb25lbnQuaHRtbGAsXHJcbiAgc3R5bGVVcmxzOiBbYGNyZWF0ZWQtYXBwLmNvbXBvbmVudC5jc3NgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlZEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgYXBwX2lkOiBzdHJpbmc7XHJcbiAgYXBwX2RldGFpbHM6IGFueTtcclxuICB2aXNpYmxlX2tleTogYm9vbGVhbjtcclxuICBcclxuICBhcHBfZGF0YSA9IHtcclxuICAgIGxvZ286ICcnLFxyXG4gICAgYnVzaW5lc3NfbmFtZTonJ1xyXG4gIH1cclxuIFxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIENyZWF0ZWRBcHBTZXJ2aWNlOiBDcmVhdGVkQXBwU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFwcF9pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl0pO1xyXG4gICAgdGhpcy5nZXRBcHBEZXRhaWxzKHRoaXMuYXBwX2lkKTtcclxuICB9XHJcblxyXG4gIGdldEFwcERldGFpbHMoaWQpIHtcclxuICAgIHRoaXMuQ3JlYXRlZEFwcFNlcnZpY2UuZ2V0Q3JlYXRlZEFwcERldGFpbHMoaWQpLnN1YnNjcmliZShcclxuICAgICAgcmVzID0+IHtcclxuICAgICAgICB0aGlzLmFwcF9kZXRhaWxzID0gcmVzO1xyXG4gICAgICAgIHRoaXMuYXBwX2RhdGEubG9nbyA9ICB0aGlzLmFwcF9kZXRhaWxzLmxvZ287XHJcbiAgICAgICAgdGhpcy5hcHBfZGF0YS5idXNpbmVzc19uYW1lID0gIHRoaXMuYXBwX2RldGFpbHMuYnVzaW5lc3NfbmFtZTtcclxuICAgICAgICB0aGlzLnZpc2libGVfa2V5ID0gdHJ1ZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG59Il19