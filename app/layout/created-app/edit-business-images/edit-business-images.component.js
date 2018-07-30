"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var router_2 = require("nativescript-angular/router");
var EditBusinessImagesComponent = /** @class */ (function () {
    function EditBusinessImagesComponent(route, formBuilder, router) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.router = router;
        this.processing = false;
    }
    EditBusinessImagesComponent.prototype.ngOnInit = function () {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
    };
    EditBusinessImagesComponent = __decorate([
        core_1.Component({
            selector: 'edit-business-images',
            moduleId: module.id,
            templateUrl: "edit-business-images.component.html",
            styleUrls: ["edit-business-images.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            forms_1.FormBuilder,
            router_2.RouterExtensions])
    ], EditBusinessImagesComponent);
    return EditBusinessImagesComponent;
}());
exports.EditBusinessImagesComponent = EditBusinessImagesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1idXNpbmVzcy1pbWFnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWRpdC1idXNpbmVzcy1pbWFnZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDBDQUFpRDtBQUNqRCx3Q0FBb0U7QUFDcEUsc0RBQStEO0FBUS9EO0lBS0kscUNBQ1ksS0FBcUIsRUFDckIsV0FBd0IsRUFDeEIsTUFBd0I7UUFGeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFOcEMsZUFBVSxHQUFHLEtBQUssQ0FBQztJQU9mLENBQUM7SUFFTCw4Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBZFEsMkJBQTJCO1FBUHZDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUscUNBQXFDO1lBQ2xELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO1NBQ3BELENBQUM7eUNBUXFCLHVCQUFjO1lBQ1IsbUJBQVc7WUFDaEIseUJBQWdCO09BUjNCLDJCQUEyQixDQWlCdkM7SUFBRCxrQ0FBQztDQUFBLEFBakJELElBaUJDO0FBakJZLGtFQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdlZGl0LWJ1c2luZXNzLWltYWdlcycsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IGBlZGl0LWJ1c2luZXNzLWltYWdlcy5jb21wb25lbnQuaHRtbGAsXHJcbiAgICBzdHlsZVVybHM6IFtgZWRpdC1idXNpbmVzcy1pbWFnZXMuY29tcG9uZW50LmNzc2BdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdEJ1c2luZXNzSW1hZ2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGZvcm06IEZvcm1Hcm91cDtcclxuICAgIHByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgIGFwcF9pZDogc3RyaW5nO1xyXG4gICAgdmlzaWJsZV9rZXk6IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5hcHBfaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl0pO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=