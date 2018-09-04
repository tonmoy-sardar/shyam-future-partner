"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var created_app_service_1 = require("../../../core/services/created-app.service");
var router_2 = require("nativescript-angular/router");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var common_1 = require("@angular/common");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var upload_single_image_modal_component_1 = require("../../../core/component/upload-single-image-modal/upload-single-image-modal.component");
var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(route, CreatedAppService, formBuilder, router, location, modal, vcRef) {
        this.route = route;
        this.CreatedAppService = CreatedAppService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.location = location;
        this.modal = modal;
        this.vcRef = vcRef;
        this.product_data = {
            product_name: '',
            price: '',
            discounted_price: '',
            packing_charges: '',
            tags: '',
            app_master: '',
            product_category: ''
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
        this.options = {
            context: {},
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.product_image = '';
        this.key = '';
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var full_location = this.location.path().split('/');
        this.app_id = full_location[2].trim();
        this.cat_id = full_location[4].trim();
        if (full_location.length > 5) {
            this.key = full_location[5].trim();
        }
        console.log(this.cat_id);
        console.log(this.app_id);
        this.form = this.formBuilder.group({
            product_name: ['', forms_1.Validators.required],
            price: ['', forms_1.Validators.required],
            discounted_price: [''],
            packing_charges: [''],
            tags: ['']
        });
    };
    AddProductComponent.prototype.createProduct = function () {
        var _this = this;
        if (this.form.valid) {
            this.product_data.app_master = this.app_id;
            this.product_data.product_category = this.cat_id;
            if (this.product_data.discounted_price == '') {
                this.product_data.discounted_price = '0.00';
            }
            if (this.product_data.packing_charges == '') {
                this.product_data.packing_charges = '0.00';
            }
            console.log(this.product_data);
            this.loader.show(this.lodaing_options);
            this.CreatedAppService.createProduct(this.product_data).subscribe(function (res) {
                _this.loader.hide();
                console.log("Success");
                if (_this.key != '') {
                    _this.router.navigate(['/created-app/' + _this.app_id + '/products' + '/new']);
                }
                else {
                    _this.router.navigate(['/created-app/' + _this.app_id + '/products']);
                }
            }, function (error) {
                _this.loader.hide();
                console.log(error);
            });
        }
        else {
            this.markFormGroupTouched(this.form);
        }
    };
    AddProductComponent.prototype.pickImage = function () {
        var _this = this;
        this.modal.showModal(upload_single_image_modal_component_1.UploadSingleImageModalComponent, this.options).then(function (res) {
            console.log(res);
            if (res != undefined) {
                if (res.camera == true) {
                    console.log(res.image);
                    var _pic = 'data:image/png;base64,' + res.image;
                    _this.product_image = _pic;
                    _this.product_data['product_image'] = _this.product_image;
                }
                else if (res.gallery == true) {
                    console.log(res.image);
                    var _pic = 'data:image/png;base64,' + res.image;
                    _this.product_image = _pic;
                    _this.product_data['product_image'] = _this.product_image;
                }
            }
        });
    };
    AddProductComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    AddProductComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched);
    };
    AddProductComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
            'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
        };
    };
    AddProductComponent = __decorate([
        core_1.Component({
            selector: 'add-product',
            moduleId: module.id,
            templateUrl: "add-product.component.html",
            styleUrls: ["add-product.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            created_app_service_1.CreatedAppService,
            forms_1.FormBuilder,
            router_2.RouterExtensions,
            common_1.Location,
            dialogs_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], AddProductComponent);
    return AddProductComponent;
}());
exports.AddProductComponent = AddProductComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXByb2R1Y3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLXByb2R1Y3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9FO0FBRXBFLDBDQUFpRDtBQUNqRCx3Q0FBb0U7QUFDcEUsa0ZBQStFO0FBQy9FLHNEQUErRDtBQUMvRCxpRkFBaUU7QUFDakUsMENBQTJDO0FBQzNDLG1FQUE2RTtBQUM3RSw2SUFBd0k7QUFTeEk7SUFnREksNkJBQ1ksS0FBcUIsRUFDckIsaUJBQW9DLEVBQ3BDLFdBQXdCLEVBQ3hCLE1BQXdCLEVBQ3hCLFFBQWtCLEVBQ2xCLEtBQXlCLEVBQ3pCLEtBQXVCO1FBTnZCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQWpEbkMsaUJBQVksR0FBRztZQUNYLFlBQVksRUFBRSxFQUFFO1lBQ2hCLEtBQUssRUFBRSxFQUFFO1lBQ1QsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixlQUFlLEVBQUUsRUFBRTtZQUNuQixJQUFJLEVBQUUsRUFBRTtZQUNSLFVBQVUsRUFBRSxFQUFFO1lBQ2QsZ0JBQWdCLEVBQUUsRUFBRTtTQUN2QixDQUFBO1FBR0QsV0FBTSxHQUFHLElBQUksaURBQWdCLEVBQUUsQ0FBQztRQUNoQyxvQkFBZSxHQUFHO1lBQ2QsT0FBTyxFQUFFLFlBQVk7WUFDckIsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUU7Z0JBQ0wsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixjQUFjLEVBQUUsVUFBVSxNQUFNLElBQUksT0FBTyxD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QztTQUMzQyxDQUFDO3lDQW1EcUIsdUJBQWM7WUFDRix1Q0FBaUI7WUFDdkIsbUJBQVc7WUFDaEIseUJBQWdCO1lBQ2QsaUJBQVE7WUFDWCw0QkFBa0I7WUFDbEIsdUJBQWdCO09BdkQxQixtQkFBbUIsQ0E2Si9CO0lBQUQsMEJBQUM7Q0FBQSxBQTdKRCxJQTZKQztBQTdKWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDcmVhdGVkQXBwU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2NyZWF0ZWQtYXBwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9hZGluZ0luZGljYXRvciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIlxyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgVXBsb2FkU2luZ2xlSW1hZ2VNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL2NvbXBvbmVudC91cGxvYWQtc2luZ2xlLWltYWdlLW1vZGFsL3VwbG9hZC1zaW5nbGUtaW1hZ2UtbW9kYWwuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWRkLXByb2R1Y3QnLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBgYWRkLXByb2R1Y3QuY29tcG9uZW50Lmh0bWxgLFxyXG4gICAgc3R5bGVVcmxzOiBbYGFkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3NgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZFByb2R1Y3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIGFwcF9pZDogc3RyaW5nO1xyXG4gICAgY2F0X2lkOiBzdHJpbmc7XHJcbiAgICBwcm9kdWN0X2RldGFpbHM6IGFueTtcclxuICAgIHByb2R1Y3RfZGF0YSA9IHtcclxuICAgICAgICBwcm9kdWN0X25hbWU6ICcnLFxyXG4gICAgICAgIHByaWNlOiAnJyxcclxuICAgICAgICBkaXNjb3VudGVkX3ByaWNlOiAnJyxcclxuICAgICAgICBwYWNraW5nX2NoYXJnZXM6ICcnLFxyXG4gICAgICAgIHRhZ3M6ICcnLFxyXG4gICAgICAgIGFwcF9tYXN0ZXI6ICcnLFxyXG4gICAgICAgIHByb2R1Y3RfY2F0ZWdvcnk6ICcnXHJcbiAgICB9XHJcbiAgICB2aXNpYmxlX2tleTogYm9vbGVhbjtcclxuXHJcbiAgICBsb2FkZXIgPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xyXG4gICAgbG9kYWluZ19vcHRpb25zID0ge1xyXG4gICAgICAgIG1lc3NhZ2U6ICdMb2FkaW5nLi4uJyxcclxuICAgICAgICBwcm9ncmVzczogMC42NSxcclxuICAgICAgICBhbmRyb2lkOiB7XHJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYW5jZWxMaXN0ZW5lcjogZnVuY3Rpb24gKGRpYWxvZykgeyBjb25zb2xlLmxvZyhcIkxvYWRpbmcgY2FuY2VsbGVkXCIpIH0sXHJcbiAgICAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICAgICBwcm9ncmVzc051bWJlckZvcm1hdDogXCIlMWQvJTJkXCIsXHJcbiAgICAgICAgICAgIHByb2dyZXNzUGVyY2VudEZvcm1hdDogMC41MyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3NTdHlsZTogMSxcclxuICAgICAgICAgICAgc2Vjb25kYXJ5UHJvZ3Jlc3M6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlvczoge1xyXG4gICAgICAgICAgICBkZXRhaWxzOiBcIkFkZGl0aW9uYWwgZGV0YWlsIG5vdGUhXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogMTAsXHJcbiAgICAgICAgICAgIGRpbUJhY2tncm91bmQ6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiM0QjlFRDZcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd1wiLFxyXG4gICAgICAgICAgICB1c2VySW50ZXJhY3Rpb25FbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgaGlkZUJlemVsOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgY29udGV4dDoge30sXHJcbiAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgfTtcclxuICAgIHByb2R1Y3RfaW1hZ2U6IHN0cmluZyA9ICcnO1xyXG4gICAga2V5OiBzdHJpbmcgPSAnJztcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgQ3JlYXRlZEFwcFNlcnZpY2U6IENyZWF0ZWRBcHBTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxyXG4gICAgICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB2YXIgZnVsbF9sb2NhdGlvbiA9IHRoaXMubG9jYXRpb24ucGF0aCgpLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgdGhpcy5hcHBfaWQgPSBmdWxsX2xvY2F0aW9uWzJdLnRyaW0oKTtcclxuICAgICAgICB0aGlzLmNhdF9pZCA9IGZ1bGxfbG9jYXRpb25bNF0udHJpbSgpO1xyXG4gICAgICAgIGlmIChmdWxsX2xvY2F0aW9uLmxlbmd0aCA+IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5rZXkgPSBmdWxsX2xvY2F0aW9uWzVdLnRyaW0oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jYXRfaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXBwX2lkKTtcclxuXHJcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgIHByb2R1Y3RfbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgcHJpY2U6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGRpc2NvdW50ZWRfcHJpY2U6IFsnJ10sXHJcbiAgICAgICAgICAgIHBhY2tpbmdfY2hhcmdlczogWycnXSxcclxuICAgICAgICAgICAgdGFnczogWycnXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjcmVhdGVQcm9kdWN0KCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mb3JtLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdF9kYXRhLmFwcF9tYXN0ZXIgPSB0aGlzLmFwcF9pZDtcclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0X2RhdGEucHJvZHVjdF9jYXRlZ29yeSA9IHRoaXMuY2F0X2lkO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9kdWN0X2RhdGEuZGlzY291bnRlZF9wcmljZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X2RhdGEuZGlzY291bnRlZF9wcmljZSA9ICcwLjAwJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2R1Y3RfZGF0YS5wYWNraW5nX2NoYXJnZXMgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdF9kYXRhLnBhY2tpbmdfY2hhcmdlcyA9ICcwLjAwJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZHVjdF9kYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkZXIuc2hvdyh0aGlzLmxvZGFpbmdfb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMuQ3JlYXRlZEFwcFNlcnZpY2UuY3JlYXRlUHJvZHVjdCh0aGlzLnByb2R1Y3RfZGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5rZXkgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY3JlYXRlZC1hcHAvJyArIHRoaXMuYXBwX2lkICsgJy9wcm9kdWN0cycgKyAnL25ldyddKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY3JlYXRlZC1hcHAvJyArIHRoaXMuYXBwX2lkICsgJy9wcm9kdWN0cyddKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFya0Zvcm1Hcm91cFRvdWNoZWQodGhpcy5mb3JtKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwaWNrSW1hZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoVXBsb2FkU2luZ2xlSW1hZ2VNb2RhbENvbXBvbmVudCwgdGhpcy5vcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNhbWVyYSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmltYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfcGljID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgcmVzLmltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdF9pbWFnZSA9IF9waWNcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RfZGF0YVsncHJvZHVjdF9pbWFnZSddID0gdGhpcy5wcm9kdWN0X2ltYWdlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXMuZ2FsbGVyeSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmltYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfcGljID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgcmVzLmltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X2ltYWdlID0gX3BpY1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdF9kYXRhWydwcm9kdWN0X2ltYWdlJ10gPSB0aGlzLnByb2R1Y3RfaW1hZ2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbWFya0Zvcm1Hcm91cFRvdWNoZWQoZm9ybUdyb3VwOiBGb3JtR3JvdXApIHtcclxuICAgICAgICAoPGFueT5PYmplY3QpLnZhbHVlcyhmb3JtR3JvdXAuY29udHJvbHMpLmZvckVhY2goY29udHJvbCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgICAgICAgICBpZiAoY29udHJvbC5jb250cm9scykge1xyXG4gICAgICAgICAgICAgICAgY29udHJvbC5jb250cm9scy5mb3JFYWNoKGMgPT4gdGhpcy5tYXJrRm9ybUdyb3VwVG91Y2hlZChjKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpc0ZpZWxkVmFsaWQoZmllbGQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5mb3JtLmdldChmaWVsZCkudmFsaWQgJiYgKHRoaXMuZm9ybS5nZXQoZmllbGQpLmRpcnR5IHx8IHRoaXMuZm9ybS5nZXQoZmllbGQpLnRvdWNoZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlGaWVsZENzcyhmaWVsZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgJ2lzLWludmFsaWQnOiB0aGlzLmZvcm0uZ2V0KGZpZWxkKS5pbnZhbGlkICYmICh0aGlzLmZvcm0uZ2V0KGZpZWxkKS5kaXJ0eSB8fCB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKSxcclxuICAgICAgICAgICAgJ2lzLXZhbGlkJzogdGhpcy5mb3JtLmdldChmaWVsZCkudmFsaWQgJiYgKHRoaXMuZm9ybS5nZXQoZmllbGQpLmRpcnR5IHx8IHRoaXMuZm9ybS5nZXQoZmllbGQpLnRvdWNoZWQpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG59Il19