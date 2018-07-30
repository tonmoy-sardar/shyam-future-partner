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
var EditOwnerInfoComponent = /** @class */ (function () {
    function EditOwnerInfoComponent(route, CreatedAppService, modal, vcRef, formBuilder, router) {
        this.route = route;
        this.CreatedAppService = CreatedAppService;
        this.modal = modal;
        this.vcRef = vcRef;
        this.formBuilder = formBuilder;
        this.router = router;
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
    }
    EditOwnerInfoComponent.prototype.ngOnInit = function () {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
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
        this.CreatedAppService.getOwnerInfo(id).subscribe(function (res) {
            _this.owner_details = res;
            _this.selectedIndex = _this.designations.getIndex(_this.owner_details.owner_designation.toString());
            console.log(_this.selectedIndex);
            console.log(_this.owner_details.owner_designation);
            _this.visible_key = true;
            console.log(res);
        }, function (error) {
            console.log(error);
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
        this.CreatedAppService.editOwnerLogo(data).subscribe(function (res) {
            _this.getAppOwnerDetails(_this.app_id);
            console.log(res);
        }, function (error) {
            console.log(error);
        });
    };
    EditOwnerInfoComponent.prototype.updateOwnerInfo = function () {
        var _this = this;
        if (this.form.valid) {
            this.processing = true;
            this.CreatedAppService.editOwnerInfo(this.owner_details).subscribe(function (res) {
                console.log(res);
                _this.processing = false;
                _this.getAppOwnerDetails(res['id']);
            }, function (error) {
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
            router_2.RouterExtensions])
    ], EditOwnerInfoComponent);
    return EditOwnerInfoComponent;
}());
exports.EditOwnerInfoComponent = EditOwnerInfoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1vd25lci1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXQtb3duZXItaW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkY7QUFFM0YsMENBQWlEO0FBQ2pELHdDQUFvRTtBQUNwRSxzREFBK0Q7QUFDL0Qsa0ZBQStFO0FBRS9FLG1FQUE2RTtBQUM3RSw2SUFBd0k7QUFDeEksaUVBQWtGO0FBQ2xGLDRHQUF5RztBQVN6RztJQXlCSSxnQ0FDWSxLQUFxQixFQUNyQixpQkFBb0MsRUFDcEMsS0FBeUIsRUFDekIsS0FBdUIsRUFDdkIsV0FBd0IsRUFDeEIsTUFBd0I7UUFMeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQTdCcEMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUluQixrQkFBYSxHQUFRO1lBQ2pCLFVBQVUsRUFBRSxFQUFFO1lBQ2QsaUJBQWlCLEVBQUUsRUFBRTtZQUNyQixTQUFTLEVBQUUsRUFBRTtZQUNiLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsYUFBYSxFQUFFLEVBQUU7WUFDakIsR0FBRyxFQUFFLEVBQUU7WUFDUCxJQUFJLEVBQUUsRUFBRTtTQUNYLENBQUE7UUFDRCxZQUFPLEdBQUc7WUFDTixPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQy9CLENBQUM7UUFDRixrQkFBYSxHQUFXLElBQUksQ0FBQztRQUM3QixTQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFhNUIsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMs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cUIsdUJBQWM7WUFDRix1Q0FBaUI7WUFDN0IsNEJBQWtCO1lBQ2xCLHVCQUFnQjtZQUNWLG1CQUFXO1lBQ2hCLHlCQUFnQjtPQS9CM0Isc0JBQXNCLENBOExsQztJQUFELDZCQUFDO0NBQUEsQUE5TEQsSUE4TEM7QUE5TFksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDcmVhdGVkQXBwU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2NyZWF0ZWQtYXBwLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgVXBsb2FkU2luZ2xlSW1hZ2VNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL2NvbXBvbmVudC91cGxvYWQtc2luZ2xlLWltYWdlLW1vZGFsL3VwbG9hZC1zaW5nbGUtaW1hZ2UtbW9kYWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBWYWx1ZUxpc3QgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb21wb25lbnQvbG9jYXRpb24tbW9kYWwvbG9jYXRpb24tbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0ICogYXMgR2xvYmFscyBmcm9tICcuLi8uLi8uLi9jb3JlL2dsb2JhbHMnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZWRpdC1vd25lci1pbmZvJyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogYGVkaXQtb3duZXItaW5mby5jb21wb25lbnQuaHRtbGAsXHJcbiAgICBzdHlsZVVybHM6IFtgZWRpdC1vd25lci1pbmZvLmNvbXBvbmVudC5jc3NgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRPd25lckluZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZm9ybTogRm9ybUdyb3VwO1xyXG4gICAgcHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgYXBwX2lkOiBzdHJpbmc7XHJcbiAgICB2aXNpYmxlX2tleTogYm9vbGVhbjtcclxuICAgIGFwcF9kZXRhaWxzOiBhbnk7XHJcbiAgICBvd25lcl9kZXRhaWxzOiBhbnkgPSB7XHJcbiAgICAgICAgb3duZXJfbmFtZTogJycsXHJcbiAgICAgICAgb3duZXJfZGVzaWduYXRpb246ICcnLFxyXG4gICAgICAgIG93bmVyX3BpYzogJycsXHJcbiAgICAgICAgYnVzaW5lc3NfZXN0X3llYXI6ICcnLFxyXG4gICAgICAgIHN0b3JlX2FkZHJlc3M6ICcnLFxyXG4gICAgICAgIGxhdDogJycsXHJcbiAgICAgICAgbG9uZzogJydcclxuICAgIH1cclxuICAgIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgY29udGV4dDoge30sXHJcbiAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgfTtcclxuICAgIHNlbGVjdGVkSW5kZXg6IG51bWJlciA9IG51bGw7XHJcbiAgICBoaW50ID0gXCJTZWxlY3QgRGVzaWduYXRpb25cIjtcclxuICAgIGRlc2lnbmF0aW9uczogVmFsdWVMaXN0PHN0cmluZz47XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgQ3JlYXRlZEFwcFNlcnZpY2U6IENyZWF0ZWRBcHBTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuYXBwX2lkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdKTtcclxuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgb3duZXJfbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgb3duZXJfZGVzaWduYXRpb246IFsnJ10sXHJcbiAgICAgICAgICAgIGJ1c2luZXNzX2VzdF95ZWFyOiBbJyddLFxyXG4gICAgICAgICAgICBzdG9yZV9hZGRyZXNzOiBbJyddLFxyXG4gICAgICAgICAgICBsYXQ6IFsnJ10sXHJcbiAgICAgICAgICAgIGxvbmc6IFsnJ11cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXREZXNpZ25hdGlvbkRyb3Bkb3duKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25jaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgRHJvcCBEb3duIHNlbGVjdGVkIGluZGV4IGNoYW5nZWQgZnJvbSAke2FyZ3Mub2xkSW5kZXh9IHRvICR7YXJncy5uZXdJbmRleH0uIE5ldyB2YWx1ZSBpcyBcIiR7dGhpcy5kZXNpZ25hdGlvbnMuZ2V0VmFsdWUoXHJcbiAgICAgICAgICAgIGFyZ3MubmV3SW5kZXgpfVwiYCk7XHJcbiAgICAgICAgdGhpcy5vd25lcl9kZXRhaWxzLm93bmVyX2Rlc2lnbmF0aW9uID0gdGhpcy5kZXNpZ25hdGlvbnMuZ2V0VmFsdWUoXHJcbiAgICAgICAgICAgIGFyZ3MubmV3SW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlc2lnbmF0aW9uRHJvcGRvd24oKSB7XHJcbiAgICAgICAgdGhpcy5DcmVhdGVkQXBwU2VydmljZS5nZXREZXNpZ25hdGlvbkRyb3Bkb3duKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAoZGF0YTogYW55W10pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXNpZ25hdGlvbnMgPSBuZXcgVmFsdWVMaXN0PHN0cmluZz4oKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzaWduYXRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YVtpXVsnaWQnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZGF0YVtpXVsnZGVzaWduYXRpb25fbmFtZSddLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBcHBPd25lckRldGFpbHModGhpcy5hcHBfaWQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldEFwcE93bmVyRGV0YWlscyhpZCkge1xyXG4gICAgICAgIHRoaXMuQ3JlYXRlZEFwcFNlcnZpY2UuZ2V0T3duZXJJbmZvKGlkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyX2RldGFpbHMgPSByZXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmRlc2lnbmF0aW9ucy5nZXRJbmRleCh0aGlzLm93bmVyX2RldGFpbHMub3duZXJfZGVzaWduYXRpb24udG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkSW5kZXgpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm93bmVyX2RldGFpbHMub3duZXJfZGVzaWduYXRpb24pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGVfa2V5ID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hMb2NhdGlvbigpIHtcclxuICAgICAgICB2YXIgb3B0aW9uID0ge1xyXG4gICAgICAgICAgICBjb250ZXh0OiB7fSxcclxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoTG9jYXRpb25Nb2RhbENvbXBvbmVudCwgb3B0aW9uKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXMubmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyX2RldGFpbHMuc3RvcmVfYWRkcmVzcyA9IHJlcy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vd25lcl9kZXRhaWxzLmxhdCA9IHJlcy5sYXRpdHVkZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3duZXJfZGV0YWlscy5sb25nID0gcmVzLmxvbmdpdHVkZVxyXG4gICAgICAgICAgICAgICAgLy8gZGF0YS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHBpY2tMb2dvKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKFVwbG9hZFNpbmdsZUltYWdlTW9kYWxDb21wb25lbnQsIHRoaXMub3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICBpZiAocmVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jYW1lcmEgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5pbWFnZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm93bmVyX2RldGFpbHMub3duZXJfcGljID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgcmVzLmltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5hcHBfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyX3BpYzogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgcmVzLmltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlT3duZXJMb2dvKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzLmdhbGxlcnkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5pbWFnZSlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuYXBwX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lcl9waWM6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHJlcy5pbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU93bmVyTG9nbyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm93bmVyX2RldGFpbHMub3duZXJfcGljID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgcmVzLmltYWdlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU93bmVyTG9nbyhkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5DcmVhdGVkQXBwU2VydmljZS5lZGl0T3duZXJMb2dvKGRhdGEpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXBwT3duZXJEZXRhaWxzKHRoaXMuYXBwX2lkKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZU93bmVySW5mbygpIHtcclxuICAgICAgICBpZiAodGhpcy5mb3JtLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuQ3JlYXRlZEFwcFNlcnZpY2UuZWRpdE93bmVySW5mbyh0aGlzLm93bmVyX2RldGFpbHMpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEFwcE93bmVyRGV0YWlscyhyZXNbJ2lkJ10pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYXJrRm9ybUdyb3VwVG91Y2hlZCh0aGlzLmZvcm0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1hcmtGb3JtR3JvdXBUb3VjaGVkKGZvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcbiAgICAgICAgKDxhbnk+T2JqZWN0KS52YWx1ZXMoZm9ybUdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGNvbnRyb2wgPT4ge1xyXG4gICAgICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRyb2wuY29udHJvbHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2wuY29udHJvbHMuZm9yRWFjaChjID0+IHRoaXMubWFya0Zvcm1Hcm91cFRvdWNoZWQoYykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGaWVsZFZhbGlkKGZpZWxkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuZm9ybS5nZXQoZmllbGQpLnZhbGlkICYmICh0aGlzLmZvcm0uZ2V0KGZpZWxkKS5kaXJ0eSB8fCB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5RmllbGRDc3MoZmllbGQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdGhpcy5mb3JtLmdldChmaWVsZCkuaW52YWxpZCAmJiAodGhpcy5mb3JtLmdldChmaWVsZCkuZGlydHkgfHwgdGhpcy5mb3JtLmdldChmaWVsZCkudG91Y2hlZCksXHJcbiAgICAgICAgICAgICdpcy12YWxpZCc6IHRoaXMuZm9ybS5nZXQoZmllbGQpLnZhbGlkICYmICh0aGlzLmZvcm0uZ2V0KGZpZWxkKS5kaXJ0eSB8fCB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==