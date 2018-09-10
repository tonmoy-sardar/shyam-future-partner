"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var created_app_service_1 = require("../../../core/services/created-app.service");
var common_1 = require("@angular/common");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var SocialShare = require("nativescript-social-share");
var message_service_1 = require("../../../core/services/message.service");
var notification_service_1 = require("../../../core/services/notification.service");
var firebase = require("nativescript-plugin-firebase");
var DetailsAppComponent = /** @class */ (function () {
    function DetailsAppComponent(route, CreatedAppService, location, messageService, notificationService) {
        var _this = this;
        this.route = route;
        this.CreatedAppService = CreatedAppService;
        this.location = location;
        this.messageService = messageService;
        this.notificationService = notificationService;
        this.app_data = {
            logo: '',
            business_name: ''
        };
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
        this.unSeenOrder = 0;
        this.unSeenMessage = 0;
        var $this = this;
        firebase.init({
            onMessageReceivedCallback: function (message) {
                var el = $this.button.nativeElement;
                el.notify({ eventName: "tap", object: el });
            },
            persist: false
        }).then(function (instance) {
            console.log("firebase.init done");
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
        notificationService.getBadgeCountStatus.subscribe(function (status) { return _this.changebadgeCountStatus(status); });
    }
    DetailsAppComponent.prototype.changebadgeCountStatus = function (status) {
        this.badgeCountStatus = status;
        console.log(this.badgeCountStatus);
        if (this.badgeCountStatus == true) {
            this.getOrderSeenActivity(this.app_id);
            this.gerMessageSeenActivity(this.app_id);
        }
    };
    DetailsAppComponent.prototype.ngOnInit = function () {
        var full_location = this.location.path().split('/');
        this.app_id = full_location[2].trim();
        this.getAppDetails(this.app_id);
        this.getOrderSeenActivity(this.app_id);
        this.gerMessageSeenActivity(this.app_id);
    };
    DetailsAppComponent.prototype.pushN = function () {
        console.log("manna");
        this.notificationService.badgeCountStatus(true);
    };
    DetailsAppComponent.prototype.getAppDetails = function (id) {
        var _this = this;
        this.loader.show(this.lodaing_options);
        this.CreatedAppService.getCreatedAppDetails(id).subscribe(function (res) {
            _this.app_details = res;
            _this.app_data.logo = _this.app_details.logo;
            _this.app_data.business_name = _this.app_details.business_name;
            _this.visible_key = true;
            console.log(res);
            _this.loader.hide();
        }, function (error) {
            _this.loader.hide();
            console.log(error);
        });
    };
    DetailsAppComponent.prototype.shareApp = function () {
        SocialShare.shareText("I love NativeScript!");
    };
    DetailsAppComponent.prototype.getOrderSeenActivity = function (id) {
        var _this = this;
        this.CreatedAppService.getOrderSeenActivity(id).subscribe(function (res) {
            console.log(res);
            _this.unSeenOrder = res['unseen_count'];
            console.log(_this.unSeenOrder);
        }, function (error) {
            console.log(error);
        });
    };
    DetailsAppComponent.prototype.gerMessageSeenActivity = function (id) {
        var _this = this;
        var param = "?user=" + id + "&user_type=app_master";
        this.messageService.getChatMembersDetails(param).subscribe(function (res) {
            console.log(res);
            var total = 0;
            res.forEach(function (x) {
                total += x.unread_messages;
            });
            _this.unSeenMessage = total;
            console.log(_this.unSeenMessage);
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        core_1.ViewChild("button"),
        __metadata("design:type", core_1.ElementRef)
    ], DetailsAppComponent.prototype, "button", void 0);
    DetailsAppComponent = __decorate([
        core_1.Component({
            selector: 'details-app',
            moduleId: module.id,
            templateUrl: "details-app.component.html",
            styleUrls: ["details-app.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            created_app_service_1.CreatedAppService,
            common_1.Location,
            message_service_1.MessageService,
            notification_service_1.NotificationService])
    ], DetailsAppComponent);
    return DetailsAppComponent;
}());
exports.DetailsAppComponent = DetailsAppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlscy1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJGO0FBQzNGLDBDQUFpRDtBQUNqRCxrRkFBK0U7QUFDL0UsMENBQTJDO0FBRzNDLGlGQUFpRTtBQUNqRSx1REFBeUQ7QUFDekQsMEVBQXdFO0FBQ3hFLG9GQUFrRjtBQUVsRixJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQVF6RDtJQXNDRSw2QkFDVSxLQUFxQixFQUNyQixpQkFBb0MsRUFDcEMsUUFBa0IsRUFDbEIsY0FBOEIsRUFDOUIsbUJBQXdDO1FBTGxELGlCQXdCQztRQXZCUyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUF0Q2xELGFBQVEsR0FBRztZQUNULElBQUksRUFBRSxFQUFFO1lBQ1IsYUFBYSxFQUFFLEVBQUU7U0FDbEIsQ0FBQTtRQUVELFdBQU0sR0FBRyxJQUFJLGlEQUFnQixFQUFFLENBQUM7UUFDaEMsb0JBQWUsR0FBRztZQUNoQixPQUFPLEVBQUUsWUFBWTtZQUNyQixRQUFRLEVBQUUsSUFBSTtZQUNkLE9BQU8sRUFBRTtnQkFDUCxhQUFhLEVBQUUsSUFBSTtnQkFDbkIsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLGNBQWMsRUFBRSxVQUFVLE1BQU0sSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUEsQ0FBQyxDQUFDO2dCQUN0RSxHQUFHLEVBQUUsR0FBRztnQkFDUixvQkFBb0IsRUFBRSxTQUFTO2dCQUMvQixxQkFBcUIsRUFBRSxJQUFJO2dCQUMzQixhQUFhLEVBQUUsQ0FB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SUFBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQ3hELFVBQUMsR0FBVTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7Z0JBQ1gsS0FBSyxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUE7WUFDRixLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUNqQyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNwQixDQUFDLENBQ0YsQ0FBQTtJQUNILENBQUM7SUF2R29CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFTLGlCQUFVO3VEQUFDO0lBckM3QixtQkFBbUI7UUFQL0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7eUNBeUNpQix1QkFBYztZQUNGLHVDQUFpQjtZQUMxQixpQkFBUTtZQUNGLGdDQUFjO1lBQ1QsMENBQW1CO09BM0N2QyxtQkFBbUIsQ0FnSi9CO0lBQUQsMEJBQUM7Q0FBQSxBQWhKRCxJQWdKQztBQWhKWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDcmVhdGVkQXBwU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2NyZWF0ZWQtYXBwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFVwbG9hZFNpbmdsZUltYWdlTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9jb21wb25lbnQvdXBsb2FkLXNpbmdsZS1pbWFnZS1tb2RhbC91cGxvYWQtc2luZ2xlLWltYWdlLW1vZGFsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMb2FkaW5nSW5kaWNhdG9yIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2FkaW5nLWluZGljYXRvclwiXHJcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvc2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInVpL2J1dHRvblwiO1xyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RldGFpbHMtYXBwJyxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBgZGV0YWlscy1hcHAuY29tcG9uZW50Lmh0bWxgLFxyXG4gIHN0eWxlVXJsczogW2BkZXRhaWxzLWFwcC5jb21wb25lbnQuY3NzYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxzQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBhcHBfaWQ6IHN0cmluZztcclxuICBhcHBfZGV0YWlsczogYW55O1xyXG4gIHZpc2libGVfa2V5OiBib29sZWFuO1xyXG5cclxuICBhcHBfZGF0YSA9IHtcclxuICAgIGxvZ286ICcnLFxyXG4gICAgYnVzaW5lc3NfbmFtZTogJydcclxuICB9XHJcblxyXG4gIGxvYWRlciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XHJcbiAgbG9kYWluZ19vcHRpb25zID0ge1xyXG4gICAgbWVzc2FnZTogJ0xvYWRpbmcuLi4nLFxyXG4gICAgcHJvZ3Jlc3M6IDAuNjUsXHJcbiAgICBhbmRyb2lkOiB7XHJcbiAgICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXHJcbiAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxyXG4gICAgICBjYW5jZWxMaXN0ZW5lcjogZnVuY3Rpb24gKGRpYWxvZykgeyBjb25zb2xlLmxvZyhcIkxvYWRpbmcgY2FuY2VsbGVkXCIpIH0sXHJcbiAgICAgIG1heDogMTAwLFxyXG4gICAgICBwcm9ncmVzc051bWJlckZvcm1hdDogXCIlMWQvJTJkXCIsXHJcbiAgICAgIHByb2dyZXNzUGVyY2VudEZvcm1hdDogMC41MyxcclxuICAgICAgcHJvZ3Jlc3NTdHlsZTogMSxcclxuICAgICAgc2Vjb25kYXJ5UHJvZ3Jlc3M6IDFcclxuICAgIH0sXHJcbiAgICBpb3M6IHtcclxuICAgICAgZGV0YWlsczogXCJBZGRpdGlvbmFsIGRldGFpbCBub3RlIVwiLFxyXG4gICAgICBtYXJnaW46IDEwLFxyXG4gICAgICBkaW1CYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgICBjb2xvcjogXCIjNEI5RUQ2XCIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dcIixcclxuICAgICAgdXNlckludGVyYWN0aW9uRW5hYmxlZDogZmFsc2UsXHJcbiAgICAgIGhpZGVCZXplbDogdHJ1ZSxcclxuICAgIH1cclxuICB9XHJcbiAgdW5TZWVuT3JkZXI6IG51bWJlciA9IDA7XHJcbiAgdW5TZWVuTWVzc2FnZTogbnVtYmVyID0gMDtcclxuICBiYWRnZUNvdW50U3RhdHVzOiBib29sZWFuO1xyXG4gIEBWaWV3Q2hpbGQoXCJidXR0b25cIikgYnV0dG9uOiBFbGVtZW50UmVmO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIENyZWF0ZWRBcHBTZXJ2aWNlOiBDcmVhdGVkQXBwU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxyXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2VcclxuICApIHtcclxuICAgIHZhciAkdGhpcyA9IHRoaXM7XHJcbiAgICBmaXJlYmFzZS5pbml0KHtcclxuICAgICAgb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICBsZXQgZWw6IEJ1dHRvbiA9ICR0aGlzLmJ1dHRvbi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGVsLm5vdGlmeSh7IGV2ZW50TmFtZTogXCJ0YXBcIiwgb2JqZWN0OiBlbCB9KVxyXG4gICAgICB9LFxyXG4gICAgICBwZXJzaXN0OiBmYWxzZVxyXG4gICAgfSkudGhlbihcclxuICAgICAgaW5zdGFuY2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3I6ICR7ZXJyb3J9YCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBub3RpZmljYXRpb25TZXJ2aWNlLmdldEJhZGdlQ291bnRTdGF0dXMuc3Vic2NyaWJlKHN0YXR1cyA9PiB0aGlzLmNoYW5nZWJhZGdlQ291bnRTdGF0dXMoc3RhdHVzKSlcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYW5nZWJhZGdlQ291bnRTdGF0dXMoc3RhdHVzOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmJhZGdlQ291bnRTdGF0dXMgPSBzdGF0dXM7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmJhZGdlQ291bnRTdGF0dXMpXHJcbiAgICBpZiAodGhpcy5iYWRnZUNvdW50U3RhdHVzID09IHRydWUpIHtcclxuICAgICAgdGhpcy5nZXRPcmRlclNlZW5BY3Rpdml0eSh0aGlzLmFwcF9pZCk7XHJcbiAgICAgIHRoaXMuZ2VyTWVzc2FnZVNlZW5BY3Rpdml0eSh0aGlzLmFwcF9pZClcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHZhciBmdWxsX2xvY2F0aW9uID0gdGhpcy5sb2NhdGlvbi5wYXRoKCkuc3BsaXQoJy8nKTtcclxuICAgIHRoaXMuYXBwX2lkID0gZnVsbF9sb2NhdGlvblsyXS50cmltKCk7XHJcbiAgICB0aGlzLmdldEFwcERldGFpbHModGhpcy5hcHBfaWQpO1xyXG4gICAgdGhpcy5nZXRPcmRlclNlZW5BY3Rpdml0eSh0aGlzLmFwcF9pZCk7XHJcbiAgICB0aGlzLmdlck1lc3NhZ2VTZWVuQWN0aXZpdHkodGhpcy5hcHBfaWQpXHJcbiAgfVxyXG5cclxuICBwdXNoTigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwibWFubmFcIilcclxuICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5iYWRnZUNvdW50U3RhdHVzKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXBwRGV0YWlscyhpZCkge1xyXG4gICAgdGhpcy5sb2FkZXIuc2hvdyh0aGlzLmxvZGFpbmdfb3B0aW9ucyk7XHJcbiAgICB0aGlzLkNyZWF0ZWRBcHBTZXJ2aWNlLmdldENyZWF0ZWRBcHBEZXRhaWxzKGlkKS5zdWJzY3JpYmUoXHJcbiAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5hcHBfZGV0YWlscyA9IHJlcztcclxuICAgICAgICB0aGlzLmFwcF9kYXRhLmxvZ28gPSB0aGlzLmFwcF9kZXRhaWxzLmxvZ287XHJcbiAgICAgICAgdGhpcy5hcHBfZGF0YS5idXNpbmVzc19uYW1lID0gdGhpcy5hcHBfZGV0YWlscy5idXNpbmVzc19uYW1lO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZV9rZXkgPSB0cnVlXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgc2hhcmVBcHAoKSB7XHJcbiAgICBTb2NpYWxTaGFyZS5zaGFyZVRleHQoXCJJIGxvdmUgTmF0aXZlU2NyaXB0IVwiKTtcclxuICB9XHJcblxyXG5cclxuICBnZXRPcmRlclNlZW5BY3Rpdml0eShpZCkge1xyXG4gICAgdGhpcy5DcmVhdGVkQXBwU2VydmljZS5nZXRPcmRlclNlZW5BY3Rpdml0eShpZCkuc3Vic2NyaWJlKFxyXG4gICAgICByZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICB0aGlzLnVuU2Vlbk9yZGVyID0gcmVzWyd1bnNlZW5fY291bnQnXTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVuU2Vlbk9yZGVyKVxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIH1cclxuICAgIClcclxuICB9XHJcblxyXG5cclxuICBnZXJNZXNzYWdlU2VlbkFjdGl2aXR5KGlkKSB7XHJcbiAgICB2YXIgcGFyYW0gPSBcIj91c2VyPVwiICsgaWQgKyBcIiZ1c2VyX3R5cGU9YXBwX21hc3RlclwiXHJcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmdldENoYXRNZW1iZXJzRGV0YWlscyhwYXJhbSkuc3Vic2NyaWJlKFxyXG4gICAgICAocmVzOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICB2YXIgdG90YWwgPSAwO1xyXG4gICAgICAgIHJlcy5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgdG90YWwgKz0geC51bnJlYWRfbWVzc2FnZXM7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnVuU2Vlbk1lc3NhZ2UgPSB0b3RhbDtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVuU2Vlbk1lc3NhZ2UpXHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfVxyXG4gICAgKVxyXG4gIH1cclxuXHJcblxyXG5cclxufSJdfQ==