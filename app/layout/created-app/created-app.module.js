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
var edit_service_component_1 = require("./edit-service/edit-service.component");
var add_service_component_1 = require("./add-service/add-service.component");
var customers_component_1 = require("./customers/customers.component");
var messages_component_1 = require("./messages/messages.component");
var chat_component_1 = require("./chat/chat.component");
var edit_owner_info_component_1 = require("./edit-owner-info/edit-owner-info.component");
var edit_business_images_component_1 = require("./edit-business-images/edit-business-images.component");
var report_component_1 = require("./report/report.component");
var order_details_component_1 = require("./order-details/order-details.component");
var edit_social_media_component_1 = require("./edit-social-media/edit-social-media.component");
var payment_component_1 = require("./payment/payment.component");
var payment_success_component_1 = require("./payment-success/payment-success.component");
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
                edit_service_component_1.EditServiceComponent,
                add_service_component_1.AddServiceComponent,
                customers_component_1.CustomersComponent,
                messages_component_1.MessagesComponent,
                chat_component_1.ChatComponent,
                edit_owner_info_component_1.EditOwnerInfoComponent,
                edit_business_images_component_1.EditBusinessImagesComponent,
                report_component_1.ReportComponent,
                order_details_component_1.OrderDetailsComponent,
                edit_social_media_component_1.EditSocialMediaComponent,
                payment_component_1.PaymentComponent,
                payment_success_component_1.PaymentSuccessComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], CreatedAppModule);
    return CreatedAppModule;
}());
exports.CreatedAppModule = CreatedAppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlZC1hcHAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlZC1hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSw2REFBZ0U7QUFDaEUsaUVBQThEO0FBQzlELDZFQUEwRTtBQUMxRSwwRUFBdUU7QUFDdkUsb0VBQWlFO0FBQ2pFLG9FQUFrRTtBQUNsRSwyR0FBc0c7QUFDdEcsd0dBQW1HO0FBQ25HLGdGQUE2RTtBQUM3RSw2RUFBMEU7QUFDMUUsZ0ZBQTZFO0FBQzdFLDZFQUEwRTtBQUUxRSx1RUFBcUU7QUFDckUsb0VBQWtFO0FBQ2xFLHdEQUFzRDtBQUN0RCx5RkFBcUY7QUFDckYsd0dBQW9HO0FBQ3BHLDhEQUE0RDtBQUM1RCxtRkFBZ0Y7QUFDaEYsK0ZBQTJGO0FBQzNGLGlFQUErRDtBQUMvRCx5RkFBc0Y7QUFFdEYsc0RBQW9EO0FBbUNwRDtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBakM1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qiw2Q0FBdUI7Z0JBQ3ZCLHdCQUFVO2FBQ2I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsMkNBQW1CO2dCQUNuQiwyQ0FBbUI7Z0JBQ25CLHlDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUNoQixzQ0FBaUI7Z0JBQ2pCLDZEQUEyQjtnQkFDM0IsMkRBQTBCO2dCQUMxQiw2Q0FBb0I7Z0JBQ3BCLDJDQUFtQjtnQkFDbkIsNkNBQW9CO2dCQUNwQiwyQ0FBbUI7Z0JBQ25CLHdDQUFrQjtnQkFDbEIsc0NBQWlCO2dCQUNqQiw4QkFBYTtnQkFDYixrREFBc0I7Z0JBQ3RCLDREQUEyQjtnQkFDM0Isa0NBQWU7Z0JBQ2YsK0NBQXFCO2dCQUNyQixzREFBd0I7Z0JBQ3hCLG9DQUFnQjtnQkFDaEIsbURBQXVCO2FBQzFCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBDcmVhdGVkQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vY3JlYXRlZC1hcHAucm91dGluZyc7XHJcbmltcG9ydCB7IENyZWF0ZWRBcHBDb21wb25lbnQgfSBmcm9tICcuL2NyZWF0ZWQtYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERldGFpbHNBcHBDb21wb25lbnQgfSBmcm9tICcuL2RldGFpbHMtYXBwL2RldGFpbHMtYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hbmFnZUFwcENvbXBvbmVudCB9IGZyb20gJy4vbWFuYWdlLWFwcC9tYW5hZ2UtYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVkaXRBcHBDb21wb25lbnQgfSBmcm9tICcuL2VkaXQtYXBwL2VkaXQtYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2R1Y3RzQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0UHJvZHVjdENhdGVnb3lDb21wb25lbnQgfSBmcm9tIFwiLi9lZGl0LXByb2R1Y3QtY2F0ZWdvcnkvZWRpdC1wcm9kdWN0LWNhdGVnb3J5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBZGRQcm9kdWN0Q2F0ZWdveUNvbXBvbmVudCB9IGZyb20gXCIuL2FkZC1wcm9kdWN0LWNhdGVnb3J5L2FkZC1wcm9kdWN0LWNhdGVnb3J5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZHVjdENvbXBvbmVudCB9IGZyb20gXCIuL2VkaXQtcHJvZHVjdC9lZGl0LXByb2R1Y3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFkZFByb2R1Y3RDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdFNlcnZpY2VDb21wb25lbnQgfSBmcm9tIFwiLi9lZGl0LXNlcnZpY2UvZWRpdC1zZXJ2aWNlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBZGRTZXJ2aWNlQ29tcG9uZW50IH0gZnJvbSBcIi4vYWRkLXNlcnZpY2UvYWRkLXNlcnZpY2UuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBDdXN0b21lcnNDb21wb25lbnQgfSBmcm9tIFwiLi9jdXN0b21lcnMvY3VzdG9tZXJzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlc0NvbXBvbmVudCB9IGZyb20gXCIuL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaGF0Q29tcG9uZW50IH0gZnJvbSBcIi4vY2hhdC9jaGF0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFZGl0T3duZXJJbmZvQ29tcG9uZW50IH0gZnJvbSBcIi4vZWRpdC1vd25lci1pbmZvL2VkaXQtb3duZXItaW5mby5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdEJ1c2luZXNzSW1hZ2VzQ29tcG9uZW50IH0gZnJvbSBcIi4vZWRpdC1idXNpbmVzcy1pbWFnZXMvZWRpdC1idXNpbmVzcy1pbWFnZXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJlcG9ydENvbXBvbmVudCB9IGZyb20gXCIuL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE9yZGVyRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gXCIuL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdFNvY2lhbE1lZGlhQ29tcG9uZW50IH0gZnJvbSBcIi4vZWRpdC1zb2NpYWwtbWVkaWEvZWRpdC1zb2NpYWwtbWVkaWEuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBheW1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9wYXltZW50L3BheW1lbnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBheW1lbnRTdWNjZXNzQ29tcG9uZW50IH0gZnJvbSBcIi4vcGF5bWVudC1zdWNjZXNzL3BheW1lbnQtc3VjY2Vzcy5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tIFwiLi4vLi4vY29yZS9jb3JlLm1vZHVsZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgQ3JlYXRlZEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgQ29yZU1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIENyZWF0ZWRBcHBDb21wb25lbnQsXHJcbiAgICAgICAgRGV0YWlsc0FwcENvbXBvbmVudCxcclxuICAgICAgICBNYW5hZ2VBcHBDb21wb25lbnQsXHJcbiAgICAgICAgRWRpdEFwcENvbXBvbmVudCxcclxuICAgICAgICBQcm9kdWN0c0NvbXBvbmVudCxcclxuICAgICAgICBFZGl0UHJvZHVjdENhdGVnb3lDb21wb25lbnQsXHJcbiAgICAgICAgQWRkUHJvZHVjdENhdGVnb3lDb21wb25lbnQsXHJcbiAgICAgICAgRWRpdFByb2R1Y3RDb21wb25lbnQsXHJcbiAgICAgICAgQWRkUHJvZHVjdENvbXBvbmVudCxcclxuICAgICAgICBFZGl0U2VydmljZUNvbXBvbmVudCxcclxuICAgICAgICBBZGRTZXJ2aWNlQ29tcG9uZW50LFxyXG4gICAgICAgIEN1c3RvbWVyc0NvbXBvbmVudCxcclxuICAgICAgICBNZXNzYWdlc0NvbXBvbmVudCxcclxuICAgICAgICBDaGF0Q29tcG9uZW50LFxyXG4gICAgICAgIEVkaXRPd25lckluZm9Db21wb25lbnQsXHJcbiAgICAgICAgRWRpdEJ1c2luZXNzSW1hZ2VzQ29tcG9uZW50LFxyXG4gICAgICAgIFJlcG9ydENvbXBvbmVudCxcclxuICAgICAgICBPcmRlckRldGFpbHNDb21wb25lbnQsXHJcbiAgICAgICAgRWRpdFNvY2lhbE1lZGlhQ29tcG9uZW50LFxyXG4gICAgICAgIFBheW1lbnRDb21wb25lbnQsXHJcbiAgICAgICAgUGF5bWVudFN1Y2Nlc3NDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlZEFwcE1vZHVsZSB7IH1cclxuIl19