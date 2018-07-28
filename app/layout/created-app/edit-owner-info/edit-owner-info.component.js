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
var Globals = require("../../../core/globals");
var bgHttp = require("nativescript-background-http");
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
        // upload 
        this.tasks = [];
        this.events = [];
        this.counter = 0;
    }
    EditOwnerInfoComponent.prototype.ngOnInit = function () {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
        this.imageUrl = null;
        this.form = this.formBuilder.group({
            owner_name: ['', forms_1.Validators.required],
            owner_designation: [''],
            owner_pic: [''],
            business_est_year: [''],
            store_address: [''],
            lat: [''],
            long: ['']
        });
        // this.file = fs.path.normalize(fs.knownFolders.currentApp().path + "/images/shyam-wheel.png");
        // this.file = "~/images/shyam-wheel.png";
        this.url = Globals.apiEndpoint + 'edit_owner_info/' + this.app_id + '/';
        this.session = bgHttp.session("image-upload");
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
                    _this.imageUrl = res.image;
                    _this.owner_details.owner_pic = res.image;
                    _this.file = res.image;
                }
                else if (res.gallery == true) {
                    console.log(res.image);
                    _this.imageUrl = res.image;
                    _this.owner_details.owner_pic = res.image;
                    _this.file = res.image;
                }
            }
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
    // 
    EditOwnerInfoComponent.prototype.upload = function (args) {
        console.log("start");
        this.start_upload(false, false);
    };
    EditOwnerInfoComponent.prototype.upload_error = function (args) {
        this.start_upload(true, false);
    };
    EditOwnerInfoComponent.prototype.upload_multi = function (args) {
        this.start_upload(false, true);
    };
    EditOwnerInfoComponent.prototype.start_upload = function (should_fail, isMulti) {
        console.log((should_fail ? "Testing error during upload of " : "Uploading file: ") + this.file + (isMulti ? " using multipart." : ""));
        var name = this.file.substr(this.file.lastIndexOf("/") + 1);
        var description = name + " (" + ++this.counter + ")";
        var request = {
            url: this.url,
            method: "PUT",
            headers: {
                "Content-Type": "application/octet-stream",
                "File-Name": name
            },
            description: description,
            androidAutoDeleteAfterUpload: false,
            androidNotificationTitle: 'NativeScript HTTP background',
        };
        if (should_fail) {
            request.headers["Should-Fail"] = true;
        }
        var task;
        var lastEvent = "";
        if (isMulti) {
            var params = [
                { name: "test", value: "value" },
                { name: "owner_pic", filename: this.file, mimeType: 'image/jpeg' }
            ];
            task = this.session.multipartUpload(params, request);
        }
        else {
            task = this.session.uploadFile(this.file, request);
        }
        function onEvent(e) {
            if (lastEvent !== e.eventName) {
                // suppress all repeating progress events and only show the first one
                lastEvent = e.eventName;
            }
            else {
                return;
            }
            this.events.push({
                eventTitle: e.eventName + " " + e.object.description,
                eventData: JSON.stringify({
                    error: e.error ? e.error.toString() : e.error,
                    currentBytes: e.currentBytes,
                    totalBytes: e.totalBytes,
                    body: e.data
                })
            });
        }
        task.on("progress", onEvent.bind(this));
        task.on("error", onEvent.bind(this));
        task.on("responded", onEvent.bind(this));
        task.on("complete", onEvent.bind(this));
        lastEvent = "";
        this.tasks.push(task);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1vd25lci1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXQtb3duZXItaW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkY7QUFFM0YsMENBQWlEO0FBQ2pELHdDQUFvRTtBQUNwRSxzREFBK0Q7QUFDL0Qsa0ZBQStFO0FBRS9FLG1FQUE2RTtBQUM3RSw2SUFBd0k7QUFDeEksaUVBQWtGO0FBQ2xGLDRHQUF5RztBQUN6RywrQ0FBaUQ7QUFDakQscURBQXVEO0FBVXZEO0lBZ0NJLGdDQUNZLEtBQXFCLEVBQ3JCLGlCQUFvQyxFQUNwQyxLQUF5QixFQUN6QixLQUF1QixFQUN2QixXQUF3QixFQUN4QixNQUF3QjtRQUx4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBcENwQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSW5CLGtCQUFhLEdBQVE7WUFDakIsVUFBVSxFQUFFLEVBQUU7WUFDZCxpQkFBaUIsRUFBRSxFQUFFO1lBQ3JCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsaUJBQWlCLEVBQUUsRUFBRTtZQUNyQixhQUFhLEVBQUUsRUFBRTtZQUNqQixHQUFHLEVBQUUsRUFBRTtZQUNQLElBQUksRUFBRSxFQUFFO1NBQ1gsQ0FBQTtRQUNELFlBQU8sR0FBRztZQUNOLE9BQU8sRUFBRSxFQUFFO1lBQ1gsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztRQUVGLGtCQUFhLEdBQVcsSUFBSSxDQUFDO1FBQzdCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQztRQUc1QixVQUFVO1FBQ0gs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LElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4QyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQWpRUSxzQkFBc0I7UUFQbEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDL0MsQ0FBQzt5Q0FtQ3FCLHVCQUFjO1lBQ0YsdUNBQWlCO1lBQzdCLDRCQUFrQjtZQUNsQix1QkFBZ0I7WUFDVixtQkFBVztZQUNoQix5QkFBZ0I7T0F0QzNCLHNCQUFzQixDQW9RbEM7SUFBRCw2QkFBQztDQUFBLEFBcFFELElBb1FDO0FBcFFZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ3JlYXRlZEFwcFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9jcmVhdGVkLWFwcC5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFVwbG9hZFNpbmdsZUltYWdlTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9jb21wb25lbnQvdXBsb2FkLXNpbmdsZS1pbWFnZS1tb2RhbC91cGxvYWQtc2luZ2xlLWltYWdlLW1vZGFsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgVmFsdWVMaXN0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcclxuaW1wb3J0IHsgTG9jYXRpb25Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29tcG9uZW50L2xvY2F0aW9uLW1vZGFsL2xvY2F0aW9uLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCAqIGFzIEdsb2JhbHMgZnJvbSAnLi4vLi4vLi4vY29yZS9nbG9iYWxzJztcclxuaW1wb3J0ICogYXMgYmdIdHRwIGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJkYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZpbGUtc3lzdGVtXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdlZGl0LW93bmVyLWluZm8nLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBgZWRpdC1vd25lci1pbmZvLmNvbXBvbmVudC5odG1sYCxcclxuICAgIHN0eWxlVXJsczogW2BlZGl0LW93bmVyLWluZm8uY29tcG9uZW50LmNzc2BdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdE93bmVySW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBwcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICBhcHBfaWQ6IHN0cmluZztcclxuICAgIHZpc2libGVfa2V5OiBib29sZWFuO1xyXG4gICAgYXBwX2RldGFpbHM6IGFueTtcclxuICAgIG93bmVyX2RldGFpbHM6IGFueSA9IHtcclxuICAgICAgICBvd25lcl9uYW1lOiAnJyxcclxuICAgICAgICBvd25lcl9kZXNpZ25hdGlvbjogJycsXHJcbiAgICAgICAgb3duZXJfcGljOiAnJyxcclxuICAgICAgICBidXNpbmVzc19lc3RfeWVhcjogJycsXHJcbiAgICAgICAgc3RvcmVfYWRkcmVzczogJycsXHJcbiAgICAgICAgbGF0OiAnJyxcclxuICAgICAgICBsb25nOiAnJ1xyXG4gICAgfVxyXG4gICAgb3B0aW9ucyA9IHtcclxuICAgICAgICBjb250ZXh0OiB7fSxcclxuICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgICB9O1xyXG4gICAgaW1hZ2VVcmw6IGFueTtcclxuICAgIHNlbGVjdGVkSW5kZXg6IG51bWJlciA9IG51bGw7XHJcbiAgICBoaW50ID0gXCJTZWxlY3QgRGVzaWduYXRpb25cIjtcclxuICAgIGRlc2lnbmF0aW9uczogVmFsdWVMaXN0PHN0cmluZz47XHJcblxyXG4gICAgLy8gdXBsb2FkIFxyXG4gICAgcHVibGljIHRhc2tzOiBiZ0h0dHAuVGFza1tdID0gW107XHJcbiAgICBwdWJsaWMgZXZlbnRzOiB7IGV2ZW50VGl0bGU6IHN0cmluZywgZXZlbnREYXRhOiBhbnkgfVtdID0gW107XHJcbiAgICBwcml2YXRlIGZpbGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgdXJsOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGNvdW50ZXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHNlc3Npb246IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgQ3JlYXRlZEFwcFNlcnZpY2U6IENyZWF0ZWRBcHBTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5hcHBfaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl0pO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VVcmwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBvd25lcl9uYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBvd25lcl9kZXNpZ25hdGlvbjogWycnXSxcclxuICAgICAgICAgICAgb3duZXJfcGljOiBbJyddLFxyXG4gICAgICAgICAgICBidXNpbmVzc19lc3RfeWVhcjogWycnXSxcclxuICAgICAgICAgICAgc3RvcmVfYWRkcmVzczogWycnXSxcclxuICAgICAgICAgICAgbGF0OiBbJyddLFxyXG4gICAgICAgICAgICBsb25nOiBbJyddXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gdGhpcy5maWxlID0gZnMucGF0aC5ub3JtYWxpemUoZnMua25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKS5wYXRoICsgXCIvaW1hZ2VzL3NoeWFtLXdoZWVsLnBuZ1wiKTtcclxuICAgICAgICAvLyB0aGlzLmZpbGUgPSBcIn4vaW1hZ2VzL3NoeWFtLXdoZWVsLnBuZ1wiO1xyXG4gICAgICAgIHRoaXMudXJsID0gR2xvYmFscy5hcGlFbmRwb2ludCArICdlZGl0X293bmVyX2luZm8vJyArIHRoaXMuYXBwX2lkICsgJy8nO1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbiA9IGJnSHR0cC5zZXNzaW9uKFwiaW1hZ2UtdXBsb2FkXCIpO1xyXG4gICAgICAgIHRoaXMuZ2V0RGVzaWduYXRpb25Ecm9wZG93bigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYERyb3AgRG93biBzZWxlY3RlZCBpbmRleCBjaGFuZ2VkIGZyb20gJHthcmdzLm9sZEluZGV4fSB0byAke2FyZ3MubmV3SW5kZXh9LiBOZXcgdmFsdWUgaXMgXCIke3RoaXMuZGVzaWduYXRpb25zLmdldFZhbHVlKFxyXG4gICAgICAgICAgICBhcmdzLm5ld0luZGV4KX1cImApO1xyXG4gICAgICAgIHRoaXMub3duZXJfZGV0YWlscy5vd25lcl9kZXNpZ25hdGlvbiA9IHRoaXMuZGVzaWduYXRpb25zLmdldFZhbHVlKFxyXG4gICAgICAgICAgICBhcmdzLm5ld0luZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZXNpZ25hdGlvbkRyb3Bkb3duKCkge1xyXG4gICAgICAgIHRoaXMuQ3JlYXRlZEFwcFNlcnZpY2UuZ2V0RGVzaWduYXRpb25Ecm9wZG93bigpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKGRhdGE6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzaWduYXRpb25zID0gbmV3IFZhbHVlTGlzdDxzdHJpbmc+KCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2lnbmF0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGFbaV1bJ2lkJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGRhdGFbaV1bJ2Rlc2lnbmF0aW9uX25hbWUnXSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXBwT3duZXJEZXRhaWxzKHRoaXMuYXBwX2lkKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRBcHBPd25lckRldGFpbHMoaWQpIHtcclxuICAgICAgICB0aGlzLkNyZWF0ZWRBcHBTZXJ2aWNlLmdldE93bmVySW5mbyhpZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vd25lcl9kZXRhaWxzID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5kZXNpZ25hdGlvbnMuZ2V0SW5kZXgodGhpcy5vd25lcl9kZXRhaWxzLm93bmVyX2Rlc2lnbmF0aW9uLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZEluZGV4KVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5vd25lcl9kZXRhaWxzLm93bmVyX2Rlc2lnbmF0aW9uKVxyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlX2tleSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoTG9jYXRpb24oKSB7XHJcbiAgICAgICAgdmFyIG9wdGlvbiA9IHtcclxuICAgICAgICAgICAgY29udGV4dDoge30sXHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKExvY2F0aW9uTW9kYWxDb21wb25lbnQsIG9wdGlvbikudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICBpZiAocmVzLm5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vd25lcl9kZXRhaWxzLnN0b3JlX2FkZHJlc3MgPSByZXMubmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3duZXJfZGV0YWlscy5sYXQgPSByZXMubGF0aXR1ZGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyX2RldGFpbHMubG9uZyA9IHJlcy5sb25naXR1ZGVcclxuICAgICAgICAgICAgICAgIC8vIGRhdGEuc3RydWN0dXJlZF9mb3JtYXR0aW5nLm1haW5fdGV4dFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwaWNrTG9nbygpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChVcGxvYWRTaW5nbGVJbWFnZU1vZGFsQ29tcG9uZW50LCB0aGlzLm9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgaWYgKHJlcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuY2FtZXJhID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuaW1hZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVVybCA9IHJlcy5pbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3duZXJfZGV0YWlscy5vd25lcl9waWMgPSByZXMuaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSByZXMuaW1hZ2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcy5nYWxsZXJ5ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuaW1hZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVVybCA9IHJlcy5pbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3duZXJfZGV0YWlscy5vd25lcl9waWMgPSByZXMuaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSByZXMuaW1hZ2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZU93bmVySW5mbygpIHtcclxuICAgICAgICBpZiAodGhpcy5mb3JtLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuQ3JlYXRlZEFwcFNlcnZpY2UuZWRpdE93bmVySW5mbyh0aGlzLm93bmVyX2RldGFpbHMpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEFwcE93bmVyRGV0YWlscyhyZXNbJ2lkJ10pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYXJrRm9ybUdyb3VwVG91Y2hlZCh0aGlzLmZvcm0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1hcmtGb3JtR3JvdXBUb3VjaGVkKGZvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcbiAgICAgICAgKDxhbnk+T2JqZWN0KS52YWx1ZXMoZm9ybUdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGNvbnRyb2wgPT4ge1xyXG4gICAgICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRyb2wuY29udHJvbHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2wuY29udHJvbHMuZm9yRWFjaChjID0+IHRoaXMubWFya0Zvcm1Hcm91cFRvdWNoZWQoYykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGaWVsZFZhbGlkKGZpZWxkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuZm9ybS5nZXQoZmllbGQpLnZhbGlkICYmICh0aGlzLmZvcm0uZ2V0KGZpZWxkKS5kaXJ0eSB8fCB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5RmllbGRDc3MoZmllbGQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdGhpcy5mb3JtLmdldChmaWVsZCkuaW52YWxpZCAmJiAodGhpcy5mb3JtLmdldChmaWVsZCkuZGlydHkgfHwgdGhpcy5mb3JtLmdldChmaWVsZCkudG91Y2hlZCksXHJcbiAgICAgICAgICAgICdpcy12YWxpZCc6IHRoaXMuZm9ybS5nZXQoZmllbGQpLnZhbGlkICYmICh0aGlzLmZvcm0uZ2V0KGZpZWxkKS5kaXJ0eSB8fCB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBcclxuICAgIHVwbG9hZChhcmdzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGFydFwiKVxyXG4gICAgICAgIHRoaXMuc3RhcnRfdXBsb2FkKGZhbHNlLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkX2Vycm9yKGFyZ3MpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0X3VwbG9hZCh0cnVlLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkX211bHRpKGFyZ3MpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0X3VwbG9hZChmYWxzZSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRfdXBsb2FkKHNob3VsZF9mYWlsLCBpc011bHRpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coKHNob3VsZF9mYWlsID8gXCJUZXN0aW5nIGVycm9yIGR1cmluZyB1cGxvYWQgb2YgXCIgOiBcIlVwbG9hZGluZyBmaWxlOiBcIikgKyB0aGlzLmZpbGUgKyAoaXNNdWx0aSA/IFwiIHVzaW5nIG11bHRpcGFydC5cIiA6IFwiXCIpKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZmlsZS5zdWJzdHIodGhpcy5maWxlLmxhc3RJbmRleE9mKFwiL1wiKSArIDEpO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gYCR7bmFtZX0gKCR7Kyt0aGlzLmNvdW50ZXJ9KWA7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJGaWxlLU5hbWVcIjogbmFtZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGFuZHJvaWRBdXRvRGVsZXRlQWZ0ZXJVcGxvYWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbmRyb2lkTm90aWZpY2F0aW9uVGl0bGU6ICdOYXRpdmVTY3JpcHQgSFRUUCBiYWNrZ3JvdW5kJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoc2hvdWxkX2ZhaWwpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5oZWFkZXJzW1wiU2hvdWxkLUZhaWxcIl0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRhc2s6IGJnSHR0cC5UYXNrO1xyXG4gICAgICAgIGxldCBsYXN0RXZlbnQgPSBcIlwiO1xyXG4gICAgICAgIGlmIChpc011bHRpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IFtcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogXCJ0ZXN0XCIsIHZhbHVlOiBcInZhbHVlXCIgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogXCJvd25lcl9waWNcIiwgZmlsZW5hbWU6IHRoaXMuZmlsZSwgbWltZVR5cGU6ICdpbWFnZS9qcGVnJyB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHRhc2sgPSB0aGlzLnNlc3Npb24ubXVsdGlwYXJ0VXBsb2FkKHBhcmFtcywgcmVxdWVzdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFzayA9IHRoaXMuc2Vzc2lvbi51cGxvYWRGaWxlKHRoaXMuZmlsZSwgcmVxdWVzdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvbkV2ZW50KGUpIHtcclxuICAgICAgICAgICAgaWYgKGxhc3RFdmVudCAhPT0gZS5ldmVudE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIHN1cHByZXNzIGFsbCByZXBlYXRpbmcgcHJvZ3Jlc3MgZXZlbnRzIGFuZCBvbmx5IHNob3cgdGhlIGZpcnN0IG9uZVxyXG4gICAgICAgICAgICAgICAgbGFzdEV2ZW50ID0gZS5ldmVudE5hbWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZXZlbnRUaXRsZTogZS5ldmVudE5hbWUgKyBcIiBcIiArIGUub2JqZWN0LmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgZXZlbnREYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGUuZXJyb3IgPyBlLmVycm9yLnRvU3RyaW5nKCkgOiBlLmVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCeXRlczogZS5jdXJyZW50Qnl0ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxCeXRlczogZS50b3RhbEJ5dGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGUuZGF0YVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0YXNrLm9uKFwicHJvZ3Jlc3NcIiwgb25FdmVudC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0YXNrLm9uKFwiZXJyb3JcIiwgb25FdmVudC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0YXNrLm9uKFwicmVzcG9uZGVkXCIsIG9uRXZlbnQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGFzay5vbihcImNvbXBsZXRlXCIsIG9uRXZlbnQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgbGFzdEV2ZW50ID0gXCJcIjtcclxuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==