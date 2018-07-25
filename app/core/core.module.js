"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
var forms_2 = require("@angular/forms");
var http_client_1 = require("nativescript-angular/http-client");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
// import { DropDownModule } from "nativescript-drop-down/angular";
var angular_1 = require("nativescript-accordion/angular");
// directive
var input_directive_1 = require("./directive/input.directive");
var carousel_directive_1 = require("./directive/carousel.directive");
// guard
var auth_guard_1 = require("./guard/auth.guard");
// services
var login_service_1 = require("./services/login.service");
var explore_service_1 = require("./services/explore.service");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var created_app_service_1 = require("./services/created-app.service");
// component
var action_bar_component_1 = require("./component/action-bar/action-bar.component");
var menu_bar_component_1 = require("./component/menu-bar/menu-bar.component");
var login_modal_component_1 = require("./component/login-modal/login-modal.component");
var signup_modal_component_1 = require("./component/signup-modal/signup-modal.component");
// import { LocationModalComponent } from './component/location-modal/location-modal.component';
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [
                auth_guard_1.AuthGuard,
                login_service_1.LoginService,
                explore_service_1.ExploreService,
                modal_dialog_1.ModalDialogService,
                created_app_service_1.CreatedAppService
            ]
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                router_1.NativeScriptRouterModule,
                forms_1.NativeScriptFormsModule,
                forms_2.ReactiveFormsModule,
                angular_1.AccordionModule,
                http_client_1.NativeScriptHttpClientModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': './css/font-awesome.min.css'
                }),
            ],
            declarations: [
                input_directive_1.MinLengthDirective,
                input_directive_1.MaxLengthDirective,
                input_directive_1.IsEmailDirective,
                action_bar_component_1.ActionBarComponent,
                menu_bar_component_1.MenuBarComponent,
                login_modal_component_1.LoginModalComponent,
                signup_modal_component_1.SignUpModalComponent,
                carousel_directive_1.CarouselDirective
            ],
            exports: [
                nativescript_ngx_fonticon_1.TNSFontIconModule,
                input_directive_1.MinLengthDirective,
                input_directive_1.MaxLengthDirective,
                input_directive_1.IsEmailDirective,
                angular_1.AccordionModule,
                action_bar_component_1.ActionBarComponent,
                forms_1.NativeScriptFormsModule,
                forms_2.ReactiveFormsModule,
                menu_bar_component_1.MenuBarComponent,
                carousel_directive_1.CarouselDirective
            ],
            entryComponents: [
                login_modal_component_1.LoginModalComponent,
                signup_modal_component_1.SignUpModalComponent,
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUNoRixzREFBdUU7QUFDdkUsc0RBQXVFO0FBQ3ZFLG9EQUFxRTtBQUNyRSx3Q0FBcUQ7QUFDckQsZ0VBQWdGO0FBQ2hGLHVFQUE4RDtBQUM5RCxtRUFBbUU7QUFDbkUsMERBQWlFO0FBQ2pFLFlBQVk7QUFDWiwrREFBdUc7QUFDdkcscUVBQW1FO0FBQ25FLFFBQVE7QUFDUixpREFBK0M7QUFFL0MsV0FBVztBQUNYLDBEQUF3RDtBQUN4RCw4REFBNEQ7QUFDNUQsa0VBQXVFO0FBQ3ZFLHNFQUFtRTtBQUNuRSxZQUFZO0FBQ1osb0ZBQWlGO0FBQ2pGLDhFQUEyRTtBQUMzRSx1RkFBb0Y7QUFDcEYsMEZBQXVGO0FBQ3ZGLGdHQUFnRztBQStDaEc7SUFBQTtJQWFBLENBQUM7bUJBYlksVUFBVTtJQUNaLGtCQUFPLEdBQWQ7UUFDSSxNQUFNLENBQUM7WUFDSCxRQUFRLEVBQUUsWUFBVTtZQUNwQixTQUFTLEVBQUU7Z0JBQ1Asc0JBQVM7Z0JBQ1QsNEJBQVk7Z0JBQ1osZ0NBQWM7Z0JBQ2QsaUNBQWtCO2dCQUNsQix1Q0FBaUI7YUFDcEI7U0FDSixDQUFDO0lBQ04sQ0FBQztJQVpRLFVBQVU7UUE1Q3RCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLGlDQUF3QjtnQkFDeEIsK0JBQXVCO2dCQUN2QiwyQkFBbUI7Z0JBQ25CLHlCQUFlO2dCQUNmLDBDQUE0QjtnQkFDNUIsNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUN0QixJQUFJLEVBQUUsNEJBQTRCO2lCQUNyQyxDQUFDO2FBRUw7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysb0NBQWtCO2dCQUNsQixvQ0FBa0I7Z0JBQ2xCLGtDQUFnQjtnQkFDaEIseUNBQWtCO2dCQUNsQixxQ0FBZ0I7Z0JBQ2hCLDJDQUFtQjtnQkFDbkIsNkNBQW9CO2dCQUNwQixzQ0FBaUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsNkNBQWlCO2dCQUNqQixvQ0FBa0I7Z0JBQ2xCLG9DQUFrQjtnQkFDbEIsa0NBQWdCO2dCQUNoQix5QkFBZTtnQkFDZix5Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsMkJBQW1CO2dCQUNuQixxQ0FBZ0I7Z0JBQ2hCLHNDQUFpQjthQUNwQjtZQUNELGVBQWUsRUFBRTtnQkFDYiwyQ0FBbUI7Z0JBQ25CLDZDQUFvQjthQUV2QjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csVUFBVSxDQWF0QjtJQUFELGlCQUFDOztDQUFBLEFBYkQsSUFhQztBQWJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG4vLyBpbXBvcnQgeyBEcm9wRG93bk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgQWNjb3JkaW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hY2NvcmRpb24vYW5ndWxhclwiO1xyXG4vLyBkaXJlY3RpdmVcclxuaW1wb3J0IHsgTWluTGVuZ3RoRGlyZWN0aXZlLCBNYXhMZW5ndGhEaXJlY3RpdmUsIElzRW1haWxEaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmUvaW5wdXQuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IENhcm91c2VsRGlyZWN0aXZlIH0gZnJvbSBcIi4vZGlyZWN0aXZlL2Nhcm91c2VsLmRpcmVjdGl2ZVwiO1xyXG4vLyBndWFyZFxyXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuL2d1YXJkL2F1dGguZ3VhcmQnO1xyXG5cclxuLy8gc2VydmljZXNcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXhwbG9yZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2V4cGxvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuaW1wb3J0IHsgQ3JlYXRlZEFwcFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NyZWF0ZWQtYXBwLnNlcnZpY2UnO1xyXG4vLyBjb21wb25lbnRcclxuaW1wb3J0IHsgQWN0aW9uQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvYWN0aW9uLWJhci9hY3Rpb24tYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1lbnVCYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9tZW51LWJhci9tZW51LWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dpbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvbG9naW4tbW9kYWwvbG9naW4tbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2lnblVwTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9zaWdudXAtbW9kYWwvc2lnbnVwLW1vZGFsLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IExvY2F0aW9uTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9sb2NhdGlvbi1tb2RhbC9sb2NhdGlvbi1tb2RhbC5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEFjY29yZGlvbk1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICAgICAgICAnZmEnOiAnLi9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnXHJcbiAgICAgICAgfSksXHJcbiBcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBNaW5MZW5ndGhEaXJlY3RpdmUsXHJcbiAgICAgICAgTWF4TGVuZ3RoRGlyZWN0aXZlLFxyXG4gICAgICAgIElzRW1haWxEaXJlY3RpdmUsXHJcbiAgICAgICAgQWN0aW9uQmFyQ29tcG9uZW50LFxyXG4gICAgICAgIE1lbnVCYXJDb21wb25lbnQsXHJcbiAgICAgICAgTG9naW5Nb2RhbENvbXBvbmVudCxcclxuICAgICAgICBTaWduVXBNb2RhbENvbXBvbmVudCxcclxuICAgICAgICBDYXJvdXNlbERpcmVjdGl2ZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBUTlNGb250SWNvbk1vZHVsZSxcclxuICAgICAgICBNaW5MZW5ndGhEaXJlY3RpdmUsXHJcbiAgICAgICAgTWF4TGVuZ3RoRGlyZWN0aXZlLFxyXG4gICAgICAgIElzRW1haWxEaXJlY3RpdmUsXHJcbiAgICAgICAgQWNjb3JkaW9uTW9kdWxlLFxyXG4gICAgICAgIEFjdGlvbkJhckNvbXBvbmVudCxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE1lbnVCYXJDb21wb25lbnQsXHJcbiAgICAgICAgQ2Fyb3VzZWxEaXJlY3RpdmVcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgICAgICBMb2dpbk1vZGFsQ29tcG9uZW50LFxyXG4gICAgICAgIFNpZ25VcE1vZGFsQ29tcG9uZW50LFxyXG4gICAgICAgIC8vIExvY2F0aW9uTW9kYWxDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogQ29yZU1vZHVsZSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICBBdXRoR3VhcmQsXHJcbiAgICAgICAgICAgICAgICBMb2dpblNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBFeHBsb3JlU2VydmljZSxcclxuICAgICAgICAgICAgICAgIE1vZGFsRGlhbG9nU2VydmljZSxcclxuICAgICAgICAgICAgICAgIENyZWF0ZWRBcHBTZXJ2aWNlXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59Il19