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
        var _this = this;
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
            this.loader.show(this.lodaing_options);
            this.createdAppService.createNewApp(data).subscribe(function (res) {
                console.log(res);
                var d = {};
                _this.setCreateAppData(d);
                _this.loader.hide();
                _this.router.navigate(['/created-app/' + res['id'] + '/edit-business-images/' + 'new']);
            }, function (error) {
                console.log(error);
                _this.loader.hide();
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3duZXItaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvd25lci1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRjtBQUczRixpRkFBaUU7QUFDakUsa0ZBQStFO0FBQy9FLDJFQUE0RDtBQUM1RCwrQ0FBK0M7QUFDL0MsbUVBQTZFO0FBQzdFLDBFQUF3RTtBQUN4RSw2REFBMkY7QUFDM0YsK0NBQWlEO0FBQ2pELHdDQUFvRTtBQUNwRSxzREFBK0Q7QUFDL0QsaUVBQWtGO0FBQ2xGLDRHQUF5RztBQUN6Ryw2SUFBd0k7QUFReEk7SUF5REksNEJBQ1ksY0FBOEIsRUFDOUIsaUJBQW9DLEVBQ3BDLEtBQXlCLEVBQ3pCLFdBQXdCLEVBQ3hCLE1BQXdCLEVBQ3hCLEtBQXVCO1FBTHZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ3pCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBNURuQyxrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN4QixhQUFRLEdBQVcsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUN4QyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSW5CLGtCQUFhLEdBQVE7WUFDakIsVUFBVSxFQUFFLEVBQUU7WUFDZCxpQkFBaUIsRUFBRSxFQUFFO1lBQ3JCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsaUJBQWlCLEVBQUUsRUFBRTtZQUNyQixhQUFhLEVBQUUsRUFBRTtZQUNqQixHQUFHLEVBQUUsRUFBRTtZQUNQLElBQUksRUFBRSxFQUFFO1NBQ1gsQ0FBQTtRQUVELFlBQU8sR0FBRztZQUNOLE9BQU8sRUFBRSxFQUFFO1lBQ1gsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsSUFB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QyxDQUFDLE9BQU8sQ0FBQztZQUMxRyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUN6RyxDQUFDO0lBQ04sQ0FBQztJQTVPUSxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBMkQ4QixnQ0FBYztZQUNYLHVDQUFpQjtZQUM3Qiw0QkFBa0I7WUFDWixtQkFBVztZQUNoQix5QkFBZ0I7WUFDakIsdUJBQWdCO09BL0QxQixrQkFBa0IsQ0E4TzlCO0lBQUQseUJBQUM7Q0FBQSxBQTlPRCxJQThPQztBQTlPWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xyXG5pbXBvcnQgeyBDYXJkVmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jYXJkdmlldyc7XHJcbmltcG9ydCB7IExvYWRpbmdJbmRpY2F0b3IgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCJcclxuaW1wb3J0IHsgQ3JlYXRlZEFwcFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9jcmVhdGVkLWFwcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNlY3VyZVN0b3JhZ2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNlY3VyZS1zdG9yYWdlXCI7XHJcbi8vIHJlZ2lzdGVyRWxlbWVudCgnQ2FyZFZpZXcnLCAoKSA9PiBDYXJkVmlldyk7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgRXhwbG9yZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9leHBsb3JlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIGdldEJvb2xlYW4sIHNldEJvb2xlYW4sIGNsZWFyIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCAqIGFzIEdsb2JhbHMgZnJvbSAnLi4vLi4vLi4vY29yZS9nbG9iYWxzJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIFZhbHVlTGlzdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NvbXBvbmVudC9sb2NhdGlvbi1tb2RhbC9sb2NhdGlvbi1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVcGxvYWRTaW5nbGVJbWFnZU1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvY29tcG9uZW50L3VwbG9hZC1zaW5nbGUtaW1hZ2UtbW9kYWwvdXBsb2FkLXNpbmdsZS1pbWFnZS1tb2RhbC5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwib3duZXItaW5mb1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vb3duZXItaW5mby5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vb3duZXItaW5mby5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE93bmVySW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgICB1c2VyX2lkOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeV9saXN0OiBhbnkgPSBbXTtcclxuICAgIGJhc2VfdXJsOiBzdHJpbmcgPSBHbG9iYWxzLmltZ19iYXNlX3VybDtcclxuICAgIHByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgIHNlY3VyZVN0b3JhZ2U6IFNlY3VyZVN0b3JhZ2U7XHJcbiAgICBjcmVhdGVfYXBwX2RhdGE6IGFueTtcclxuXHJcbiAgICBvd25lcl9kZXRhaWxzOiBhbnkgPSB7XHJcbiAgICAgICAgb3duZXJfbmFtZTogJycsXHJcbiAgICAgICAgb3duZXJfZGVzaWduYXRpb246ICcnLFxyXG4gICAgICAgIG93bmVyX3BpYzogJycsXHJcbiAgICAgICAgYnVzaW5lc3NfZXN0X3llYXI6ICcnLFxyXG4gICAgICAgIHN0b3JlX2FkZHJlc3M6ICcnLFxyXG4gICAgICAgIGxhdDogJycsXHJcbiAgICAgICAgbG9uZzogJydcclxuICAgIH1cclxuXHJcbiAgICBvcHRpb25zID0ge1xyXG4gICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgIH07XHJcblxyXG4gICAgc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gbnVsbDtcclxuICAgIGhpbnQgPSBcIlNlbGVjdCBEZXNpZ25hdGlvblwiO1xyXG4gICAgZGVzaWduYXRpb25zOiBWYWx1ZUxpc3Q8c3RyaW5nPjtcclxuXHJcbiAgICBsb2FkZXIgPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xyXG4gICAgbG9kYWluZ19vcHRpb25zID0ge1xyXG4gICAgICAgIG1lc3NhZ2U6ICdMb2FkaW5nLi4uJyxcclxuICAgICAgICBwcm9ncmVzczogMC42NSxcclxuICAgICAgICBhbmRyb2lkOiB7XHJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYW5jZWxMaXN0ZW5lcjogZnVuY3Rpb24gKGRpYWxvZykgeyBjb25zb2xlLmxvZyhcIkxvYWRpbmcgY2FuY2VsbGVkXCIpIH0sXHJcbiAgICAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICAgICBwcm9ncmVzc051bWJlckZvcm1hdDogXCIlMWQvJTJkXCIsXHJcbiAgICAgICAgICAgIHByb2dyZXNzUGVyY2VudEZvcm1hdDogMC41MyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3NTdHlsZTogMSxcclxuICAgICAgICAgICAgc2Vjb25kYXJ5UHJvZ3Jlc3M6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlvczoge1xyXG4gICAgICAgICAgICBkZXRhaWxzOiBcIkFkZGl0aW9uYWwgZGV0YWlsIG5vdGUhXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogMTAsXHJcbiAgICAgICAgICAgIGRpbUJhY2tncm91bmQ6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiM0QjlFRDZcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd1wiLFxyXG4gICAgICAgICAgICB1c2VySW50ZXJhY3Rpb25FbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgaGlkZUJlemVsOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvd25lcl9waWM6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIHNlbGVjdGVkSW5kZXhfZCA9IDE7XHJcbiAgICBwdWJsaWMgaXRlbXM6IEFycmF5PHN0cmluZz47XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGV4cGxvcmVTZXJ2aWNlOiBFeHBsb3JlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGNyZWF0ZWRBcHBTZXJ2aWNlOiBDcmVhdGVkQXBwU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuc2VjdXJlU3RvcmFnZSA9IG5ldyBTZWN1cmVTdG9yYWdlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMudXNlcl9pZCA9IGdldFN0cmluZygndXNlcl9pZCcpO1xyXG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBvd25lcl9uYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBvd25lcl9kZXNpZ25hdGlvbjogWycnXSxcclxuICAgICAgICAgICAgYnVzaW5lc3NfZXN0X3llYXI6IFsnJ10sXHJcbiAgICAgICAgICAgIHN0b3JlX2FkZHJlc3M6IFsnJ10sXHJcbiAgICAgICAgICAgIGxhdDogWycnXSxcclxuICAgICAgICAgICAgbG9uZzogWycnXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRlci5zaG93KHRoaXMubG9kYWluZ19vcHRpb25zKTtcclxuICAgICAgICB0aGlzLmdldERlc2lnbmF0aW9uRHJvcGRvd24oKTtcclxuICAgICAgICB0aGlzLnBvcHVsYXRlRGF0YSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwaWNrSW1hZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoVXBsb2FkU2luZ2xlSW1hZ2VNb2RhbENvbXBvbmVudCwgdGhpcy5vcHRpb25zKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNhbWVyYSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmltYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfcGljID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnICsgcmVzLmltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3duZXJfcGljID0gX3BpY1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzLmdhbGxlcnkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5pbWFnZSlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX3BpYyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIHJlcy5pbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3duZXJfcGljID0gX3BpY1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbmNoYW5nZShhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBEcm9wIERvd24gc2VsZWN0ZWQgaW5kZXggY2hhbmdlZCBmcm9tICR7YXJncy5vbGRJbmRleH0gdG8gJHthcmdzLm5ld0luZGV4fS4gTmV3IHZhbHVlIGlzIFwiJHt0aGlzLmRlc2lnbmF0aW9ucy5nZXRWYWx1ZShcclxuICAgICAgICAgICAgYXJncy5uZXdJbmRleCl9XCJgKTtcclxuICAgICAgICB0aGlzLm93bmVyX2RldGFpbHMub3duZXJfZGVzaWduYXRpb24gPSB0aGlzLmRlc2lnbmF0aW9ucy5nZXRWYWx1ZShcclxuICAgICAgICAgICAgYXJncy5uZXdJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVzaWduYXRpb25Ecm9wZG93bigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVkQXBwU2VydmljZS5nZXREZXNpZ25hdGlvbkRyb3Bkb3duKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAoZGF0YTogYW55W10pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXNpZ25hdGlvbnMgPSBuZXcgVmFsdWVMaXN0PHN0cmluZz4oKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzaWduYXRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YVtpXVsnaWQnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZGF0YVtpXVsnZGVzaWduYXRpb25fbmFtZSddLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goXCJkYXRhIGl0ZW0gXCIgKyBpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBwb3B1bGF0ZURhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5zZWN1cmVTdG9yYWdlLmdldCh7XHJcbiAgICAgICAgICAgIGtleTogXCJjcmVhdGVfYXBwX2RhdGFcIlxyXG4gICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgIHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZV9hcHBfZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgc3VibWl0T3duZXJJbmZvKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgYXBwX2NhdGVnb3J5OiB0aGlzLmNyZWF0ZV9hcHBfZGF0YS5hcHBfY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICBidXNpbmVzc19uYW1lOiB0aGlzLmNyZWF0ZV9hcHBfZGF0YS5idXNpbmVzc19uYW1lLFxyXG4gICAgICAgICAgICAgICAgYnVzaW5lc3NfZGVzY3JpcHRpb246IHRoaXMuY3JlYXRlX2FwcF9kYXRhLmJ1c2luZXNzX2Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgYXBwX3dlYnNpdGVfdXJsOiB0aGlzLmNyZWF0ZV9hcHBfZGF0YS5hcHBfd2Vic2l0ZV91cmwsXHJcbiAgICAgICAgICAgICAgICBsb2dvOiB0aGlzLmNyZWF0ZV9hcHBfZGF0YS5sb2dvLFxyXG4gICAgICAgICAgICAgICAgc3RvcmVfYWRkcmVzczogdGhpcy5vd25lcl9kZXRhaWxzLnN0b3JlX2FkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBsYXQ6IHRoaXMub3duZXJfZGV0YWlscy5sYXQsXHJcbiAgICAgICAgICAgICAgICBsb25nOiB0aGlzLm93bmVyX2RldGFpbHMubG9uZyxcclxuICAgICAgICAgICAgICAgIG93bmVyX25hbWU6IHRoaXMub3duZXJfZGV0YWlscy5vd25lcl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgb3duZXJfZGVzaWduYXRpb246IHRoaXMub3duZXJfZGV0YWlscy5vd25lcl9kZXNpZ25hdGlvbixcclxuICAgICAgICAgICAgICAgIGJ1c2luZXNzX2VzdF95ZWFyOiB0aGlzLm93bmVyX2RldGFpbHMuYnVzaW5lc3NfZXN0X3llYXIsXHJcbiAgICAgICAgICAgICAgICBvd25lcl9waWM6IHRoaXMub3duZXJfcGljLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogdGhpcy51c2VyX2lkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLnNob3codGhpcy5sb2RhaW5nX29wdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZWRBcHBTZXJ2aWNlLmNyZWF0ZU5ld0FwcChkYXRhKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3JlYXRlQXBwRGF0YShkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NyZWF0ZWQtYXBwLycgKyByZXNbJ2lkJ10gKyAnL2VkaXQtYnVzaW5lc3MtaW1hZ2VzLycgKyAnbmV3J10pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYXJrRm9ybUdyb3VwVG91Y2hlZCh0aGlzLmZvcm0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldENyZWF0ZUFwcERhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuc2VjdXJlU3RvcmFnZS5zZXQoe1xyXG4gICAgICAgICAgICBrZXk6ICdjcmVhdGVfYXBwX2RhdGEnLFxyXG4gICAgICAgICAgICB2YWx1ZTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgICB9KS50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZWFyY2hMb2NhdGlvbigpIHtcclxuICAgICAgICB2YXIgb3B0aW9uID0ge1xyXG4gICAgICAgICAgICBjb250ZXh0OiB7fSxcclxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoTG9jYXRpb25Nb2RhbENvbXBvbmVudCwgb3B0aW9uKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXMubmFtZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyX2RldGFpbHMuc3RvcmVfYWRkcmVzcyA9IHJlcy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vd25lcl9kZXRhaWxzLmxhdCA9IHJlcy5sYXRpdHVkZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3duZXJfZGV0YWlscy5sb25nID0gcmVzLmxvbmdpdHVkZVxyXG4gICAgICAgICAgICAgICAgLy8gZGF0YS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1hcmtGb3JtR3JvdXBUb3VjaGVkKGZvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcbiAgICAgICAgKDxhbnk+T2JqZWN0KS52YWx1ZXMoZm9ybUdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGNvbnRyb2wgPT4ge1xyXG4gICAgICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRyb2wuY29udHJvbHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2wuY29udHJvbHMuZm9yRWFjaChjID0+IHRoaXMubWFya0Zvcm1Hcm91cFRvdWNoZWQoYykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGaWVsZFZhbGlkKGZpZWxkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuZm9ybS5nZXQoZmllbGQpLnZhbGlkICYmICh0aGlzLmZvcm0uZ2V0KGZpZWxkKS5kaXJ0eSB8fCB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5RmllbGRDc3MoZmllbGQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdGhpcy5mb3JtLmdldChmaWVsZCkuaW52YWxpZCAmJiAodGhpcy5mb3JtLmdldChmaWVsZCkuZGlydHkgfHwgdGhpcy5mb3JtLmdldChmaWVsZCkudG91Y2hlZCksXHJcbiAgICAgICAgICAgICdpcy12YWxpZCc6IHRoaXMuZm9ybS5nZXQoZmllbGQpLnZhbGlkICYmICh0aGlzLmZvcm0uZ2V0KGZpZWxkKS5kaXJ0eSB8fCB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG59Il19