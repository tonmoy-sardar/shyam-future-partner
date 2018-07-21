"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var created_app_component_1 = require("./created-app.component");
var manage_app_component_1 = require("./manage-app/manage-app.component");
var routes = [
    { path: "details/:id", component: created_app_component_1.CreatedAppComponent },
    { path: "manage-app/:id", component: manage_app_component_1.ManageAppComponent },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlZC1hcHAucm91dGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZWQtYXBwLnJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLGlFQUE4RDtBQUM5RCwwRUFBdUU7QUFFdkUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRTtJQUN2RCxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUseUNBQWtCLEVBQUU7Q0FDNUQsQ0FBQztBQVFGO0lBQUE7SUFBdUMsQ0FBQztJQUEzQix1QkFBdUI7UUFKbkMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyx1QkFBdUIsQ0FBSTtJQUFELDhCQUFDO0NBQUEsQUFBeEMsSUFBd0M7QUFBM0IsMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IENyZWF0ZWRBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9jcmVhdGVkLWFwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWFuYWdlQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vbWFuYWdlLWFwcC9tYW5hZ2UtYXBwLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiZGV0YWlscy86aWRcIiwgY29tcG9uZW50OiBDcmVhdGVkQXBwQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibWFuYWdlLWFwcC86aWRcIiwgY29tcG9uZW50OiBNYW5hZ2VBcHBDb21wb25lbnQgfSxcclxuXTtcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlZEFwcFJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==