"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var created_app_service_1 = require("../../../core/services/created-app.service");
var message_service_1 = require("../../../core/services/message.service");
var router_2 = require("nativescript-angular/router");
require("nativescript-websockets");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(route, location, messageService, router, zone, CreatedAppService) {
        this.route = route;
        this.location = location;
        this.messageService = messageService;
        this.router = router;
        this.zone = zone;
        this.CreatedAppService = CreatedAppService;
        this.messages = [];
        this.message = "";
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.app_id = this.route.snapshot.params["id"];
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
                created: msgData.datetime
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
        this.messageService.createChatSessionView(param, data).subscribe(function (res) {
            console.log(res);
            var thread = res['thread'];
            _this.getMessageList(thread);
        }, function (error) {
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
        }, function (error) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRztBQUNwRywwQ0FBaUQ7QUFDakQsMENBQTJDO0FBQzNDLGtGQUErRTtBQUMvRSwwRUFBd0U7QUFDeEUsc0RBQStEO0FBRS9ELE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBT25DO0lBUUksdUJBQ1ksS0FBcUIsRUFDckIsUUFBa0IsRUFDbEIsY0FBOEIsRUFDOUIsTUFBd0IsRUFDeEIsSUFBWSxFQUNaLGlCQUFvQztRQUxwQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUc1QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0QsZ0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQyw2Q0FBNkMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLG1DQUFtQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcseUJBQXlCLENBQUMsQ0FBQztRQUMx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ZHZDLGFBQWEsQ0EwSnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTFKRCxJQTBKQztBQTFKWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIE5nWm9uZSwgSW5qZWN0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDcmVhdGVkQXBwU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2NyZWF0ZWQtYXBwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nLCBnZXRCb29sZWFuLCBzZXRCb29sZWFuLCBjbGVhciB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5yZXF1aXJlKFwibmF0aXZlc2NyaXB0LXdlYnNvY2tldHNcIik7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjaGF0JyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogYGNoYXQuY29tcG9uZW50Lmh0bWxgLFxyXG4gICAgc3R5bGVVcmxzOiBbYGNoYXQuY29tcG9uZW50LmNzc2BdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgYXBwX2lkOiBzdHJpbmc7XHJcbiAgICB2aXNpYmxlX2tleTogYm9vbGVhbjtcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIHNvY2tldDogYW55O1xyXG4gICAgbWVzc2FnZXM6IEFycmF5PGFueT47XHJcbiAgICB1c2VyX2lkOiBzdHJpbmc7XHJcbiAgICBAVmlld0NoaWxkKFwiU2Nyb2xsTGlzdFwiKSBzY3JvbGxMaXN0OiBFbGVtZW50UmVmO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICAgICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcbiAgICAgICAgcHJpdmF0ZSBDcmVhdGVkQXBwU2VydmljZTogQ3JlYXRlZEFwcFNlcnZpY2UsXHJcbiAgICApIHtcclxuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmFwcF9pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgdGhpcy51c2VyX2lkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJ1c2VyXCJdO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hhdFNlc3Npb24oKTtcclxuICAgICAgICB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoXCJ3czovLzEzMi4xNDguMTQ3LjIzOTo4MDAxL21lc3NhZ2VzLz9zZW5kZXI9XCIgKyB0aGlzLmFwcF9pZCArIFwiJnNlbmRlcl90eXBlPWFwcF9tYXN0ZXImcmVjZWl2ZXI9XCIgKyB0aGlzLnVzZXJfaWQgKyBcIiZyZWNlaXZlcl90eXBlPWN1c3RvbWVyXCIpO1xyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9IChldnQpID0+IHRoaXMub25PcGVuKGV2dClcclxuICAgICAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gKGV2dCkgPT4gdGhpcy5vbkNsb3NlKGV2dClcclxuICAgICAgICB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSAoZXZ0KSA9PiB0aGlzLm9uTWVzc2FnZShldnQpXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub25lcnJvciA9IChldnQpID0+IHRoaXMub25FcnJvcihldnQpXHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuKGV2dCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2dClcclxuICAgICAgICAvLyB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0ZXh0OiBcIldlbGNvbWUgdG8gdGhlIGNoYXQhXCIsXHJcbiAgICAgICAgLy8gICAgICAgICBjcmVhdGVkOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIC8vICAgICAgICAgc2VuZGVyOiBmYWxzZVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIHRoaXMubWVzc2FnZXMucHVzaChkYXRhKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIldlbGNvbWUgdG8gdGhlIGNoYXQhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2UoZXZ0KSB7XHJcbiAgICAgICAgLy8gdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGV4dDogXCJZb3UgaGF2ZSBiZWVuIGRpc2Nvbm5lY3RlZFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgY3JlYXRlZDogbmV3IERhdGUoKSxcclxuICAgICAgICAvLyAgICAgICAgIHNlbmRlcjogZmFsc2VcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJZb3UgaGF2ZSBiZWVuIGRpc2Nvbm5lY3RlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1lc3NhZ2UoZXZ0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShldnQuZGF0YSkpXHJcbiAgICAgICAgdmFyIG1zZ0RhdGEgPSBKU09OLnBhcnNlKGV2dC5kYXRhKVxyXG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IG1zZ0RhdGEubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWQ6IG1zZ0RhdGEuZGF0ZXRpbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobXNnRGF0YS5jaGF0X3VzZXIgPT0gdGhpcy5hcHBfaWQpIHtcclxuICAgICAgICAgICAgICAgIGRhdGFbJ3NlbmRlciddID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGF0YVsnc2VuZGVyJ10gPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXJyb3IoZXZ0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgc29ja2V0IGhhZCBhbiBlcnJvclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICAvLyB0aGlzLnNvY2tldC5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgaXNWaWV3ZWQobWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHNlbmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWVzc2FnZSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGNoYXRfdXNlcjogdGhpcy5hcHBfaWQsXHJcbiAgICAgICAgICAgICAgICBjaGF0X3VzZXJfdHlwZTogXCJhcHBfbWFzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNyZWF0ZUNoYXRTZXNzaW9uKCkge1xyXG4gICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICBjaGF0X3VzZXI6ICcnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICAgICAgY2hhdF91c2VyX3R5cGU6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwYXJhbSA9IFwiP3NlbmRlcj1cIiArIHRoaXMuYXBwX2lkICsgXCImc2VuZGVyX3R5cGU9YXBwX21hc3RlciZyZWNlaXZlcj1cIiArIHRoaXMudXNlcl9pZCArIFwiJnJlY2VpdmVyX3R5cGU9Y3VzdG9tZXJcIlxyXG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuY3JlYXRlQ2hhdFNlc3Npb25WaWV3KHBhcmFtLCBkYXRhKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICB2YXIgdGhyZWFkID0gcmVzWyd0aHJlYWQnXVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRNZXNzYWdlTGlzdCh0aHJlYWQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0TWVzc2FnZUxpc3QodGhyZWFkKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5nZXRNZXNzYWdlTGlzdEJ5Q3VzdG9tZXIodGhyZWFkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXM6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICByZXMuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogeC5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkOiB4LmRhdGV0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4LmNoYXRfdXNlciA9PSB0aGlzLmFwcF9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhWydzZW5kZXInXSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbJ3NlbmRlciddID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5tZXNzYWdlcylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvQm90dG9tKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2Nyb2xsVG9Cb3R0b20oKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsTGlzdC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvVmVydGljYWxPZmZzZXQoMTAwMDAwKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxufSJdfQ==