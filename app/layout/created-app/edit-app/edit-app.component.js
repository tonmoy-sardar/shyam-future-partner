"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var created_app_service_1 = require("../../../core/services/created-app.service");
var router_2 = require("nativescript-angular/router");
var EditAppComponent = /** @class */ (function () {
    function EditAppComponent(route, CreatedAppService, formBuilder, router) {
        this.route = route;
        this.CreatedAppService = CreatedAppService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.processing = false;
        this.app_data = {
            logo: '',
            business_name: '',
            business_description: ''
        };
    }
    EditAppComponent.prototype.ngOnInit = function () {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
        this.getAppDetails(this.app_id);
        this.form = this.formBuilder.group({
            business_name: ['', forms_1.Validators.required],
            business_description: ['', forms_1.Validators.required]
        });
    };
    EditAppComponent.prototype.getAppDetails = function (id) {
        var _this = this;
        this.CreatedAppService.getCreatedAppDetails(id).subscribe(function (res) {
            _this.app_details = res;
            _this.app_data.logo = _this.app_details.logo;
            _this.app_data.business_name = _this.app_details.business_name;
            _this.app_data.business_description = _this.app_details.business_description;
            _this.visible_key = true;
            console.log(res);
        }, function (error) {
            console.log(error);
        });
    };
    EditAppComponent.prototype.updateAppInfo = function () {
        var _this = this;
        if (this.form.valid) {
            this.processing = true;
            console.log("aaa");
            console.log(this.form.value);
            this.CreatedAppService.updateAppInfo(this.app_id, this.form.value).subscribe(function (res) {
                console.log("Success");
                _this.router.navigate(['/created-app/manage-app/' + _this.app_id]);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.markFormGroupTouched(this.form);
        }
    };
    EditAppComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    EditAppComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched);
    };
    EditAppComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
            'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
        };
    };
    EditAppComponent = __decorate([
        core_1.Component({
            selector: 'edit-app',
            moduleId: module.id,
            templateUrl: "edit-app.component.html",
            styleUrls: ["edit-app.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            created_app_service_1.CreatedAppService,
            forms_1.FormBuilder,
            router_2.RouterExtensions])
    ], EditAppComponent);
    return EditAppComponent;
}());
exports.EditAppComponent = EditAppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1hcHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWRpdC1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDBDQUFpRDtBQUNqRCx3Q0FBb0U7QUFDcEUsa0ZBQStFO0FBQy9FLHNEQUErRDtBQVMvRDtJQVlJLDBCQUNZLEtBQXFCLEVBQ3JCLGlCQUFvQyxFQUNwQyxXQUF3QixFQUN4QixNQUF3QjtRQUh4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBZHBDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFJbkIsYUFBUSxHQUFHO1lBQ1AsSUFBSSxFQUFFLEVBQUU7WUFDUixhQUFhLEVBQUUsRUFBRTtZQUNqQixvQkFBb0IsRUFBRSxFQUFFO1NBQzNCLENBQUE7SUFPRyxDQUFDO0lBRUwsbUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUMvQixhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDeEMsb0JBQW9CLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDbEQsQ0FBQyxDQUFDO0lBQ1As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QU0sQ0FBQztZQUNILFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzFHLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQ3pHLENBQUM7SUFDTixDQUFDO0lBMUZRLGdCQUFnQjtRQVA1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDeEMsQ0FBQzt5Q0FlcUIsdUJBQWM7WUFDRix1Q0FBaUI7WUFDdkIsbUJBQVc7WUFDaEIseUJBQWdCO09BaEIzQixnQkFBZ0IsQ0E2RjVCO0lBQUQsdUJBQUM7Q0FBQSxBQTdGRCxJQTZGQztBQTdGWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDcmVhdGVkQXBwU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2NyZWF0ZWQtYXBwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdlZGl0LWFwcCcsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IGBlZGl0LWFwcC5jb21wb25lbnQuaHRtbGAsXHJcbiAgICBzdHlsZVVybHM6IFtgZWRpdC1hcHAuY29tcG9uZW50LmNzc2BdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBwcm9jZXNzaW5nID0gZmFsc2U7XHJcblxyXG4gICAgYXBwX2lkOiBzdHJpbmc7XHJcbiAgICBhcHBfZGV0YWlsczogYW55O1xyXG4gICAgYXBwX2RhdGEgPSB7XHJcbiAgICAgICAgbG9nbzogJycsXHJcbiAgICAgICAgYnVzaW5lc3NfbmFtZTogJycsXHJcbiAgICAgICAgYnVzaW5lc3NfZGVzY3JpcHRpb246ICcnXHJcbiAgICB9XHJcbiAgICB2aXNpYmxlX2tleTogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgQ3JlYXRlZEFwcFNlcnZpY2U6IENyZWF0ZWRBcHBTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmFwcF9pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXSk7XHJcbiAgICAgICAgdGhpcy5nZXRBcHBEZXRhaWxzKHRoaXMuYXBwX2lkKTtcclxuXHJcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgIGJ1c2luZXNzX25hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGJ1c2luZXNzX2Rlc2NyaXB0aW9uOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXBwRGV0YWlscyhpZCkge1xyXG4gICAgICAgIHRoaXMuQ3JlYXRlZEFwcFNlcnZpY2UuZ2V0Q3JlYXRlZEFwcERldGFpbHMoaWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwX2RldGFpbHMgPSByZXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcF9kYXRhLmxvZ28gPSB0aGlzLmFwcF9kZXRhaWxzLmxvZ287XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcF9kYXRhLmJ1c2luZXNzX25hbWUgPSB0aGlzLmFwcF9kZXRhaWxzLmJ1c2luZXNzX25hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcF9kYXRhLmJ1c2luZXNzX2Rlc2NyaXB0aW9uID0gdGhpcy5hcHBfZGV0YWlscy5idXNpbmVzc19kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZV9rZXkgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVBcHBJbmZvKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhYWFcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybS52YWx1ZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5DcmVhdGVkQXBwU2VydmljZS51cGRhdGVBcHBJbmZvKHRoaXMuYXBwX2lkLCB0aGlzLmZvcm0udmFsdWUpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jcmVhdGVkLWFwcC9tYW5hZ2UtYXBwLycgKyB0aGlzLmFwcF9pZF0pXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFya0Zvcm1Hcm91cFRvdWNoZWQodGhpcy5mb3JtKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYXJrRm9ybUdyb3VwVG91Y2hlZChmb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xyXG4gICAgICAgICg8YW55Pk9iamVjdCkudmFsdWVzKGZvcm1Hcm91cC5jb250cm9scykuZm9yRWFjaChjb250cm9sID0+IHtcclxuICAgICAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICAgICAgICAgIGlmIChjb250cm9sLmNvbnRyb2xzKSB7XHJcbiAgICAgICAgICAgICAgICBjb250cm9sLmNvbnRyb2xzLmZvckVhY2goYyA9PiB0aGlzLm1hcmtGb3JtR3JvdXBUb3VjaGVkKGMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRmllbGRWYWxpZChmaWVsZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmZvcm0uZ2V0KGZpZWxkKS52YWxpZCAmJiAodGhpcy5mb3JtLmdldChmaWVsZCkuZGlydHkgfHwgdGhpcy5mb3JtLmdldChmaWVsZCkudG91Y2hlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheUZpZWxkQ3NzKGZpZWxkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAnaXMtaW52YWxpZCc6IHRoaXMuZm9ybS5nZXQoZmllbGQpLmludmFsaWQgJiYgKHRoaXMuZm9ybS5nZXQoZmllbGQpLmRpcnR5IHx8IHRoaXMuZm9ybS5nZXQoZmllbGQpLnRvdWNoZWQpLFxyXG4gICAgICAgICAgICAnaXMtdmFsaWQnOiB0aGlzLmZvcm0uZ2V0KGZpZWxkKS52YWxpZCAmJiAodGhpcy5mb3JtLmdldChmaWVsZCkuZGlydHkgfHwgdGhpcy5mb3JtLmdldChmaWVsZCkudG91Y2hlZClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=