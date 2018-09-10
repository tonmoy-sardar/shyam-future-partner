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
var angular_3 = require("nativescript-checkbox/angular");
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
var notification_service_1 = require("./services/notification.service");
// component
var action_bar_component_1 = require("./component/action-bar/action-bar.component");
var menu_bar_component_1 = require("./component/menu-bar/menu-bar.component");
var login_modal_component_1 = require("./component/login-modal/login-modal.component");
var signup_modal_component_1 = require("./component/signup-modal/signup-modal.component");
var upload_single_image_modal_component_1 = require("./component/upload-single-image-modal/upload-single-image-modal.component");
var upload_multiple_image_modal_component_1 = require("./component/upload-multiple-image-modal/upload-multiple-image-modal.component");
var location_modal_component_1 = require("./component/location-modal/location-modal.component");
var app_action_bar_component_1 = require("./component/app-action-bar/app-action-bar.component");
var create_app_action_bar_component_1 = require("./component/create-app-action-bar/create-app-action-bar.component");
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
                customer_service_1.CustomerService,
                notification_service_1.NotificationService
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
                angular_1.DropDownModule,
                angular_3.TNSCheckBoxModule
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
                app_action_bar_component_1.AppActionBarComponent,
                create_app_action_bar_component_1.CreateAppActionBarComponent
            ],
            exports: [
                nativescript_ngx_fonticon_1.TNSFontIconModule,
                input_directive_1.MinLengthDirective,
                input_directive_1.MaxLengthDirective,
                input_directive_1.IsEmailDirective,
                angular_2.AccordionModule,
                angular_3.TNSCheckBoxModule,
                action_bar_component_1.ActionBarComponent,
                forms_1.NativeScriptFormsModule,
                forms_2.ReactiveFormsModule,
                menu_bar_component_1.MenuBarComponent,
                carousel_directive_1.CarouselDirective,
                angular_1.DropDownModule,
                app_action_bar_component_1.AppActionBarComponent,
                create_app_action_bar_component_1.CreateAppActionBarComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUNoRixzREFBdUU7QUFDdkUsc0RBQXVFO0FBQ3ZFLG9EQUFxRTtBQUNyRSx3Q0FBcUQ7QUFDckQsZ0VBQWdGO0FBQ2hGLHVFQUE4RDtBQUM5RCwwREFBZ0U7QUFDaEUsMERBQWlFO0FBQ2pFLHlEQUFrRTtBQUNsRSxZQUFZO0FBQ1osK0RBQXVHO0FBQ3ZHLHFFQUFtRTtBQUNuRSxRQUFRO0FBQ1IsaURBQStDO0FBRS9DLFdBQVc7QUFDWCwwREFBd0Q7QUFDeEQsOERBQTREO0FBQzVELGtFQUF1RTtBQUN2RSxzRUFBbUU7QUFDbkUsOERBQTREO0FBQzVELGdFQUE4RDtBQUM5RCx3RUFBc0U7QUFDdEUsWUFBWTtBQUNaLG9GQUFpRjtBQUNqRiw4RUFBMkU7QUFDM0UsdUZBQW9GO0FBQ3BGLDBGQUF1RjtBQUN2RixpSUFBNEg7QUFDNUgsdUlBQWtJO0FBQ2xJLGdHQUE2RjtBQUM3RixnR0FBNEY7QUFDNUYscUhBQWdIO0FBeURoSDtJQUFBO0lBZ0JBLENBQUM7bUJBaEJZLFVBQVU7SUFDWixrQkFBTyxHQUFkO1FBQ0ksTUFBTSxDQUFDO1lBQ0gsUUFBUSxFQUFFLFlBQVU7WUFDcEIsU0FBUyxFQUFFO2dCQUNQLHNCQUFTO2dCQUNULDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLGlDQUFrQjtnQkFDbEIsdUNBQWlCO2dCQUNqQixnQ0FBYztnQkFDZCxrQ0FBZTtnQkFDZiwwQ0FBbUI7YUFDdEI7U0FDSixDQUFDO0lBQ04sQ0FBQztJQWZRLFVBQVU7UUF4RHRCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLGlDQUF3QjtnQkFDeEIsK0JBQXVCO2dCQUN2QiwyQkFBbUI7Z0JBQ25CLHlCQUFlO2dCQUNmLDBDQUE0QjtnQkFDNUIsNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUN0QixJQUFJLEVBQUUsNEJBQTRCO2lCQUNyQyxDQUFDO2dCQUNGLHdCQUFjO2dCQUNkLDJCQUFpQjthQUNwQjtZQUNELFlBQVksRUFBRTtnQkFDVixvQ0FBa0I7Z0JBQ2xCLG9DQUFrQjtnQkFDbEIsa0NBQWdCO2dCQUNoQix5Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsMkNBQW1CO2dCQUNuQiw2Q0FBb0I7Z0JBQ3BCLHNDQUFpQjtnQkFDakIscUVBQStCO2dCQUMvQix5RUFBaUM7Z0JBQ2pDLGlEQUFzQjtnQkFDdEIsZ0RBQXFCO2dCQUNyQiw2REFBMkI7YUFDOUI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsNkNBQWlCO2dCQUNqQixvQ0FBa0I7Z0JBQ2xCLG9DQUFrQjtnQkFDbEIsa0NBQWdCO2dCQUNoQix5QkFBZTtnQkFDZiwyQkFBaUI7Z0JBQ2pCLHlDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2QiwyQkFBbUI7Z0JBQ25CLHFDQUFnQjtnQkFDaEIsc0NBQWlCO2dCQUNqQix3QkFBYztnQkFDZCxnREFBcUI7Z0JBQ3JCLDZEQUEyQjthQUM5QjtZQUNELGVBQWUsRUFBRTtnQkFDYiwyQ0FBbUI7Z0JBQ25CLDZDQUFvQjtnQkFDcEIscUVBQStCO2dCQUMvQix5RUFBaUM7Z0JBQ2pDLGlEQUFzQjthQUN6QjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csVUFBVSxDQWdCdEI7SUFBRCxpQkFBQzs7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcclxuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuaW1wb3J0IHsgRHJvcERvd25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93bi9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IEFjY29yZGlvbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYWNjb3JkaW9uL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgVE5TQ2hlY2tCb3hNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtY2hlY2tib3gvYW5ndWxhcic7XHJcbi8vIGRpcmVjdGl2ZVxyXG5pbXBvcnQgeyBNaW5MZW5ndGhEaXJlY3RpdmUsIE1heExlbmd0aERpcmVjdGl2ZSwgSXNFbWFpbERpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZS9pbnB1dC5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgQ2Fyb3VzZWxEaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmUvY2Fyb3VzZWwuZGlyZWN0aXZlXCI7XHJcbi8vIGd1YXJkXHJcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vZ3VhcmQvYXV0aC5ndWFyZCc7XHJcblxyXG4vLyBzZXJ2aWNlc1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFeHBsb3JlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZXhwbG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBDcmVhdGVkQXBwU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY3JlYXRlZC1hcHAuc2VydmljZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDdXN0b21lclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2N1c3RvbWVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZSc7XHJcbi8vIGNvbXBvbmVudFxyXG5pbXBvcnQgeyBBY3Rpb25CYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9hY3Rpb24tYmFyL2FjdGlvbi1iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWVudUJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L21lbnUtYmFyL21lbnUtYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9sb2dpbi1tb2RhbC9sb2dpbi1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaWduVXBNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L3NpZ251cC1tb2RhbC9zaWdudXAtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVXBsb2FkU2luZ2xlSW1hZ2VNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L3VwbG9hZC1zaW5nbGUtaW1hZ2UtbW9kYWwvdXBsb2FkLXNpbmdsZS1pbWFnZS1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVcGxvYWRNdWx0aXBsZUltYWdlTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC91cGxvYWQtbXVsdGlwbGUtaW1hZ2UtbW9kYWwvdXBsb2FkLW11bHRpcGxlLWltYWdlLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvY2F0aW9uTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9sb2NhdGlvbi1tb2RhbC9sb2NhdGlvbi1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBBY3Rpb25CYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9hcHAtYWN0aW9uLWJhci9hcHAtYWN0aW9uLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDcmVhdGVBcHBBY3Rpb25CYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9jcmVhdGUtYXBwLWFjdGlvbi1iYXIvY3JlYXRlLWFwcC1hY3Rpb24tYmFyLmNvbXBvbmVudCc7XHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEFjY29yZGlvbk1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICAgICAgICAnZmEnOiAnLi9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgRHJvcERvd25Nb2R1bGUsXHJcbiAgICAgICAgVE5TQ2hlY2tCb3hNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBNaW5MZW5ndGhEaXJlY3RpdmUsXHJcbiAgICAgICAgTWF4TGVuZ3RoRGlyZWN0aXZlLFxyXG4gICAgICAgIElzRW1haWxEaXJlY3RpdmUsXHJcbiAgICAgICAgQWN0aW9uQmFyQ29tcG9uZW50LFxyXG4gICAgICAgIE1lbnVCYXJDb21wb25lbnQsXHJcbiAgICAgICAgTG9naW5Nb2RhbENvbXBvbmVudCxcclxuICAgICAgICBTaWduVXBNb2RhbENvbXBvbmVudCxcclxuICAgICAgICBDYXJvdXNlbERpcmVjdGl2ZSxcclxuICAgICAgICBVcGxvYWRTaW5nbGVJbWFnZU1vZGFsQ29tcG9uZW50LFxyXG4gICAgICAgIFVwbG9hZE11bHRpcGxlSW1hZ2VNb2RhbENvbXBvbmVudCxcclxuICAgICAgICBMb2NhdGlvbk1vZGFsQ29tcG9uZW50LFxyXG4gICAgICAgIEFwcEFjdGlvbkJhckNvbXBvbmVudCxcclxuICAgICAgICBDcmVhdGVBcHBBY3Rpb25CYXJDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgVE5TRm9udEljb25Nb2R1bGUsXHJcbiAgICAgICAgTWluTGVuZ3RoRGlyZWN0aXZlLFxyXG4gICAgICAgIE1heExlbmd0aERpcmVjdGl2ZSxcclxuICAgICAgICBJc0VtYWlsRGlyZWN0aXZlLFxyXG4gICAgICAgIEFjY29yZGlvbk1vZHVsZSxcclxuICAgICAgICBUTlNDaGVja0JveE1vZHVsZSxcclxuICAgICAgICBBY3Rpb25CYXJDb21wb25lbnQsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgICAgICBNZW51QmFyQ29tcG9uZW50LFxyXG4gICAgICAgIENhcm91c2VsRGlyZWN0aXZlLFxyXG4gICAgICAgIERyb3BEb3duTW9kdWxlLFxyXG4gICAgICAgIEFwcEFjdGlvbkJhckNvbXBvbmVudCxcclxuICAgICAgICBDcmVhdGVBcHBBY3Rpb25CYXJDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgICAgICBMb2dpbk1vZGFsQ29tcG9uZW50LFxyXG4gICAgICAgIFNpZ25VcE1vZGFsQ29tcG9uZW50LFxyXG4gICAgICAgIFVwbG9hZFNpbmdsZUltYWdlTW9kYWxDb21wb25lbnQsXHJcbiAgICAgICAgVXBsb2FkTXVsdGlwbGVJbWFnZU1vZGFsQ29tcG9uZW50LFxyXG4gICAgICAgIExvY2F0aW9uTW9kYWxDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogQ29yZU1vZHVsZSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICBBdXRoR3VhcmQsXHJcbiAgICAgICAgICAgICAgICBMb2dpblNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBFeHBsb3JlU2VydmljZSxcclxuICAgICAgICAgICAgICAgIE1vZGFsRGlhbG9nU2VydmljZSxcclxuICAgICAgICAgICAgICAgIENyZWF0ZWRBcHBTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBDdXN0b21lclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59Il19