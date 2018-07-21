"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var created_app_routing_1 = require("./created-app.routing");
var created_app_component_1 = require("./created-app.component");
var manage_app_component_1 = require("./manage-app/manage-app.component");
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
                manage_app_component_1.ManageAppComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], CreatedAppModule);
    return CreatedAppModule;
}());
exports.CreatedAppModule = CreatedAppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlZC1hcHAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlZC1hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSw2REFBZ0U7QUFDaEUsaUVBQThEO0FBQzlELDBFQUF1RTtBQUd2RSxzREFBb0Q7QUFnQnBEO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFkNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsNkNBQXVCO2dCQUN2Qix3QkFBVTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDJDQUFtQjtnQkFDbkIseUNBQWtCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBDcmVhdGVkQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vY3JlYXRlZC1hcHAucm91dGluZyc7XHJcbmltcG9ydCB7IENyZWF0ZWRBcHBDb21wb25lbnQgfSBmcm9tICcuL2NyZWF0ZWQtYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hbmFnZUFwcENvbXBvbmVudCB9IGZyb20gJy4vbWFuYWdlLWFwcC9tYW5hZ2UtYXBwLmNvbXBvbmVudCc7XHJcblxyXG5cclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gXCIuLi8uLi9jb3JlL2NvcmUubW9kdWxlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBDcmVhdGVkQXBwUm91dGluZ01vZHVsZSxcclxuICAgICAgICBDb3JlTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQ3JlYXRlZEFwcENvbXBvbmVudCxcclxuICAgICAgICBNYW5hZ2VBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlZEFwcE1vZHVsZSB7IH1cclxuIl19