"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var created_app_routing_1 = require("./created-app.routing");
var created_app_component_1 = require("./created-app.component");
var details_app_component_1 = require("./details-app/details-app.component");
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
var order_details_component_1 = require("./order-details/order-details.component");
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
                details_app_component_1.DetailsAppComponent,
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
                report_component_1.ReportComponent,
                order_details_component_1.OrderDetailsComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], CreatedAppModule);
    return CreatedAppModule;
}());
exports.CreatedAppModule = CreatedAppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlZC1hcHAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlZC1hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSw2REFBZ0U7QUFDaEUsaUVBQThEO0FBQzlELDZFQUEwRTtBQUMxRSwwRUFBdUU7QUFDdkUsb0VBQWlFO0FBQ2pFLG9FQUFrRTtBQUNsRSwyR0FBc0c7QUFDdEcsd0dBQW1HO0FBQ25HLGdGQUE2RTtBQUM3RSw2RUFBMEU7QUFFMUUsdUVBQXFFO0FBQ3JFLG9FQUFrRTtBQUNsRSx3REFBc0Q7QUFDdEQseUZBQXFGO0FBQ3JGLHdHQUFvRztBQUNwRyw4REFBNEQ7QUFDNUQsbUZBQWdGO0FBRWhGLHNEQUFvRDtBQThCcEQ7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQTVCNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsNkNBQXVCO2dCQUN2Qix3QkFBVTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDJDQUFtQjtnQkFDbkIsMkNBQW1CO2dCQUNuQix5Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsc0NBQWlCO2dCQUNqQiw2REFBMkI7Z0JBQzNCLDJEQUEwQjtnQkFDMUIsNkNBQW9CO2dCQUNwQiwyQ0FBbUI7Z0JBQ25CLHdDQUFrQjtnQkFDbEIsc0NBQWlCO2dCQUNqQiw4QkFBYTtnQkFDYixrREFBc0I7Z0JBQ3RCLDREQUEyQjtnQkFDM0Isa0NBQWU7Z0JBQ2YsK0NBQXFCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBDcmVhdGVkQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vY3JlYXRlZC1hcHAucm91dGluZyc7XHJcbmltcG9ydCB7IENyZWF0ZWRBcHBDb21wb25lbnQgfSBmcm9tICcuL2NyZWF0ZWQtYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERldGFpbHNBcHBDb21wb25lbnQgfSBmcm9tICcuL2RldGFpbHMtYXBwL2RldGFpbHMtYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hbmFnZUFwcENvbXBvbmVudCB9IGZyb20gJy4vbWFuYWdlLWFwcC9tYW5hZ2UtYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVkaXRBcHBDb21wb25lbnQgfSBmcm9tICcuL2VkaXQtYXBwL2VkaXQtYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2R1Y3RzQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0UHJvZHVjdENhdGVnb3lDb21wb25lbnQgfSBmcm9tIFwiLi9lZGl0LXByb2R1Y3QtY2F0ZWdvcnkvZWRpdC1wcm9kdWN0LWNhdGVnb3J5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBZGRQcm9kdWN0Q2F0ZWdveUNvbXBvbmVudCB9IGZyb20gXCIuL2FkZC1wcm9kdWN0LWNhdGVnb3J5L2FkZC1wcm9kdWN0LWNhdGVnb3J5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZHVjdENvbXBvbmVudCB9IGZyb20gXCIuL2VkaXQtcHJvZHVjdC9lZGl0LXByb2R1Y3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFkZFByb2R1Y3RDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEN1c3RvbWVyc0NvbXBvbmVudCB9IGZyb20gXCIuL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VzQ29tcG9uZW50IH0gZnJvbSBcIi4vbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoYXRDb21wb25lbnQgfSBmcm9tIFwiLi9jaGF0L2NoYXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVkaXRPd25lckluZm9Db21wb25lbnQgfSBmcm9tIFwiLi9lZGl0LW93bmVyLWluZm8vZWRpdC1vd25lci1pbmZvLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFZGl0QnVzaW5lc3NJbWFnZXNDb21wb25lbnQgfSBmcm9tIFwiLi9lZGl0LWJ1c2luZXNzLWltYWdlcy9lZGl0LWJ1c2luZXNzLWltYWdlcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmVwb3J0Q29tcG9uZW50IH0gZnJvbSBcIi4vcmVwb3J0L3JlcG9ydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgT3JkZXJEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gXCIuLi8uLi9jb3JlL2NvcmUubW9kdWxlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBDcmVhdGVkQXBwUm91dGluZ01vZHVsZSxcclxuICAgICAgICBDb3JlTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQ3JlYXRlZEFwcENvbXBvbmVudCxcclxuICAgICAgICBEZXRhaWxzQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIE1hbmFnZUFwcENvbXBvbmVudCxcclxuICAgICAgICBFZGl0QXBwQ29tcG9uZW50LFxyXG4gICAgICAgIFByb2R1Y3RzQ29tcG9uZW50LFxyXG4gICAgICAgIEVkaXRQcm9kdWN0Q2F0ZWdveUNvbXBvbmVudCxcclxuICAgICAgICBBZGRQcm9kdWN0Q2F0ZWdveUNvbXBvbmVudCxcclxuICAgICAgICBFZGl0UHJvZHVjdENvbXBvbmVudCxcclxuICAgICAgICBBZGRQcm9kdWN0Q29tcG9uZW50LFxyXG4gICAgICAgIEN1c3RvbWVyc0NvbXBvbmVudCxcclxuICAgICAgICBNZXNzYWdlc0NvbXBvbmVudCxcclxuICAgICAgICBDaGF0Q29tcG9uZW50LFxyXG4gICAgICAgIEVkaXRPd25lckluZm9Db21wb25lbnQsXHJcbiAgICAgICAgRWRpdEJ1c2luZXNzSW1hZ2VzQ29tcG9uZW50LFxyXG4gICAgICAgIFJlcG9ydENvbXBvbmVudCxcclxuICAgICAgICBPcmRlckRldGFpbHNDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlZEFwcE1vZHVsZSB7IH1cclxuIl19