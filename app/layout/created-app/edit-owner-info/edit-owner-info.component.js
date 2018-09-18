"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var router_2 = require("nativescript-angular/router");
var created_app_service_1 = require("../../../core/services/created-app.service");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var upload_single_image_modal_component_1 = require("../../../core/component/upload-single-image-modal/upload-single-image-modal.component");
var nativescript_drop_down_1 = require("nativescript-drop-down");
var location_modal_component_1 = require("../../../core/component/location-modal/location-modal.component");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var common_1 = require("@angular/common");
var EditOwnerInfoComponent = /** @class */ (function () {
    function EditOwnerInfoComponent(route, CreatedAppService, modal, vcRef, formBuilder, router, location) {
        this.route = route;
        this.CreatedAppService = CreatedAppService;
        this.modal = modal;
        this.vcRef = vcRef;
        this.formBuilder = formBuilder;
        this.router = router;
        this.location = location;
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
        this.owner_data = {
            owner_name: '',
            owner_designation: '',
            business_est_year: '',
            store_address: '',
            lat: '',
            long: ''
        };
        this.selectedIndex = null;
        this.hint = "User's designation";
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
    EditOwnerInfoComponent.prototype.ngOnInit = function () {
        var full_location = this.location.path().split('/');
        this.app_id = full_location[2].trim();
        this.form = this.formBuilder.group({
            owner_name: ['', forms_1.Validators.required],
            owner_designation: [''],
            business_est_year: [''],
            store_address: [''],
            lat: [''],
            long: ['']
        });
        this.getDesignationDropdown();
    };
    EditOwnerInfoComponent.prototype.onchange = function (args) {
        console.log("Drop Down selected index changed from " + args.oldIndex + " to " + args.newIndex + ". New value is \"" + this.designations.getValue(args.newIndex) + "\"");
        this.owner_details.owner_designation = this.designations.getValue(args.newIndex);
    };
    EditOwnerInfoComponent.prototype.getDesignationDropdown = function () {
        var _this = this;
        this.CreatedAppService.getDesignationDropdown().subscribe(function (data) {
            console.log(data);
            _this.designations = new nativescript_drop_down_1.ValueList();
            for (var i = 0; i < data.length; i++) {
                _this.designations.push({
                    value: data[i]['id'],
                    display: data[i]['designation_name'],
                });
            }
            _this.getAppOwnerDetails(_this.app_id);
        }, function (error) {
            console.log(error);
        });
    };
    ;
    EditOwnerInfoComponent.prototype.getAppOwnerDetails = function (id) {
        var _this = this;
        this.loader.show(this.lodaing_options);
        this.CreatedAppService.getOwnerInfo(id).subscribe(function (res) {
            _this.owner_details = res;
            _this.selectedIndex = _this.designations.getIndex(_this.owner_details.owner_designation.toString());
            console.log(_this.selectedIndex);
            console.log(_this.owner_details.owner_designation);
            _this.visible_key = true;
            console.log(res);
            _this.loader.hide();
        }, function (error) {
            console.log(error);
            _this.loader.hide();
        });
    };
    EditOwnerInfoComponent.prototype.searchLocation = function () {
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
    EditOwnerInfoComponent.prototype.pickLogo = function () {
        var _this = this;
        this.modal.showModal(upload_single_image_modal_component_1.UploadSingleImageModalComponent, this.options).then(function (res) {
            console.log(res);
            if (res != undefined) {
                if (res.camera == true) {
                    console.log(res.image);
                    _this.owner_details.owner_pic = 'data:image/png;base64,' + res.image;
                    var data = {
                        id: _this.app_id,
                        owner_pic: 'data:image/png;base64,' + res.image
                    };
                    _this.updateOwnerLogo(data);
                }
                else if (res.gallery == true) {
                    console.log(res.image);
                    var data = {
                        id: _this.app_id,
                        owner_pic: 'data:image/png;base64,' + res.image
                    };
                    _this.updateOwnerLogo(data);
                    _this.owner_details.owner_pic = 'data:image/png;base64,' + res.image;
                }
            }
        });
    };
    EditOwnerInfoComponent.prototype.updateOwnerLogo = function (data) {
        var _this = this;
        this.loader.show(this.lodaing_options);
        this.CreatedAppService.editOwnerLogo(data).subscribe(function (res) {
            _this.loader.hide();
            _this.getAppOwnerDetails(_this.app_id);
            console.log(res);
        }, function (error) {
            _this.loader.hide();
            console.log(error);
        });
    };
    EditOwnerInfoComponent.prototype.updateOwnerInfo = function () {
        var _this = this;
        if (this.form.valid) {
            this.owner_data = {
                id: this.app_id,
                owner_name: this.owner_details.owner_name,
                owner_designation: this.owner_details.owner_designation,
                business_est_year: this.owner_details.business_est_year,
                store_address: this.owner_details.store_address,
                lat: this.owner_details.lat,
                long: this.owner_details.long
            };
            this.loader.show(this.lodaing_options);
            this.CreatedAppService.editOwnerInfo(this.owner_data).subscribe(function (res) {
                _this.loader.hide();
                console.log(res);
                _this.router.navigate(['/created-app/' + _this.app_id + '/manage-app']);
                // this.getAppOwnerDetails(res['id'])
            }, function (error) {
                _this.loader.hide();
                console.log(error);
            });
        }
        else {
            this.markFormGroupTouched(this.form);
        }
    };
    EditOwnerInfoComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    EditOwnerInfoComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched);
    };
    EditOwnerInfoComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
            'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
        };
    };
    EditOwnerInfoComponent = __decorate([
        core_1.Component({
            selector: 'edit-owner-info',
            moduleId: module.id,
            templateUrl: "edit-owner-info.component.html",
            styleUrls: ["edit-owner-info.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            created_app_service_1.CreatedAppService,
            dialogs_1.ModalDialogService,
            core_1.ViewContainerRef,
            forms_1.FormBuilder,
            router_2.RouterExtensions,
            common_1.Location])
    ], EditOwnerInfoComponent);
    return EditOwnerInfoComponent;
}());
exports.EditOwnerInfoComponent = EditOwnerInfoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1vd25lci1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXQtb3duZXItaW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkY7QUFFM0YsMENBQWlEO0FBQ2pELHdDQUFvRTtBQUNwRSxzREFBK0Q7QUFDL0Qsa0ZBQStFO0FBRS9FLG1FQUE2RTtBQUM3RSw2SUFBd0k7QUFDeEksaUVBQWtGO0FBQ2xGLDRHQUF5RztBQUV6RyxpRkFBa0U7QUFDbEUsMENBQTJDO0FBUTNDO0lBd0RJLGdDQUNZLEtBQXFCLEVBQ3JCLGlCQUFvQyxFQUNwQyxLQUF5QixFQUN6QixLQUF1QixFQUN2QixXQUF3QixFQUN4QixNQUF3QixFQUN4QixRQUFrQjtRQU5sQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQVU7UUExRDlCLGtCQUFhLEdBQVE7WUFDakIsVUFBVSxFQUFFLEVBQUU7WUFDZCxpQkFBaUIsRUFBRSxFQUFFO1lBQ3JCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsaUJBQWlCLEVBQUUsRUFBRTtZQUNyQixhQUFhLEVBQUUsRUFBRTtZQUNqQixHQUFHLEVBQUUsRUFBRTtZQUNQLElBQUksRUFBRSxFQUFFO1NBQ1gsQ0FBQTtRQUNELFlBQU8sR0FBRztZQUNOLE9BQU8sRUFBRSxFQUFFO1lBQ1gsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztRQUNGLGVBQVUsR0FBUTtZQUNkLFVBQVUsRUFBRSxFQUFFO1lBQ2QsaUJBQWlCLEVBQUUsRUFBRTtZ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LFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzFHLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQ3pHLENBQUM7SUFDTixDQUFDO0lBOU9RLHNCQUFzQjtRQVBsQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUMvQyxDQUFDO3lDQTJEcUIsdUJBQWM7WUFDRix1Q0FBaUI7WUFDN0IsNEJBQWtCO1lBQ2xCLHVCQUFnQjtZQUNWLG1CQUFXO1lBQ2hCLHlCQUFnQjtZQUNkLGlCQUFRO09BL0RyQixzQkFBc0IsQ0FpUGxDO0lBQUQsNkJBQUM7Q0FBQSxBQWpQRCxJQWlQQztBQWpQWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENyZWF0ZWRBcHBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvc2VydmljZXMvY3JlYXRlZC1hcHAuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBVcGxvYWRTaW5nbGVJbWFnZU1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvY29tcG9uZW50L3VwbG9hZC1zaW5nbGUtaW1hZ2UtbW9kYWwvdXBsb2FkLXNpbmdsZS1pbWFnZS1tb2RhbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIFZhbHVlTGlzdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbXBvbmVudC9sb2NhdGlvbi1tb2RhbC9sb2NhdGlvbi1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgKiBhcyBHbG9iYWxzIGZyb20gJy4uLy4uLy4uL2NvcmUvZ2xvYmFscyc7XHJcbmltcG9ydCB7IExvYWRpbmdJbmRpY2F0b3IgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2VkaXQtb3duZXItaW5mbycsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IGBlZGl0LW93bmVyLWluZm8uY29tcG9uZW50Lmh0bWxgLFxyXG4gICAgc3R5bGVVcmxzOiBbYGVkaXQtb3duZXItaW5mby5jb21wb25lbnQuY3NzYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0T3duZXJJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGZvcm06IEZvcm1Hcm91cDtcclxuICAgIGFwcF9pZDogc3RyaW5nO1xyXG4gICAgdmlzaWJsZV9rZXk6IGJvb2xlYW47XHJcbiAgICBhcHBfZGV0YWlsczogYW55O1xyXG4gICAgb3duZXJfZGV0YWlsczogYW55ID0ge1xyXG4gICAgICAgIG93bmVyX25hbWU6ICcnLFxyXG4gICAgICAgIG93bmVyX2Rlc2lnbmF0aW9uOiAnJyxcclxuICAgICAgICBvd25lcl9waWM6ICcnLFxyXG4gICAgICAgIGJ1c2luZXNzX2VzdF95ZWFyOiAnJyxcclxuICAgICAgICBzdG9yZV9hZGRyZXNzOiAnJyxcclxuICAgICAgICBsYXQ6ICcnLFxyXG4gICAgICAgIGxvbmc6ICcnXHJcbiAgICB9XHJcbiAgICBvcHRpb25zID0ge1xyXG4gICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgIH07XHJcbiAgICBvd25lcl9kYXRhOiBhbnkgPSB7XHJcbiAgICAgICAgb3duZXJfbmFtZTogJycsXHJcbiAgICAgICAgb3duZXJfZGVzaWduYXRpb246ICcnLFxyXG4gICAgICAgIGJ1c2luZXNzX2VzdF95ZWFyOiAnJyxcclxuICAgICAgICBzdG9yZV9hZGRyZXNzOiAnJyxcclxuICAgICAgICBsYXQ6ICcnLFxyXG4gICAgICAgIGxvbmc6ICcnXHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gbnVsbDtcclxuICAgIGhpbnQgPSBcIlNlbGVjdCBEZXNpZ25hdGlvblwiO1xyXG4gICAgZGVzaWduYXRpb25zOiBWYWx1ZUxpc3Q8c3RyaW5nPjtcclxuXHJcbiAgICBsb2FkZXIgPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xyXG4gICAgbG9kYWluZ19vcHRpb25zID0ge1xyXG4gICAgICAgIG1lc3NhZ2U6ICdMb2FkaW5nLi4uJyxcclxuICAgICAgICBwcm9ncmVzczogMC42NSxcclxuICAgICAgICBhbmRyb2lkOiB7XHJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYW5jZWxMaXN0ZW5lcjogZnVuY3Rpb24gKGRpYWxvZykgeyBjb25zb2xlLmxvZyhcIkxvYWRpbmcgY2FuY2VsbGVkXCIpIH0sXHJcbiAgICAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICAgICBwcm9ncmVzc051bWJlckZvcm1hdDogXCIlMWQvJTJkXCIsXHJcbiAgICAgICAgICAgIHByb2dyZXNzUGVyY2VudEZvcm1hdDogMC41MyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3NTdHlsZTogMSxcclxuICAgICAgICAgICAgc2Vjb25kYXJ5UHJvZ3Jlc3M6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlvczoge1xyXG4gICAgICAgICAgICBkZXRhaWxzOiBcIkFkZGl0aW9uYWwgZGV0YWlsIG5vdGUhXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogMTAsXHJcbiAgICAgICAgICAgIGRpbUJhY2tncm91bmQ6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiM0QjlFRDZcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd1wiLFxyXG4gICAgICAgICAgICB1c2VySW50ZXJhY3Rpb25FbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgaGlkZUJlemVsOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgQ3JlYXRlZEFwcFNlcnZpY2U6IENyZWF0ZWRBcHBTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxyXG4gICAgKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHZhciBmdWxsX2xvY2F0aW9uID0gdGhpcy5sb2NhdGlvbi5wYXRoKCkuc3BsaXQoJy8nKTtcclxuICAgICAgICB0aGlzLmFwcF9pZCA9IGZ1bGxfbG9jYXRpb25bMl0udHJpbSgpO1xyXG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBvd25lcl9uYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBvd25lcl9kZXNpZ25hdGlvbjogWycnXSxcclxuICAgICAgICAgICAgYnVzaW5lc3NfZXN0X3llYXI6IFsnJ10sXHJcbiAgICAgICAgICAgIHN0b3JlX2FkZHJlc3M6IFsnJ10sXHJcbiAgICAgICAgICAgIGxhdDogWycnXSxcclxuICAgICAgICAgICAgbG9uZzogWycnXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmdldERlc2lnbmF0aW9uRHJvcGRvd24oKTtcclxuICAgIH1cclxuXHJcbiAgICBvbmNoYW5nZShhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBEcm9wIERvd24gc2VsZWN0ZWQgaW5kZXggY2hhbmdlZCBmcm9tICR7YXJncy5vbGRJbmRleH0gdG8gJHthcmdzLm5ld0luZGV4fS4gTmV3IHZhbHVlIGlzIFwiJHt0aGlzLmRlc2lnbmF0aW9ucy5nZXRWYWx1ZShcclxuICAgICAgICAgICAgYXJncy5uZXdJbmRleCl9XCJgKTtcclxuICAgICAgICB0aGlzLm93bmVyX2RldGFpbHMub3duZXJfZGVzaWduYXRpb24gPSB0aGlzLmRlc2lnbmF0aW9ucy5nZXRWYWx1ZShcclxuICAgICAgICAgICAgYXJncy5uZXdJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVzaWduYXRpb25Ecm9wZG93bigpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLkNyZWF0ZWRBcHBTZXJ2aWNlLmdldERlc2lnbmF0aW9uRHJvcGRvd24oKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChkYXRhOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2lnbmF0aW9ucyA9IG5ldyBWYWx1ZUxpc3Q8c3RyaW5nPigpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNpZ25hdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhW2ldWydpZCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBkYXRhW2ldWydkZXNpZ25hdGlvbl9uYW1lJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFwcE93bmVyRGV0YWlscyh0aGlzLmFwcF9pZCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0QXBwT3duZXJEZXRhaWxzKGlkKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkZXIuc2hvdyh0aGlzLmxvZGFpbmdfb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5DcmVhdGVkQXBwU2VydmljZS5nZXRPd25lckluZm8oaWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3duZXJfZGV0YWlscyA9IHJlcztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuZGVzaWduYXRpb25zLmdldEluZGV4KHRoaXMub3duZXJfZGV0YWlscy5vd25lcl9kZXNpZ25hdGlvbi50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRJbmRleClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMub3duZXJfZGV0YWlscy5vd25lcl9kZXNpZ25hdGlvbilcclxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZV9rZXkgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaExvY2F0aW9uKCkge1xyXG4gICAgICAgIHZhciBvcHRpb24gPSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChMb2NhdGlvbk1vZGFsQ29tcG9uZW50LCBvcHRpb24pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgaWYgKHJlcy5uYW1lICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3duZXJfZGV0YWlscy5zdG9yZV9hZGRyZXNzID0gcmVzLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyX2RldGFpbHMubGF0ID0gcmVzLmxhdGl0dWRlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vd25lcl9kZXRhaWxzLmxvbmcgPSByZXMubG9uZ2l0dWRlXHJcbiAgICAgICAgICAgICAgICAvLyBkYXRhLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5tYWluX3RleHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcGlja0xvZ28oKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoVXBsb2FkU2luZ2xlSW1hZ2VNb2RhbENvbXBvbmVudCwgdGhpcy5vcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNhbWVyYSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmltYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3duZXJfZGV0YWlscy5vd25lcl9waWMgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyByZXMuaW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmFwcF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXJfcGljOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyByZXMuaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPd25lckxvZ28oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXMuZ2FsbGVyeSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmltYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5hcHBfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyX3BpYzogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgcmVzLmltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlT3duZXJMb2dvKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3duZXJfZGV0YWlscy5vd25lcl9waWMgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyByZXMuaW1hZ2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlT3duZXJMb2dvKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmxvYWRlci5zaG93KHRoaXMubG9kYWluZ19vcHRpb25zKTtcclxuICAgICAgICB0aGlzLkNyZWF0ZWRBcHBTZXJ2aWNlLmVkaXRPd25lckxvZ28oZGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBcHBPd25lckRldGFpbHModGhpcy5hcHBfaWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlT3duZXJJbmZvKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3duZXJfZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLmFwcF9pZCxcclxuICAgICAgICAgICAgICAgIG93bmVyX25hbWU6IHRoaXMub3duZXJfZGV0YWlscy5vd25lcl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgb3duZXJfZGVzaWduYXRpb246IHRoaXMub3duZXJfZGV0YWlscy5vd25lcl9kZXNpZ25hdGlvbixcclxuICAgICAgICAgICAgICAgIGJ1c2luZXNzX2VzdF95ZWFyOiB0aGlzLm93bmVyX2RldGFpbHMuYnVzaW5lc3NfZXN0X3llYXIsXHJcbiAgICAgICAgICAgICAgICBzdG9yZV9hZGRyZXNzOiB0aGlzLm93bmVyX2RldGFpbHMuc3RvcmVfYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGxhdDogdGhpcy5vd25lcl9kZXRhaWxzLmxhdCxcclxuICAgICAgICAgICAgICAgIGxvbmc6IHRoaXMub3duZXJfZGV0YWlscy5sb25nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sb2FkZXIuc2hvdyh0aGlzLmxvZGFpbmdfb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMuQ3JlYXRlZEFwcFNlcnZpY2UuZWRpdE93bmVySW5mbyh0aGlzLm93bmVyX2RhdGEpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY3JlYXRlZC1hcHAvJyArIHRoaXMuYXBwX2lkKycvbWFuYWdlLWFwcCddKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2V0QXBwT3duZXJEZXRhaWxzKHJlc1snaWQnXSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYXJrRm9ybUdyb3VwVG91Y2hlZCh0aGlzLmZvcm0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1hcmtGb3JtR3JvdXBUb3VjaGVkKGZvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcbiAgICAgICAgKDxhbnk+T2JqZWN0KS52YWx1ZXMoZm9ybUdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGNvbnRyb2wgPT4ge1xyXG4gICAgICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRyb2wuY29udHJvbHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2wuY29udHJvbHMuZm9yRWFjaChjID0+IHRoaXMubWFya0Zvcm1Hcm91cFRvdWNoZWQoYykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGaWVsZFZhbGlkKGZpZWxkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuZm9ybS5nZXQoZmllbGQpLnZhbGlkICYmICh0aGlzLmZvcm0uZ2V0KGZpZWxkKS5kaXJ0eSB8fCB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5RmllbGRDc3MoZmllbGQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdGhpcy5mb3JtLmdldChmaWVsZCkuaW52YWxpZCAmJiAodGhpcy5mb3JtLmdldChmaWVsZCkuZGlydHkgfHwgdGhpcy5mb3JtLmdldChmaWVsZCkudG91Y2hlZCksXHJcbiAgICAgICAgICAgICdpcy12YWxpZCc6IHRoaXMuZm9ybS5nZXQoZmllbGQpLnZhbGlkICYmICh0aGlzLmZvcm0uZ2V0KGZpZWxkKS5kaXJ0eSB8fCB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==