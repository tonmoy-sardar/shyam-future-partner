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
            app_master: ''
        };
    }
    EditProductCategoyComponent.prototype.ngOnInit = function () {
        this.app_id = this.route.snapshot.params["app_id"];
        this.product_category_id = this.route.snapshot.params["id"];
        this.getProductCategoryDetails(this.product_category_id);
        this.form = this.formBuilder.group({
            category_name: ['', forms_1.Validators.required],
        });
    };
    EditProductCategoyComponent.prototype.getProductCategoryDetails = function (id) {
        var _this = this;
        this.CreatedAppService.getProductCategoryDetails(id).subscribe(function (res) {
            _this.product_category_details = res;
            _this.product_category_data.category_name = _this.product_category_details.category_name;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1wcm9kdWN0LWNhdGVnb3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXQtcHJvZHVjdC1jYXRlZ29yeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMENBQWlEO0FBQ2pELHdDQUFvRTtBQUNwRSxrRkFBK0U7QUFDL0Usc0RBQStEO0FBUy9EO0lBWUkscUNBQ1ksS0FBcUIsRUFDckIsaUJBQW9DLEVBQ3BDLFdBQXdCLEVBQ3hCLE1BQXdCO1FBSHhCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFkcEMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUtuQiwwQkFBcUIsR0FBRztZQUNwQixhQUFhLEVBQUUsRUFBRTtZQUNqQixVQUFVLEVBQUMsRUFBRTtTQUNoQixDQUFBO0lBT0csQ0FBQztJQUVMLDhDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUV6RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQy9CLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUMzQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsK0RBQXlCLEdBQXpCLFVBQTBCLEVBQUU7UUFBNUIsaUJBY0M7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Q0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDMUcsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDekcsQ0FBQztJQUNOLENBQUM7SUF4RlEsMkJBQTJCO1FBUHZDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO1NBQ3JELENBQUM7eUNBZXFCLHVCQUFjO1lBQ0YsdUNBQWlCO1lBQ3ZCLG1CQUFXO1lBQ2hCLHlCQUFnQjtPQWhCM0IsMkJBQTJCLENBMkZ2QztJQUFELGtDQUFDO0NBQUEsQUEzRkQsSUEyRkM7QUEzRlksa0VBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ3JlYXRlZEFwcFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9jcmVhdGVkLWFwcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZWRpdC1wcm9kdWN0LWNhdGVnb3J5JyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogYGVkaXQtcHJvZHVjdC1jYXRlZ29yeS5jb21wb25lbnQuaHRtbGAsXHJcbiAgICBzdHlsZVVybHM6IFtgZWRpdC1wcm9kdWN0LWNhdGVnb3J5LmNvbXBvbmVudC5jc3NgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9kdWN0Q2F0ZWdveUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBwcm9jZXNzaW5nID0gZmFsc2U7XHJcblxyXG4gICAgYXBwX2lkOiBzdHJpbmc7XHJcbiAgICBwcm9kdWN0X2NhdGVnb3J5X2lkOiBzdHJpbmc7XHJcbiAgICBwcm9kdWN0X2NhdGVnb3J5X2RldGFpbHM6IGFueTtcclxuICAgIHByb2R1Y3RfY2F0ZWdvcnlfZGF0YSA9IHtcclxuICAgICAgICBjYXRlZ29yeV9uYW1lOiAnJyxcclxuICAgICAgICBhcHBfbWFzdGVyOicnXHJcbiAgICB9XHJcbiAgICB2aXNpYmxlX2tleTogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgQ3JlYXRlZEFwcFNlcnZpY2U6IENyZWF0ZWRBcHBTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmFwcF9pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiYXBwX2lkXCJdO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdF9jYXRlZ29yeV9pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0UHJvZHVjdENhdGVnb3J5RGV0YWlscyh0aGlzLnByb2R1Y3RfY2F0ZWdvcnlfaWQpO1xyXG5cclxuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgY2F0ZWdvcnlfbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9kdWN0Q2F0ZWdvcnlEZXRhaWxzKGlkKSB7XHJcbiAgICAgICAgdGhpcy5DcmVhdGVkQXBwU2VydmljZS5nZXRQcm9kdWN0Q2F0ZWdvcnlEZXRhaWxzKGlkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RfY2F0ZWdvcnlfZGV0YWlscyA9IHJlcztcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdF9jYXRlZ29yeV9kYXRhLmNhdGVnb3J5X25hbWUgPSB0aGlzLnByb2R1Y3RfY2F0ZWdvcnlfZGV0YWlscy5jYXRlZ29yeV9uYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X2NhdGVnb3J5X2RhdGEuYXBwX21hc3RlciA9ICB0aGlzLmFwcF9pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZV9rZXkgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQcm9kdWN0Q2F0ZWdvcnkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFhYVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9kdWN0X2NhdGVnb3J5X2RhdGEpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5DcmVhdGVkQXBwU2VydmljZS51cGRhdGVQcm9kdWN0Q2F0ZWdvcnkodGhpcy5wcm9kdWN0X2NhdGVnb3J5X2lkLCB0aGlzLnByb2R1Y3RfY2F0ZWdvcnlfZGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY3JlYXRlZC1hcHAvcHJvZHVjdHMvJyArIHRoaXMuYXBwX2lkXSlcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYXJrRm9ybUdyb3VwVG91Y2hlZCh0aGlzLmZvcm0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1hcmtGb3JtR3JvdXBUb3VjaGVkKGZvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcbiAgICAgICAgKDxhbnk+T2JqZWN0KS52YWx1ZXMoZm9ybUdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGNvbnRyb2wgPT4ge1xyXG4gICAgICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRyb2wuY29udHJvbHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2wuY29udHJvbHMuZm9yRWFjaChjID0+IHRoaXMubWFya0Zvcm1Hcm91cFRvdWNoZWQoYykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGaWVsZFZhbGlkKGZpZWxkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuZm9ybS5nZXQoZmllbGQpLnZhbGlkICYmICh0aGlzLmZvcm0uZ2V0KGZpZWxkKS5kaXJ0eSB8fCB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5RmllbGRDc3MoZmllbGQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdGhpcy5mb3JtLmdldChmaWVsZCkuaW52YWxpZCAmJiAodGhpcy5mb3JtLmdldChmaWVsZCkuZGlydHkgfHwgdGhpcy5mb3JtLmdldChmaWVsZCkudG91Y2hlZCksXHJcbiAgICAgICAgICAgICdpcy12YWxpZCc6IHRoaXMuZm9ybS5nZXQoZmllbGQpLnZhbGlkICYmICh0aGlzLmZvcm0uZ2V0KGZpZWxkKS5kaXJ0eSB8fCB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==