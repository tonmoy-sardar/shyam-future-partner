"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var created_app_service_1 = require("../../../core/services/created-app.service");
var router_2 = require("nativescript-angular/router");
var message_service_1 = require("../../../core/services/message.service");
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(route, CreatedAppService, formBuilder, router, messageService) {
        this.route = route;
        this.CreatedAppService = CreatedAppService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.messageService = messageService;
        this.processing = false;
        this.chats = [];
    }
    MessagesComponent.prototype.ngOnInit = function () {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
        this.getChatMembersDetails();
    };
    MessagesComponent.prototype.getChatMembersDetails = function () {
        var _this = this;
        var data = {
            receiver: this.app_id,
            receiver_type: "app_master"
        };
        this.messageService.getChatMembersDetails(data).subscribe(function (res) {
            console.log(res);
            res.forEach(function (x) {
                x['when'] = new Date();
                x['unread'] = x['message'].length;
                x['text'] = x['message'][x['message'].length - 1].message;
                _this.chats.push(x);
            });
        }, function (error) {
            console.log(error);
        });
    };
    MessagesComponent.prototype.goToChat = function (event) {
        console.log(event);
    };
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'messages',
            moduleId: module.id,
            templateUrl: "messages.component.html",
            styleUrls: ["messages.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            created_app_service_1.CreatedAppService,
            forms_1.FormBuilder,
            router_2.RouterExtensions,
            message_service_1.MessageService])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVzc2FnZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDBDQUFpRDtBQUNqRCx3Q0FBb0U7QUFDcEUsa0ZBQStFO0FBQy9FLHNEQUErRDtBQUMvRCwwRUFBd0U7QUFReEU7SUFNSSwyQkFDWSxLQUFxQixFQUNyQixpQkFBb0MsRUFDcEMsV0FBd0IsRUFDeEIsTUFBd0IsRUFDeEIsY0FBOEI7UUFKOUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFUMUMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUduQixVQUFLLEdBQVEsRUFBRSxDQUFBO0lBT1gsQ0FBQztJQUVMLG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxpREFBcUIsR0FBckI7UUFBQSxpQkFtQkM7UUFsQkcsSUFBSSxJQUFJLEdBQUc7WUFDUCxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDckIsYUFBYSxFQUFFLFlBQVk7U0FDOUIsQ0FBQTtRQUNELElBQUksQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUNyRCxVQUFDLEdBQVU7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2hCLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2dCQUNULENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUN2QixDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFDbEMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztnQkFDMUQsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDdEIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN0QixDQUFDLENBQ0osQ0FBQTtJQUNMLENBQUM7SUFHRCxvQ0FBUSxHQUFSLFVBQVMsS0FBSztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDdEIsQ0FBQztJQTdDUSxpQkFBaUI7UUFQN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3hDLENBQUM7eUNBU3FCLHVCQUFjO1lBQ0YsdUNBQWlCO1lBQ3ZCLG1CQUFXO1lBQ2hCLHlCQUFnQjtZQUNSLGdDQUFjO09BWGpDLGlCQUFpQixDQThDN0I7SUFBRCx3QkFBQztDQUFBLEFBOUNELElBOENDO0FBOUNZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENyZWF0ZWRBcHBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvc2VydmljZXMvY3JlYXRlZC1hcHAuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21lc3NhZ2VzJyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogYG1lc3NhZ2VzLmNvbXBvbmVudC5odG1sYCxcclxuICAgIHN0eWxlVXJsczogW2BtZXNzYWdlcy5jb21wb25lbnQuY3NzYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBwcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICBhcHBfaWQ6IHN0cmluZztcclxuICAgIHZpc2libGVfa2V5OiBib29sZWFuO1xyXG4gICAgY2hhdHM6IGFueSA9IFtdXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIENyZWF0ZWRBcHBTZXJ2aWNlOiBDcmVhdGVkQXBwU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmFwcF9pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXSk7ICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLmdldENoYXRNZW1iZXJzRGV0YWlscygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoYXRNZW1iZXJzRGV0YWlscygpe1xyXG4gICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICByZWNlaXZlcjogdGhpcy5hcHBfaWQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVyX3R5cGU6IFwiYXBwX21hc3RlclwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZ2V0Q2hhdE1lbWJlcnNEZXRhaWxzKGRhdGEpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlczogYW55W10pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgIHJlcy5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHhbJ3doZW4nXSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgeFsndW5yZWFkJ10gPSB4WydtZXNzYWdlJ10ubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHhbJ3RleHQnXSA9IHhbJ21lc3NhZ2UnXVt4WydtZXNzYWdlJ10ubGVuZ3RoIC0gMV0ubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXRzLnB1c2goeClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnb1RvQ2hhdChldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxyXG4gICAgfVxyXG59Il19