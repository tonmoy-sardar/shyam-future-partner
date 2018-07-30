"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var router_2 = require("nativescript-angular/router");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var upload_single_image_modal_component_1 = require("../../../core/component/upload-single-image-modal/upload-single-image-modal.component");
var created_app_service_1 = require("../../../core/services/created-app.service");
var EditBusinessImagesComponent = /** @class */ (function () {
    function EditBusinessImagesComponent(route, formBuilder, router, modal, vcRef, CreatedAppService) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.router = router;
        this.modal = modal;
        this.vcRef = vcRef;
        this.CreatedAppService = CreatedAppService;
        this.processing = false;
        this.options = {
            context: {},
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.gallery = [];
    }
    EditBusinessImagesComponent.prototype.ngOnInit = function () {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
    };
    EditBusinessImagesComponent.prototype.pickBusinessImages = function () {
        var _this = this;
        this.modal.showModal(upload_single_image_modal_component_1.UploadSingleImageModalComponent, this.options).then(function (res) {
            console.log(res);
            if (res != undefined) {
                if (res.camera == true) {
                    console.log(res.image);
                    _this.gallery.push({
                        image: 'data:image/png;base64,' + res.image
                    });
                    var data = {
                        id: _this.app_id,
                        img: 'data:image/png;base64,' + res.image
                    };
                    _this.updateBusinessImages(data);
                }
                else if (res.gallery == true) {
                    console.log(res.image);
                    _this.gallery.push({
                        image: 'data:image/png;base64,' + res.image
                    });
                    var data = {
                        id: _this.app_id,
                        img: 'data:image/png;base64,' + res.image
                    };
                    _this.updateBusinessImages(data);
                }
            }
        });
    };
    EditBusinessImagesComponent.prototype.updateBusinessImages = function (data) {
        this.CreatedAppService.updateBusinessImages(data).subscribe(function (res) {
            console.log(res);
        }, function (error) {
            console.log(error);
        });
    };
    EditBusinessImagesComponent = __decorate([
        core_1.Component({
            selector: 'edit-business-images',
            moduleId: module.id,
            templateUrl: "edit-business-images.component.html",
            styleUrls: ["edit-business-images.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            forms_1.FormBuilder,
            router_2.RouterExtensions,
            dialogs_1.ModalDialogService,
            core_1.ViewContainerRef,
            created_app_service_1.CreatedAppService])
    ], EditBusinessImagesComponent);
    return EditBusinessImagesComponent;
}());
exports.EditBusinessImagesComponent = EditBusinessImagesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1idXNpbmVzcy1pbWFnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWRpdC1idXNpbmVzcy1pbWFnZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9FO0FBRXBFLDBDQUFpRDtBQUNqRCx3Q0FBb0U7QUFDcEUsc0RBQStEO0FBQy9ELG1FQUE2RTtBQUM3RSw2SUFBd0k7QUFDeEksa0ZBQStFO0FBUS9FO0lBV0kscUNBQ1ksS0FBcUIsRUFDckIsV0FBd0IsRUFDeEIsTUFBd0IsRUFDeEIsS0FBeUIsRUFDekIsS0FBdUIsRUFDdkIsaUJBQW9DO1FBTHBDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFmaEQsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUduQixZQUFPLEdBQUc7WUFDTixPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQy9CLENBQUM7UUFDRixZQUFPLEdBQVEsRUFBRSxDQUFBO0lBUWIsQ0FBQztJQUVMLDhDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCx3REFBa0IsR0FBbEI7UUFBQSxpQkE0QkM7UUEzQkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMscUVBQStCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFDdEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7d0JBQ2QsS0FBSyxFQUFFLHdCQUF3QixHQUFHLEdBQUcsQ0FBQyxLQUFLO3FCQUM5QyxDQUFDLENBQUE7b0JBQ0YsSUFBSSxJQUFJLEdBQUc7d0JBQ1AsRUFBRSxFQUFFLEtBQUksQ0FBQyxNQUFNO3dCQUNmLEdBQUcsRUFBRSx3QkFBd0IsR0FBRyxHQUFHLENBQUMsS0FBSztxQkFDNUMsQ0FBQTtvQkFDRCxLQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ3RCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO3dCQUNkLEtBQUssRUFBRSx3QkFBd0IsR0FBRyxHQUFHLENBQUMsS0FBSztxQkFDOUMsQ0FBQyxDQUFBO29CQUNGLElBQUksSUFBSSxHQUFHO3dCQUNQLEVBQUUsRUFBRSxLQUFJLENBQUMsTUFBTTt3QkFDZixHQUFHLEVBQUUsd0JBQXdCLEdBQUcsR0FBRyxDQUFDLEtBQUs7cUJBQzVDLENBQUE7b0JBQ0QsS0FBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUdELDBEQUFvQixHQUFwQixVQUFxQixJQUFJO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQ3ZELFVBQUEsR0FBRztZQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEIsQ0FBQyxDQUNKLENBQUE7SUFDTCxDQUFDO0lBakVRLDJCQUEyQjtRQVB2QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHFDQUFxQztZQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztTQUNwRCxDQUFDO3lDQWNxQix1QkFBYztZQUNSLG1CQUFXO1lBQ2hCLHlCQUFnQjtZQUNqQiw0QkFBa0I7WUFDbEIsdUJBQWdCO1lBQ0osdUNBQWlCO09BakJ2QywyQkFBMkIsQ0FvRXZDO0lBQUQsa0NBQUM7Q0FBQSxBQXBFRCxJQW9FQztBQXBFWSxrRUFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFVwbG9hZFNpbmdsZUltYWdlTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9jb21wb25lbnQvdXBsb2FkLXNpbmdsZS1pbWFnZS1tb2RhbC91cGxvYWQtc2luZ2xlLWltYWdlLW1vZGFsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDcmVhdGVkQXBwU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2NyZWF0ZWQtYXBwLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2VkaXQtYnVzaW5lc3MtaW1hZ2VzJyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogYGVkaXQtYnVzaW5lc3MtaW1hZ2VzLmNvbXBvbmVudC5odG1sYCxcclxuICAgIHN0eWxlVXJsczogW2BlZGl0LWJ1c2luZXNzLWltYWdlcy5jb21wb25lbnQuY3NzYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0QnVzaW5lc3NJbWFnZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZm9ybTogRm9ybUdyb3VwO1xyXG4gICAgcHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgYXBwX2lkOiBzdHJpbmc7XHJcbiAgICB2aXNpYmxlX2tleTogYm9vbGVhbjtcclxuICAgIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgY29udGV4dDoge30sXHJcbiAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgfTtcclxuICAgIGdhbGxlcnk6IGFueSA9IFtdXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICBwcml2YXRlIENyZWF0ZWRBcHBTZXJ2aWNlOiBDcmVhdGVkQXBwU2VydmljZSxcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5hcHBfaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBpY2tCdXNpbmVzc0ltYWdlcygpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChVcGxvYWRTaW5nbGVJbWFnZU1vZGFsQ29tcG9uZW50LCB0aGlzLm9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgaWYgKHJlcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuY2FtZXJhID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuaW1hZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYWxsZXJ5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgcmVzLmltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuYXBwX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHJlcy5pbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJ1c2luZXNzSW1hZ2VzKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzLmdhbGxlcnkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5pbWFnZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbGxlcnkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyByZXMuaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5hcHBfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZzogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgcmVzLmltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQnVzaW5lc3NJbWFnZXMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGVCdXNpbmVzc0ltYWdlcyhkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5DcmVhdGVkQXBwU2VydmljZS51cGRhdGVCdXNpbmVzc0ltYWdlcyhkYXRhKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=