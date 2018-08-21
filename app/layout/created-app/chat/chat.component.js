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
var ChatComponent = /** @class */ (function () {
    function ChatComponent(route, location, messageService, router, zone, CreatedAppService) {
        this.route = route;
        this.location = location;
        this.messageService = messageService;
        this.router = router;
        this.zone = zone;
        this.CreatedAppService = CreatedAppService;
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
        this.createChatSession();
        this.socket = new WebSocket("ws://132.148.147.239:8001/messages/?sender=" + this.app_id + "&sender_type=app_master&receiver=" + this.user_id + "&receiver_type=customer");
        this.socket.onopen = function (evt) { return _this.onOpen(evt); };
        this.socket.onclose = function (evt) { return _this.onClose(evt); };
        this.socket.onmessage = function (evt) { return _this.onMessage(evt); };
        this.socket.onerror = function (evt) { return _this.onError(evt); };
    };
    ChatComponent.prototype.onOpen = function (evt) {
        console.log(evt);
        // this.zone.run(() => {
        //     var data = {
        //         text: "Welcome to the chat!",
        //         created: new Date(),
        //         sender: false
        //     }
        //     this.messages.push(data);
        // });
        console.log("Welcome to the chat!");
    };
    ChatComponent.prototype.onClose = function (evt) {
        // this.zone.run(() => {
        //     var data = {
        //         text: "You have been disconnected",
        //         created: new Date(),
        //         sender: false
        //     }
        //     this.messages.push(data);
        // });
        console.log("You have been disconnected");
    };
    ChatComponent.prototype.onMessage = function (evt) {
        var _this = this;
        console.log(JSON.parse(evt.data));
        var msgData = JSON.parse(evt.data);
        this.zone.run(function () {
            var data = {
                text: msgData.message,
                created: new Date()
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
        return false;
    };
    ChatComponent.prototype.send = function () {
        if (this.message) {
            var data = {
                chat_user: this.app_id,
                chat_user_type: "app_master",
                message: this.message
            };
            this.socket.send(JSON.stringify(data));
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
            _this.loader.hide();
            console.log(res);
            var thread = res['thread'];
            _this.getMessageList(thread);
        }, function (error) {
            _this.loader.hide();
            console.log(error);
        });
    };
    ChatComponent.prototype.getMessageList = function (thread) {
        var _this = this;
        this.loader.show(this.lodaing_options);
        this.messageService.getMessageListByCustomer(thread).subscribe(function (res) {
            console.log(res);
            res.forEach(function (x) {
                var data = {
                    text: x.message,
                    created: x.datetime
                };
                if (x.chat_user == _this.app_id) {
                    data['sender'] = true;
                }
                else {
                    data['sender'] = false;
                }
                _this.messages.push(data);
                console.log(_this.messages);
                _this.scrollToBottom();
            });
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
            created_app_service_1.CreatedAppService])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRztBQUNwRywwQ0FBaUQ7QUFDakQsMENBQTJDO0FBQzNDLGtGQUErRTtBQUMvRSwwRUFBd0U7QUFDeEUsc0RBQStEO0FBRS9ELE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ25DLGlGQUFrRTtBQVFsRTtJQWtDSSx1QkFDWSxLQUFxQixFQUNyQixRQUFrQixFQUNsQixjQUE4QixFQUM5QixNQUF3QixFQUN4QixJQUFZLEVBQ1osaUJBQW9DO1FBTHBDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBL0JoRCxXQUFNLEdBQUcsSUFBSSxpREFBZ0IsRUFBRSxDQUFDO1FBQ2hDLG9CQUFlLEdBQUc7WUFDZCxPQUFPLEVBQUUsWUFBWTtZQUNyQixRQUFRLEVBQUUsSUFBSTtZQUNkLE9BQU8sRUFBRTtnQkFDTCxhQUFhLEVBQUUsSUFBSTtnQkFDbkIsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLGNBQWMsRUFBRSxVQUFVLE1BQU0sSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUEsQ0FBQyxDQUFDO2dCQUN0RSxHQUFHLEVBQUUsR0FBRztnQkFDUixvQkFBb0IsRUFBRSxTQUFTO2dCQUMvQixxQkFBcUIsRUFBRSxJQUFJO2dCQUMzQixhQUFhLEVBQUUsQ0FBQztnQkFDaEIsaUJBQWlCLEVBQUUsQ0FBQzthQUN2QjtZQUNELEdBQUcsRUFBRTtnQkFDRCxPQUFPLEVBQUUseUJBQXlCO2dCQUNsQyxNQUFNLEVBQUUsRUFBRTtn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Q0FBaUI7T0F4Q3ZDLGFBQWEsQ0EyTHpCO0lBQUQsb0JBQUM7Q0FBQSxBQTNMRCxJQTJMQztBQTNMWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIE5nWm9uZSwgSW5qZWN0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDcmVhdGVkQXBwU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2NyZWF0ZWQtYXBwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nLCBnZXRCb29sZWFuLCBzZXRCb29sZWFuLCBjbGVhciB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5yZXF1aXJlKFwibmF0aXZlc2NyaXB0LXdlYnNvY2tldHNcIik7XHJcbmltcG9ydCB7IExvYWRpbmdJbmRpY2F0b3IgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY2hhdCcsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IGBjaGF0LmNvbXBvbmVudC5odG1sYCxcclxuICAgIHN0eWxlVXJsczogW2BjaGF0LmNvbXBvbmVudC5jc3NgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIGFwcF9pZDogc3RyaW5nO1xyXG4gICAgdmlzaWJsZV9rZXk6IGJvb2xlYW47XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBzb2NrZXQ6IGFueTtcclxuICAgIG1lc3NhZ2VzOiBBcnJheTxhbnk+O1xyXG4gICAgdXNlcl9pZDogc3RyaW5nO1xyXG4gICAgQFZpZXdDaGlsZChcIlNjcm9sbExpc3RcIikgc2Nyb2xsTGlzdDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBsb2FkZXIgPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xyXG4gICAgbG9kYWluZ19vcHRpb25zID0ge1xyXG4gICAgICAgIG1lc3NhZ2U6ICdMb2FkaW5nLi4uJyxcclxuICAgICAgICBwcm9ncmVzczogMC42NSxcclxuICAgICAgICBhbmRyb2lkOiB7XHJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYW5jZWxMaXN0ZW5lcjogZnVuY3Rpb24gKGRpYWxvZykgeyBjb25zb2xlLmxvZyhcIkxvYWRpbmcgY2FuY2VsbGVkXCIpIH0sXHJcbiAgICAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICAgICBwcm9ncmVzc051bWJlckZvcm1hdDogXCIlMWQvJTJkXCIsXHJcbiAgICAgICAgICAgIHByb2dyZXNzUGVyY2VudEZvcm1hdDogMC41MyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3NTdHlsZTogMSxcclxuICAgICAgICAgICAgc2Vjb25kYXJ5UHJvZ3Jlc3M6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlvczoge1xyXG4gICAgICAgICAgICBkZXRhaWxzOiBcIkFkZGl0aW9uYWwgZGV0YWlsIG5vdGUhXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogMTAsXHJcbiAgICAgICAgICAgIGRpbUJhY2tncm91bmQ6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiM0QjlFRDZcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd1wiLFxyXG4gICAgICAgICAgICB1c2VySW50ZXJhY3Rpb25FbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgaGlkZUJlemVsOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcclxuICAgICAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICAgICAgICBwcml2YXRlIENyZWF0ZWRBcHBTZXJ2aWNlOiBDcmVhdGVkQXBwU2VydmljZSxcclxuICAgICkge1xyXG5cclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gW107XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJcIjtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHZhciBmdWxsX2xvY2F0aW9uID0gdGhpcy5sb2NhdGlvbi5wYXRoKCkuc3BsaXQoJy8nKTtcclxuICAgICAgICB0aGlzLmFwcF9pZCA9IGZ1bGxfbG9jYXRpb25bMl0udHJpbSgpO1xyXG4gICAgICAgIHRoaXMudXNlcl9pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1widXNlclwiXTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUNoYXRTZXNzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KFwid3M6Ly8xMzIuMTQ4LjE0Ny4yMzk6ODAwMS9tZXNzYWdlcy8/c2VuZGVyPVwiICsgdGhpcy5hcHBfaWQgKyBcIiZzZW5kZXJfdHlwZT1hcHBfbWFzdGVyJnJlY2VpdmVyPVwiICsgdGhpcy51c2VyX2lkICsgXCImcmVjZWl2ZXJfdHlwZT1jdXN0b21lclwiKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSAoZXZ0KSA9PiB0aGlzLm9uT3BlbihldnQpXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9IChldnQpID0+IHRoaXMub25DbG9zZShldnQpXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gKGV2dCkgPT4gdGhpcy5vbk1lc3NhZ2UoZXZ0KVxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uZXJyb3IgPSAoZXZ0KSA9PiB0aGlzLm9uRXJyb3IoZXZ0KVxyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlbihldnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldnQpXHJcbiAgICAgICAgLy8gdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGV4dDogXCJXZWxjb21lIHRvIHRoZSBjaGF0IVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgY3JlYXRlZDogbmV3IERhdGUoKSxcclxuICAgICAgICAvLyAgICAgICAgIHNlbmRlcjogZmFsc2VcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJXZWxjb21lIHRvIHRoZSBjaGF0IVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlKGV2dCkge1xyXG4gICAgICAgIC8vIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAvLyAgICAgICAgIHRleHQ6IFwiWW91IGhhdmUgYmVlbiBkaXNjb25uZWN0ZWRcIixcclxuICAgICAgICAvLyAgICAgICAgIGNyZWF0ZWQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgLy8gICAgICAgICBzZW5kZXI6IGZhbHNlXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKGRhdGEpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiWW91IGhhdmUgYmVlbiBkaXNjb25uZWN0ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25NZXNzYWdlKGV2dCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoZXZ0LmRhdGEpKVxyXG4gICAgICAgIHZhciBtc2dEYXRhID0gSlNPTi5wYXJzZShldnQuZGF0YSlcclxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBtc2dEYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1zZ0RhdGEuY2hhdF91c2VyID09IHRoaXMuYXBwX2lkKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhWydzZW5kZXInXSA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRhdGFbJ3NlbmRlciddID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVycm9yKGV2dCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIHNvY2tldCBoYWQgYW4gZXJyb3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zb2NrZXQuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGlzVmlld2VkKG1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBzZW5kKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBjaGF0X3VzZXI6IHRoaXMuYXBwX2lkLFxyXG4gICAgICAgICAgICAgICAgY2hhdF91c2VyX3R5cGU6IFwiYXBwX21hc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjcmVhdGVDaGF0U2Vzc2lvbigpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgY2hhdF91c2VyOiAnJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgICAgIGNoYXRfdXNlcl90eXBlOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcGFyYW0gPSBcIj9zZW5kZXI9XCIgKyB0aGlzLmFwcF9pZCArIFwiJnNlbmRlcl90eXBlPWFwcF9tYXN0ZXImcmVjZWl2ZXI9XCIgKyB0aGlzLnVzZXJfaWQgKyBcIiZyZWNlaXZlcl90eXBlPWN1c3RvbWVyXCJcclxuICAgICAgICB0aGlzLmxvYWRlci5zaG93KHRoaXMubG9kYWluZ19vcHRpb25zKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmNyZWF0ZUNoYXRTZXNzaW9uVmlldyhwYXJhbSwgZGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgdmFyIHRocmVhZCA9IHJlc1sndGhyZWFkJ11cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TWVzc2FnZUxpc3QodGhyZWFkKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldE1lc3NhZ2VMaXN0KHRocmVhZCkge1xyXG4gICAgICAgIHRoaXMubG9hZGVyLnNob3codGhpcy5sb2RhaW5nX29wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZ2V0TWVzc2FnZUxpc3RCeUN1c3RvbWVyKHRocmVhZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgcmVzLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHgubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZDogeC5kYXRldGltZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoeC5jaGF0X3VzZXIgPT0gdGhpcy5hcHBfaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVsnc2VuZGVyJ10gPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhWydzZW5kZXInXSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWVzc2FnZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNjcm9sbFRvQm90dG9tKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbExpc3QubmF0aXZlRWxlbWVudC5zY3JvbGxUb1ZlcnRpY2FsT2Zmc2V0KDEwMDAwMCk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbn0iXX0=