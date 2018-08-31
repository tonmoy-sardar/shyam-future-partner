"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
var forms_2 = require("@angular/forms");
var http_client_1 = require("nativescript-angular/http-client");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var angular_1 = require("nativescript-drop-down/angular");
var angular_2 = require("nativescript-accordion/angular");
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
var message_service_1 = require("./services/message.service");
var customer_service_1 = require("./services/customer.service");
// component
var action_bar_component_1 = require("./component/action-bar/action-bar.component");
var menu_bar_component_1 = require("./component/menu-bar/menu-bar.component");
var login_modal_component_1 = require("./component/login-modal/login-modal.component");
var signup_modal_component_1 = require("./component/signup-modal/signup-modal.component");
var upload_single_image_modal_component_1 = require("./component/upload-single-image-modal/upload-single-image-modal.component");
var upload_multiple_image_modal_component_1 = require("./component/upload-multiple-image-modal/upload-multiple-image-modal.component");
var location_modal_component_1 = require("./component/location-modal/location-modal.component");
var app_action_bar_component_1 = require("./component/app-action-bar/app-action-bar.component");
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
                created_app_service_1.CreatedAppService,
                message_service_1.MessageService,
                customer_service_1.CustomerService
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
                angular_2.AccordionModule,
                http_client_1.NativeScriptHttpClientModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': './css/font-awesome.min.css'
                }),
                angular_1.DropDownModule
            ],
            declarations: [
                input_directive_1.MinLengthDirective,
                input_directive_1.MaxLengthDirective,
                input_directive_1.IsEmailDirective,
                action_bar_component_1.ActionBarComponent,
                menu_bar_component_1.MenuBarComponent,
                login_modal_component_1.LoginModalComponent,
                signup_modal_component_1.SignUpModalComponent,
                carousel_directive_1.CarouselDirective,
                upload_single_image_modal_component_1.UploadSingleImageModalComponent,
                upload_multiple_image_modal_component_1.UploadMultipleImageModalComponent,
                location_modal_component_1.LocationModalComponent,
                app_action_bar_component_1.AppActionBarComponent
            ],
            exports: [
                nativescript_ngx_fonticon_1.TNSFontIconModule,
                input_directive_1.MinLengthDirective,
                input_directive_1.MaxLengthDirective,
                input_directive_1.IsEmailDirective,
                angular_2.AccordionModule,
                action_bar_component_1.ActionBarComponent,
                forms_1.NativeScriptFormsModule,
                forms_2.ReactiveFormsModule,
                menu_bar_component_1.MenuBarComponent,
                carousel_directive_1.CarouselDirective,
                angular_1.DropDownModule,
                app_action_bar_component_1.AppActionBarComponent
            ],
            entryComponents: [
                login_modal_component_1.LoginModalComponent,
                signup_modal_component_1.SignUpModalComponent,
                upload_single_image_modal_component_1.UploadSingleImageModalComponent,
                upload_multiple_image_modal_component_1.UploadMultipleImageModalComponent,
                location_modal_component_1.LocationModalComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUNoRixzREFBdUU7QUFDdkUsc0RBQXVFO0FBQ3ZFLG9EQUFxRTtBQUNyRSx3Q0FBcUQ7QUFDckQsZ0VBQWdGO0FBQ2hGLHVFQUE4RDtBQUM5RCwwREFBZ0U7QUFDaEUsMERBQWlFO0FBQ2pFLFlBQVk7QUFDWiwrREFBdUc7QUFDdkcscUVBQW1FO0FBQ25FLFFBQVE7QUFDUixpREFBK0M7QUFFL0MsV0FBVztBQUNYLDBEQUF3RDtBQUN4RCw4REFBNEQ7QUFDNUQsa0VBQXVFO0FBQ3ZFLHNFQUFtRTtBQUNuRSw4REFBNEQ7QUFDNUQsZ0VBQThEO0FBQzlELFlBQVk7QUFDWixvRkFBaUY7QUFDakYsOEVBQTJFO0FBQzNFLHVGQUFvRjtBQUNwRiwwRkFBdUY7QUFDdkYsaUlBQTRIO0FBQzVILHVJQUFrSTtBQUNsSSxnR0FBNkY7QUFDN0YsZ0dBQTRGO0FBc0Q1RjtJQUFBO0lBZUEsQ0FBQzttQkFmWSxVQUFVO0lBQ1osa0JBQU8sR0FBZDtRQUNJLE1BQU0sQ0FBQztZQUNILFFBQVEsRUFBRSxZQUFVO1lBQ3BCLFNBQVMsRUFBRTtnQkFDUCxzQkFBUztnQkFDVCw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCxpQ0FBa0I7Z0JBQ2xCLHVDQUFpQjtnQkFDakIsZ0NBQWM7Z0JBQ2Qsa0NBQWU7YUFDbEI7U0FDSixDQUFDO0lBQ04sQ0FBQztJQWRRLFVBQVU7UUFwRHRCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLGlDQUF3QjtnQkFDeEIsK0JBQXVCO2dCQUN2QiwyQkFBbUI7Z0JBQ25CLHlCQUFlO2dCQUNmLDBDQUE0QjtnQkFDNUIsNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUN0QixJQUFJLEVBQUUsNEJBQTRCO2lCQUNyQyxDQUFDO2dCQUNGLHdCQUFjO2FBQ2pCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLG9DQUFrQjtnQkFDbEIsb0NBQWtCO2dCQUNsQixrQ0FBZ0I7Z0JBQ2hCLHlDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUNoQiwyQ0FBbUI7Z0JBQ25CLDZDQUFvQjtnQkFDcEIsc0NBQWlCO2dCQUNqQixxRUFBK0I7Z0JBQy9CLHlFQUFpQztnQkFDakMsaURBQXNCO2dCQUN0QixnREFBcUI7YUFDeEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsNkNBQWlCO2dCQUNqQixvQ0FBa0I7Z0JBQ2xCLG9DQUFrQjtnQkFDbEIsa0NBQWdCO2dCQUNoQix5QkFBZTtnQkFDZix5Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsMkJBQW1CO2dCQUNuQixxQ0FBZ0I7Z0JBQ2hCLHNDQUFpQjtnQkFDakIsd0JBQWM7Z0JBQ2QsZ0RBQXFCO2FBQ3hCO1lBQ0QsZUFBZSxFQUFFO2dCQUNiLDJDQUFtQjtnQkFDbkIsNkNBQW9CO2dCQUNwQixxRUFBK0I7Z0JBQy9CLHlFQUFpQztnQkFDakMsaURBQXNCO2FBQ3pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxVQUFVLENBZXRCO0lBQUQsaUJBQUM7O0NBQUEsQUFmRCxJQWVDO0FBZlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IERyb3BEb3duTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd24vYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBBY2NvcmRpb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFjY29yZGlvbi9hbmd1bGFyXCI7XHJcbi8vIGRpcmVjdGl2ZVxyXG5pbXBvcnQgeyBNaW5MZW5ndGhEaXJlY3RpdmUsIE1heExlbmd0aERpcmVjdGl2ZSwgSXNFbWFpbERpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZS9pbnB1dC5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgQ2Fyb3VzZWxEaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmUvY2Fyb3VzZWwuZGlyZWN0aXZlXCI7XHJcbi8vIGd1YXJkXHJcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vZ3VhcmQvYXV0aC5ndWFyZCc7XHJcblxyXG4vLyBzZXJ2aWNlc1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFeHBsb3JlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZXhwbG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBDcmVhdGVkQXBwU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY3JlYXRlZC1hcHAuc2VydmljZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDdXN0b21lclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2N1c3RvbWVyLnNlcnZpY2UnO1xyXG4vLyBjb21wb25lbnRcclxuaW1wb3J0IHsgQWN0aW9uQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvYWN0aW9uLWJhci9hY3Rpb24tYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1lbnVCYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9tZW51LWJhci9tZW51LWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dpbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvbG9naW4tbW9kYWwvbG9naW4tbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2lnblVwTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9zaWdudXAtbW9kYWwvc2lnbnVwLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVwbG9hZFNpbmdsZUltYWdlTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC91cGxvYWQtc2luZ2xlLWltYWdlLW1vZGFsL3VwbG9hZC1zaW5nbGUtaW1hZ2UtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVXBsb2FkTXVsdGlwbGVJbWFnZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvdXBsb2FkLW11bHRpcGxlLWltYWdlLW1vZGFsL3VwbG9hZC1tdWx0aXBsZS1pbWFnZS1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvbG9jYXRpb24tbW9kYWwvbG9jYXRpb24tbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwQWN0aW9uQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvYXBwLWFjdGlvbi1iYXIvYXBwLWFjdGlvbi1iYXIuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEFjY29yZGlvbk1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICAgICAgICAnZmEnOiAnLi9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgRHJvcERvd25Nb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBNaW5MZW5ndGhEaXJlY3RpdmUsXHJcbiAgICAgICAgTWF4TGVuZ3RoRGlyZWN0aXZlLFxyXG4gICAgICAgIElzRW1haWxEaXJlY3RpdmUsXHJcbiAgICAgICAgQWN0aW9uQmFyQ29tcG9uZW50LFxyXG4gICAgICAgIE1lbnVCYXJDb21wb25lbnQsXHJcbiAgICAgICAgTG9naW5Nb2RhbENvbXBvbmVudCxcclxuICAgICAgICBTaWduVXBNb2RhbENvbXBvbmVudCxcclxuICAgICAgICBDYXJvdXNlbERpcmVjdGl2ZSxcclxuICAgICAgICBVcGxvYWRTaW5nbGVJbWFnZU1vZGFsQ29tcG9uZW50LFxyXG4gICAgICAgIFVwbG9hZE11bHRpcGxlSW1hZ2VNb2RhbENvbXBvbmVudCxcclxuICAgICAgICBMb2NhdGlvbk1vZGFsQ29tcG9uZW50LFxyXG4gICAgICAgIEFwcEFjdGlvbkJhckNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBUTlNGb250SWNvbk1vZHVsZSxcclxuICAgICAgICBNaW5MZW5ndGhEaXJlY3RpdmUsXHJcbiAgICAgICAgTWF4TGVuZ3RoRGlyZWN0aXZlLFxyXG4gICAgICAgIElzRW1haWxEaXJlY3RpdmUsXHJcbiAgICAgICAgQWNjb3JkaW9uTW9kdWxlLFxyXG4gICAgICAgIEFjdGlvbkJhckNvbXBvbmVudCxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE1lbnVCYXJDb21wb25lbnQsXHJcbiAgICAgICAgQ2Fyb3VzZWxEaXJlY3RpdmUsXHJcbiAgICAgICAgRHJvcERvd25Nb2R1bGUsXHJcbiAgICAgICAgQXBwQWN0aW9uQmFyQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICAgICAgTG9naW5Nb2RhbENvbXBvbmVudCxcclxuICAgICAgICBTaWduVXBNb2RhbENvbXBvbmVudCxcclxuICAgICAgICBVcGxvYWRTaW5nbGVJbWFnZU1vZGFsQ29tcG9uZW50LFxyXG4gICAgICAgIFVwbG9hZE11bHRpcGxlSW1hZ2VNb2RhbENvbXBvbmVudCxcclxuICAgICAgICBMb2NhdGlvbk1vZGFsQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xyXG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IENvcmVNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgICAgICAgICAgQXV0aEd1YXJkLFxyXG4gICAgICAgICAgICAgICAgTG9naW5TZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgRXhwbG9yZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBNb2RhbERpYWxvZ1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBDcmVhdGVkQXBwU2VydmljZSxcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgQ3VzdG9tZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59Il19