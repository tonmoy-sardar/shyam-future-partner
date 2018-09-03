"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var app_create_component_1 = require("./app-create.component");
var business_info_component_1 = require("./business-info/business-info.component");
var owner_info_component_1 = require("./owner-info/owner-info.component");
var routes = [
    { path: "", component: app_create_component_1.AppCreateComponent },
    { path: "business-info", component: business_info_component_1.BusinessInfoComponent },
    { path: "owner-info", component: owner_info_component_1.OwnerInfoComponent },
];
var AppCreateRoutingModule = /** @class */ (function () {
    function AppCreateRoutingModule() {
    }
    AppCreateRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppCreateRoutingModule);
    return AppCreateRoutingModule;
}());
exports.AppCreateRoutingModule = AppCreateRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNyZWF0ZS5yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLWNyZWF0ZS5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSwrREFBNEQ7QUFDNUQsbUZBQWdGO0FBQ2hGLDBFQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLHlDQUFrQixFQUFFO0lBQzNDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsK0NBQXFCLEVBQUU7SUFDM0QsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSx5Q0FBa0IsRUFBRTtDQUN4RCxDQUFDO0FBTUY7SUFBQTtJQUFzQyxDQUFDO0lBQTFCLHNCQUFzQjtRQUpsQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLHNCQUFzQixDQUFJO0lBQUQsNkJBQUM7Q0FBQSxBQUF2QyxJQUF1QztBQUExQix3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgQXBwQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLWNyZWF0ZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQnVzaW5lc3NJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9idXNpbmVzcy1pbmZvL2J1c2luZXNzLWluZm8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3duZXJJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9vd25lci1pbmZvL293bmVyLWluZm8uY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEFwcENyZWF0ZUNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImJ1c2luZXNzLWluZm9cIiwgY29tcG9uZW50OiBCdXNpbmVzc0luZm9Db21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJvd25lci1pbmZvXCIsIGNvbXBvbmVudDogT3duZXJJbmZvQ29tcG9uZW50IH0sXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDcmVhdGVSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=