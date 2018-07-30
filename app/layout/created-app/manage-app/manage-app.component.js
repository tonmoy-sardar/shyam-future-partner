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
                }
                else if (res.gallery == true) {
                    console.log(res.image);
                    _this.imageUrl = res.image;
                }
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYW5hZ2UtYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUNwRSwwQ0FBaUQ7QUFDakQsa0ZBQStFO0FBRS9FLG1FQUE2RTtBQUM3RSw2SUFBd0k7QUFTeEk7SUFlRSw0QkFDVSxLQUFxQixFQUNyQixpQkFBb0MsRUFDcEMsS0FBeUIsRUFDekIsS0FBdUI7UUFIdkIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQWhCakMsYUFBUSxHQUFHO1lBQ1QsSUFBSSxFQUFFLEVBQUU7WUFDUixhQUFhLEVBQUUsRUFBRTtTQUNsQixDQUFBO1FBR0QsWUFBTyxHQUFHO1lBQ1IsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUM3QixDQUFDO0lBT0UsQ0FBQztJQUVMLHFDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwwQ0FBYSxHQUFiLFVBQWMsRUFBRTtRQUFoQixpQkFjQztRQWJDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ3ZELFVBQUEsR0FBRztZQUNELEtBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQzNDLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1lBQzdELEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFbEIsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDcEIsQ0FBQyxDQUNGLENBQUE7SUFDSCxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMscUVBQStCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDckIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFDdEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFBO2dCQUMzQixDQUFDO2dCQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUN0QixLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUE7Z0JBQzNCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBM0RVLGtCQUFrQjtRQVA5QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDeEMsQ0FBQzt5Q0FrQmlCLHVCQUFjO1lBQ0YsdUNBQWlCO1lBQzdCLDRCQUFrQjtZQUNsQix1QkFBZ0I7T0FuQnRCLGtCQUFrQixDQWdFOUI7SUFBRCx5QkFBQztDQUFBLEFBaEVELElBZ0VDO0FBaEVZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDcmVhdGVkQXBwU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2NyZWF0ZWQtYXBwLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgVXBsb2FkU2luZ2xlSW1hZ2VNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL2NvbXBvbmVudC91cGxvYWQtc2luZ2xlLWltYWdlLW1vZGFsL3VwbG9hZC1zaW5nbGUtaW1hZ2UtbW9kYWwuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hbmFnZS1hcHAnLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IGBtYW5hZ2UtYXBwLmNvbXBvbmVudC5odG1sYCxcclxuICBzdHlsZVVybHM6IFtgbWFuYWdlLWFwcC5jb21wb25lbnQuY3NzYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYW5hZ2VBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGFwcF9pZDogc3RyaW5nO1xyXG4gIGFwcF9kZXRhaWxzOiBhbnk7XHJcbiAgYXBwX2RhdGEgPSB7XHJcbiAgICBsb2dvOiAnJyxcclxuICAgIGJ1c2luZXNzX25hbWU6ICcnXHJcbiAgfVxyXG4gIHZpc2libGVfa2V5OiBib29sZWFuO1xyXG5cclxuICBvcHRpb25zID0ge1xyXG4gICAgY29udGV4dDoge30sXHJcbiAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICB9O1xyXG4gIGltYWdlVXJsOiBhbnk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgQ3JlYXRlZEFwcFNlcnZpY2U6IENyZWF0ZWRBcHBTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYXBwX2lkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl0pO1xyXG4gICAgdGhpcy5nZXRBcHBEZXRhaWxzKHRoaXMuYXBwX2lkKTtcclxuICAgIHRoaXMuaW1hZ2VVcmwgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXBwRGV0YWlscyhpZCkge1xyXG4gICAgdGhpcy5DcmVhdGVkQXBwU2VydmljZS5nZXRDcmVhdGVkQXBwRGV0YWlscyhpZCkuc3Vic2NyaWJlKFxyXG4gICAgICByZXMgPT4ge1xyXG4gICAgICAgIHRoaXMuYXBwX2RldGFpbHMgPSByZXM7XHJcbiAgICAgICAgdGhpcy5hcHBfZGF0YS5sb2dvID0gdGhpcy5hcHBfZGV0YWlscy5sb2dvO1xyXG4gICAgICAgIHRoaXMuYXBwX2RhdGEuYnVzaW5lc3NfbmFtZSA9IHRoaXMuYXBwX2RldGFpbHMuYnVzaW5lc3NfbmFtZTtcclxuICAgICAgICB0aGlzLnZpc2libGVfa2V5ID0gdHJ1ZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcGlja0xvZ28oKSB7XHJcbiAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChVcGxvYWRTaW5nbGVJbWFnZU1vZGFsQ29tcG9uZW50LCB0aGlzLm9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgaWYgKHJlcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAocmVzLmNhbWVyYSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuaW1hZ2UpXHJcbiAgICAgICAgICB0aGlzLmltYWdlVXJsID0gcmVzLmltYWdlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHJlcy5nYWxsZXJ5ID09IHRydWUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5pbWFnZSlcclxuICAgICAgICAgIHRoaXMuaW1hZ2VVcmwgPSByZXMuaW1hZ2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxufSJdfQ==