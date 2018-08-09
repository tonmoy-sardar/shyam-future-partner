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
        this.owner_data = {
            owner_name: '',
            owner_designation: '',
            business_est_year: '',
            store_address: '',
            lat: '',
            long: ''
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
            this.owner_data = {
                id: this.app_id,
                owner_name: this.owner_details.owner_name,
                owner_designation: this.owner_details.owner_designation,
                business_est_year: this.owner_details.business_est_year,
                store_address: this.owner_details.store_address,
                lat: this.owner_details.lat,
                long: this.owner_details.long
            };
            this.CreatedAppService.editOwnerInfo(this.owner_data).subscribe(function (res) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1vd25lci1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXQtb3duZXItaW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkY7QUFFM0YsMENBQWlEO0FBQ2pELHdDQUFvRTtBQUNwRSxzREFBK0Q7QUFDL0Qsa0ZBQStFO0FBRS9FLG1FQUE2RTtBQUM3RSw2SUFBd0k7QUFDeEksaUVBQWtGO0FBQ2xGLDRHQUF5RztBQVN6RztJQWtDSSxnQ0FDWSxLQUFxQixFQUNyQixpQkFBb0MsRUFDcEMsS0FBeUIsRUFDekIsS0FBdUIsRUFDdkIsV0FBd0IsRUFDeEIsTUFBd0I7UUFMeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQXRDcEMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUluQixrQkFBYSxHQUFRO1lBQ2pCLFVBQVUsRUFBRSxFQUFFO1lBQ2QsaUJBQWlCLEVBQUUsRUFBRTtZQUNyQixTQUFTLEVBQUUsRUFBRTtZQUNiLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsYUFBYSxFQUFFLEVBQUU7WUFDakIsR0FBRyxFQUFFLEVBQUU7WUFDUCxJQUFJLEVBQUUsRUFBRTtTQUNYLENBQUE7UUFDRCxZQUFPLEdBQUc7WUFDTixPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQy9CLENBQUM7UUFDRixlQUFVLEdBQVE7WUFDZCxVQUFVLEVBQUUsRUFBRTtZQUNkLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsaUJBQWlCLEVBQUUsRUFBRTtZQUNyQixhQUFhLEVBQUUs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SSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDMUcsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDekcsQ0FBQztJQUNOLENBQUM7SUEvTVEsc0JBQXNCO1FBUGxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQy9DLENBQUM7eUNBcUNxQix1QkFBYztZQUNGLHVDQUFpQjtZQUM3Qiw0QkFBa0I7WUFDbEIsdUJBQWdCO1lBQ1YsbUJBQVc7WUFDaEIseUJBQWdCO09BeEMzQixzQkFBc0IsQ0FrTmxDO0lBQUQsNkJBQUM7Q0FBQSxBQWxORCxJQWtOQztBQWxOWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENyZWF0ZWRBcHBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvc2VydmljZXMvY3JlYXRlZC1hcHAuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBVcGxvYWRTaW5nbGVJbWFnZU1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvY29tcG9uZW50L3VwbG9hZC1zaW5nbGUtaW1hZ2UtbW9kYWwvdXBsb2FkLXNpbmdsZS1pbWFnZS1tb2RhbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIFZhbHVlTGlzdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbXBvbmVudC9sb2NhdGlvbi1tb2RhbC9sb2NhdGlvbi1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgKiBhcyBHbG9iYWxzIGZyb20gJy4uLy4uLy4uL2NvcmUvZ2xvYmFscyc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdlZGl0LW93bmVyLWluZm8nLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBgZWRpdC1vd25lci1pbmZvLmNvbXBvbmVudC5odG1sYCxcclxuICAgIHN0eWxlVXJsczogW2BlZGl0LW93bmVyLWluZm8uY29tcG9uZW50LmNzc2BdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdE93bmVySW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBwcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICBhcHBfaWQ6IHN0cmluZztcclxuICAgIHZpc2libGVfa2V5OiBib29sZWFuO1xyXG4gICAgYXBwX2RldGFpbHM6IGFueTtcclxuICAgIG93bmVyX2RldGFpbHM6IGFueSA9IHtcclxuICAgICAgICBvd25lcl9uYW1lOiAnJyxcclxuICAgICAgICBvd25lcl9kZXNpZ25hdGlvbjogJycsXHJcbiAgICAgICAgb3duZXJfcGljOiAnJyxcclxuICAgICAgICBidXNpbmVzc19lc3RfeWVhcjogJycsXHJcbiAgICAgICAgc3RvcmVfYWRkcmVzczogJycsXHJcbiAgICAgICAgbGF0OiAnJyxcclxuICAgICAgICBsb25nOiAnJ1xyXG4gICAgfVxyXG4gICAgb3B0aW9ucyA9IHtcclxuICAgICAgICBjb250ZXh0OiB7fSxcclxuICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgICB9O1xyXG4gICAgb3duZXJfZGF0YTogYW55ID0ge1xyXG4gICAgICAgIG93bmVyX25hbWU6ICcnLFxyXG4gICAgICAgIG93bmVyX2Rlc2lnbmF0aW9uOiAnJyxcclxuICAgICAgICBidXNpbmVzc19lc3RfeWVhcjogJycsXHJcbiAgICAgICAgc3RvcmVfYWRkcmVzczogJycsXHJcbiAgICAgICAgbGF0OiAnJyxcclxuICAgICAgICBsb25nOiAnJ1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdGVkSW5kZXg6IG51bWJlciA9IG51bGw7XHJcbiAgICBoaW50ID0gXCJTZWxlY3QgRGVzaWduYXRpb25cIjtcclxuICAgIGRlc2lnbmF0aW9uczogVmFsdWVMaXN0PHN0cmluZz47XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgQ3JlYXRlZEFwcFNlcnZpY2U6IENyZWF0ZWRBcHBTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuYXBwX2lkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdKTtcclxuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgb3duZXJfbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgb3duZXJfZGVzaWduYXRpb246IFsnJ10sXHJcbiAgICAgICAgICAgIGJ1c2luZXNzX2VzdF95ZWFyOiBbJyddLFxyXG4gICAgICAgICAgICBzdG9yZV9hZGRyZXNzOiBbJyddLFxyXG4gICAgICAgICAgICBsYXQ6IFsnJ10sXHJcbiAgICAgICAgICAgIGxvbmc6IFsnJ11cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXREZXNpZ25hdGlvbkRyb3Bkb3duKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25jaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgRHJvcCBEb3duIHNlbGVjdGVkIGluZGV4IGNoYW5nZWQgZnJvbSAke2FyZ3Mub2xkSW5kZXh9IHRvICR7YXJncy5uZXdJbmRleH0uIE5ldyB2YWx1ZSBpcyBcIiR7dGhpcy5kZXNpZ25hdGlvbnMuZ2V0VmFsdWUoXHJcbiAgICAgICAgICAgIGFyZ3MubmV3SW5kZXgpfVwiYCk7XHJcbiAgICAgICAgdGhpcy5vd25lcl9kZXRhaWxzLm93bmVyX2Rlc2lnbmF0aW9uID0gdGhpcy5kZXNpZ25hdGlvbnMuZ2V0VmFsdWUoXHJcbiAgICAgICAgICAgIGFyZ3MubmV3SW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlc2lnbmF0aW9uRHJvcGRvd24oKSB7XHJcbiAgICAgICAgdGhpcy5DcmVhdGVkQXBwU2VydmljZS5nZXREZXNpZ25hdGlvbkRyb3Bkb3duKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAoZGF0YTogYW55W10pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXNpZ25hdGlvbnMgPSBuZXcgVmFsdWVMaXN0PHN0cmluZz4oKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzaWduYXRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YVtpXVsnaWQnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZGF0YVtpXVsnZGVzaWduYXRpb25fbmFtZSddLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBcHBPd25lckRldGFpbHModGhpcy5hcHBfaWQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldEFwcE93bmVyRGV0YWlscyhpZCkge1xyXG4gICAgICAgIHRoaXMuQ3JlYXRlZEFwcFNlcnZpY2UuZ2V0T3duZXJJbmZvKGlkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyX2RldGFpbHMgPSByZXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmRlc2lnbmF0aW9ucy5nZXRJbmRleCh0aGlzLm93bmVyX2RldGFpbHMub3duZXJfZGVzaWduYXRpb24udG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkSW5kZXgpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm93bmVyX2RldGFpbHMub3duZXJfZGVzaWduYXRpb24pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGVfa2V5ID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hMb2NhdGlvbigpIHtcclxuICAgICAgICB2YXIgb3B0aW9uID0ge1xyXG4gICAgICAgICAgICBjb250ZXh0OiB7fSxcclxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoTG9jYXRpb25Nb2RhbENvbXBvbmVudCwgb3B0aW9uKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXMubmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyX2RldGFpbHMuc3RvcmVfYWRkcmVzcyA9IHJlcy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vd25lcl9kZXRhaWxzLmxhdCA9IHJlcy5sYXRpdHVkZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3duZXJfZGV0YWlscy5sb25nID0gcmVzLmxvbmdpdHVkZVxyXG4gICAgICAgICAgICAgICAgLy8gZGF0YS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHBpY2tMb2dvKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKFVwbG9hZFNpbmdsZUltYWdlTW9kYWxDb21wb25lbnQsIHRoaXMub3B0aW9ucykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICBpZiAocmVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jYW1lcmEgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5pbWFnZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm93bmVyX2RldGFpbHMub3duZXJfcGljID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgcmVzLmltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5hcHBfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyX3BpYzogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgcmVzLmltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlT3duZXJMb2dvKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzLmdhbGxlcnkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5pbWFnZSlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuYXBwX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lcl9waWM6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHJlcy5pbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU93bmVyTG9nbyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm93bmVyX2RldGFpbHMub3duZXJfcGljID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgcmVzLmltYWdlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU93bmVyTG9nbyhkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5DcmVhdGVkQXBwU2VydmljZS5lZGl0T3duZXJMb2dvKGRhdGEpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXBwT3duZXJEZXRhaWxzKHRoaXMuYXBwX2lkKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZU93bmVySW5mbygpIHtcclxuICAgICAgICBpZiAodGhpcy5mb3JtLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm93bmVyX2RhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogIHRoaXMuYXBwX2lkLFxyXG4gICAgICAgICAgICAgICAgb3duZXJfbmFtZTogdGhpcy5vd25lcl9kZXRhaWxzLm93bmVyX25hbWUsXHJcbiAgICAgICAgICAgICAgICBvd25lcl9kZXNpZ25hdGlvbjogdGhpcy5vd25lcl9kZXRhaWxzLm93bmVyX2Rlc2lnbmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgYnVzaW5lc3NfZXN0X3llYXI6IHRoaXMub3duZXJfZGV0YWlscy5idXNpbmVzc19lc3RfeWVhcixcclxuICAgICAgICAgICAgICAgIHN0b3JlX2FkZHJlc3M6IHRoaXMub3duZXJfZGV0YWlscy5zdG9yZV9hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgbGF0OiB0aGlzLm93bmVyX2RldGFpbHMubGF0LFxyXG4gICAgICAgICAgICAgICAgbG9uZzogdGhpcy5vd25lcl9kZXRhaWxzLmxvbmdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLkNyZWF0ZWRBcHBTZXJ2aWNlLmVkaXRPd25lckluZm8odGhpcy5vd25lcl9kYXRhKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBcHBPd25lckRldGFpbHMocmVzWydpZCddKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFya0Zvcm1Hcm91cFRvdWNoZWQodGhpcy5mb3JtKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYXJrRm9ybUdyb3VwVG91Y2hlZChmb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xyXG4gICAgICAgICg8YW55Pk9iamVjdCkudmFsdWVzKGZvcm1Hcm91cC5jb250cm9scykuZm9yRWFjaChjb250cm9sID0+IHtcclxuICAgICAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICAgICAgICAgIGlmIChjb250cm9sLmNvbnRyb2xzKSB7XHJcbiAgICAgICAgICAgICAgICBjb250cm9sLmNvbnRyb2xzLmZvckVhY2goYyA9PiB0aGlzLm1hcmtGb3JtR3JvdXBUb3VjaGVkKGMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRmllbGRWYWxpZChmaWVsZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmZvcm0uZ2V0KGZpZWxkKS52YWxpZCAmJiAodGhpcy5mb3JtLmdldChmaWVsZCkuZGlydHkgfHwgdGhpcy5mb3JtLmdldChmaWVsZCkudG91Y2hlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheUZpZWxkQ3NzKGZpZWxkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAnaXMtaW52YWxpZCc6IHRoaXMuZm9ybS5nZXQoZmllbGQpLmludmFsaWQgJiYgKHRoaXMuZm9ybS5nZXQoZmllbGQpLmRpcnR5IHx8IHRoaXMuZm9ybS5nZXQoZmllbGQpLnRvdWNoZWQpLFxyXG4gICAgICAgICAgICAnaXMtdmFsaWQnOiB0aGlzLmZvcm0uZ2V0KGZpZWxkKS52YWxpZCAmJiAodGhpcy5mb3JtLmdldChmaWVsZCkuZGlydHkgfHwgdGhpcy5mb3JtLmdldChmaWVsZCkudG91Y2hlZClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=