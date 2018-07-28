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
var chat_component_1 = require("./chat/chat.component");
var edit_owner_info_component_1 = require("./edit-owner-info/edit-owner-info.component");
var edit_business_images_component_1 = require("./edit-business-images/edit-business-images.component");
var report_component_1 = require("./report/report.component");
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
                messages_component_1.MessagesComponent,
                chat_component_1.ChatComponent,
                edit_owner_info_component_1.EditOwnerInfoComponent,
                edit_business_images_component_1.EditBusinessImagesComponent,
                report_component_1.ReportComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], CreatedAppModule);
    return CreatedAppModule;
}());
exports.CreatedAppModule = CreatedAppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlZC1hcHAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlZC1hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSw2REFBZ0U7QUFDaEUsaUVBQThEO0FBQzlELDBFQUF1RTtBQUN2RSxvRUFBaUU7QUFDakUsb0VBQWtFO0FBQ2xFLDJHQUFzRztBQUN0RyxnRkFBNkU7QUFFN0UsdUVBQXFFO0FBQ3JFLG9FQUFrRTtBQUNsRSx3REFBc0Q7QUFDdEQseUZBQXFGO0FBQ3JGLHdHQUFvRztBQUNwRyw4REFBNEQ7QUFFNUQsc0RBQW9EO0FBMEJwRDtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBeEI1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qiw2Q0FBdUI7Z0JBQ3ZCLHdCQUFVO2FBQ2I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsMkNBQW1CO2dCQUNuQix5Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsc0NBQWlCO2dCQUNqQiw2REFBMkI7Z0JBQzNCLDZDQUFvQjtnQkFDcEIsd0NBQWtCO2dCQUNsQixzQ0FBaUI7Z0JBQ2pCLDhCQUFhO2dCQUNiLGtEQUFzQjtnQkFDdEIsNERBQTJCO2dCQUMzQixrQ0FBZTthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgQ3JlYXRlZEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2NyZWF0ZWQtYXBwLnJvdXRpbmcnO1xyXG5pbXBvcnQgeyBDcmVhdGVkQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jcmVhdGVkLWFwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYW5hZ2VBcHBDb21wb25lbnQgfSBmcm9tICcuL21hbmFnZS1hcHAvbWFuYWdlLWFwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0QXBwQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0LWFwcC9lZGl0LWFwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9kdWN0c0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRWRpdFByb2R1Y3RDYXRlZ295Q29tcG9uZW50IH0gZnJvbSBcIi4vZWRpdC1wcm9kdWN0LWNhdGVnb3J5L2VkaXQtcHJvZHVjdC1jYXRlZ29yeS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdFByb2R1Y3RDb21wb25lbnQgfSBmcm9tIFwiLi9lZGl0LXByb2R1Y3QvZWRpdC1wcm9kdWN0LmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgQ3VzdG9tZXJzQ29tcG9uZW50IH0gZnJvbSBcIi4vY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWVzc2FnZXNDb21wb25lbnQgfSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2hhdENvbXBvbmVudCB9IGZyb20gXCIuL2NoYXQvY2hhdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdE93bmVySW5mb0NvbXBvbmVudCB9IGZyb20gXCIuL2VkaXQtb3duZXItaW5mby9lZGl0LW93bmVyLWluZm8uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVkaXRCdXNpbmVzc0ltYWdlc0NvbXBvbmVudCB9IGZyb20gXCIuL2VkaXQtYnVzaW5lc3MtaW1hZ2VzL2VkaXQtYnVzaW5lc3MtaW1hZ2VzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSZXBvcnRDb21wb25lbnQgfSBmcm9tIFwiLi9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gXCIuLi8uLi9jb3JlL2NvcmUubW9kdWxlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBDcmVhdGVkQXBwUm91dGluZ01vZHVsZSxcclxuICAgICAgICBDb3JlTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQ3JlYXRlZEFwcENvbXBvbmVudCxcclxuICAgICAgICBNYW5hZ2VBcHBDb21wb25lbnQsXHJcbiAgICAgICAgRWRpdEFwcENvbXBvbmVudCxcclxuICAgICAgICBQcm9kdWN0c0NvbXBvbmVudCxcclxuICAgICAgICBFZGl0UHJvZHVjdENhdGVnb3lDb21wb25lbnQsXHJcbiAgICAgICAgRWRpdFByb2R1Y3RDb21wb25lbnQsXHJcbiAgICAgICAgQ3VzdG9tZXJzQ29tcG9uZW50LFxyXG4gICAgICAgIE1lc3NhZ2VzQ29tcG9uZW50LFxyXG4gICAgICAgIENoYXRDb21wb25lbnQsXHJcbiAgICAgICAgRWRpdE93bmVySW5mb0NvbXBvbmVudCxcclxuICAgICAgICBFZGl0QnVzaW5lc3NJbWFnZXNDb21wb25lbnQsXHJcbiAgICAgICAgUmVwb3J0Q29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENyZWF0ZWRBcHBNb2R1bGUgeyB9XHJcbiJdfQ==