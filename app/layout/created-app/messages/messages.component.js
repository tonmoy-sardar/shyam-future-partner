"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var created_app_service_1 = require("../../../core/services/created-app.service");
var router_2 = require("nativescript-angular/router");
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(route, CreatedAppService, formBuilder, router) {
        this.route = route;
        this.CreatedAppService = CreatedAppService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.processing = false;
        this.chats = [];
    }
    MessagesComponent.prototype.ngOnInit = function () {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
        this.chats = [
            {
                contact: {
                    avatar: '~/images/shyam-wheel.png',
                    name: 'BM K'
                },
                type: 'DIRECT',
                when: new Date(),
                unread: parseInt(Math.random() * 10 + '', 10) - 3,
                text: 'Hi',
            },
            {
                contact: {
                    avatar: '~/images/shyam-wheel.png',
                    name: 'SR L'
                },
                type: 'DIRECT',
                when: new Date(),
                unread: parseInt(Math.random() * 10 + '', 10) - 3,
                text: 'how are you',
            },
            {
                contact: {
                    avatar: '~/images/shyam-wheel.png',
                    name: 'AK Sharma'
                },
                type: 'DIRECT',
                when: new Date(),
                unread: parseInt(Math.random() * 10 + '', 10) - 3,
                text: 'How the days?',
            }
        ];
    };
    MessagesComponent.prototype.goToChat = function (event) {
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
            router_2.RouterExtensions])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVzc2FnZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDBDQUFpRDtBQUNqRCx3Q0FBb0U7QUFDcEUsa0ZBQStFO0FBQy9FLHNEQUErRDtBQVMvRDtJQVFJLDJCQUNZLEtBQXFCLEVBQ3JCLGlCQUFvQyxFQUNwQyxXQUF3QixFQUN4QixNQUF3QjtRQUh4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBVnBDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFLbkIsVUFBSyxHQUFRLEVBQUUsQ0FBQTtJQU1YLENBQUM7SUFFTCxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1Q7Z0JBQ0ksT0FBTyxFQUFFO29CQUNMLE1BQU0sRUFBRSwwQkFBMEI7b0JBQ2xDLElBQUksRUFBRSxNQUFNO2lCQUNmO2dCQUNELElBQUksRUFBRSxRQUFRO2dCQUNkLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtnQkFDaEIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDO2dCQUNqRCxJQUFJLEVBQUUsSUFBSTthQUNiO1lBQ0Q7Z0JBQ0ksT0FBTyxFQUFFO29CQUNMLE1BQU0sRUFBRSwwQkFBMEI7b0JBQ2xDLElBQUksRUFBRSxNQUFNO2lCQUNmO2dCQUNELElBQUksRUFBRSxRQUFRO2dCQUNkLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtnQkFDaEIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDO2dCQUNqRCxJQUFJLEVBQUUsYUFBYTthQUN0QjtZQUNEO2dCQUNJLE9BQU8sRUFBRTtvQkFDTCxNQUFNLEVBQUUsMEJBQTBCO29CQUNsQyxJQUFJLEVBQUUsV0FBVztpQkFDcEI7Z0JBQ0QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO2dCQUNoQixNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7Z0JBQ2pELElBQUksRUFBRSxlQUFlO2FBQ3hCO1NBQ0osQ0FBQTtJQUNMLENBQUM7SUFHRCxvQ0FBUSxHQUFSLFVBQVMsS0FBSztJQUVkLENBQUM7SUF2RFEsaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN4QyxDQUFDO3lDQVdxQix1QkFBYztZQUNGLHVDQUFpQjtZQUN2QixtQkFBVztZQUNoQix5QkFBZ0I7T0FaM0IsaUJBQWlCLENBd0Q3QjtJQUFELHdCQUFDO0NBQUEsQUF4REQsSUF3REM7QUF4RFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ3JlYXRlZEFwcFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9jcmVhdGVkLWFwcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbWVzc2FnZXMnLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBgbWVzc2FnZXMuY29tcG9uZW50Lmh0bWxgLFxyXG4gICAgc3R5bGVVcmxzOiBbYG1lc3NhZ2VzLmNvbXBvbmVudC5jc3NgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGZvcm06IEZvcm1Hcm91cDtcclxuICAgIHByb2Nlc3NpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBhcHBfaWQ6IHN0cmluZztcclxuXHJcbiAgICB2aXNpYmxlX2tleTogYm9vbGVhbjtcclxuICAgIGNoYXRzOiBhbnkgPSBbXVxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBDcmVhdGVkQXBwU2VydmljZTogQ3JlYXRlZEFwcFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuYXBwX2lkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdKTtcclxuICAgICAgICB0aGlzLmNoYXRzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250YWN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiAnfi9pbWFnZXMvc2h5YW0td2hlZWwucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQk0gSydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnRElSRUNUJyxcclxuICAgICAgICAgICAgICAgIHdoZW46IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICB1bnJlYWQ6IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxMCArICcnLCAxMCkgLSAzLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0hpJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGFjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcjogJ34vaW1hZ2VzL3NoeWFtLXdoZWVsLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1NSIEwnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0RJUkVDVCcsXHJcbiAgICAgICAgICAgICAgICB3aGVuOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgdW5yZWFkOiBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMTAgKyAnJywgMTApIC0gMyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdob3cgYXJlIHlvdScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI6ICd+L2ltYWdlcy9zaHlhbS13aGVlbC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdBSyBTaGFybWEnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0RJUkVDVCcsXHJcbiAgICAgICAgICAgICAgICB3aGVuOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgdW5yZWFkOiBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMTAgKyAnJywgMTApIC0gMyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdIb3cgdGhlIGRheXM/JyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZ29Ub0NoYXQoZXZlbnQpe1xyXG5cclxuICAgIH1cclxufSJdfQ==