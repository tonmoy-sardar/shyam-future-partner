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
var ImageSourceModule = require("image-source");
var EditProductComponent = /** @class */ (function () {
    function EditProductComponent(route, CreatedAppService, formBuilder, router, location, modal, vcRef) {
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
    EditProductComponent.prototype.ngOnInit = function () {
        var full_location = this.location.path().split('/');
        this.app_id = full_location[2].trim();
        this.product_id = full_location[4].trim();
        if (full_location.length > 5) {
            this.key = full_location[5].trim();
        }
        console.log(this.product_id);
        console.log(this.app_id);
        this.getProductDetails(this.product_id);
        this.form = this.formBuilder.group({
            product_name: ['', forms_1.Validators.required],
            price: ['', forms_1.Validators.required],
            discounted_price: [''],
            packing_charges: [''],
            tags: ['']
        });
    };
    EditProductComponent.prototype.pickImage = function () {
        var _this = this;
        this.modal.showModal(upload_single_image_modal_component_1.UploadSingleImageModalComponent, this.options).then(function (res) {
            console.log(res);
            if (res != undefined) {
                _this.product_image = '';
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
    EditProductComponent.prototype.getProductDetails = function (id) {
        var _this = this;
        this.loader.show(this.lodaing_options);
        this.CreatedAppService.getProductDetails(id).subscribe(function (res) {
            _this.product_details = res;
            _this.product_data.product_name = _this.product_details.product_name;
            _this.product_data.price = _this.product_details.price;
            _this.product_data.discounted_price = _this.product_details.discounted_price;
            _this.product_data.packing_charges = _this.product_details.packing_charges;
            _this.product_data.tags = _this.product_details.tags;
            _this.product_data.app_master = _this.product_details.app_master;
            _this.product_data.product_category = _this.product_details.product_category;
            if (_this.product_details.product_image != null) {
                _this.product_image = _this.product_details.product_image;
            }
            _this.visible_key = true;
            console.log(res);
            _this.loader.hide();
        }, function (error) {
            _this.loader.hide();
            console.log(error);
        });
    };
    EditProductComponent.prototype.updateProduct = function () {
        var _this = this;
        if (this.form.valid) {
            console.log(this.product_data);
            if (this.product_data.discounted_price == '') {
                this.product_data.discounted_price = '0.00';
            }
            if (this.product_data.packing_charges == '') {
                this.product_data.packing_charges = '0.00';
            }
            this.loader.show(this.lodaing_options);
            this.CreatedAppService.updateProduct(this.product_id, this.product_data).subscribe(function (res) {
                console.log("Success");
                _this.loader.hide();
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
    EditProductComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    EditProductComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched);
    };
    EditProductComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
            'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
        };
    };
    EditProductComponent = __decorate([
        core_1.Component({
            selector: 'edit-product',
            moduleId: module.id,
            templateUrl: "edit-product.component.html",
            styleUrls: ["edit-product.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            created_app_service_1.CreatedAppService,
            forms_1.FormBuilder,
            router_2.RouterExtensions,
            common_1.Location,
            dialogs_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], EditProductComponent);
    return EditProductComponent;
}());
exports.EditProductComponent = EditProductComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1wcm9kdWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXQtcHJvZHVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFFcEUsMENBQWlEO0FBQ2pELHdDQUFvRTtBQUNwRSxrRkFBK0U7QUFDL0Usc0RBQStEO0FBQy9ELGlGQUFrRTtBQUNsRSwwQ0FBMkM7QUFDM0MsbUVBQTZFO0FBQzdFLDZJQUF3STtBQUN4SSxJQUFJLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQVNoRDtJQStDSSw4QkFDWSxLQUFxQixFQUNyQixpQkFBb0MsRUFDcEMsV0FBd0IsRUFDeEIsTUFBd0IsRUFDeEIsUUFBa0IsRUFDbEIsS0FBeUIsRUFDekIsS0FBdUI7UUFOdkIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBaERuQyxpQkFBWSxHQUFHO1lBQ1gsWUFBWSxFQUFFLEVBQUU7WUFDaEIsS0FBSyxFQUFFLEVBQUU7WUFDVCxnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGVBQWUsRUFBRSxFQUFFO1lBQ25CLElBQUksRUFBRSxFQUFFO1lBQ1IsVUFBVSxFQUFFLEVBQUU7WUFDZCxnQkFBZ0IsRUFBRSxFQUFFO1NBQ3ZCLENBQUE7UUFFRCxXQUFNLEdBQUcsSUFBSSxpREFBZ0IsRUFBRSxDQUFDO1FBQ2hDLG9CQUFlLEdBQUc7WUFDZCxPQUFPLEVBQUUsWUFBWTtZQUNyQixRQUFRLEVBQUUsSUFBSTtZQUNkLE9BQU8sRUFBRTtnQkFDTCxhQUFhLEVBQUUsSUFBSTtnQkFDbkIsVUFB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QUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUN6RyxDQUFDO0lBQ04sQ0FBQztJQWxMUSxvQkFBb0I7UUFQaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBa0RxQix1QkFBYztZQUNGLHVDQUFpQjtZQUN2QixtQkFBVztZQUNoQix5QkFBZ0I7WUFDZCxpQkFBUTtZQUNYLDRCQUFrQjtZQUNsQix1QkFBZ0I7T0F0RDFCLG9CQUFvQixDQXFMaEM7SUFBRCwyQkFBQztDQUFBLEFBckxELElBcUxDO0FBckxZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENyZWF0ZWRBcHBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvc2VydmljZXMvY3JlYXRlZC1hcHAuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBMb2FkaW5nSW5kaWNhdG9yIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2FkaW5nLWluZGljYXRvclwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgVXBsb2FkU2luZ2xlSW1hZ2VNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL2NvbXBvbmVudC91cGxvYWQtc2luZ2xlLWltYWdlLW1vZGFsL3VwbG9hZC1zaW5nbGUtaW1hZ2UtbW9kYWwuY29tcG9uZW50XCI7XHJcbnZhciBJbWFnZVNvdXJjZU1vZHVsZSA9IHJlcXVpcmUoXCJpbWFnZS1zb3VyY2VcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZWRpdC1wcm9kdWN0JyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogYGVkaXQtcHJvZHVjdC5jb21wb25lbnQuaHRtbGAsXHJcbiAgICBzdHlsZVVybHM6IFtgZWRpdC1wcm9kdWN0LmNvbXBvbmVudC5jc3NgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9kdWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBhcHBfaWQ6IHN0cmluZztcclxuICAgIHByb2R1Y3RfaWQ6IHN0cmluZztcclxuICAgIHByb2R1Y3RfZGV0YWlsczogYW55O1xyXG4gICAgcHJvZHVjdF9kYXRhID0ge1xyXG4gICAgICAgIHByb2R1Y3RfbmFtZTogJycsXHJcbiAgICAgICAgcHJpY2U6ICcnLFxyXG4gICAgICAgIGRpc2NvdW50ZWRfcHJpY2U6ICcnLFxyXG4gICAgICAgIHBhY2tpbmdfY2hhcmdlczogJycsXHJcbiAgICAgICAgdGFnczogJycsXHJcbiAgICAgICAgYXBwX21hc3RlcjogJycsXHJcbiAgICAgICAgcHJvZHVjdF9jYXRlZ29yeTogJydcclxuICAgIH1cclxuICAgIHZpc2libGVfa2V5OiBib29sZWFuO1xyXG4gICAgbG9hZGVyID0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcclxuICAgIGxvZGFpbmdfb3B0aW9ucyA9IHtcclxuICAgICAgICBtZXNzYWdlOiAnTG9hZGluZy4uLicsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IDAuNjUsXHJcbiAgICAgICAgYW5kcm9pZDoge1xyXG4gICAgICAgICAgICBpbmRldGVybWluYXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY2FuY2VsTGlzdGVuZXI6IGZ1bmN0aW9uIChkaWFsb2cpIHsgY29uc29sZS5sb2coXCJMb2FkaW5nIGNhbmNlbGxlZFwiKSB9LFxyXG4gICAgICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgICAgcHJvZ3Jlc3NOdW1iZXJGb3JtYXQ6IFwiJTFkLyUyZFwiLFxyXG4gICAgICAgICAgICBwcm9ncmVzc1BlcmNlbnRGb3JtYXQ6IDAuNTMsXHJcbiAgICAgICAgICAgIHByb2dyZXNzU3R5bGU6IDEsXHJcbiAgICAgICAgICAgIHNlY29uZGFyeVByb2dyZXNzOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpb3M6IHtcclxuICAgICAgICAgICAgZGV0YWlsczogXCJBZGRpdGlvbmFsIGRldGFpbCBub3RlIVwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IDEwLFxyXG4gICAgICAgICAgICBkaW1CYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjNEI5RUQ2XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dcIixcclxuICAgICAgICAgICAgdXNlckludGVyYWN0aW9uRW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGhpZGVCZXplbDogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvcHRpb25zID0ge1xyXG4gICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgIH07XHJcbiAgICBwcm9kdWN0X2ltYWdlOiBzdHJpbmcgPSAnJztcclxuICAgIGtleTogc3RyaW5nID0gJyc7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIENyZWF0ZWRBcHBTZXJ2aWNlOiBDcmVhdGVkQXBwU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcclxuICAgICAgICBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdmFyIGZ1bGxfbG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uLnBhdGgoKS5zcGxpdCgnLycpO1xyXG4gICAgICAgIHRoaXMuYXBwX2lkID0gZnVsbF9sb2NhdGlvblsyXS50cmltKCk7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0X2lkID0gZnVsbF9sb2NhdGlvbls0XS50cmltKCk7XHJcbiAgICAgICAgaWYgKGZ1bGxfbG9jYXRpb24ubGVuZ3RoID4gNSkge1xyXG4gICAgICAgICAgICB0aGlzLmtleSA9IGZ1bGxfbG9jYXRpb25bNV0udHJpbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RfaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXBwX2lkKTtcclxuICAgICAgICB0aGlzLmdldFByb2R1Y3REZXRhaWxzKHRoaXMucHJvZHVjdF9pZCk7XHJcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgIHByb2R1Y3RfbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgcHJpY2U6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGRpc2NvdW50ZWRfcHJpY2U6IFsnJ10sXHJcbiAgICAgICAgICAgIHBhY2tpbmdfY2hhcmdlczogWycnXSxcclxuICAgICAgICAgICAgdGFnczogWycnXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBpY2tJbWFnZSgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChVcGxvYWRTaW5nbGVJbWFnZU1vZGFsQ29tcG9uZW50LCB0aGlzLm9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgaWYgKHJlcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdF9pbWFnZSA9ICcnXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNhbWVyYSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmltYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfcGljID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgcmVzLmltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdF9pbWFnZSA9IF9waWNcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RfZGF0YVsncHJvZHVjdF9pbWFnZSddID0gdGhpcy5wcm9kdWN0X2ltYWdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzLmdhbGxlcnkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5pbWFnZSlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX3BpYyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHJlcy5pbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdF9pbWFnZSA9IF9waWNcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RfZGF0YVsncHJvZHVjdF9pbWFnZSddID0gdGhpcy5wcm9kdWN0X2ltYWdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9kdWN0RGV0YWlscyhpZCkge1xyXG4gICAgICAgIHRoaXMubG9hZGVyLnNob3codGhpcy5sb2RhaW5nX29wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuQ3JlYXRlZEFwcFNlcnZpY2UuZ2V0UHJvZHVjdERldGFpbHMoaWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdF9kZXRhaWxzID0gcmVzO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdF9kYXRhLnByb2R1Y3RfbmFtZSA9IHRoaXMucHJvZHVjdF9kZXRhaWxzLnByb2R1Y3RfbmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdF9kYXRhLnByaWNlID0gdGhpcy5wcm9kdWN0X2RldGFpbHMucHJpY2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RfZGF0YS5kaXNjb3VudGVkX3ByaWNlID0gdGhpcy5wcm9kdWN0X2RldGFpbHMuZGlzY291bnRlZF9wcmljZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdF9kYXRhLnBhY2tpbmdfY2hhcmdlcyA9IHRoaXMucHJvZHVjdF9kZXRhaWxzLnBhY2tpbmdfY2hhcmdlcztcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdF9kYXRhLnRhZ3MgPSB0aGlzLnByb2R1Y3RfZGV0YWlscy50YWdzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X2RhdGEuYXBwX21hc3RlciA9IHRoaXMucHJvZHVjdF9kZXRhaWxzLmFwcF9tYXN0ZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RfZGF0YS5wcm9kdWN0X2NhdGVnb3J5ID0gdGhpcy5wcm9kdWN0X2RldGFpbHMucHJvZHVjdF9jYXRlZ29yeTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2R1Y3RfZGV0YWlscy5wcm9kdWN0X2ltYWdlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RfaW1hZ2UgPSB0aGlzLnByb2R1Y3RfZGV0YWlscy5wcm9kdWN0X2ltYWdlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlX2tleSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVByb2R1Y3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RfZGF0YSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2R1Y3RfZGF0YS5kaXNjb3VudGVkX3ByaWNlID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RfZGF0YS5kaXNjb3VudGVkX3ByaWNlID0gJzAuMDAnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvZHVjdF9kYXRhLnBhY2tpbmdfY2hhcmdlcyA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X2RhdGEucGFja2luZ19jaGFyZ2VzID0gJzAuMDAnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sb2FkZXIuc2hvdyh0aGlzLmxvZGFpbmdfb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMuQ3JlYXRlZEFwcFNlcnZpY2UudXBkYXRlUHJvZHVjdCh0aGlzLnByb2R1Y3RfaWQsIHRoaXMucHJvZHVjdF9kYXRhKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMua2V5ICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NyZWF0ZWQtYXBwLycgKyB0aGlzLmFwcF9pZCArICcvcHJvZHVjdHMnICsgJy9uZXcnXSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NyZWF0ZWQtYXBwLycgKyB0aGlzLmFwcF9pZCArICcvcHJvZHVjdHMnXSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1hcmtGb3JtR3JvdXBUb3VjaGVkKHRoaXMuZm9ybSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFya0Zvcm1Hcm91cFRvdWNoZWQoZm9ybUdyb3VwOiBGb3JtR3JvdXApIHtcclxuICAgICAgICAoPGFueT5PYmplY3QpLnZhbHVlcyhmb3JtR3JvdXAuY29udHJvbHMpLmZvckVhY2goY29udHJvbCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgICAgICAgICBpZiAoY29udHJvbC5jb250cm9scykge1xyXG4gICAgICAgICAgICAgICAgY29udHJvbC5jb250cm9scy5mb3JFYWNoKGMgPT4gdGhpcy5tYXJrRm9ybUdyb3VwVG91Y2hlZChjKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpc0ZpZWxkVmFsaWQoZmllbGQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5mb3JtLmdldChmaWVsZCkudmFsaWQgJiYgKHRoaXMuZm9ybS5nZXQoZmllbGQpLmRpcnR5IHx8IHRoaXMuZm9ybS5nZXQoZmllbGQpLnRvdWNoZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlGaWVsZENzcyhmaWVsZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgJ2lzLWludmFsaWQnOiB0aGlzLmZvcm0uZ2V0KGZpZWxkKS5pbnZhbGlkICYmICh0aGlzLmZvcm0uZ2V0KGZpZWxkKS5kaXJ0eSB8fCB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKSxcclxuICAgICAgICAgICAgJ2lzLXZhbGlkJzogdGhpcy5mb3JtLmdldChmaWVsZCkudmFsaWQgJiYgKHRoaXMuZm9ybS5nZXQoZmllbGQpLmRpcnR5IHx8IHRoaXMuZm9ybS5nZXQoZmllbGQpLnRvdWNoZWQpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG59Il19