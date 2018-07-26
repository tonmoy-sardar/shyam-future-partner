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
                chat_component_1.ChatComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], CreatedAppModule);
    return CreatedAppModule;
}());
exports.CreatedAppModule = CreatedAppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlZC1hcHAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlZC1hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSw2REFBZ0U7QUFDaEUsaUVBQThEO0FBQzlELDBFQUF1RTtBQUN2RSxvRUFBaUU7QUFDakUsb0VBQWtFO0FBQ2xFLDJHQUFzRztBQUN0RyxnRkFBNkU7QUFFN0UsdUVBQXFFO0FBQ3JFLG9FQUFrRTtBQUNsRSx3REFBc0Q7QUFFdEQsc0RBQW9EO0FBdUJwRDtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBckI1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qiw2Q0FBdUI7Z0JBQ3ZCLHdCQUFVO2FBQ2I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsMkNBQW1CO2dCQUNuQix5Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsc0NBQWlCO2dCQUNqQiw2REFBMkI7Z0JBQzNCLDZDQUFvQjtnQkFDcEIsd0NBQWtCO2dCQUNsQixzQ0FBaUI7Z0JBQ2pCLDhCQUFhO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBDcmVhdGVkQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vY3JlYXRlZC1hcHAucm91dGluZyc7XHJcbmltcG9ydCB7IENyZWF0ZWRBcHBDb21wb25lbnQgfSBmcm9tICcuL2NyZWF0ZWQtYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hbmFnZUFwcENvbXBvbmVudCB9IGZyb20gJy4vbWFuYWdlLWFwcC9tYW5hZ2UtYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVkaXRBcHBDb21wb25lbnQgfSBmcm9tICcuL2VkaXQtYXBwL2VkaXQtYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2R1Y3RzQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0UHJvZHVjdENhdGVnb3lDb21wb25lbnQgfSBmcm9tIFwiLi9lZGl0LXByb2R1Y3QtY2F0ZWdvcnkvZWRpdC1wcm9kdWN0LWNhdGVnb3J5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZHVjdENvbXBvbmVudCB9IGZyb20gXCIuL2VkaXQtcHJvZHVjdC9lZGl0LXByb2R1Y3QuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBDdXN0b21lcnNDb21wb25lbnQgfSBmcm9tIFwiLi9jdXN0b21lcnMvY3VzdG9tZXJzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlc0NvbXBvbmVudCB9IGZyb20gXCIuL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaGF0Q29tcG9uZW50IH0gZnJvbSBcIi4vY2hhdC9jaGF0LmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gXCIuLi8uLi9jb3JlL2NvcmUubW9kdWxlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBDcmVhdGVkQXBwUm91dGluZ01vZHVsZSxcclxuICAgICAgICBDb3JlTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQ3JlYXRlZEFwcENvbXBvbmVudCxcclxuICAgICAgICBNYW5hZ2VBcHBDb21wb25lbnQsXHJcbiAgICAgICAgRWRpdEFwcENvbXBvbmVudCxcclxuICAgICAgICBQcm9kdWN0c0NvbXBvbmVudCxcclxuICAgICAgICBFZGl0UHJvZHVjdENhdGVnb3lDb21wb25lbnQsXHJcbiAgICAgICAgRWRpdFByb2R1Y3RDb21wb25lbnQsXHJcbiAgICAgICAgQ3VzdG9tZXJzQ29tcG9uZW50LFxyXG4gICAgICAgIE1lc3NhZ2VzQ29tcG9uZW50LFxyXG4gICAgICAgIENoYXRDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlZEFwcE1vZHVsZSB7IH1cclxuIl19