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
var add_product_category_component_1 = require("./add-product-category/add-product-category.component");
var edit_product_component_1 = require("./edit-product/edit-product.component");
var add_product_component_1 = require("./add-product/add-product.component");
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
                add_product_category_component_1.AddProductCategoyComponent,
                edit_product_component_1.EditProductComponent,
                add_product_component_1.AddProductComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlZC1hcHAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlZC1hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSw2REFBZ0U7QUFDaEUsaUVBQThEO0FBQzlELDBFQUF1RTtBQUN2RSxvRUFBaUU7QUFDakUsb0VBQWtFO0FBQ2xFLDJHQUFzRztBQUN0Ryx3R0FBbUc7QUFDbkcsZ0ZBQTZFO0FBQzdFLDZFQUEwRTtBQUUxRSx1RUFBcUU7QUFDckUsb0VBQWtFO0FBQ2xFLHdEQUFzRDtBQUN0RCx5RkFBcUY7QUFDckYsd0dBQW9HO0FBQ3BHLDhEQUE0RDtBQUU1RCxzREFBb0Q7QUE0QnBEO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUExQjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDZDQUF1QjtnQkFDdkIsd0JBQVU7YUFDYjtZQUNELFlBQVksRUFBRTtnQkFDViwyQ0FBbUI7Z0JBQ25CLHlDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUNoQixzQ0FBaUI7Z0JBQ2pCLDZEQUEyQjtnQkFDM0IsMkRBQTBCO2dCQUMxQiw2Q0FBb0I7Z0JBQ3BCLDJDQUFtQjtnQkFDbkIsd0NBQWtCO2dCQUNsQixzQ0FBaUI7Z0JBQ2pCLDhCQUFhO2dCQUNiLGtEQUFzQjtnQkFDdEIsNERBQTJCO2dCQUMzQixrQ0FBZTthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgQ3JlYXRlZEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2NyZWF0ZWQtYXBwLnJvdXRpbmcnO1xyXG5pbXBvcnQgeyBDcmVhdGVkQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jcmVhdGVkLWFwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYW5hZ2VBcHBDb21wb25lbnQgfSBmcm9tICcuL21hbmFnZS1hcHAvbWFuYWdlLWFwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0QXBwQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0LWFwcC9lZGl0LWFwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9kdWN0c0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRWRpdFByb2R1Y3RDYXRlZ295Q29tcG9uZW50IH0gZnJvbSBcIi4vZWRpdC1wcm9kdWN0LWNhdGVnb3J5L2VkaXQtcHJvZHVjdC1jYXRlZ29yeS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQWRkUHJvZHVjdENhdGVnb3lDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQtcHJvZHVjdC1jYXRlZ29yeS9hZGQtcHJvZHVjdC1jYXRlZ29yeS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdFByb2R1Y3RDb21wb25lbnQgfSBmcm9tIFwiLi9lZGl0LXByb2R1Y3QvZWRpdC1wcm9kdWN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBZGRQcm9kdWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vYWRkLXByb2R1Y3QvYWRkLXByb2R1Y3QuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBDdXN0b21lcnNDb21wb25lbnQgfSBmcm9tIFwiLi9jdXN0b21lcnMvY3VzdG9tZXJzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlc0NvbXBvbmVudCB9IGZyb20gXCIuL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaGF0Q29tcG9uZW50IH0gZnJvbSBcIi4vY2hhdC9jaGF0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFZGl0T3duZXJJbmZvQ29tcG9uZW50IH0gZnJvbSBcIi4vZWRpdC1vd25lci1pbmZvL2VkaXQtb3duZXItaW5mby5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdEJ1c2luZXNzSW1hZ2VzQ29tcG9uZW50IH0gZnJvbSBcIi4vZWRpdC1idXNpbmVzcy1pbWFnZXMvZWRpdC1idXNpbmVzcy1pbWFnZXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJlcG9ydENvbXBvbmVudCB9IGZyb20gXCIuL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSBcIi4uLy4uL2NvcmUvY29yZS5tb2R1bGVcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIENyZWF0ZWRBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIENvcmVNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBDcmVhdGVkQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIE1hbmFnZUFwcENvbXBvbmVudCxcclxuICAgICAgICBFZGl0QXBwQ29tcG9uZW50LFxyXG4gICAgICAgIFByb2R1Y3RzQ29tcG9uZW50LFxyXG4gICAgICAgIEVkaXRQcm9kdWN0Q2F0ZWdveUNvbXBvbmVudCxcclxuICAgICAgICBBZGRQcm9kdWN0Q2F0ZWdveUNvbXBvbmVudCxcclxuICAgICAgICBFZGl0UHJvZHVjdENvbXBvbmVudCxcclxuICAgICAgICBBZGRQcm9kdWN0Q29tcG9uZW50LFxyXG4gICAgICAgIEN1c3RvbWVyc0NvbXBvbmVudCxcclxuICAgICAgICBNZXNzYWdlc0NvbXBvbmVudCxcclxuICAgICAgICBDaGF0Q29tcG9uZW50LFxyXG4gICAgICAgIEVkaXRPd25lckluZm9Db21wb25lbnQsXHJcbiAgICAgICAgRWRpdEJ1c2luZXNzSW1hZ2VzQ29tcG9uZW50LFxyXG4gICAgICAgIFJlcG9ydENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVkQXBwTW9kdWxlIHsgfVxyXG4iXX0=