"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var created_app_service_1 = require("../../../core/services/created-app.service");
var message_service_1 = require("../../../core/services/message.service");
var router_2 = require("nativescript-angular/router");
require("nativescript-websockets");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var notification_service_1 = require("../../../core/services/notification.service");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(route, location, messageService, router, zone, CreatedAppService, notificationService) {
        this.route = route;
        this.location = location;
        this.messageService = messageService;
        this.router = router;
        this.zone = zone;
        this.CreatedAppService = CreatedAppService;
        this.notificationService = notificationService;
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
        this.messages = [];
        this.message = "";
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var full_location = this.location.path().split('/');
        this.app_id = full_location[2].trim();
        this.user_id = this.route.snapshot.params["user"];
        this.getCustomerDeviceToken(this.user_id);
        this.createChatSession();
        this.socket = new WebSocket("ws://132.148.147.239:8001/messages/?sender=" + this.app_id + "&sender_type=app_master&receiver=" + this.user_id + "&receiver_type=customer");
        this.socket.onopen = function (evt) { return _this.onOpen(evt); };
        this.socket.onclose = function (evt) { return _this.onClose(evt); };
        this.socket.onmessage = function (evt) { return _this.onMessage(evt); };
        this.socket.onerror = function (evt) { return _this.onError(evt); };
    };
    ChatComponent.prototype.getCustomerDeviceToken = function (id) {
        var _this = this;
        this.notificationService.getCustomerDeviceToken(id).subscribe(function (res) {
            console.log(res);
            _this.customer_device_token = res['customer_device_token'];
        }, function (error) {
            console.log(error);
        });
    };
    ChatComponent.prototype.pushNotf = function (message) {
        var value = {
            title: "BanaoApp(new message)",
            subtitle: "New message",
            text: message
        };
        this.notificationService.sendPushNotification(this.customer_device_token, value).subscribe(function (res) {
            console.log(res);
        }, function (error) {
            console.log(error);
        });
    };
    ChatComponent.prototype.onOpen = function (evt) {
        console.log(evt);
        console.log("Welcome to the chat!");
    };
    ChatComponent.prototype.onClose = function (evt) {
        console.log("You have been disconnected");
    };
    ChatComponent.prototype.onMessage = function (evt) {
        var _this = this;
        console.log(JSON.parse(evt.data));
        var msgData = JSON.parse(evt.data);
        this.zone.run(function () {
            var data = {
                text: msgData.message,
                created: new Date(),
                read_status: true
            };
            if (msgData.chat_user == _this.app_id) {
                data['sender'] = true;
            }
            else {
                data['sender'] = false;
            }
            _this.messages.push(data);
            _this.scrollToBottom();
        });
    };
    ChatComponent.prototype.onError = function (evt) {
        console.log("The socket had an error");
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        // this.socket.close();
    };
    ChatComponent.prototype.isViewed = function (message) {
        if (message.read_status) {
            return true;
        }
        else {
            return false;
        }
    };
    ChatComponent.prototype.send = function () {
        if (this.message) {
            var data = {
                chat_user: this.app_id,
                chat_user_type: "app_master",
                message: this.message
            };
            this.socket.send(JSON.stringify(data));
            this.pushNotf(this.message);
            this.message = "";
        }
    };
    ChatComponent.prototype.createChatSession = function () {
        var _this = this;
        var data = {
            chat_user: '',
            message: '',
            chat_user_type: ''
        };
        var param = "?sender=" + this.app_id + "&sender_type=app_master&receiver=" + this.user_id + "&receiver_type=customer";
        this.loader.show(this.lodaing_options);
        this.messageService.createChatSessionView(param, data).subscribe(function (res) {
            console.log(res);
            var thread = res['thread'];
            _this.viewMessages(thread);
        }, function (error) {
            _this.loader.hide();
            console.log(error);
        });
    };
    ChatComponent.prototype.viewMessages = function (thread) {
        var _this = this;
        var param = "?user=" + this.user_id + "&user_type=customer&thread_id=" + thread;
        this.messageService.viewMessages(param).subscribe(function (res) {
            console.log(res);
            _this.getMessageList(thread);
        }, function (error) {
            _this.loader.hide();
            console.log(error);
        });
    };
    ChatComponent.prototype.getMessageList = function (thread) {
        var _this = this;
        this.messageService.getMessageListByCustomer(thread).subscribe(function (res) {
            console.log(res);
            res.forEach(function (x) {
                var data = {
                    text: x.message,
                    created: x.datetime,
                    read_status: x.read_status
                };
                if (x.chat_user == _this.app_id) {
                    data['sender'] = true;
                }
                else {
                    data['sender'] = false;
                }
                _this.messages.push(data);
            });
            console.log(_this.messages);
            _this.scrollToBottom();
            _this.loader.hide();
        }, function (error) {
            _this.loader.hide();
            console.log(error);
        });
    };
    ChatComponent.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.scrollList.nativeElement.scrollToVerticalOffset(100000);
        }, 1000);
    };
    __decorate([
        core_1.ViewChild("ScrollList"),
        __metadata("design:type", core_1.ElementRef)
    ], ChatComponent.prototype, "scrollList", void 0);
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'chat',
            moduleId: module.id,
            templateUrl: "chat.component.html",
            styleUrls: ["chat.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            common_1.Location,
            message_service_1.MessageService,
            router_2.RouterExtensions,
            core_1.NgZone,
            created_app_service_1.CreatedAppService,
            notification_service_1.NotificationService])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRztBQUNwRywwQ0FBaUQ7QUFDakQsMENBQTJDO0FBQzNDLGtGQUErRTtBQUMvRSwwRUFBd0U7QUFDeEUsc0RBQStEO0FBRS9ELE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ25DLGlGQUFrRTtBQUNsRSxvRkFBa0Y7QUFRbEY7SUFrQ0ksdUJBQ1ksS0FBcUIsRUFDckIsUUFBa0IsRUFDbEIsY0FBOEIsRUFDOUIsTUFBd0IsRUFDeEIsSUFBWSxFQUNaLGlCQUFvQyxFQUNwQyxtQkFBd0M7UUFOeEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQWhDcEQsV0FBTSxHQUFHLElBQUksaURBQWdCLEVBQUUsQ0FBQztRQUNoQyxvQkFBZSxHQUFHO1lBQ2QsT0FBTyxFQUFFLFlBQVk7WUFDckIsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUU7Z0JBQ0wsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixjQUFjLEVBQUUsVUFBVSxNQUFNLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztnQkFDdEUsR0FBRyxFQUFFLEdBQUc7Z0JBQ1Isb0JBQW9CLEVBQUUsU0FBUztnQkFDL0IscUJBQXFCLEVBQUUsSUFBSTtnQkFDM0IsYUFBYSxFQUFFLENBQUM7Z0JBQ2hCLGlCQUFpQixFQUFFLENBQUM7YUFDdkI7WUFD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QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDcEMsQ0FBQzt5Q0FvQ3FCLHVCQUFjO1lBQ1gsaUJBQVE7WUFDRixnQ0FBYztZQUN0Qix5QkFBZ0I7WUFDbEIsYUFBTTtZQUNPLHVDQUFpQjtZQUNmLDBDQUFtQjtPQXpDM0MsYUFBYSxDQThOekI7SUFBRCxvQkFBQztDQUFBLEFBOU5ELElBOE5DO0FBOU5ZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgTmdab25lLCBJbmplY3QsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENyZWF0ZWRBcHBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvc2VydmljZXMvY3JlYXRlZC1hcHAuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIGdldEJvb2xlYW4sIHNldEJvb2xlYW4sIGNsZWFyIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbnJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtd2Vic29ja2V0c1wiKTtcclxuaW1wb3J0IHsgTG9hZGluZ0luZGljYXRvciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIjtcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY2hhdCcsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IGBjaGF0LmNvbXBvbmVudC5odG1sYCxcclxuICAgIHN0eWxlVXJsczogW2BjaGF0LmNvbXBvbmVudC5jc3NgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIGFwcF9pZDogc3RyaW5nO1xyXG4gICAgdmlzaWJsZV9rZXk6IGJvb2xlYW47XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBzb2NrZXQ6IGFueTtcclxuICAgIG1lc3NhZ2VzOiBBcnJheTxhbnk+O1xyXG4gICAgdXNlcl9pZDogc3RyaW5nO1xyXG4gICAgQFZpZXdDaGlsZChcIlNjcm9sbExpc3RcIikgc2Nyb2xsTGlzdDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBsb2FkZXIgPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xyXG4gICAgbG9kYWluZ19vcHRpb25zID0ge1xyXG4gICAgICAgIG1lc3NhZ2U6ICdMb2FkaW5nLi4uJyxcclxuICAgICAgICBwcm9ncmVzczogMC42NSxcclxuICAgICAgICBhbmRyb2lkOiB7XHJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYW5jZWxMaXN0ZW5lcjogZnVuY3Rpb24gKGRpYWxvZykgeyBjb25zb2xlLmxvZyhcIkxvYWRpbmcgY2FuY2VsbGVkXCIpIH0sXHJcbiAgICAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICAgICBwcm9ncmVzc051bWJlckZvcm1hdDogXCIlMWQvJTJkXCIsXHJcbiAgICAgICAgICAgIHByb2dyZXNzUGVyY2VudEZvcm1hdDogMC41MyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3NTdHlsZTogMSxcclxuICAgICAgICAgICAgc2Vjb25kYXJ5UHJvZ3Jlc3M6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlvczoge1xyXG4gICAgICAgICAgICBkZXRhaWxzOiBcIkFkZGl0aW9uYWwgZGV0YWlsIG5vdGUhXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogMTAsXHJcbiAgICAgICAgICAgIGRpbUJhY2tncm91bmQ6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiM0QjlFRDZcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd1wiLFxyXG4gICAgICAgICAgICB1c2VySW50ZXJhY3Rpb25FbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgaGlkZUJlemVsOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcclxuICAgICAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICAgICAgICBwcml2YXRlIENyZWF0ZWRBcHBTZXJ2aWNlOiBDcmVhdGVkQXBwU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2VcclxuICAgICkge1xyXG5cclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gW107XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJcIjtcclxuICAgIH1cclxuICAgIGN1c3RvbWVyX2RldmljZV90b2tlbjogc3RyaW5nO1xyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdmFyIGZ1bGxfbG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uLnBhdGgoKS5zcGxpdCgnLycpO1xyXG4gICAgICAgIHRoaXMuYXBwX2lkID0gZnVsbF9sb2NhdGlvblsyXS50cmltKCk7XHJcbiAgICAgICAgdGhpcy51c2VyX2lkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJ1c2VyXCJdO1xyXG4gICAgICAgIHRoaXMuZ2V0Q3VzdG9tZXJEZXZpY2VUb2tlbih0aGlzLnVzZXJfaWQpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hhdFNlc3Npb24oKTtcclxuICAgICAgICB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoXCJ3czovLzEzMi4xNDguMTQ3LjIzOTo4MDAxL21lc3NhZ2VzLz9zZW5kZXI9XCIgKyB0aGlzLmFwcF9pZCArIFwiJnNlbmRlcl90eXBlPWFwcF9tYXN0ZXImcmVjZWl2ZXI9XCIgKyB0aGlzLnVzZXJfaWQgKyBcIiZyZWNlaXZlcl90eXBlPWN1c3RvbWVyXCIpO1xyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9IChldnQpID0+IHRoaXMub25PcGVuKGV2dClcclxuICAgICAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gKGV2dCkgPT4gdGhpcy5vbkNsb3NlKGV2dClcclxuICAgICAgICB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSAoZXZ0KSA9PiB0aGlzLm9uTWVzc2FnZShldnQpXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub25lcnJvciA9IChldnQpID0+IHRoaXMub25FcnJvcihldnQpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VzdG9tZXJEZXZpY2VUb2tlbihpZCkge1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5nZXRDdXN0b21lckRldmljZVRva2VuKGlkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyX2RldmljZV90b2tlbiA9IHJlc1snY3VzdG9tZXJfZGV2aWNlX3Rva2VuJ11cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcHVzaE5vdGYobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJCYW5hb0FwcChuZXcgbWVzc2FnZSlcIixcclxuICAgICAgICAgICAgc3VidGl0bGU6IFwiTmV3IG1lc3NhZ2VcIixcclxuICAgICAgICAgICAgdGV4dDogbWVzc2FnZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uuc2VuZFB1c2hOb3RpZmljYXRpb24odGhpcy5jdXN0b21lcl9kZXZpY2VfdG9rZW4sIHZhbHVlKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlbihldnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldnQpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJXZWxjb21lIHRvIHRoZSBjaGF0IVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlKGV2dCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiWW91IGhhdmUgYmVlbiBkaXNjb25uZWN0ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25NZXNzYWdlKGV2dCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoZXZ0LmRhdGEpKVxyXG4gICAgICAgIHZhciBtc2dEYXRhID0gSlNPTi5wYXJzZShldnQuZGF0YSlcclxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBtc2dEYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgcmVhZF9zdGF0dXM6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobXNnRGF0YS5jaGF0X3VzZXIgPT0gdGhpcy5hcHBfaWQpIHtcclxuICAgICAgICAgICAgICAgIGRhdGFbJ3NlbmRlciddID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGF0YVsnc2VuZGVyJ10gPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXJyb3IoZXZ0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgc29ja2V0IGhhZCBhbiBlcnJvclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICAvLyB0aGlzLnNvY2tldC5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgaXNWaWV3ZWQobWVzc2FnZSkge1xyXG4gICAgICAgIGlmIChtZXNzYWdlLnJlYWRfc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgY2hhdF91c2VyOiB0aGlzLmFwcF9pZCxcclxuICAgICAgICAgICAgICAgIGNoYXRfdXNlcl90eXBlOiBcImFwcF9tYXN0ZXJcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICB0aGlzLnB1c2hOb3RmKHRoaXMubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjcmVhdGVDaGF0U2Vzc2lvbigpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgY2hhdF91c2VyOiAnJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgICAgIGNoYXRfdXNlcl90eXBlOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcGFyYW0gPSBcIj9zZW5kZXI9XCIgKyB0aGlzLmFwcF9pZCArIFwiJnNlbmRlcl90eXBlPWFwcF9tYXN0ZXImcmVjZWl2ZXI9XCIgKyB0aGlzLnVzZXJfaWQgKyBcIiZyZWNlaXZlcl90eXBlPWN1c3RvbWVyXCJcclxuICAgICAgICB0aGlzLmxvYWRlci5zaG93KHRoaXMubG9kYWluZ19vcHRpb25zKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmNyZWF0ZUNoYXRTZXNzaW9uVmlldyhwYXJhbSwgZGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgdmFyIHRocmVhZCA9IHJlc1sndGhyZWFkJ11cclxuICAgICAgICAgICAgICAgIHRoaXMudmlld01lc3NhZ2VzKHRocmVhZClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgdmlld01lc3NhZ2VzKHRocmVhZCkge1xyXG4gICAgICAgIHZhciBwYXJhbSA9IFwiP3VzZXI9XCIgKyB0aGlzLnVzZXJfaWQgKyBcIiZ1c2VyX3R5cGU9Y3VzdG9tZXImdGhyZWFkX2lkPVwiICsgdGhyZWFkO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uudmlld01lc3NhZ2VzKHBhcmFtKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldE1lc3NhZ2VMaXN0KHRocmVhZCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRNZXNzYWdlTGlzdCh0aHJlYWQpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmdldE1lc3NhZ2VMaXN0QnlDdXN0b21lcih0aHJlYWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlczogYW55W10pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgIHJlcy5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB4Lm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQ6IHguZGF0ZXRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRfc3RhdHVzOiB4LnJlYWRfc3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4LmNoYXRfdXNlciA9PSB0aGlzLmFwcF9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhWydzZW5kZXInXSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbJ3NlbmRlciddID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKGRhdGEpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5tZXNzYWdlcylcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNjcm9sbFRvQm90dG9tKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbExpc3QubmF0aXZlRWxlbWVudC5zY3JvbGxUb1ZlcnRpY2FsT2Zmc2V0KDEwMDAwMCk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbn0iXX0=