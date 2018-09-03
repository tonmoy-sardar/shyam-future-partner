"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var created_app_service_1 = require("../../../core/services/created-app.service");
var nativescript_secure_storage_1 = require("nativescript-secure-storage");
// registerElement('CardView', () => CardView);
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var explore_service_1 = require("../../../core/services/explore.service");
var application_settings_1 = require("application-settings");
var Globals = require("../../../core/globals");
var forms_1 = require("@angular/forms");
var router_1 = require("nativescript-angular/router");
var nativescript_drop_down_1 = require("nativescript-drop-down");
var location_modal_component_1 = require("../../../core/component/location-modal/location-modal.component");
var upload_single_image_modal_component_1 = require("../../../core/component/upload-single-image-modal/upload-single-image-modal.component");
var OwnerInfoComponent = /** @class */ (function () {
    function OwnerInfoComponent(exploreService, createdAppService, modal, formBuilder, router, vcRef) {
        this.exploreService = exploreService;
        this.createdAppService = createdAppService;
        this.modal = modal;
        this.formBuilder = formBuilder;
        this.router = router;
        this.vcRef = vcRef;
        this.category_list = [];
        this.base_url = Globals.img_base_url;
        this.processing = false;
        this.owner_details = {
            owner_name: '',
            owner_designation: '',
            owner_pic: '',
            business_est_year: '',
            store_address: '',
            lat: '',
            long: ''
        };
        this.options = {
            context: {},
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.selectedIndex = null;
        this.hint = "Select Designation";
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
        this.owner_pic = '';
        this.selectedIndex_d = 1;
        this.secureStorage = new nativescript_secure_storage_1.SecureStorage();
    }
    OwnerInfoComponent.prototype.ngOnInit = function () {
        this.user_id = application_settings_1.getString('user_id');
        this.form = this.formBuilder.group({
            owner_name: ['', forms_1.Validators.required],
            owner_designation: [''],
            business_est_year: [''],
            store_address: [''],
            lat: [''],
            long: ['']
        });
        this.loader.show(this.lodaing_options);
        this.getDesignationDropdown();
        this.populateData();
    };
    OwnerInfoComponent.prototype.pickImage = function () {
        var _this = this;
        this.modal.showModal(upload_single_image_modal_component_1.UploadSingleImageModalComponent, this.options).then(function (res) {
            console.log(res);
            if (res != undefined) {
                if (res.camera == true) {
                    console.log(res.image);
                    var _pic = 'data:image/png;base64,' + res.image;
                    _this.owner_pic = _pic;
                }
                else if (res.gallery == true) {
                    console.log(res.image);
                    var _pic = 'data:image/png;base64,' + res.image;
                    _this.owner_pic = _pic;
                }
            }
        });
    };
    OwnerInfoComponent.prototype.onchange = function (args) {
        console.log("Drop Down selected index changed from " + args.oldIndex + " to " + args.newIndex + ". New value is \"" + this.designations.getValue(args.newIndex) + "\"");
        this.owner_details.owner_designation = this.designations.getValue(args.newIndex);
    };
    OwnerInfoComponent.prototype.getDesignationDropdown = function () {
        var _this = this;
        this.createdAppService.getDesignationDropdown().subscribe(function (data) {
            console.log(data);
            _this.designations = new nativescript_drop_down_1.ValueList();
            for (var i_1 = 0; i_1 < data.length; i_1++) {
                _this.designations.push({
                    value: data[i_1]['id'],
                    display: data[i_1]['designation_name'],
                });
            }
            _this.items = [];
            for (var i = 0; i < 5; i++) {
                _this.items.push("data item " + i);
            }
            _this.loader.hide();
        }, function (error) {
            _this.loader.hide();
            console.log(error);
        });
    };
    ;
    OwnerInfoComponent.prototype.populateData = function () {
        var _this = this;
        this.secureStorage.get({
            key: "create_app_data"
        }).then(function (value) {
            var data = JSON.parse(value);
            console.log(data);
            if (data != null) {
                _this.create_app_data = data;
            }
            else {
            }
        });
    };
    OwnerInfoComponent.prototype.submitOwnerInfo = function () {
        if (this.form.valid) {
            var data = {
                app_category: this.create_app_data.app_category,
                business_name: this.create_app_data.business_name,
                business_description: this.create_app_data.business_description,
                app_website_url: this.create_app_data.app_website_url,
                logo: this.create_app_data.logo,
                store_address: this.owner_details.store_address,
                lat: this.owner_details.lat,
                long: this.owner_details.long,
                owner_name: this.owner_details.owner_name,
                owner_designation: this.owner_details.owner_designation,
                business_est_year: this.owner_details.business_est_year,
                owner_pic: this.owner_pic,
                user: this.user_id
            };
            console.log(data);
            // this.loader.show(this.lodaing_options);
            // this.createdAppService.createNewApp(data).subscribe(
            //     res => {
            //         console.log(res)
            //         this.loader.hide()
            //     },
            //     error => {
            //         console.log(error)
            //         this.loader.hide()
            //     }
            // )
        }
        else {
            this.markFormGroupTouched(this.form);
        }
    };
    OwnerInfoComponent.prototype.setCreateAppData = function (data) {
        this.secureStorage.set({
            key: 'create_app_data',
            value: JSON.stringify(data)
        }).then(function (success) {
            console.log(success);
        });
    };
    ;
    OwnerInfoComponent.prototype.searchLocation = function () {
        var _this = this;
        var option = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(location_modal_component_1.LocationModalComponent, option).then(function (res) {
            console.log(res);
            if (res.name != "") {
                _this.owner_details.store_address = res.name;
                _this.owner_details.lat = res.latitude;
                _this.owner_details.long = res.longitude;
                // data.structured_formatting.main_text
            }
        });
    };
    OwnerInfoComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    OwnerInfoComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched);
    };
    OwnerInfoComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
            'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
        };
    };
    OwnerInfoComponent = __decorate([
        core_1.Component({
            selector: "owner-info",
            moduleId: module.id,
            templateUrl: "./owner-info.component.html",
            styleUrls: ['./owner-info.component.css']
        }),
        __metadata("design:paramtypes", [explore_service_1.ExploreService,
            created_app_service_1.CreatedAppService,
            dialogs_1.ModalDialogService,
            forms_1.FormBuilder,
            router_1.RouterExtensions,
            core_1.ViewContainerRef])
    ], OwnerInfoComponent);
    return OwnerInfoComponent;
}());
exports.OwnerInfoComponent = OwnerInfoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3duZXItaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvd25lci1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRjtBQUczRixpRkFBaUU7QUFDakUsa0ZBQStFO0FBQy9FLDJFQUE0RDtBQUM1RCwrQ0FBK0M7QUFDL0MsbUVBQTZFO0FBQzdFLDBFQUF3RTtBQUN4RSw2REFBMkY7QUFDM0YsK0NBQWlEO0FBQ2pELHdDQUFvRTtBQUNwRSxzREFBK0Q7QUFDL0QsaUVBQWtGO0FBQ2xGLDRHQUF5RztBQUN6Ryw2SUFBd0k7QUFReEk7SUF5REksNEJBQ1ksY0FBOEIsRUFDOUIsaUJBQW9DLEVBQ3BDLEtBQXlCLEVBQ3pCLFdBQXdCLEVBQ3hCLE1BQXdCLEVBQ3hCLEtBQXVCO1FBTHZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ3pCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBNURuQyxrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN4QixhQUFRLEdBQVcsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUN4QyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSW5CLGtCQUFhLEdBQVE7WUFDakIsVUFBVSxFQUFFLEVBQUU7WUFDZCxpQkFBaUIsRUFBRSxFQUFFO1lBQ3JCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsaUJBQWlCLEVBQUUsRUFBRTtZQUNyQixhQUFhLEVBQUUsRUFBRTtZQUNqQixHQUFHLEVBQUUsRUFBRTtZQUNQLElBQUksRUFBRSxFQUFFO1NBQ1gsQ0FBQTtRQUVELFlBQU8sR0FBRztZQUNOLE9BQU8sRUFBRSxFQUFFO1lBQ1gsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsSUFB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Q1osbUJBQVc7WUFDaEIseUJBQWdCO1lBQ2pCLHVCQUFnQjtPQS9EMUIsa0JBQWtCLENBMk85QjtJQUFELHlCQUFDO0NBQUEsQUEzT0QsSUEyT0M7QUEzT1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcclxuaW1wb3J0IHsgQ2FyZFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtY2FyZHZpZXcnO1xyXG5pbXBvcnQgeyBMb2FkaW5nSW5kaWNhdG9yIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2FkaW5nLWluZGljYXRvclwiXHJcbmltcG9ydCB7IENyZWF0ZWRBcHBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvc2VydmljZXMvY3JlYXRlZC1hcHAuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTZWN1cmVTdG9yYWdlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zZWN1cmUtc3RvcmFnZVwiO1xyXG4vLyByZWdpc3RlckVsZW1lbnQoJ0NhcmRWaWV3JywgKCkgPT4gQ2FyZFZpZXcpO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IEV4cGxvcmVTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvc2VydmljZXMvZXhwbG9yZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nLCBnZXRCb29sZWFuLCBzZXRCb29sZWFuLCBjbGVhciB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgKiBhcyBHbG9iYWxzIGZyb20gJy4uLy4uLy4uL2NvcmUvZ2xvYmFscyc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBWYWx1ZUxpc3QgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb21wb25lbnQvbG9jYXRpb24tbW9kYWwvbG9jYXRpb24tbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVXBsb2FkU2luZ2xlSW1hZ2VNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL2NvbXBvbmVudC91cGxvYWQtc2luZ2xlLWltYWdlLW1vZGFsL3VwbG9hZC1zaW5nbGUtaW1hZ2UtbW9kYWwuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm93bmVyLWluZm9cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL293bmVyLWluZm8uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL293bmVyLWluZm8uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPd25lckluZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZm9ybTogRm9ybUdyb3VwO1xyXG4gICAgdXNlcl9pZDogc3RyaW5nO1xyXG4gICAgY2F0ZWdvcnlfbGlzdDogYW55ID0gW107XHJcbiAgICBiYXNlX3VybDogc3RyaW5nID0gR2xvYmFscy5pbWdfYmFzZV91cmw7XHJcbiAgICBwcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICBzZWN1cmVTdG9yYWdlOiBTZWN1cmVTdG9yYWdlO1xyXG4gICAgY3JlYXRlX2FwcF9kYXRhOiBhbnk7XHJcblxyXG4gICAgb3duZXJfZGV0YWlsczogYW55ID0ge1xyXG4gICAgICAgIG93bmVyX25hbWU6ICcnLFxyXG4gICAgICAgIG93bmVyX2Rlc2lnbmF0aW9uOiAnJyxcclxuICAgICAgICBvd25lcl9waWM6ICcnLFxyXG4gICAgICAgIGJ1c2luZXNzX2VzdF95ZWFyOiAnJyxcclxuICAgICAgICBzdG9yZV9hZGRyZXNzOiAnJyxcclxuICAgICAgICBsYXQ6ICcnLFxyXG4gICAgICAgIGxvbmc6ICcnXHJcbiAgICB9XHJcblxyXG4gICAgb3B0aW9ucyA9IHtcclxuICAgICAgICBjb250ZXh0OiB7fSxcclxuICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgICB9O1xyXG5cclxuICAgIHNlbGVjdGVkSW5kZXg6IG51bWJlciA9IG51bGw7XHJcbiAgICBoaW50ID0gXCJTZWxlY3QgRGVzaWduYXRpb25cIjtcclxuICAgIGRlc2lnbmF0aW9uczogVmFsdWVMaXN0PHN0cmluZz47XHJcblxyXG4gICAgbG9hZGVyID0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcclxuICAgIGxvZGFpbmdfb3B0aW9ucyA9IHtcclxuICAgICAgICBtZXNzYWdlOiAnTG9hZGluZy4uLicsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IDAuNjUsXHJcbiAgICAgICAgYW5kcm9pZDoge1xyXG4gICAgICAgICAgICBpbmRldGVybWluYXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY2FuY2VsTGlzdGVuZXI6IGZ1bmN0aW9uIChkaWFsb2cpIHsgY29uc29sZS5sb2coXCJMb2FkaW5nIGNhbmNlbGxlZFwiKSB9LFxyXG4gICAgICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgICAgcHJvZ3Jlc3NOdW1iZXJGb3JtYXQ6IFwiJTFkLyUyZFwiLFxyXG4gICAgICAgICAgICBwcm9ncmVzc1BlcmNlbnRGb3JtYXQ6IDAuNTMsXHJcbiAgICAgICAgICAgIHByb2dyZXNzU3R5bGU6IDEsXHJcbiAgICAgICAgICAgIHNlY29uZGFyeVByb2dyZXNzOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpb3M6IHtcclxuICAgICAgICAgICAgZGV0YWlsczogXCJBZGRpdGlvbmFsIGRldGFpbCBub3RlIVwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IDEwLFxyXG4gICAgICAgICAgICBkaW1CYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjNEI5RUQ2XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dcIixcclxuICAgICAgICAgICAgdXNlckludGVyYWN0aW9uRW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGhpZGVCZXplbDogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3duZXJfcGljOiBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBzZWxlY3RlZEluZGV4X2QgPSAxO1xyXG4gICAgcHVibGljIGl0ZW1zOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBleHBsb3JlU2VydmljZTogRXhwbG9yZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjcmVhdGVkQXBwU2VydmljZTogQ3JlYXRlZEFwcFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnNlY3VyZVN0b3JhZ2UgPSBuZXcgU2VjdXJlU3RvcmFnZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnVzZXJfaWQgPSBnZXRTdHJpbmcoJ3VzZXJfaWQnKTtcclxuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgb3duZXJfbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgb3duZXJfZGVzaWduYXRpb246IFsnJ10sXHJcbiAgICAgICAgICAgIGJ1c2luZXNzX2VzdF95ZWFyOiBbJyddLFxyXG4gICAgICAgICAgICBzdG9yZV9hZGRyZXNzOiBbJyddLFxyXG4gICAgICAgICAgICBsYXQ6IFsnJ10sXHJcbiAgICAgICAgICAgIGxvbmc6IFsnJ11cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkZXIuc2hvdyh0aGlzLmxvZGFpbmdfb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5nZXREZXNpZ25hdGlvbkRyb3Bkb3duKCk7XHJcbiAgICAgICAgdGhpcy5wb3B1bGF0ZURhdGEoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcGlja0ltYWdlKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKFVwbG9hZFNpbmdsZUltYWdlTW9kYWxDb21wb25lbnQsIHRoaXMub3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICBpZiAocmVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jYW1lcmEgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5pbWFnZSlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX3BpYyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHJlcy5pbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm93bmVyX3BpYyA9IF9waWNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcy5nYWxsZXJ5ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuaW1hZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9waWMgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyByZXMuaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm93bmVyX3BpYyA9IF9waWNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25jaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgRHJvcCBEb3duIHNlbGVjdGVkIGluZGV4IGNoYW5nZWQgZnJvbSAke2FyZ3Mub2xkSW5kZXh9IHRvICR7YXJncy5uZXdJbmRleH0uIE5ldyB2YWx1ZSBpcyBcIiR7dGhpcy5kZXNpZ25hdGlvbnMuZ2V0VmFsdWUoXHJcbiAgICAgICAgICAgIGFyZ3MubmV3SW5kZXgpfVwiYCk7XHJcbiAgICAgICAgdGhpcy5vd25lcl9kZXRhaWxzLm93bmVyX2Rlc2lnbmF0aW9uID0gdGhpcy5kZXNpZ25hdGlvbnMuZ2V0VmFsdWUoXHJcbiAgICAgICAgICAgIGFyZ3MubmV3SW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlc2lnbmF0aW9uRHJvcGRvd24oKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlZEFwcFNlcnZpY2UuZ2V0RGVzaWduYXRpb25Ecm9wZG93bigpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKGRhdGE6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzaWduYXRpb25zID0gbmV3IFZhbHVlTGlzdDxzdHJpbmc+KCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2lnbmF0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGFbaV1bJ2lkJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGRhdGFbaV1bJ2Rlc2lnbmF0aW9uX25hbWUnXSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKFwiZGF0YSBpdGVtIFwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgcG9wdWxhdGVEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuc2VjdXJlU3RvcmFnZS5nZXQoe1xyXG4gICAgICAgICAgICBrZXk6IFwiY3JlYXRlX2FwcF9kYXRhXCJcclxuICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICB2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVfYXBwX2RhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHN1Ym1pdE93bmVySW5mbygpIHtcclxuICAgICAgICBpZiAodGhpcy5mb3JtLnZhbGlkKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGFwcF9jYXRlZ29yeTogdGhpcy5jcmVhdGVfYXBwX2RhdGEuYXBwX2NhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgYnVzaW5lc3NfbmFtZTogdGhpcy5jcmVhdGVfYXBwX2RhdGEuYnVzaW5lc3NfbmFtZSxcclxuICAgICAgICAgICAgICAgIGJ1c2luZXNzX2Rlc2NyaXB0aW9uOiB0aGlzLmNyZWF0ZV9hcHBfZGF0YS5idXNpbmVzc19kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIGFwcF93ZWJzaXRlX3VybDogdGhpcy5jcmVhdGVfYXBwX2RhdGEuYXBwX3dlYnNpdGVfdXJsLFxyXG4gICAgICAgICAgICAgICAgbG9nbzogdGhpcy5jcmVhdGVfYXBwX2RhdGEubG9nbyxcclxuICAgICAgICAgICAgICAgIHN0b3JlX2FkZHJlc3M6IHRoaXMub3duZXJfZGV0YWlscy5zdG9yZV9hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgbGF0OiB0aGlzLm93bmVyX2RldGFpbHMubGF0LFxyXG4gICAgICAgICAgICAgICAgbG9uZzogdGhpcy5vd25lcl9kZXRhaWxzLmxvbmcsXHJcbiAgICAgICAgICAgICAgICBvd25lcl9uYW1lOiB0aGlzLm93bmVyX2RldGFpbHMub3duZXJfbmFtZSxcclxuICAgICAgICAgICAgICAgIG93bmVyX2Rlc2lnbmF0aW9uOiB0aGlzLm93bmVyX2RldGFpbHMub3duZXJfZGVzaWduYXRpb24sXHJcbiAgICAgICAgICAgICAgICBidXNpbmVzc19lc3RfeWVhcjogdGhpcy5vd25lcl9kZXRhaWxzLmJ1c2luZXNzX2VzdF95ZWFyLFxyXG4gICAgICAgICAgICAgICAgb3duZXJfcGljOiB0aGlzLm93bmVyX3BpYyxcclxuICAgICAgICAgICAgICAgIHVzZXI6IHRoaXMudXNlcl9pZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmxvYWRlci5zaG93KHRoaXMubG9kYWluZ19vcHRpb25zKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5jcmVhdGVkQXBwU2VydmljZS5jcmVhdGVOZXdBcHAoZGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAvLyAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpXHJcbiAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAvLyAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKVxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyApXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYXJrRm9ybUdyb3VwVG91Y2hlZCh0aGlzLmZvcm0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldENyZWF0ZUFwcERhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuc2VjdXJlU3RvcmFnZS5zZXQoe1xyXG4gICAgICAgICAgICBrZXk6ICdjcmVhdGVfYXBwX2RhdGEnLFxyXG4gICAgICAgICAgICB2YWx1ZTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgICB9KS50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZWFyY2hMb2NhdGlvbigpIHtcclxuICAgICAgICB2YXIgb3B0aW9uID0ge1xyXG4gICAgICAgICAgICBjb250ZXh0OiB7fSxcclxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoTG9jYXRpb25Nb2RhbENvbXBvbmVudCwgb3B0aW9uKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXMubmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyX2RldGFpbHMuc3RvcmVfYWRkcmVzcyA9IHJlcy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vd25lcl9kZXRhaWxzLmxhdCA9IHJlcy5sYXRpdHVkZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3duZXJfZGV0YWlscy5sb25nID0gcmVzLmxvbmdpdHVkZVxyXG4gICAgICAgICAgICAgICAgLy8gZGF0YS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1hcmtGb3JtR3JvdXBUb3VjaGVkKGZvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcbiAgICAgICAgKDxhbnk+T2JqZWN0KS52YWx1ZXMoZm9ybUdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGNvbnRyb2wgPT4ge1xyXG4gICAgICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRyb2wuY29udHJvbHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2wuY29udHJvbHMuZm9yRWFjaChjID0+IHRoaXMubWFya0Zvcm1Hcm91cFRvdWNoZWQoYykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGaWVsZFZhbGlkKGZpZWxkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuZm9ybS5nZXQoZmllbGQpLnZhbGlkICYmICh0aGlzLmZvcm0uZ2V0KGZpZWxkKS5kaXJ0eSB8fCB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5RmllbGRDc3MoZmllbGQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdGhpcy5mb3JtLmdldChmaWVsZCkuaW52YWxpZCAmJiAodGhpcy5mb3JtLmdldChmaWVsZCkuZGlydHkgfHwgdGhpcy5mb3JtLmdldChmaWVsZCkudG91Y2hlZCksXHJcbiAgICAgICAgICAgICdpcy12YWxpZCc6IHRoaXMuZm9ybS5nZXQoZmllbGQpLnZhbGlkICYmICh0aGlzLmZvcm0uZ2V0KGZpZWxkKS5kaXJ0eSB8fCB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG59Il19