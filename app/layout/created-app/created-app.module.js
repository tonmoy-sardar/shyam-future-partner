"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var created_app_routing_1 = require("./created-app.routing");
var created_app_component_1 = require("./created-app.component");
var manage_app_component_1 = require("./manage-app/manage-app.component");
var edit_app_component_1 = require("./edit-app/edit-app.component");
var products_component_1 = require("./products/products.component");
var edit_product_category_component_1 = require("./edit-product-category/edit-product-category.component");
var edit_product_component_1 = require("./edit-product/edit-product.component");
var customers_component_1 = require("./customers/customers.component");
var messages_component_1 = require("./messages/messages.component");
var core_module_1 = require("../../core/core.module");
var CreatedAppModule = /** @class */ (function () {
    function CreatedAppModule() {
    }
    CreatedAppModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                created_app_routing_1.CreatedAppRoutingModule,
                core_module_1.CoreModule
            ],
            declarations: [
                created_app_component_1.CreatedAppComponent,
                manage_app_component_1.ManageAppComponent,
                edit_app_component_1.EditAppComponent,
                products_component_1.ProductsComponent,
                edit_product_category_component_1.EditProductCategoyComponent,
                edit_product_component_1.EditProductComponent,
                customers_component_1.CustomersComponent,
                messages_component_1.MessagesComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], CreatedAppModule);
    return CreatedAppModule;
}());
exports.CreatedAppModule = CreatedAppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlZC1hcHAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlZC1hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSw2REFBZ0U7QUFDaEUsaUVBQThEO0FBQzlELDBFQUF1RTtBQUN2RSxvRUFBaUU7QUFDakUsb0VBQWtFO0FBQ2xFLDJHQUFzRztBQUN0RyxnRkFBNkU7QUFFN0UsdUVBQXFFO0FBQ3JFLG9FQUFrRTtBQUVsRSxzREFBb0Q7QUFzQnBEO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFwQjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDZDQUF1QjtnQkFDdkIsd0JBQVU7YUFDYjtZQUNELFlBQVksRUFBRTtnQkFDViwyQ0FBbUI7Z0JBQ25CLHlDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUNoQixzQ0FBaUI7Z0JBQ2pCLDZEQUEyQjtnQkFDM0IsNkNBQW9CO2dCQUNwQix3Q0FBa0I7Z0JBQ2xCLHNDQUFpQjthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgQ3JlYXRlZEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2NyZWF0ZWQtYXBwLnJvdXRpbmcnO1xyXG5pbXBvcnQgeyBDcmVhdGVkQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jcmVhdGVkLWFwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYW5hZ2VBcHBDb21wb25lbnQgfSBmcm9tICcuL21hbmFnZS1hcHAvbWFuYWdlLWFwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0QXBwQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0LWFwcC9lZGl0LWFwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9kdWN0c0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRWRpdFByb2R1Y3RDYXRlZ295Q29tcG9uZW50IH0gZnJvbSBcIi4vZWRpdC1wcm9kdWN0LWNhdGVnb3J5L2VkaXQtcHJvZHVjdC1jYXRlZ29yeS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdFByb2R1Y3RDb21wb25lbnQgfSBmcm9tIFwiLi9lZGl0LXByb2R1Y3QvZWRpdC1wcm9kdWN0LmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgQ3VzdG9tZXJzQ29tcG9uZW50IH0gZnJvbSBcIi4vY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWVzc2FnZXNDb21wb25lbnQgfSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tIFwiLi4vLi4vY29yZS9jb3JlLm1vZHVsZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgQ3JlYXRlZEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgQ29yZU1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIENyZWF0ZWRBcHBDb21wb25lbnQsXHJcbiAgICAgICAgTWFuYWdlQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIEVkaXRBcHBDb21wb25lbnQsXHJcbiAgICAgICAgUHJvZHVjdHNDb21wb25lbnQsXHJcbiAgICAgICAgRWRpdFByb2R1Y3RDYXRlZ295Q29tcG9uZW50LFxyXG4gICAgICAgIEVkaXRQcm9kdWN0Q29tcG9uZW50LFxyXG4gICAgICAgIEN1c3RvbWVyc0NvbXBvbmVudCxcclxuICAgICAgICBNZXNzYWdlc0NvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVkQXBwTW9kdWxlIHsgfVxyXG4iXX0=