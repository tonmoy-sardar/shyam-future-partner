"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var created_app_component_1 = require("./created-app.component");
var details_app_component_1 = require("./details-app/details-app.component");
var manage_app_component_1 = require("./manage-app/manage-app.component");
var edit_app_component_1 = require("./edit-app/edit-app.component");
var products_component_1 = require("./products/products.component");
var edit_product_category_component_1 = require("./edit-product-category/edit-product-category.component");
var add_product_category_component_1 = require("./add-product-category/add-product-category.component");
var add_product_component_1 = require("./add-product/add-product.component");
var edit_product_component_1 = require("./edit-product/edit-product.component");
var add_service_component_1 = require("./add-service/add-service.component");
var edit_service_component_1 = require("./edit-service/edit-service.component");
var customers_component_1 = require("./customers/customers.component");
var messages_component_1 = require("./messages/messages.component");
var chat_component_1 = require("./chat/chat.component");
var edit_owner_info_component_1 = require("./edit-owner-info/edit-owner-info.component");
var edit_business_images_component_1 = require("./edit-business-images/edit-business-images.component");
var report_component_1 = require("./report/report.component");
var order_details_component_1 = require("./order-details/order-details.component");
var routes = [
    {
        path: ':id',
        component: created_app_component_1.CreatedAppComponent,
        children: [
            { path: "details", component: details_app_component_1.DetailsAppComponent },
            { path: "manage-app", component: manage_app_component_1.ManageAppComponent },
            { path: "edit-app", component: edit_app_component_1.EditAppComponent },
            { path: "products", component: products_component_1.ProductsComponent },
            { path: "edit-product-category/:product_id", component: edit_product_category_component_1.EditProductCategoyComponent },
            { path: "add-product-category", component: add_product_category_component_1.AddProductCategoyComponent },
            { path: "edit-product/:product_id", component: edit_product_component_1.EditProductComponent },
            { path: "add-product/:cat_id", component: add_product_component_1.AddProductComponent },
            { path: "edit-service/:product_id", component: edit_service_component_1.EditServiceComponent },
            { path: "add-service/:cat_id", component: add_service_component_1.AddServiceComponent },
            { path: "customers", component: customers_component_1.CustomersComponent },
            { path: "messages", component: messages_component_1.MessagesComponent },
            { path: "chat/:user", component: chat_component_1.ChatComponent },
            { path: "edit-owner-info", component: edit_owner_info_component_1.EditOwnerInfoComponent },
            { path: "edit-business-images", component: edit_business_images_component_1.EditBusinessImagesComponent },
            { path: "report", component: report_component_1.ReportComponent },
            { path: "order-details/:order", component: order_details_component_1.OrderDetailsComponent },
        ]
    }
];
var CreatedAppRoutingModule = /** @class */ (function () {
    function CreatedAppRoutingModule() {
    }
    CreatedAppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], CreatedAppRoutingModule);
    return CreatedAppRoutingModule;
}());
exports.CreatedAppRoutingModule = CreatedAppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlZC1hcHAucm91dGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZWQtYXBwLnJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLGlFQUE4RDtBQUM5RCw2RUFBMEU7QUFDMUUsMEVBQXVFO0FBQ3ZFLG9FQUFpRTtBQUNqRSxvRUFBa0U7QUFDbEUsMkdBQXNHO0FBQ3RHLHdHQUFtRztBQUNuRyw2RUFBMEU7QUFDMUUsZ0ZBQTZFO0FBQzdFLDZFQUEwRTtBQUMxRSxnRkFBNkU7QUFFN0UsdUVBQXFFO0FBQ3JFLG9FQUFrRTtBQUNsRSx3REFBc0Q7QUFDdEQseUZBQXFGO0FBQ3JGLHdHQUFvRztBQUNwRyw4REFBNEQ7QUFDNUQsbUZBQWdGO0FBR2hGLElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0ksSUFBSSxFQUFFLEtBQUs7UUFDWCxTQUFTLEVBQUUsMkNBQW1CO1FBQzlCLFFBQVEsRUFBRTtZQUNOLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7WUFDbkQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSx5Q0FBa0IsRUFBRTtZQUNyRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHFDQUFnQixFQUFFO1lBQ2pELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7WUFDbEQsRUFBRSxJQUFJLEVBQUUsbUNBQW1DLEVBQUUsU0FBUyxFQUFFLDZEQUEyQixFQUFFO1lBQ3JGLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFLFNBQVMsRUFBRSwyREFBMEIsRUFBRTtZQUN2RSxFQUFFLElBQUksRUFBRSwwQkFBMEIsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUU7WUFDckUsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO1lBQy9ELEVBQUUsSUFBSSxFQUFFLDBCQUEwQixFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBRTtZQUNyRSxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7WUFDL0QsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRTtZQUNwRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO1lBQ2xELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtZQUNoRCxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsa0RBQXNCLEVBQUU7WUFDOUQsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsU0FBUyxFQUFFLDREQUEyQixFQUFFO1lBQ3hFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtZQUM5QyxFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRSxTQUFTLEVBQUUsK0NBQXFCLEVBQUU7U0FDckU7S0FDSjtDQUVKLENBQUM7QUFRRjtJQUFBO0lBQXVDLENBQUM7SUFBM0IsdUJBQXVCO1FBSm5DLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csdUJBQXVCLENBQUk7SUFBRCw4QkFBQztDQUFBLEFBQXhDLElBQXdDO0FBQTNCLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBDcmVhdGVkQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vY3JlYXRlZC1hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERldGFpbHNBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9kZXRhaWxzLWFwcC9kZXRhaWxzLWFwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWFuYWdlQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vbWFuYWdlLWFwcC9tYW5hZ2UtYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFZGl0QXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vZWRpdC1hcHAvZWRpdC1hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2R1Y3RzQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVkaXRQcm9kdWN0Q2F0ZWdveUNvbXBvbmVudCB9IGZyb20gXCIuL2VkaXQtcHJvZHVjdC1jYXRlZ29yeS9lZGl0LXByb2R1Y3QtY2F0ZWdvcnkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFkZFByb2R1Y3RDYXRlZ295Q29tcG9uZW50IH0gZnJvbSBcIi4vYWRkLXByb2R1Y3QtY2F0ZWdvcnkvYWRkLXByb2R1Y3QtY2F0ZWdvcnkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFkZFByb2R1Y3RDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdFByb2R1Y3RDb21wb25lbnQgfSBmcm9tIFwiLi9lZGl0LXByb2R1Y3QvZWRpdC1wcm9kdWN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBZGRTZXJ2aWNlQ29tcG9uZW50IH0gZnJvbSBcIi4vYWRkLXNlcnZpY2UvYWRkLXNlcnZpY2UuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVkaXRTZXJ2aWNlQ29tcG9uZW50IH0gZnJvbSBcIi4vZWRpdC1zZXJ2aWNlL2VkaXQtc2VydmljZS5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEN1c3RvbWVyc0NvbXBvbmVudCB9IGZyb20gXCIuL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VzQ29tcG9uZW50IH0gZnJvbSBcIi4vbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoYXRDb21wb25lbnQgfSBmcm9tIFwiLi9jaGF0L2NoYXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVkaXRPd25lckluZm9Db21wb25lbnQgfSBmcm9tIFwiLi9lZGl0LW93bmVyLWluZm8vZWRpdC1vd25lci1pbmZvLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFZGl0QnVzaW5lc3NJbWFnZXNDb21wb25lbnQgfSBmcm9tIFwiLi9lZGl0LWJ1c2luZXNzLWltYWdlcy9lZGl0LWJ1c2luZXNzLWltYWdlcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmVwb3J0Q29tcG9uZW50IH0gZnJvbSBcIi4vcmVwb3J0L3JlcG9ydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgT3JkZXJEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLmNvbXBvbmVudFwiO1xyXG5cclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICc6aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogQ3JlYXRlZEFwcENvbXBvbmVudCxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7IHBhdGg6IFwiZGV0YWlsc1wiLCBjb21wb25lbnQ6IERldGFpbHNBcHBDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiBcIm1hbmFnZS1hcHBcIiwgY29tcG9uZW50OiBNYW5hZ2VBcHBDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiBcImVkaXQtYXBwXCIsIGNvbXBvbmVudDogRWRpdEFwcENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6IFwicHJvZHVjdHNcIiwgY29tcG9uZW50OiBQcm9kdWN0c0NvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6IFwiZWRpdC1wcm9kdWN0LWNhdGVnb3J5Lzpwcm9kdWN0X2lkXCIsIGNvbXBvbmVudDogRWRpdFByb2R1Y3RDYXRlZ295Q29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogXCJhZGQtcHJvZHVjdC1jYXRlZ29yeVwiLCBjb21wb25lbnQ6IEFkZFByb2R1Y3RDYXRlZ295Q29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogXCJlZGl0LXByb2R1Y3QvOnByb2R1Y3RfaWRcIiwgY29tcG9uZW50OiBFZGl0UHJvZHVjdENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6IFwiYWRkLXByb2R1Y3QvOmNhdF9pZFwiLCBjb21wb25lbnQ6IEFkZFByb2R1Y3RDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiBcImVkaXQtc2VydmljZS86cHJvZHVjdF9pZFwiLCBjb21wb25lbnQ6IEVkaXRTZXJ2aWNlQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogXCJhZGQtc2VydmljZS86Y2F0X2lkXCIsIGNvbXBvbmVudDogQWRkU2VydmljZUNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6IFwiY3VzdG9tZXJzXCIsIGNvbXBvbmVudDogQ3VzdG9tZXJzQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogXCJtZXNzYWdlc1wiLCBjb21wb25lbnQ6IE1lc3NhZ2VzQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogXCJjaGF0Lzp1c2VyXCIsIGNvbXBvbmVudDogQ2hhdENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6IFwiZWRpdC1vd25lci1pbmZvXCIsIGNvbXBvbmVudDogRWRpdE93bmVySW5mb0NvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6IFwiZWRpdC1idXNpbmVzcy1pbWFnZXNcIiwgY29tcG9uZW50OiBFZGl0QnVzaW5lc3NJbWFnZXNDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiBcInJlcG9ydFwiLCBjb21wb25lbnQ6IFJlcG9ydENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6IFwib3JkZXItZGV0YWlscy86b3JkZXJcIiwgY29tcG9uZW50OiBPcmRlckRldGFpbHNDb21wb25lbnQgfSxcclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG5dO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVkQXBwUm91dGluZ01vZHVsZSB7IH1cclxuIl19