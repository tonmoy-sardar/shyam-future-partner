"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var created_app_service_1 = require("../../../core/services/created-app.service");
var router_2 = require("nativescript-angular/router");
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(route, CreatedAppService, formBuilder, router) {
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
        this.category_list = [];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
        this.getAppDetails(this.app_id);
        this.form = this.formBuilder.group({
            business_name: ['', forms_1.Validators.required],
            business_description: ['', forms_1.Validators.required]
        });
    };
    ProductsComponent.prototype.getAppDetails = function (id) {
        var _this = this;
        this.CreatedAppService.getCreatedAppDetails(id).subscribe(function (res) {
            _this.app_details = res;
            _this.app_data.logo = _this.app_details.logo;
            _this.app_data.business_name = _this.app_details.business_name;
            _this.app_data.business_description = _this.app_details.business_description;
            _this.category_list = _this.app_details.app_product_categories;
            // console.log(this.customer_cart_data);
            for (var i = 0; i < _this.category_list.length; i++) {
                _this.category_list[i]['items'] = JSON.parse(JSON.stringify(_this.category_list[i].products));
            }
            console.log(res);
            _this.visible_key = true;
            console.log(res);
        }, function (error) {
            console.log(error);
        });
    };
    ProductsComponent.prototype.updateAppInfo = function () {
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
    ProductsComponent.prototype.getDiscount = function (price, discounted_price) {
        return Math.floor(((price - discounted_price) * 100) / price) + '%';
    };
    ProductsComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    ProductsComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched);
    };
    ProductsComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
            'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
        };
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'products',
            moduleId: module.id,
            templateUrl: "products.component.html",
            styleUrls: ["products.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            created_app_service_1.CreatedAppService,
            forms_1.FormBuilder,
            router_2.RouterExtensions])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDBDQUFpRDtBQUNqRCx3Q0FBb0U7QUFDcEUsa0ZBQStFO0FBQy9FLHNEQUErRDtBQVMvRDtJQWVJLDJCQUNZLEtBQXFCLEVBQ3JCLGlCQUFvQyxFQUNwQyxXQUF3QixFQUN4QixNQUF3QjtRQUh4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBakJwQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSW5CLGFBQVEsR0FBRztZQUNQLElBQUksRUFBRSxFQUFFO1lBQ1IsYUFBYSxFQUFFLEVBQUU7WUFDakIsb0JBQW9CLEVBQUUsRUFBRTtTQUMzQixDQUFBO1FBQ0Qsa0JBQWEsR0FBUSxFQUFFLENBQUM7SUFTcEIsQ0FBQztJQUVMLG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDL0IsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3hDLG9CQUFvQixFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFB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LENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDekcsQ0FBQztJQUNOLENBQUM7SUF6R1EsaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN4QyxDQUFDO3lDQWtCcUIsdUJBQWM7WUFDRix1Q0FBaUI7WUFDdkIsbUJBQVc7WUFDaEIseUJBQWdCO09BbkIzQixpQkFBaUIsQ0E0RzdCO0lBQUQsd0JBQUM7Q0FBQSxBQTVHRCxJQTRHQztBQTVHWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDcmVhdGVkQXBwU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2NyZWF0ZWQtYXBwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwcm9kdWN0cycsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IGBwcm9kdWN0cy5jb21wb25lbnQuaHRtbGAsXHJcbiAgICBzdHlsZVVybHM6IFtgcHJvZHVjdHMuY29tcG9uZW50LmNzc2BdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZm9ybTogRm9ybUdyb3VwO1xyXG4gICAgcHJvY2Vzc2luZyA9IGZhbHNlO1xyXG5cclxuICAgIGFwcF9pZDogc3RyaW5nO1xyXG4gICAgYXBwX2RldGFpbHM6IGFueTtcclxuICAgIGFwcF9kYXRhID0ge1xyXG4gICAgICAgIGxvZ286ICcnLFxyXG4gICAgICAgIGJ1c2luZXNzX25hbWU6ICcnLFxyXG4gICAgICAgIGJ1c2luZXNzX2Rlc2NyaXB0aW9uOiAnJ1xyXG4gICAgfVxyXG4gICAgY2F0ZWdvcnlfbGlzdDogYW55ID0gW107XHJcbiAgICBcclxuXHJcbiAgICB2aXNpYmxlX2tleTogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgQ3JlYXRlZEFwcFNlcnZpY2U6IENyZWF0ZWRBcHBTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmFwcF9pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXSk7XHJcbiAgICAgICAgdGhpcy5nZXRBcHBEZXRhaWxzKHRoaXMuYXBwX2lkKTtcclxuXHJcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgIGJ1c2luZXNzX25hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGJ1c2luZXNzX2Rlc2NyaXB0aW9uOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXBwRGV0YWlscyhpZCkge1xyXG4gICAgICAgIHRoaXMuQ3JlYXRlZEFwcFNlcnZpY2UuZ2V0Q3JlYXRlZEFwcERldGFpbHMoaWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwX2RldGFpbHMgPSByZXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcF9kYXRhLmxvZ28gPSB0aGlzLmFwcF9kZXRhaWxzLmxvZ287XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcF9kYXRhLmJ1c2luZXNzX25hbWUgPSB0aGlzLmFwcF9kZXRhaWxzLmJ1c2luZXNzX25hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcF9kYXRhLmJ1c2luZXNzX2Rlc2NyaXB0aW9uID0gdGhpcy5hcHBfZGV0YWlscy5idXNpbmVzc19kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3J5X2xpc3QgPSB0aGlzLmFwcF9kZXRhaWxzLmFwcF9wcm9kdWN0X2NhdGVnb3JpZXM7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmN1c3RvbWVyX2NhcnRfZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2F0ZWdvcnlfbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlfbGlzdFtpXVsnaXRlbXMnXSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5jYXRlZ29yeV9saXN0W2ldLnByb2R1Y3RzKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZV9rZXkgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVBcHBJbmZvKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhYWFcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybS52YWx1ZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5DcmVhdGVkQXBwU2VydmljZS51cGRhdGVBcHBJbmZvKHRoaXMuYXBwX2lkLCB0aGlzLmZvcm0udmFsdWUpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jcmVhdGVkLWFwcC9tYW5hZ2UtYXBwLycgKyB0aGlzLmFwcF9pZF0pXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFya0Zvcm1Hcm91cFRvdWNoZWQodGhpcy5mb3JtKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXREaXNjb3VudChwcmljZSwgZGlzY291bnRlZF9wcmljZSkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKCgocHJpY2UgLSBkaXNjb3VudGVkX3ByaWNlKSAqIDEwMCkgLyBwcmljZSkgKyAnJSc7XHJcbiAgICB9XHJcblxyXG4gICAgbWFya0Zvcm1Hcm91cFRvdWNoZWQoZm9ybUdyb3VwOiBGb3JtR3JvdXApIHtcclxuICAgICAgICAoPGFueT5PYmplY3QpLnZhbHVlcyhmb3JtR3JvdXAuY29udHJvbHMpLmZvckVhY2goY29udHJvbCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgICAgICAgICBpZiAoY29udHJvbC5jb250cm9scykge1xyXG4gICAgICAgICAgICAgICAgY29udHJvbC5jb250cm9scy5mb3JFYWNoKGMgPT4gdGhpcy5tYXJrRm9ybUdyb3VwVG91Y2hlZChjKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpc0ZpZWxkVmFsaWQoZmllbGQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5mb3JtLmdldChmaWVsZCkudmFsaWQgJiYgKHRoaXMuZm9ybS5nZXQoZmllbGQpLmRpcnR5IHx8IHRoaXMuZm9ybS5nZXQoZmllbGQpLnRvdWNoZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlGaWVsZENzcyhmaWVsZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgJ2lzLWludmFsaWQnOiB0aGlzLmZvcm0uZ2V0KGZpZWxkKS5pbnZhbGlkICYmICh0aGlzLmZvcm0uZ2V0KGZpZWxkKS5kaXJ0eSB8fCB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKSxcclxuICAgICAgICAgICAgJ2lzLXZhbGlkJzogdGhpcy5mb3JtLmdldChmaWVsZCkudmFsaWQgJiYgKHRoaXMuZm9ybS5nZXQoZmllbGQpLmRpcnR5IHx8IHRoaXMuZm9ybS5nZXQoZmllbGQpLnRvdWNoZWQpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG59Il19