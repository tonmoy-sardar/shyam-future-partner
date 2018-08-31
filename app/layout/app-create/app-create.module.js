"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var app_create_routing_1 = require("./app-create.routing");
var app_create_component_1 = require("./app-create.component");
var business_info_component_1 = require("./business-info/business-info.component");
var core_module_1 = require("../../core/core.module");
var AppCreateModule = /** @class */ (function () {
    function AppCreateModule() {
    }
    AppCreateModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                app_create_routing_1.AppCreateRoutingModule,
                core_module_1.CoreModule
            ],
            declarations: [
                app_create_component_1.AppCreateComponent,
                business_info_component_1.BusinessInfoComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppCreateModule);
    return AppCreateModule;
}());
exports.AppCreateModule = AppCreateModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNyZWF0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAtY3JlYXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsMkRBQThEO0FBQzlELCtEQUE0RDtBQUM1RCxtRkFBZ0Y7QUFFaEYsc0RBQW9EO0FBZ0JwRDtJQUFBO0lBQStCLENBQUM7SUFBbkIsZUFBZTtRQWQzQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QiwyQ0FBc0I7Z0JBQ3RCLHdCQUFVO2FBQ2I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YseUNBQWtCO2dCQUNsQiwrQ0FBcUI7YUFDeEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGVBQWUsQ0FBSTtJQUFELHNCQUFDO0NBQUEsQUFBaEMsSUFBZ0M7QUFBbkIsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IEFwcENyZWF0ZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1jcmVhdGUucm91dGluZyc7XHJcbmltcG9ydCB7IEFwcENyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vYXBwLWNyZWF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdXNpbmVzc0luZm9Db21wb25lbnQgfSBmcm9tICcuL2J1c2luZXNzLWluZm8vYnVzaW5lc3MtaW5mby5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gXCIuLi8uLi9jb3JlL2NvcmUubW9kdWxlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBBcHBDcmVhdGVSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIENvcmVNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDcmVhdGVDb21wb25lbnQsXHJcbiAgICAgICAgQnVzaW5lc3NJbmZvQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENyZWF0ZU1vZHVsZSB7IH1cclxuIl19