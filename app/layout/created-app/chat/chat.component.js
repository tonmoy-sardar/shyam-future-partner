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
        // this.socket = new WebSocket("wss://echo.websocket.org:443", []);
        // this.socket.onopen = (evt) => this.onOpen(evt)
        // this.socket.onclose = (evt) => this.onClose(evt)
        // this.socket.onmessage = (evt) => this.onMessage(evt)
        // this.socket.onerror = (evt) => this.onError(evt)
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.app_id = this.route.snapshot.params["id"];
        this.user_id = this.route.snapshot.params["user"];
        this.uri = this.route.snapshot.params["uri"];
        this.createChatSession();
    };
    ChatComponent.prototype.onOpen = function (evt) {
        var _this = this;
        console.log(evt);
        this.zone.run(function () {
            var data = {
                text: "Welcome to the chat!",
                created: new Date(),
                sender: true
            };
            _this.messages.push(data);
        });
    };
    ChatComponent.prototype.onClose = function (evt) {
        var _this = this;
        this.zone.run(function () {
            var data = {
                text: "You have been disconnected",
                created: new Date(),
                sender: true
            };
            _this.messages.push(data);
        });
    };
    ChatComponent.prototype.onMessage = function (evt) {
        var _this = this;
        console.log(evt);
        this.zone.run(function () {
            var data = {
                text: evt.data,
                created: new Date(),
                sender: false
            };
            _this.messages.push(data);
        });
    };
    ChatComponent.prototype.onError = function (evt) {
        console.log("The socket had an error", evt.error);
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        // this.socket.close();
    };
    ChatComponent.prototype.isViewed = function (message) {
        return false;
    };
    ChatComponent.prototype.send = function () {
        if (this.message) {
            // this.socket.send(this.message);
            this.sendMessageToApp();
            this.message = "";
        }
    };
    ChatComponent.prototype.createChatSession = function () {
        var _this = this;
        var data = {
            sender: this.app_id,
            sender_type: "app_master",
            receiver: this.user_id,
            receiver_type: "customer"
        };
        this.messageService.createChatSessionView(data).subscribe(function (res) {
            console.log(res);
            _this.uri = res['uri'];
            _this.getMessageList();
        }, function (error) {
            console.log(error);
        });
    };
    ChatComponent.prototype.getMessageList = function () {
        var _this = this;
        this.messageService.getMessageListByCustomer(this.uri).subscribe(function (res) {
            console.log(res);
            res['messages'].forEach(function (x) {
                var type = x['user_type'];
                var data = {
                    text: '',
                    created: new Date(),
                    sender: false
                };
                data.text = x['message'];
                if (type.toLowerCase() == "app_master") {
                    data.sender = true;
                }
                _this.messages.push(data);
            });
        }, function (error) {
            console.log(error);
        });
    };
    ChatComponent.prototype.sendMessageToApp = function () {
        var _this = this;
        var data = {
            user_id: this.app_id,
            user_type: "app_master",
            message: this.message
        };
        this.messageService.messageToCustomer(data, this.uri).subscribe(function (res) {
            console.log(res);
            var data = {
                text: '',
                created: new Date(),
                sender: true
            };
            data.text = res['message'];
            _this.messages.push(data);
        }, function (error) {
            console.log(error);
        });
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUM3RSwwQ0FBaUQ7QUFDakQsMENBQTJDO0FBQzNDLGtGQUErRTtBQUMvRSwwRUFBd0U7QUFDeEUsc0RBQStEO0FBRS9ELE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBT25DO0lBUUksdUJBQ1ksS0FBcUIsRUFDckIsUUFBa0IsRUFDbEIsY0FBOEIsRUFDOUIsTUFBd0IsRUFDeEIsSUFBWSxFQUNaLGlCQUFvQztRQUxwQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUc1QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixtRUFBbUU7UUFDbkUsaURBQWlEO1FBQ2pELG1EQUFtRDtRQUNuRCx1REFBdUQ7UUFDdkQsbURBQW1EO0lBQ3ZELENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLGlCQUFpQixF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LEdBQUc7Z0JBQ1AsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFO2dCQUNuQixNQUFNLEVBQUUsSUFBSTthQUNmLENBQUE7WUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzQixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM1QixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN0QixDQUFDLENBQ0osQ0FBQTtJQUNMLENBQUM7SUE1SlEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDcEMsQ0FBQzt5Q0FVcUIsdUJBQWM7WUFDWCxpQkFBUTtZQUNGLGdDQUFjO1lBQ3RCLHlCQUFnQjtZQUNsQixhQUFNO1lBQ08sdUNBQWlCO09BZHZDLGFBQWEsQ0E2SnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTdKRCxJQTZKQztBQTdKWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIE5nWm9uZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ3JlYXRlZEFwcFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9jcmVhdGVkLWFwcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBnZXRTdHJpbmcsIHNldFN0cmluZywgZ2V0Qm9vbGVhbiwgc2V0Qm9vbGVhbiwgY2xlYXIgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxucmVxdWlyZShcIm5hdGl2ZXNjcmlwdC13ZWJzb2NrZXRzXCIpO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY2hhdCcsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IGBjaGF0LmNvbXBvbmVudC5odG1sYCxcclxuICAgIHN0eWxlVXJsczogW2BjaGF0LmNvbXBvbmVudC5jc3NgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIGFwcF9pZDogc3RyaW5nO1xyXG4gICAgdmlzaWJsZV9rZXk6IGJvb2xlYW47XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBzb2NrZXQ6IGFueTtcclxuICAgIG1lc3NhZ2VzOiBBcnJheTxhbnk+O1xyXG4gICAgdXNlcl9pZDogc3RyaW5nO1xyXG4gICAgdXJpOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcclxuICAgICAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICAgICAgICBwcml2YXRlIENyZWF0ZWRBcHBTZXJ2aWNlOiBDcmVhdGVkQXBwU2VydmljZSxcclxuICAgICkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIlwiO1xyXG4gICAgICAgIC8vIHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldChcIndzczovL2VjaG8ud2Vic29ja2V0Lm9yZzo0NDNcIiwgW10pO1xyXG4gICAgICAgIC8vIHRoaXMuc29ja2V0Lm9ub3BlbiA9IChldnQpID0+IHRoaXMub25PcGVuKGV2dClcclxuICAgICAgICAvLyB0aGlzLnNvY2tldC5vbmNsb3NlID0gKGV2dCkgPT4gdGhpcy5vbkNsb3NlKGV2dClcclxuICAgICAgICAvLyB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSAoZXZ0KSA9PiB0aGlzLm9uTWVzc2FnZShldnQpXHJcbiAgICAgICAgLy8gdGhpcy5zb2NrZXQub25lcnJvciA9IChldnQpID0+IHRoaXMub25FcnJvcihldnQpXHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmFwcF9pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgdGhpcy51c2VyX2lkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJ1c2VyXCJdO1xyXG4gICAgICAgIHRoaXMudXJpID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJ1cmlcIl07XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDaGF0U2Vzc2lvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlbihldnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldnQpXHJcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJXZWxjb21lIHRvIHRoZSBjaGF0IVwiLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIHNlbmRlcjogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlKGV2dCkge1xyXG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiWW91IGhhdmUgYmVlbiBkaXNjb25uZWN0ZWRcIixcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBzZW5kZXI6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25NZXNzYWdlKGV2dCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2dClcclxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBldnQuZGF0YSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBzZW5kZXI6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXJyb3IoZXZ0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgc29ja2V0IGhhZCBhbiBlcnJvclwiLCBldnQuZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIHRoaXMuc29ja2V0LmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcblxyXG4gICAgaXNWaWV3ZWQobWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHNlbmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWVzc2FnZSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNvY2tldC5zZW5kKHRoaXMubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCgpO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY3JlYXRlQ2hhdFNlc3Npb24oKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHNlbmRlcjogdGhpcy5hcHBfaWQsXHJcbiAgICAgICAgICAgIHNlbmRlcl90eXBlOiBcImFwcF9tYXN0ZXJcIixcclxuICAgICAgICAgICAgcmVjZWl2ZXI6IHRoaXMudXNlcl9pZCxcclxuICAgICAgICAgICAgcmVjZWl2ZXJfdHlwZTogXCJjdXN0b21lclwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuY3JlYXRlQ2hhdFNlc3Npb25WaWV3KGRhdGEpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgIHRoaXMudXJpID0gcmVzWyd1cmknXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TWVzc2FnZUxpc3QoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldE1lc3NhZ2VMaXN0KCkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZ2V0TWVzc2FnZUxpc3RCeUN1c3RvbWVyKHRoaXMudXJpKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICByZXNbJ21lc3NhZ2VzJ10uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IHhbJ3VzZXJfdHlwZSddO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGVyOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnRleHQgPSB4WydtZXNzYWdlJ11cclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlLnRvTG93ZXJDYXNlKCkgPT0gXCJhcHBfbWFzdGVyXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnNlbmRlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgc2VuZE1lc3NhZ2VUb0FwcCgpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgdXNlcl9pZDogdGhpcy5hcHBfaWQsXHJcbiAgICAgICAgICAgIHVzZXJfdHlwZTogXCJhcHBfbWFzdGVyXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VUb0N1c3RvbWVyKGRhdGEsIHRoaXMudXJpKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRlcjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGF0YS50ZXh0ID0gcmVzWydtZXNzYWdlJ107ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKGRhdGEpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19