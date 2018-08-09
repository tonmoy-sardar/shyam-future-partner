"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var router_2 = require("nativescript-angular/router");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var upload_single_image_modal_component_1 = require("../../../core/component/upload-single-image-modal/upload-single-image-modal.component");
var created_app_service_1 = require("../../../core/services/created-app.service");
var Globals = require("../../../core/globals");
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
        this.gallery_images = [];
    }
    EditBusinessImagesComponent.prototype.ngOnInit = function () {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
        this.getAppDetails(this.app_id);
    };
    EditBusinessImagesComponent.prototype.getAppDetails = function (id) {
        var _this = this;
        this.CreatedAppService.getCreatedAppDetails(id).subscribe(function (res) {
            _this.app_details = res;
            _this.gallery_images = [];
            if (_this.app_details.app_imgs.length > 0) {
                _this.app_details.app_imgs.forEach(function (x) {
                    var data = {
                        id: x.id,
                        app_master_id: x.app_master_id,
                        app_img: Globals.img_base_url + x.app_img
                    };
                    _this.gallery_images.push(data);
                });
            }
            _this.visible_key = true;
            console.log(res);
            console.log(_this.gallery_images);
        }, function (error) {
            console.log(error);
        });
    };
    EditBusinessImagesComponent.prototype.pickBusinessImages = function (id) {
        var _this = this;
        this.modal.showModal(upload_single_image_modal_component_1.UploadSingleImageModalComponent, this.options).then(function (res) {
            console.log(res);
            if (res != undefined) {
                if (res.camera == true) {
                    console.log(res.image);
                    // this.gallery.push({
                    //     image: 'data:image/png;base64,' + res.image
                    // })
                    var data = {
                        app_image_id: id,
                        appmaster: _this.app_id,
                        app_images: 'data:image/png;base64,' + res.image
                    };
                    _this.updateBusinessImages(data);
                }
                else if (res.gallery == true) {
                    console.log(res.image);
                    // this.gallery.push({
                    //     image: 'data:image/png;base64,' + res.image
                    // })
                    var data = {
                        app_image_id: id,
                        appmaster: _this.app_id,
                        app_images: 'data:image/png;base64,' + res.image
                    };
                    _this.updateBusinessImages(data);
                }
            }
        });
    };
    EditBusinessImagesComponent.prototype.pickNewBusinessImages = function (id) {
        var _this = this;
        this.modal.showModal(upload_single_image_modal_component_1.UploadSingleImageModalComponent, this.options).then(function (res) {
            console.log(res);
            if (res != undefined) {
                if (res.camera == true) {
                    console.log(res.image);
                    // this.gallery.push({
                    //     image: 'data:image/png;base64,' + res.image
                    // })
                    var data = {
                        app_image_id: 0,
                        appmaster: _this.app_id,
                        app_images: 'data:image/png;base64,' + res.image
                    };
                    _this.updateBusinessImages(data);
                }
                else if (res.gallery == true) {
                    console.log(res.image);
                    // this.gallery.push({
                    //     image: 'data:image/png;base64,' + res.image
                    // })
                    var data = {
                        app_image_id: 0,
                        appmaster: _this.app_id,
                        app_images: 'data:image/png;base64,' + res.image
                    };
                    _this.updateBusinessImages(data);
                }
            }
        });
    };
    EditBusinessImagesComponent.prototype.updateBusinessImages = function (data) {
        var _this = this;
        this.CreatedAppService.updateBusinessImages(data).subscribe(function (res) {
            _this.getAppDetails(_this.app_id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1idXNpbmVzcy1pbWFnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWRpdC1idXNpbmVzcy1pbWFnZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9FO0FBRXBFLDBDQUFpRDtBQUNqRCx3Q0FBb0U7QUFDcEUsc0RBQStEO0FBQy9ELG1FQUE2RTtBQUM3RSw2SUFBd0k7QUFDeEksa0ZBQStFO0FBQy9FLCtDQUFpRDtBQVFqRDtJQVlJLHFDQUNZLEtBQXFCLEVBQ3JCLFdBQXdCLEVBQ3hCLE1BQXdCLEVBQ3hCLEtBQXlCLEVBQ3pCLEtBQXVCLEVBQ3ZCLGlCQUFvQztRQUxwQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBaEJoRCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSW5CLFlBQU8sR0FBRztZQUNOLE9BQU8sRUFBRSxFQUFFO1lBQ1gsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztRQUNGLG1CQUFjLEdBQWUsRUFBRSxDQUFDO0lBUTVCLENBQUM7SUFFTCw4Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNw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b0IsR0FBcEIsVUFBcUIsSUFBSTtRQUF6QixpQkFZQztRQVZHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQ3ZELFVBQUEsR0FBRztZQUVDLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEIsQ0FBQyxDQUNKLENBQUE7SUFDTCxDQUFDO0lBbklRLDJCQUEyQjtRQVB2QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHFDQUFxQztZQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztTQUNwRCxDQUFDO3lDQWVxQix1QkFBYztZQUNSLG1CQUFXO1lBQ2hCLHlCQUFnQjtZQUNqQiw0QkFBa0I7WUFDbEIsdUJBQWdCO1lBQ0osdUNBQWlCO09BbEJ2QywyQkFBMkIsQ0FzSXZDO0lBQUQsa0NBQUM7Q0FBQSxBQXRJRCxJQXNJQztBQXRJWSxrRUFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFVwbG9hZFNpbmdsZUltYWdlTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9jb21wb25lbnQvdXBsb2FkLXNpbmdsZS1pbWFnZS1tb2RhbC91cGxvYWQtc2luZ2xlLWltYWdlLW1vZGFsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDcmVhdGVkQXBwU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2NyZWF0ZWQtYXBwLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgR2xvYmFscyBmcm9tICcuLi8uLi8uLi9jb3JlL2dsb2JhbHMnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZWRpdC1idXNpbmVzcy1pbWFnZXMnLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBgZWRpdC1idXNpbmVzcy1pbWFnZXMuY29tcG9uZW50Lmh0bWxgLFxyXG4gICAgc3R5bGVVcmxzOiBbYGVkaXQtYnVzaW5lc3MtaW1hZ2VzLmNvbXBvbmVudC5jc3NgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRCdXNpbmVzc0ltYWdlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBwcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICBhcHBfaWQ6IHN0cmluZztcclxuICAgIGFwcF9kZXRhaWxzOiBhbnk7XHJcbiAgICB2aXNpYmxlX2tleTogYm9vbGVhbjtcclxuICAgIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgY29udGV4dDoge30sXHJcbiAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgfTtcclxuICAgIGdhbGxlcnlfaW1hZ2VzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICBwcml2YXRlIENyZWF0ZWRBcHBTZXJ2aWNlOiBDcmVhdGVkQXBwU2VydmljZSxcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5hcHBfaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl0pO1xyXG4gICAgICAgIHRoaXMuZ2V0QXBwRGV0YWlscyh0aGlzLmFwcF9pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXBwRGV0YWlscyhpZCkge1xyXG4gICAgICAgIHRoaXMuQ3JlYXRlZEFwcFNlcnZpY2UuZ2V0Q3JlYXRlZEFwcERldGFpbHMoaWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwX2RldGFpbHMgPSByZXM7XHJcblx0XHRcdFx0dGhpcy5nYWxsZXJ5X2ltYWdlcyA9W107XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hcHBfZGV0YWlscy5hcHBfaW1ncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBfZGV0YWlscy5hcHBfaW1ncy5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAgeC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwX21hc3Rlcl9pZDogIHguYXBwX21hc3Rlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwX2ltZzogR2xvYmFscy5pbWdfYmFzZV91cmwgKyB4LmFwcF9pbWdcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FsbGVyeV9pbWFnZXMucHVzaChkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGVfa2V5ID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2FsbGVyeV9pbWFnZXMpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcGlja0J1c2luZXNzSW1hZ2VzKGlkKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoVXBsb2FkU2luZ2xlSW1hZ2VNb2RhbENvbXBvbmVudCwgdGhpcy5vcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNhbWVyYSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmltYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FsbGVyeS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaW1hZ2U6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHJlcy5pbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcF9pbWFnZV9pZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcG1hc3RlcjogdGhpcy5hcHBfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcF9pbWFnZXM6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHJlcy5pbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJ1c2luZXNzSW1hZ2VzKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzLmdhbGxlcnkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5pbWFnZSlcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbGxlcnkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGltYWdlOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyByZXMuaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBfaW1hZ2VfaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBtYXN0ZXI6IHRoaXMuYXBwX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBfaW1hZ2VzOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyByZXMuaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCdXNpbmVzc0ltYWdlcyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcGlja05ld0J1c2luZXNzSW1hZ2VzKGlkKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoVXBsb2FkU2luZ2xlSW1hZ2VNb2RhbENvbXBvbmVudCwgdGhpcy5vcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNhbWVyYSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmltYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FsbGVyeS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaW1hZ2U6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHJlcy5pbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcF9pbWFnZV9pZDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbWFzdGVyOiB0aGlzLmFwcF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwX2ltYWdlczogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgcmVzLmltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQnVzaW5lc3NJbWFnZXMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXMuZ2FsbGVyeSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmltYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FsbGVyeS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaW1hZ2U6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHJlcy5pbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcF9pbWFnZV9pZDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbWFzdGVyOiB0aGlzLmFwcF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwX2ltYWdlczogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgcmVzLmltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQnVzaW5lc3NJbWFnZXMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGVCdXNpbmVzc0ltYWdlcyhkYXRhKSB7XHJcblx0XHRcclxuICAgICAgICB0aGlzLkNyZWF0ZWRBcHBTZXJ2aWNlLnVwZGF0ZUJ1c2luZXNzSW1hZ2VzKGRhdGEpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFwcERldGFpbHModGhpcy5hcHBfaWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG59Il19