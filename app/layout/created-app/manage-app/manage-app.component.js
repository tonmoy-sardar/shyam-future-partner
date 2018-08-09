"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var created_app_service_1 = require("../../../core/services/created-app.service");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var upload_single_image_modal_component_1 = require("../../../core/component/upload-single-image-modal/upload-single-image-modal.component");
var ManageAppComponent = /** @class */ (function () {
    function ManageAppComponent(route, CreatedAppService, modal, vcRef) {
        this.route = route;
        this.CreatedAppService = CreatedAppService;
        this.modal = modal;
        this.vcRef = vcRef;
        this.app_data = {
            logo: '',
            business_name: ''
        };
        this.options = {
            context: {},
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
    }
    ManageAppComponent.prototype.ngOnInit = function () {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
        this.getAppDetails(this.app_id);
        this.imageUrl = null;
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
    ManageAppComponent.prototype.pickLogo = function () {
        var _this = this;
        this.modal.showModal(upload_single_image_modal_component_1.UploadSingleImageModalComponent, this.options).then(function (res) {
            console.log(res);
            if (res != undefined) {
                if (res.camera == true) {
                    console.log(res.image);
                    _this.imageUrl = res.image;
                    _this.app_data.logo = 'data:image/png;base64,' + res.image;
                    var data = {
                        id: _this.app_id,
                        logo: 'data:image/png;base64,' + res.image
                    };
                    _this.updateAppLogo(data);
                }
                else if (res.gallery == true) {
                    console.log(res.image);
                    _this.imageUrl = res.image;
                    _this.app_data.logo = 'data:image/png;base64,' + res.image;
                    var data = {
                        id: _this.app_id,
                        logo: 'data:image/png;base64,' + res.image
                    };
                    _this.updateAppLogo(data);
                }
            }
        });
    };
    ManageAppComponent.prototype.updateAppLogo = function (data) {
        var _this = this;
        this.CreatedAppService.editAppLogo(data).subscribe(function (res) {
            _this.getAppDetails(_this.app_id);
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
            created_app_service_1.CreatedAppService,
            dialogs_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], ManageAppComponent);
    return ManageAppComponent;
}());
exports.ManageAppComponent = ManageAppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYW5hZ2UtYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUNwRSwwQ0FBaUQ7QUFDakQsa0ZBQStFO0FBRS9FLG1FQUE2RTtBQUM3RSw2SUFBd0k7QUFTeEk7SUFlRSw0QkFDVSxLQUFxQixFQUNyQixpQkFBb0MsRUFDcEMsS0FBeUIsRUFDekIsS0FBdUI7UUFIdkIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQWhCakMsYUFBUSxHQUFHO1lBQ1QsSUFBSSxFQUFFLEVBQUU7WUFDUixhQUFhLEVBQUUsRUFBRTtTQUNsQixDQUFBO1FBR0QsWUFBTyxHQUFHO1lBQ1IsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUM3QixDQUFDO0lBT0UsQ0FBQztJQUVMLHFDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwwQ0FBYSxHQUFiLFVBQWMsRUFBRTtRQUFoQixpQkFjQztRQWJDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFF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bkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN4QyxDQUFDO3lDQWtCaUIsdUJBQWM7WUFDRix1Q0FBaUI7WUFDN0IsNEJBQWtCO1lBQ2xCLHVCQUFnQjtPQW5CdEIsa0JBQWtCLENBMEY5QjtJQUFELHlCQUFDO0NBQUEsQUExRkQsSUEwRkM7QUExRlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENyZWF0ZWRBcHBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvc2VydmljZXMvY3JlYXRlZC1hcHAuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBVcGxvYWRTaW5nbGVJbWFnZU1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvY29tcG9uZW50L3VwbG9hZC1zaW5nbGUtaW1hZ2UtbW9kYWwvdXBsb2FkLXNpbmdsZS1pbWFnZS1tb2RhbC5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWFuYWdlLWFwcCcsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogYG1hbmFnZS1hcHAuY29tcG9uZW50Lmh0bWxgLFxyXG4gIHN0eWxlVXJsczogW2BtYW5hZ2UtYXBwLmNvbXBvbmVudC5jc3NgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hbmFnZUFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgYXBwX2lkOiBzdHJpbmc7XHJcbiAgYXBwX2RldGFpbHM6IGFueTtcclxuICBhcHBfZGF0YSA9IHtcclxuICAgIGxvZ286ICcnLFxyXG4gICAgYnVzaW5lc3NfbmFtZTogJydcclxuICB9XHJcbiAgdmlzaWJsZV9rZXk6IGJvb2xlYW47XHJcblxyXG4gIG9wdGlvbnMgPSB7XHJcbiAgICBjb250ZXh0OiB7fSxcclxuICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gIH07XHJcbiAgaW1hZ2VVcmw6IGFueTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBDcmVhdGVkQXBwU2VydmljZTogQ3JlYXRlZEFwcFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hcHBfaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXSk7XHJcbiAgICB0aGlzLmdldEFwcERldGFpbHModGhpcy5hcHBfaWQpO1xyXG4gICAgdGhpcy5pbWFnZVVybCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXRBcHBEZXRhaWxzKGlkKSB7XHJcbiAgICB0aGlzLkNyZWF0ZWRBcHBTZXJ2aWNlLmdldENyZWF0ZWRBcHBEZXRhaWxzKGlkKS5zdWJzY3JpYmUoXHJcbiAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5hcHBfZGV0YWlscyA9IHJlcztcclxuICAgICAgICB0aGlzLmFwcF9kYXRhLmxvZ28gPSB0aGlzLmFwcF9kZXRhaWxzLmxvZ287XHJcbiAgICAgICAgdGhpcy5hcHBfZGF0YS5idXNpbmVzc19uYW1lID0gdGhpcy5hcHBfZGV0YWlscy5idXNpbmVzc19uYW1lO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZV9rZXkgPSB0cnVlXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG5cclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBwaWNrTG9nbygpIHtcclxuICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKFVwbG9hZFNpbmdsZUltYWdlTW9kYWxDb21wb25lbnQsIHRoaXMub3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICBpZiAocmVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChyZXMuY2FtZXJhID09IHRydWUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5pbWFnZSlcclxuICAgICAgICAgIHRoaXMuaW1hZ2VVcmwgPSByZXMuaW1hZ2VcclxuICAgICAgICAgIHRoaXMuYXBwX2RhdGEubG9nbyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHJlcy5pbWFnZTtcclxuICAgICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICAgIGlkOiB0aGlzLmFwcF9pZCxcclxuICAgICAgICAgICAgICBsb2dvOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyByZXMuaW1hZ2VcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMudXBkYXRlQXBwTG9nbyhkYXRhKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHJlcy5nYWxsZXJ5ID09IHRydWUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5pbWFnZSlcclxuICAgICAgICAgIHRoaXMuaW1hZ2VVcmwgPSByZXMuaW1hZ2VcclxuICAgICAgICAgIHRoaXMuYXBwX2RhdGEubG9nbyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHJlcy5pbWFnZTtcclxuXHJcbiAgICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgICBpZDogdGhpcy5hcHBfaWQsXHJcbiAgICAgICAgICAgICAgbG9nbzogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgcmVzLmltYWdlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUFwcExvZ28oZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQXBwTG9nbyhkYXRhKSB7XHJcbiAgICB0aGlzLkNyZWF0ZWRBcHBTZXJ2aWNlLmVkaXRBcHBMb2dvKGRhdGEpLnN1YnNjcmliZShcclxuICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdldEFwcERldGFpbHModGhpcy5hcHBfaWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5cclxufSJdfQ==