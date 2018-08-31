"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var created_app_service_1 = require("../../../core/services/created-app.service");
var router_2 = require("nativescript-angular/router");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var common_1 = require("@angular/common");
var EditServiceComponent = /** @class */ (function () {
    function EditServiceComponent(route, CreatedAppService, formBuilder, router, location) {
        this.route = route;
        this.CreatedAppService = CreatedAppService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.location = location;
        this.product_data = {
            product_name: '',
            price: '',
            discounted_price: '',
            packing_charges: '',
            tags: '',
            app_master: '',
            product_category: ''
        };
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
    EditServiceComponent.prototype.ngOnInit = function () {
        var full_location = this.location.path().split('/');
        this.app_id = full_location[2].trim();
        this.product_id = this.route.snapshot.params["product_id"];
        console.log(this.product_id);
        console.log(this.app_id);
        this.getProductDetails(this.product_id);
        this.form = this.formBuilder.group({
            product_name: ['', forms_1.Validators.required],
            price: ['0.00', forms_1.Validators.required],
            discounted_price: ['0.00'],
            packing_charges: ['0.00'],
            tags: ['']
        });
    };
    EditServiceComponent.prototype.getProductDetails = function (id) {
        var _this = this;
        this.loader.show(this.lodaing_options);
        this.CreatedAppService.getProductDetails(id).subscribe(function (res) {
            _this.product_details = res;
            _this.product_data.product_name = _this.product_details.product_name;
            _this.product_data.price = _this.product_details.price;
            _this.product_data.discounted_price = _this.product_details.discounted_price;
            _this.product_data.packing_charges = _this.product_details.packing_charges;
            _this.product_data.tags = _this.product_details.tags;
            _this.product_data.app_master = _this.product_details.app_master;
            _this.product_data.product_category = _this.product_details.product_category;
            _this.visible_key = true;
            console.log(res);
            _this.loader.hide();
        }, function (error) {
            _this.loader.hide();
            console.log(error);
        });
    };
    EditServiceComponent.prototype.updateProduct = function () {
        var _this = this;
        if (this.form.valid) {
            console.log(this.product_data);
            this.loader.show(this.lodaing_options);
            this.CreatedAppService.updateProduct(this.product_id, this.product_data).subscribe(function (res) {
                console.log("Success");
                _this.loader.hide();
                _this.router.navigate(['/created-app/' + _this.app_id + '/products']);
            }, function (error) {
                _this.loader.hide();
                console.log(error);
            });
        }
        else {
            this.markFormGroupTouched(this.form);
        }
    };
    EditServiceComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    EditServiceComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched);
    };
    EditServiceComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
            'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
        };
    };
    EditServiceComponent = __decorate([
        core_1.Component({
            selector: 'edit-service',
            moduleId: module.id,
            templateUrl: "edit-service.component.html",
            styleUrls: ["edit-service.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            created_app_service_1.CreatedAppService,
            forms_1.FormBuilder,
            router_2.RouterExtensions,
            common_1.Location])
    ], EditServiceComponent);
    return EditServiceComponent;
}());
exports.EditServiceComponent = EditServiceComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1zZXJ2aWNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXQtc2VydmljZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMENBQWlEO0FBQ2pELHdDQUFvRTtBQUNwRSxrRkFBK0U7QUFDL0Usc0RBQStEO0FBQy9ELGlGQUFrRTtBQUNsRSwwQ0FBMkM7QUFRM0M7SUF3Q0ksOEJBQ1ksS0FBcUIsRUFDckIsaUJBQW9DLEVBQ3BDLFdBQXdCLEVBQ3hCLE1BQXdCLEVBQ3hCLFFBQWtCO1FBSmxCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXZDOUIsaUJBQVksR0FBRztZQUNYLFlBQVksRUFBRSxFQUFFO1lBQ2hCLEtBQUssRUFBRSxFQUFFO1lBQ1QsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixlQUFlLEVBQUUsRUFBRTtZQUNuQixJQUFJLEVBQUUsRUFBRTtZQUNSLFVBQVUsRUFBRSxFQUFFO1lBQ2QsZ0JBQWdCLEVBQUUsRUFBRTtTQUN2QixDQUFBO1FBRUQsV0FBTSxHQUFHLElBQUksaURBQWdCLEVBQUUsQ0FBQztRQUNoQyxvQkFBZSxHQUFHO1lBQ2QsT0FBTyxFQUFFLFlBQVk7WUFDckIsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUU7Z0JBQ0wsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixjQUFjLEVBQUUsVUFBVSxNQUFNLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztnQkFDdEUsR0FBRyxFQUFFLEdBQUc7Z0JBQ1Isb0JBQW9CLEVBQUUsU0FBUztnQkFDL0IscUJBQXFCLEVB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QztJQXJJUSxvQkFBb0I7UUFQaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBMkNxQix1QkFBYztZQUNGLHVDQUFpQjtZQUN2QixtQkFBVztZQUNoQix5QkFBZ0I7WUFDZCxpQkFBUTtPQTdDckIsb0JBQW9CLENBd0loQztJQUFELDJCQUFDO0NBQUEsQUF4SUQsSUF3SUM7QUF4SVksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ3JlYXRlZEFwcFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9jcmVhdGVkLWFwcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IExvYWRpbmdJbmRpY2F0b3IgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2VkaXQtc2VydmljZScsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IGBlZGl0LXNlcnZpY2UuY29tcG9uZW50Lmh0bWxgLFxyXG4gICAgc3R5bGVVcmxzOiBbYGVkaXQtc2VydmljZS5jb21wb25lbnQuY3NzYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0U2VydmljZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBmb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gICAgYXBwX2lkOiBzdHJpbmc7XHJcbiAgICBwcm9kdWN0X2lkOiBzdHJpbmc7XHJcbiAgICBwcm9kdWN0X2RldGFpbHM6IGFueTtcclxuICAgIHByb2R1Y3RfZGF0YSA9IHtcclxuICAgICAgICBwcm9kdWN0X25hbWU6ICcnLFxyXG4gICAgICAgIHByaWNlOiAnJyxcclxuICAgICAgICBkaXNjb3VudGVkX3ByaWNlOiAnJyxcclxuICAgICAgICBwYWNraW5nX2NoYXJnZXM6ICcnLFxyXG4gICAgICAgIHRhZ3M6ICcnLFxyXG4gICAgICAgIGFwcF9tYXN0ZXI6ICcnLFxyXG4gICAgICAgIHByb2R1Y3RfY2F0ZWdvcnk6ICcnXHJcbiAgICB9XHJcbiAgICB2aXNpYmxlX2tleTogYm9vbGVhbjtcclxuICAgIGxvYWRlciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XHJcbiAgICBsb2RhaW5nX29wdGlvbnMgPSB7XHJcbiAgICAgICAgbWVzc2FnZTogJ0xvYWRpbmcuLi4nLFxyXG4gICAgICAgIHByb2dyZXNzOiAwLjY1LFxyXG4gICAgICAgIGFuZHJvaWQ6IHtcclxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhbmNlbExpc3RlbmVyOiBmdW5jdGlvbiAoZGlhbG9nKSB7IGNvbnNvbGUubG9nKFwiTG9hZGluZyBjYW5jZWxsZWRcIikgfSxcclxuICAgICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgICAgIHByb2dyZXNzTnVtYmVyRm9ybWF0OiBcIiUxZC8lMmRcIixcclxuICAgICAgICAgICAgcHJvZ3Jlc3NQZXJjZW50Rm9ybWF0OiAwLjUzLFxyXG4gICAgICAgICAgICBwcm9ncmVzc1N0eWxlOiAxLFxyXG4gICAgICAgICAgICBzZWNvbmRhcnlQcm9ncmVzczogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW9zOiB7XHJcbiAgICAgICAgICAgIGRldGFpbHM6IFwiQWRkaXRpb25hbCBkZXRhaWwgbm90ZSFcIixcclxuICAgICAgICAgICAgbWFyZ2luOiAxMCxcclxuICAgICAgICAgICAgZGltQmFja2dyb3VuZDogdHJ1ZSxcclxuICAgICAgICAgICAgY29sb3I6IFwiIzRCOUVENlwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIsXHJcbiAgICAgICAgICAgIHVzZXJJbnRlcmFjdGlvbkVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBoaWRlQmV6ZWw6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBDcmVhdGVkQXBwU2VydmljZTogQ3JlYXRlZEFwcFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHZhciBmdWxsX2xvY2F0aW9uID0gdGhpcy5sb2NhdGlvbi5wYXRoKCkuc3BsaXQoJy8nKTtcclxuICAgICAgICB0aGlzLmFwcF9pZCA9IGZ1bGxfbG9jYXRpb25bMl0udHJpbSgpO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdF9pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wicHJvZHVjdF9pZFwiXTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RfaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXBwX2lkKTtcclxuICAgICAgICB0aGlzLmdldFByb2R1Y3REZXRhaWxzKHRoaXMucHJvZHVjdF9pZCk7XHJcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgIHByb2R1Y3RfbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgcHJpY2U6IFsnMC4wMCcsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBkaXNjb3VudGVkX3ByaWNlOiBbJzAuMDAnXSxcclxuICAgICAgICAgICAgcGFja2luZ19jaGFyZ2VzOiBbJzAuMDAnXSxcclxuICAgICAgICAgICAgdGFnczogWycnXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2R1Y3REZXRhaWxzKGlkKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkZXIuc2hvdyh0aGlzLmxvZGFpbmdfb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5DcmVhdGVkQXBwU2VydmljZS5nZXRQcm9kdWN0RGV0YWlscyhpZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X2RldGFpbHMgPSByZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X2RhdGEucHJvZHVjdF9uYW1lID0gdGhpcy5wcm9kdWN0X2RldGFpbHMucHJvZHVjdF9uYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X2RhdGEucHJpY2UgPSB0aGlzLnByb2R1Y3RfZGV0YWlscy5wcmljZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdF9kYXRhLmRpc2NvdW50ZWRfcHJpY2UgPSB0aGlzLnByb2R1Y3RfZGV0YWlscy5kaXNjb3VudGVkX3ByaWNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X2RhdGEucGFja2luZ19jaGFyZ2VzID0gdGhpcy5wcm9kdWN0X2RldGFpbHMucGFja2luZ19jaGFyZ2VzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X2RhdGEudGFncyA9IHRoaXMucHJvZHVjdF9kZXRhaWxzLnRhZ3M7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RfZGF0YS5hcHBfbWFzdGVyID0gdGhpcy5wcm9kdWN0X2RldGFpbHMuYXBwX21hc3RlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdF9kYXRhLnByb2R1Y3RfY2F0ZWdvcnkgPSB0aGlzLnByb2R1Y3RfZGV0YWlscy5wcm9kdWN0X2NhdGVnb3J5O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGVfa2V5ID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUHJvZHVjdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5mb3JtLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZHVjdF9kYXRhKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLnNob3codGhpcy5sb2RhaW5nX29wdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLkNyZWF0ZWRBcHBTZXJ2aWNlLnVwZGF0ZVByb2R1Y3QodGhpcy5wcm9kdWN0X2lkLCB0aGlzLnByb2R1Y3RfZGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NyZWF0ZWQtYXBwLycgKyB0aGlzLmFwcF9pZCsnL3Byb2R1Y3RzJ10pXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1hcmtGb3JtR3JvdXBUb3VjaGVkKHRoaXMuZm9ybSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFya0Zvcm1Hcm91cFRvdWNoZWQoZm9ybUdyb3VwOiBGb3JtR3JvdXApIHtcclxuICAgICAgICAoPGFueT5PYmplY3QpLnZhbHVlcyhmb3JtR3JvdXAuY29udHJvbHMpLmZvckVhY2goY29udHJvbCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgICAgICAgICBpZiAoY29udHJvbC5jb250cm9scykge1xyXG4gICAgICAgICAgICAgICAgY29udHJvbC5jb250cm9scy5mb3JFYWNoKGMgPT4gdGhpcy5tYXJrRm9ybUdyb3VwVG91Y2hlZChjKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpc0ZpZWxkVmFsaWQoZmllbGQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5mb3JtLmdldChmaWVsZCkudmFsaWQgJiYgKHRoaXMuZm9ybS5nZXQoZmllbGQpLmRpcnR5IHx8IHRoaXMuZm9ybS5nZXQoZmllbGQpLnRvdWNoZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlGaWVsZENzcyhmaWVsZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgJ2lzLWludmFsaWQnOiB0aGlzLmZvcm0uZ2V0KGZpZWxkKS5pbnZhbGlkICYmICh0aGlzLmZvcm0uZ2V0KGZpZWxkKS5kaXJ0eSB8fCB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKSxcclxuICAgICAgICAgICAgJ2lzLXZhbGlkJzogdGhpcy5mb3JtLmdldChmaWVsZCkudmFsaWQgJiYgKHRoaXMuZm9ybS5nZXQoZmllbGQpLmRpcnR5IHx8IHRoaXMuZm9ybS5nZXQoZmllbGQpLnRvdWNoZWQpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG59Il19