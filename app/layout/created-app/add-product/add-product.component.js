"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var created_app_service_1 = require("../../../core/services/created-app.service");
var router_2 = require("nativescript-angular/router");
var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(route, CreatedAppService, formBuilder, router) {
        this.route = route;
        this.CreatedAppService = CreatedAppService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.processing = false;
        this.product_data = {
            product_name: '',
            price: '',
            discounted_price: '',
            packing_charges: '',
            tags: '',
            app_master: '',
            product_category: ''
        };
    }
    AddProductComponent.prototype.ngOnInit = function () {
        this.app_id = this.route.snapshot.params["app_id"];
        this.cat_id = this.route.snapshot.params["cat_id"];
        console.log(this.cat_id);
        console.log(this.app_id);
        this.form = this.formBuilder.group({
            product_name: ['', forms_1.Validators.required],
            price: ['', forms_1.Validators.required],
            discounted_price: [''],
            packing_charges: [''],
            tags: ['']
        });
    };
    AddProductComponent.prototype.createProduct = function () {
        var _this = this;
        if (this.form.valid) {
            this.processing = true;
            this.product_data.app_master = this.app_id;
            this.product_data.product_category = this.cat_id;
            console.log(this.product_data);
            this.CreatedAppService.createProduct(this.product_data).subscribe(function (res) {
                console.log("Success");
                _this.router.navigate(['/created-app/products/' + _this.app_id]);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.markFormGroupTouched(this.form);
        }
    };
    AddProductComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    AddProductComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched);
    };
    AddProductComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
            'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
        };
    };
    AddProductComponent = __decorate([
        core_1.Component({
            selector: 'add-product',
            moduleId: module.id,
            templateUrl: "add-product.component.html",
            styleUrls: ["add-product.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            created_app_service_1.CreatedAppService,
            forms_1.FormBuilder,
            router_2.RouterExtensions])
    ], AddProductComponent);
    return AddProductComponent;
}());
exports.AddProductComponent = AddProductComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXByb2R1Y3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLXByb2R1Y3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDBDQUFpRDtBQUNqRCx3Q0FBb0U7QUFDcEUsa0ZBQStFO0FBQy9FLHNEQUErRDtBQVMvRDtJQWlCSSw2QkFDWSxLQUFxQixFQUNyQixpQkFBb0MsRUFDcEMsV0FBd0IsRUFDeEIsTUFBd0I7UUFIeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQW5CcEMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUtuQixpQkFBWSxHQUFHO1lBQ1gsWUFBWSxFQUFFLEVBQUU7WUFDaEIsS0FBSyxFQUFDLEVBQUU7WUFDUixnQkFBZ0IsRUFBQyxFQUFFO1lBQ25CLGVBQWUsRUFBQyxFQUFFO1lBQ2xCLElBQUksRUFBQyxFQUFFO1lBQ1AsVUFBVSxFQUFDLEVBQUU7WUFDYixnQkFBZ0IsRUFBQyxFQUFFO1NBQ3RCLENBQUE7SUFPRyxDQUFDO0lBRUwsc0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXpCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FB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QUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUN6RyxDQUFDO0lBQ04sQ0FBQztJQXJGUSxtQkFBbUI7UUFQL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQzNDLENBQUM7eUNBb0JxQix1QkFBYztZQUNGLHVDQUFpQjtZQUN2QixtQkFBVztZQUNoQix5QkFBZ0I7T0FyQjNCLG1CQUFtQixDQXdGL0I7SUFBRCwwQkFBQztDQUFBLEFBeEZELElBd0ZDO0FBeEZZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENyZWF0ZWRBcHBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvc2VydmljZXMvY3JlYXRlZC1hcHAuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FkZC1wcm9kdWN0JyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogYGFkZC1wcm9kdWN0LmNvbXBvbmVudC5odG1sYCxcclxuICAgIHN0eWxlVXJsczogW2BhZGQtcHJvZHVjdC5jb21wb25lbnQuY3NzYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRQcm9kdWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGZvcm06IEZvcm1Hcm91cDtcclxuICAgIHByb2Nlc3NpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBhcHBfaWQ6IHN0cmluZztcclxuICAgIGNhdF9pZDogc3RyaW5nO1xyXG4gICAgcHJvZHVjdF9kZXRhaWxzOiBhbnk7XHJcbiAgICBwcm9kdWN0X2RhdGEgPSB7XHJcbiAgICAgICAgcHJvZHVjdF9uYW1lOiAnJyxcclxuICAgICAgICBwcmljZTonJyxcclxuICAgICAgICBkaXNjb3VudGVkX3ByaWNlOicnLFxyXG4gICAgICAgIHBhY2tpbmdfY2hhcmdlczonJyxcclxuICAgICAgICB0YWdzOicnLFxyXG4gICAgICAgIGFwcF9tYXN0ZXI6JycsXHJcbiAgICAgICAgcHJvZHVjdF9jYXRlZ29yeTonJ1xyXG4gICAgfVxyXG4gICAgdmlzaWJsZV9rZXk6IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIENyZWF0ZWRBcHBTZXJ2aWNlOiBDcmVhdGVkQXBwU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5hcHBfaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImFwcF9pZFwiXTtcclxuICAgICAgICB0aGlzLmNhdF9pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiY2F0X2lkXCJdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2F0X2lkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFwcF9pZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgIHByb2R1Y3RfbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgcHJpY2U6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGRpc2NvdW50ZWRfcHJpY2U6IFsnJ10sXHJcbiAgICAgICAgICAgIHBhY2tpbmdfY2hhcmdlczogWycnXSxcclxuICAgICAgICAgICAgdGFnczogWycnXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjcmVhdGVQcm9kdWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RfZGF0YS5hcHBfbWFzdGVyID0gdGhpcy5hcHBfaWQ7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdF9kYXRhLnByb2R1Y3RfY2F0ZWdvcnkgPSB0aGlzLmNhdF9pZDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZHVjdF9kYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5DcmVhdGVkQXBwU2VydmljZS5jcmVhdGVQcm9kdWN0KHRoaXMucHJvZHVjdF9kYXRhKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY3JlYXRlZC1hcHAvcHJvZHVjdHMvJyArIHRoaXMuYXBwX2lkXSlcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYXJrRm9ybUdyb3VwVG91Y2hlZCh0aGlzLmZvcm0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1hcmtGb3JtR3JvdXBUb3VjaGVkKGZvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcbiAgICAgICAgKDxhbnk+T2JqZWN0KS52YWx1ZXMoZm9ybUdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGNvbnRyb2wgPT4ge1xyXG4gICAgICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRyb2wuY29udHJvbHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2wuY29udHJvbHMuZm9yRWFjaChjID0+IHRoaXMubWFya0Zvcm1Hcm91cFRvdWNoZWQoYykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGaWVsZFZhbGlkKGZpZWxkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuZm9ybS5nZXQoZmllbGQpLnZhbGlkICYmICh0aGlzLmZvcm0uZ2V0KGZpZWxkKS5kaXJ0eSB8fCB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5RmllbGRDc3MoZmllbGQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdGhpcy5mb3JtLmdldChmaWVsZCkuaW52YWxpZCAmJiAodGhpcy5mb3JtLmdldChmaWVsZCkuZGlydHkgfHwgdGhpcy5mb3JtLmdldChmaWVsZCkudG91Y2hlZCksXHJcbiAgICAgICAgICAgICdpcy12YWxpZCc6IHRoaXMuZm9ybS5nZXQoZmllbGQpLnZhbGlkICYmICh0aGlzLmZvcm0uZ2V0KGZpZWxkKS5kaXJ0eSB8fCB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==