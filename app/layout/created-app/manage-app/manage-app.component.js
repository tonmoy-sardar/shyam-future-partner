"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var created_app_service_1 = require("../../../core/services/created-app.service");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var upload_single_image_modal_component_1 = require("../../../core/component/upload-single-image-modal/upload-single-image-modal.component");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var common_1 = require("@angular/common");
var ManageAppComponent = /** @class */ (function () {
    function ManageAppComponent(route, CreatedAppService, modal, vcRef, location) {
        this.route = route;
        this.CreatedAppService = CreatedAppService;
        this.modal = modal;
        this.vcRef = vcRef;
        this.location = location;
        this.app_data = {
            logo: '',
            business_name: ''
        };
        this.options = {
            context: {},
            fullscreen: false,
            viewContainerRef: this.vcRef
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
    }
    ManageAppComponent.prototype.ngOnInit = function () {
        var full_location = this.location.path().split('/');
        this.app_id = full_location[2].trim();
        this.getAppDetails(this.app_id);
        this.imageUrl = null;
    };
    ManageAppComponent.prototype.getAppDetails = function (id) {
        var _this = this;
        this.loader.show(this.lodaing_options);
        this.CreatedAppService.getCreatedAppDetails(id).subscribe(function (res) {
            _this.app_details = res;
            if (_this.app_details.is_product_service) {
                _this.serviceType = _this.app_details.is_product_service;
            }
            else {
                _this.serviceType = 1;
            }
            _this.app_data.logo = _this.app_details.logo;
            _this.app_data.business_name = _this.app_details.business_name;
            _this.visible_key = true;
            console.log(res);
            _this.loader.hide();
        }, function (error) {
            console.log(error);
            _this.loader.hide();
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
        this.loader.show(this.lodaing_options);
        this.CreatedAppService.editAppLogo(data).subscribe(function (res) {
            _this.loader.hide();
            _this.getAppDetails(_this.app_id);
            console.log(res);
        }, function (error) {
            _this.loader.hide();
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
            core_1.ViewContainerRef,
            common_1.Location])
    ], ManageAppComponent);
    return ManageAppComponent;
}());
exports.ManageAppComponent = ManageAppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYW5hZ2UtYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUNwRSwwQ0FBaUQ7QUFDakQsa0ZBQStFO0FBRS9FLG1FQUE2RTtBQUM3RSw2SUFBd0k7QUFDeEksaUZBQWlFO0FBQ2pFLDBDQUEyQztBQVMzQztJQXlDRSw0QkFDVSxLQUFxQixFQUNyQixpQkFBb0MsRUFDcEMsS0FBeUIsRUFDekIsS0FBdUIsRUFDdkIsUUFBa0I7UUFKbEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBM0M1QixhQUFRLEdBQUc7WUFDVCxJQUFJLEVBQUUsRUFBRTtZQUNSLGFBQWEsRUFBRSxFQUFFO1NBQ2xCLENBQUE7UUFHRCxZQUFPLEdBQUc7WUFDUixPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQzdCLENBQUM7UUFHRixXQUFNLEdBQUcsSUFBSSxpREFBZ0IsRUFBRSxDQUFDO1FBQ2hDLG9CQUFlLEdBQUc7WUFDaEIsT0FBTyxFQUFFLFlBQVk7WUFDckIsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUU7Z0JBQ1AsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixjQUFjLEVBQUUsVUFBVSxNQUFNLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztnQkFDdEUsR0FBRyxFQUFFLEdBQUc7Z0JBQ1Isb0JBQW9CLEVBQUUsU0FBUztnQkFDL0IscUJBQXFCLEVBQUUsSUFBSTtnQkFD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QyxJQUFJLEVBQUUsQ0FBQztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3BCLENBQUMsQ0FDRixDQUFBO0lBQ0gsQ0FBQztJQTVIVSxrQkFBa0I7UUFQOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7eUNBNENpQix1QkFBYztZQUNGLHVDQUFpQjtZQUM3Qiw0QkFBa0I7WUFDbEIsdUJBQWdCO1lBQ2IsaUJBQVE7T0E5Q2pCLGtCQUFrQixDQWlJOUI7SUFBRCx5QkFBQztDQUFBLEFBaklELElBaUlDO0FBaklZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDcmVhdGVkQXBwU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2NyZWF0ZWQtYXBwLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgVXBsb2FkU2luZ2xlSW1hZ2VNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL2NvbXBvbmVudC91cGxvYWQtc2luZ2xlLWltYWdlLW1vZGFsL3VwbG9hZC1zaW5nbGUtaW1hZ2UtbW9kYWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvYWRpbmdJbmRpY2F0b3IgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCJcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYW5hZ2UtYXBwJyxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBgbWFuYWdlLWFwcC5jb21wb25lbnQuaHRtbGAsXHJcbiAgc3R5bGVVcmxzOiBbYG1hbmFnZS1hcHAuY29tcG9uZW50LmNzc2BdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWFuYWdlQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBhcHBfaWQ6IHN0cmluZztcclxuICBhcHBfZGV0YWlsczogYW55O1xyXG4gIGFwcF9kYXRhID0ge1xyXG4gICAgbG9nbzogJycsXHJcbiAgICBidXNpbmVzc19uYW1lOiAnJ1xyXG4gIH1cclxuICB2aXNpYmxlX2tleTogYm9vbGVhbjtcclxuICBzZXJ2aWNlVHlwZTtcclxuICBvcHRpb25zID0ge1xyXG4gICAgY29udGV4dDoge30sXHJcbiAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICB9O1xyXG4gIGltYWdlVXJsOiBhbnk7XHJcblxyXG4gIGxvYWRlciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XHJcbiAgbG9kYWluZ19vcHRpb25zID0ge1xyXG4gICAgbWVzc2FnZTogJ0xvYWRpbmcuLi4nLFxyXG4gICAgcHJvZ3Jlc3M6IDAuNjUsXHJcbiAgICBhbmRyb2lkOiB7XHJcbiAgICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXHJcbiAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxyXG4gICAgICBjYW5jZWxMaXN0ZW5lcjogZnVuY3Rpb24gKGRpYWxvZykgeyBjb25zb2xlLmxvZyhcIkxvYWRpbmcgY2FuY2VsbGVkXCIpIH0sXHJcbiAgICAgIG1heDogMTAwLFxyXG4gICAgICBwcm9ncmVzc051bWJlckZvcm1hdDogXCIlMWQvJTJkXCIsXHJcbiAgICAgIHByb2dyZXNzUGVyY2VudEZvcm1hdDogMC41MyxcclxuICAgICAgcHJvZ3Jlc3NTdHlsZTogMSxcclxuICAgICAgc2Vjb25kYXJ5UHJvZ3Jlc3M6IDFcclxuICAgIH0sXHJcbiAgICBpb3M6IHtcclxuICAgICAgZGV0YWlsczogXCJBZGRpdGlvbmFsIGRldGFpbCBub3RlIVwiLFxyXG4gICAgICBtYXJnaW46IDEwLFxyXG4gICAgICBkaW1CYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgICBjb2xvcjogXCIjNEI5RUQ2XCIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dcIixcclxuICAgICAgdXNlckludGVyYWN0aW9uRW5hYmxlZDogZmFsc2UsXHJcbiAgICAgIGhpZGVCZXplbDogdHJ1ZSxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIENyZWF0ZWRBcHBTZXJ2aWNlOiBDcmVhdGVkQXBwU2VydmljZSxcclxuICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSxcclxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHZhciBmdWxsX2xvY2F0aW9uID0gdGhpcy5sb2NhdGlvbi5wYXRoKCkuc3BsaXQoJy8nKTtcclxuICAgIHRoaXMuYXBwX2lkID0gZnVsbF9sb2NhdGlvblsyXS50cmltKCk7XHJcbiAgICB0aGlzLmdldEFwcERldGFpbHModGhpcy5hcHBfaWQpO1xyXG4gICAgdGhpcy5pbWFnZVVybCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXRBcHBEZXRhaWxzKGlkKSB7XHJcbiAgICB0aGlzLmxvYWRlci5zaG93KHRoaXMubG9kYWluZ19vcHRpb25zKTtcclxuICAgIHRoaXMuQ3JlYXRlZEFwcFNlcnZpY2UuZ2V0Q3JlYXRlZEFwcERldGFpbHMoaWQpLnN1YnNjcmliZShcclxuICAgICAgcmVzID0+IHtcclxuICAgICAgICB0aGlzLmFwcF9kZXRhaWxzID0gcmVzO1xyXG4gICAgICAgIGlmICh0aGlzLmFwcF9kZXRhaWxzLmlzX3Byb2R1Y3Rfc2VydmljZSkge1xyXG4gICAgICAgICAgdGhpcy5zZXJ2aWNlVHlwZSA9IHRoaXMuYXBwX2RldGFpbHMuaXNfcHJvZHVjdF9zZXJ2aWNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2VydmljZVR5cGUgPSAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXBwX2RhdGEubG9nbyA9IHRoaXMuYXBwX2RldGFpbHMubG9nbztcclxuICAgICAgICB0aGlzLmFwcF9kYXRhLmJ1c2luZXNzX25hbWUgPSB0aGlzLmFwcF9kZXRhaWxzLmJ1c2luZXNzX25hbWU7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlX2tleSA9IHRydWVcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG5cclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcGlja0xvZ28oKSB7XHJcbiAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChVcGxvYWRTaW5nbGVJbWFnZU1vZGFsQ29tcG9uZW50LCB0aGlzLm9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgaWYgKHJlcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAocmVzLmNhbWVyYSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuaW1hZ2UpXHJcbiAgICAgICAgICB0aGlzLmltYWdlVXJsID0gcmVzLmltYWdlXHJcbiAgICAgICAgICB0aGlzLmFwcF9kYXRhLmxvZ28gPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyByZXMuaW1hZ2U7XHJcbiAgICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuYXBwX2lkLFxyXG4gICAgICAgICAgICBsb2dvOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyByZXMuaW1hZ2VcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMudXBkYXRlQXBwTG9nbyhkYXRhKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHJlcy5nYWxsZXJ5ID09IHRydWUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5pbWFnZSlcclxuICAgICAgICAgIHRoaXMuaW1hZ2VVcmwgPSByZXMuaW1hZ2VcclxuICAgICAgICAgIHRoaXMuYXBwX2RhdGEubG9nbyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHJlcy5pbWFnZTtcclxuXHJcbiAgICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuYXBwX2lkLFxyXG4gICAgICAgICAgICBsb2dvOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyByZXMuaW1hZ2VcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMudXBkYXRlQXBwTG9nbyhkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB1cGRhdGVBcHBMb2dvKGRhdGEpIHtcclxuICAgIHRoaXMubG9hZGVyLnNob3codGhpcy5sb2RhaW5nX29wdGlvbnMpO1xyXG4gICAgdGhpcy5DcmVhdGVkQXBwU2VydmljZS5lZGl0QXBwTG9nbyhkYXRhKS5zdWJzY3JpYmUoXHJcbiAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuZ2V0QXBwRGV0YWlscyh0aGlzLmFwcF9pZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxufSJdfQ==