"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var created_app_service_1 = require("../../../core/services/created-app.service");
var router_2 = require("nativescript-angular/router");
var EditProductCategoyComponent = /** @class */ (function () {
    function EditProductCategoyComponent(route, CreatedAppService, formBuilder, router) {
        this.route = route;
        this.CreatedAppService = CreatedAppService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.processing = false;
        this.product_category_data = {
            category_name: '',
            description: '',
            app_master: ''
        };
    }
    EditProductCategoyComponent.prototype.ngOnInit = function () {
        this.app_id = this.route.snapshot.params["app_id"];
        this.product_category_id = this.route.snapshot.params["id"];
        this.getProductCategoryDetails(this.product_category_id);
        this.form = this.formBuilder.group({
            category_name: ['', forms_1.Validators.required],
            description: [''],
        });
    };
    EditProductCategoyComponent.prototype.getProductCategoryDetails = function (id) {
        var _this = this;
        this.CreatedAppService.getProductCategoryDetails(id).subscribe(function (res) {
            _this.product_category_details = res;
            _this.product_category_data.category_name = _this.product_category_details.category_name;
            _this.product_category_data.description = _this.product_category_details.description;
            _this.product_category_data.app_master = _this.app_id;
            _this.visible_key = true;
            console.log(res);
        }, function (error) {
            console.log(error);
        });
    };
    EditProductCategoyComponent.prototype.updateProductCategory = function () {
        var _this = this;
        if (this.form.valid) {
            this.processing = true;
            console.log("aaa");
            console.log(this.product_category_data);
            this.CreatedAppService.updateProductCategory(this.product_category_id, this.product_category_data).subscribe(function (res) {
                console.log("Success");
                _this.processing = false;
                _this.router.navigate(['/created-app/products/' + _this.app_id]);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.markFormGroupTouched(this.form);
        }
    };
    EditProductCategoyComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    EditProductCategoyComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched);
    };
    EditProductCategoyComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
            'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
        };
    };
    EditProductCategoyComponent = __decorate([
        core_1.Component({
            selector: 'edit-product-category',
            moduleId: module.id,
            templateUrl: "edit-product-category.component.html",
            styleUrls: ["edit-product-category.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            created_app_service_1.CreatedAppService,
            forms_1.FormBuilder,
            router_2.RouterExtensions])
    ], EditProductCategoyComponent);
    return EditProductCategoyComponent;
}());
exports.EditProductCategoyComponent = EditProductCategoyComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1wcm9kdWN0LWNhdGVnb3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXQtcHJvZHVjdC1jYXRlZ29yeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMENBQWlEO0FBQ2pELHdDQUFvRTtBQUNwRSxrRkFBK0U7QUFDL0Usc0RBQStEO0FBUy9EO0lBYUkscUNBQ1ksS0FBcUIsRUFDckIsaUJBQW9DLEVBQ3BDLFdBQXdCLEVBQ3hCLE1BQXdCO1FBSHhCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFmcEMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUtuQiwwQkFBcUIsR0FBRztZQUNwQixhQUFhLEVBQUUsRUFBRTtZQUNqQixXQUFXLEVBQUMsRUFBRTtZQUNkLFVBQVUsRUFBQyxFQUFFO1NBQ2hCLENBQUE7SUFPRyxDQUFDO0lBRUwsOENBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDL0IsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3hDLFdBQVcsRUFBQyxDQUFDLEVBQUUsQ0FBQztTQUNuQixDQUFDLENBQUM7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RUQscURBQWUsR0FBZixVQUFnQixLQUFhO1FBQ3pCLE1BQU0sQ0FBQztZQUNILFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzFHLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQ3pHLENBQUM7SUFDTixDQUFDO0lBM0ZRLDJCQUEyQjtRQVB2QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNDQUFzQztZQUNuRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztTQUNyRCxDQUFDO3lDQWdCcUIsdUJBQWM7WUFDRix1Q0FBaUI7WUFDdkIsbUJBQVc7WUFDaEIseUJBQWdCO09BakIzQiwyQkFBMkIsQ0E4RnZDO0lBQUQsa0NBQUM7Q0FBQSxBQTlGRCxJQThGQztBQTlGWSxrRUFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDcmVhdGVkQXBwU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2NyZWF0ZWQtYXBwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdlZGl0LXByb2R1Y3QtY2F0ZWdvcnknLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBgZWRpdC1wcm9kdWN0LWNhdGVnb3J5LmNvbXBvbmVudC5odG1sYCxcclxuICAgIHN0eWxlVXJsczogW2BlZGl0LXByb2R1Y3QtY2F0ZWdvcnkuY29tcG9uZW50LmNzc2BdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2R1Y3RDYXRlZ295Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGZvcm06IEZvcm1Hcm91cDtcclxuICAgIHByb2Nlc3NpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBhcHBfaWQ6IHN0cmluZztcclxuICAgIHByb2R1Y3RfY2F0ZWdvcnlfaWQ6IHN0cmluZztcclxuICAgIHByb2R1Y3RfY2F0ZWdvcnlfZGV0YWlsczogYW55O1xyXG4gICAgcHJvZHVjdF9jYXRlZ29yeV9kYXRhID0ge1xyXG4gICAgICAgIGNhdGVnb3J5X25hbWU6ICcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOicnLFxyXG4gICAgICAgIGFwcF9tYXN0ZXI6JydcclxuICAgIH1cclxuICAgIHZpc2libGVfa2V5OiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBDcmVhdGVkQXBwU2VydmljZTogQ3JlYXRlZEFwcFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuYXBwX2lkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJhcHBfaWRcIl07XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0X2NhdGVnb3J5X2lkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0Q2F0ZWdvcnlEZXRhaWxzKHRoaXMucHJvZHVjdF9jYXRlZ29yeV9pZCk7XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBjYXRlZ29yeV9uYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpbJyddLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2R1Y3RDYXRlZ29yeURldGFpbHMoaWQpIHtcclxuICAgICAgICB0aGlzLkNyZWF0ZWRBcHBTZXJ2aWNlLmdldFByb2R1Y3RDYXRlZ29yeURldGFpbHMoaWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdF9jYXRlZ29yeV9kZXRhaWxzID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X2NhdGVnb3J5X2RhdGEuY2F0ZWdvcnlfbmFtZSA9IHRoaXMucHJvZHVjdF9jYXRlZ29yeV9kZXRhaWxzLmNhdGVnb3J5X25hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RfY2F0ZWdvcnlfZGF0YS5kZXNjcmlwdGlvbiA9IHRoaXMucHJvZHVjdF9jYXRlZ29yeV9kZXRhaWxzLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X2NhdGVnb3J5X2RhdGEuYXBwX21hc3RlciA9ICB0aGlzLmFwcF9pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZV9rZXkgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQcm9kdWN0Q2F0ZWdvcnkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFhYVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9kdWN0X2NhdGVnb3J5X2RhdGEpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5DcmVhdGVkQXBwU2VydmljZS51cGRhdGVQcm9kdWN0Q2F0ZWdvcnkodGhpcy5wcm9kdWN0X2NhdGVnb3J5X2lkLCB0aGlzLnByb2R1Y3RfY2F0ZWdvcnlfZGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY3JlYXRlZC1hcHAvcHJvZHVjdHMvJyArIHRoaXMuYXBwX2lkXSlcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYXJrRm9ybUdyb3VwVG91Y2hlZCh0aGlzLmZvcm0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1hcmtGb3JtR3JvdXBUb3VjaGVkKGZvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcbiAgICAgICAgKDxhbnk+T2JqZWN0KS52YWx1ZXMoZm9ybUdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGNvbnRyb2wgPT4ge1xyXG4gICAgICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRyb2wuY29udHJvbHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2wuY29udHJvbHMuZm9yRWFjaChjID0+IHRoaXMubWFya0Zvcm1Hcm91cFRvdWNoZWQoYykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGaWVsZFZhbGlkKGZpZWxkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuZm9ybS5nZXQoZmllbGQpLnZhbGlkICYmICh0aGlzLmZvcm0uZ2V0KGZpZWxkKS5kaXJ0eSB8fCB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5RmllbGRDc3MoZmllbGQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdGhpcy5mb3JtLmdldChmaWVsZCkuaW52YWxpZCAmJiAodGhpcy5mb3JtLmdldChmaWVsZCkuZGlydHkgfHwgdGhpcy5mb3JtLmdldChmaWVsZCkudG91Y2hlZCksXHJcbiAgICAgICAgICAgICdpcy12YWxpZCc6IHRoaXMuZm9ybS5nZXQoZmllbGQpLnZhbGlkICYmICh0aGlzLmZvcm0uZ2V0KGZpZWxkKS5kaXJ0eSB8fCB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==