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
                location_modal_component_1.LocationModalComponent
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
                angular_1.DropDownModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUNoRixzREFBdUU7QUFDdkUsc0RBQXVFO0FBQ3ZFLG9EQUFxRTtBQUNyRSx3Q0FBcUQ7QUFDckQsZ0VBQWdGO0FBQ2hGLHVFQUE4RDtBQUM5RCwwREFBZ0U7QUFDaEUsMERBQWlFO0FBQ2pFLFlBQVk7QUFDWiwrREFBdUc7QUFDdkcscUVBQW1FO0FBQ25FLFFBQVE7QUFDUixpREFBK0M7QUFFL0MsV0FBVztBQUNYLDBEQUF3RDtBQUN4RCw4REFBNEQ7QUFDNUQsa0VBQXVFO0FBQ3ZFLHNFQUFtRTtBQUNuRSw4REFBNEQ7QUFDNUQsZ0VBQThEO0FBQzlELFlBQVk7QUFDWixvRkFBaUY7QUFDakYsOEVBQTJFO0FBQzNFLHVGQUFvRjtBQUNwRiwwRkFBdUY7QUFDdkYsaUlBQTRIO0FBQzVILHVJQUFrSTtBQUNsSSxnR0FBNkY7QUFvRDdGO0lBQUE7SUFlQSxDQUFDO21CQWZZLFVBQVU7SUFDWixrQkFBTyxHQUFkO1FBQ0ksTUFBTSxDQUFDO1lBQ0gsUUFBUSxFQUFFLFlBQVU7WUFDcEIsU0FBUyxFQUFFO2dCQUNQLHNCQUFTO2dCQUNULDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLGlDQUFrQjtnQkFDbEIsdUNBQWlCO2dCQUNqQixnQ0FBYztnQkFDZCxrQ0FBZTthQUNsQjtTQUNKLENBQUM7SUFDTixDQUFDO0lBZFEsVUFBVTtRQWxEdEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsaUNBQXdCO2dCQUN4QiwrQkFBdUI7Z0JBQ3ZCLDJCQUFtQjtnQkFDbkIseUJBQWU7Z0JBQ2YsMENBQTRCO2dCQUM1Qiw2Q0FBaUIsQ0FBQyxPQUFPLENBQUM7b0JBQ3RCLElBQUksRUFBRSw0QkFBNEI7aUJBQ3JDLENBQUM7Z0JBQ0Ysd0JBQWM7YUFDakI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysb0NBQWtCO2dCQUNsQixvQ0FBa0I7Z0JBQ2xCLGtDQUFnQjtnQkFDaEIseUNBQWtCO2dCQUNsQixxQ0FBZ0I7Z0JBQ2hCLDJDQUFtQjtnQkFDbkIsNkNBQW9CO2dCQUNwQixzQ0FBaUI7Z0JBQ2pCLHFFQUErQjtnQkFDL0IseUVBQWlDO2dCQUNqQyxpREFBc0I7YUFDekI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsNkNBQWlCO2dCQUNqQixvQ0FBa0I7Z0JBQ2xCLG9DQUFrQjtnQkFDbEIsa0NBQWdCO2dCQUNoQix5QkFBZTtnQkFDZix5Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsMkJBQW1CO2dCQUNuQixxQ0FBZ0I7Z0JBQ2hCLHNDQUFpQjtnQkFDakIsd0JBQWM7YUFDakI7WUFDRCxlQUFlLEVBQUU7Z0JBQ2IsMkNBQW1CO2dCQUNuQiw2Q0FBb0I7Z0JBQ3BCLHFFQUErQjtnQkFDL0IseUVBQWlDO2dCQUNqQyxpREFBc0I7YUFDekI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FldEI7SUFBRCxpQkFBQzs7Q0FBQSxBQWZELElBZUM7QUFmWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcclxuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuaW1wb3J0IHsgRHJvcERvd25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93bi9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IEFjY29yZGlvbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYWNjb3JkaW9uL2FuZ3VsYXJcIjtcclxuLy8gZGlyZWN0aXZlXHJcbmltcG9ydCB7IE1pbkxlbmd0aERpcmVjdGl2ZSwgTWF4TGVuZ3RoRGlyZWN0aXZlLCBJc0VtYWlsRGlyZWN0aXZlIH0gZnJvbSBcIi4vZGlyZWN0aXZlL2lucHV0LmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBDYXJvdXNlbERpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZS9jYXJvdXNlbC5kaXJlY3RpdmVcIjtcclxuLy8gZ3VhcmRcclxuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi9ndWFyZC9hdXRoLmd1YXJkJztcclxuXHJcbi8vIHNlcnZpY2VzXHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbG9naW4uc2VydmljZSc7XHJcbmltcG9ydCB7IEV4cGxvcmVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9leHBsb3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcbmltcG9ydCB7IENyZWF0ZWRBcHBTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jcmVhdGVkLWFwcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEN1c3RvbWVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY3VzdG9tZXIuc2VydmljZSc7XHJcbi8vIGNvbXBvbmVudFxyXG5pbXBvcnQgeyBBY3Rpb25CYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9hY3Rpb24tYmFyL2FjdGlvbi1iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWVudUJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L21lbnUtYmFyL21lbnUtYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9sb2dpbi1tb2RhbC9sb2dpbi1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaWduVXBNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L3NpZ251cC1tb2RhbC9zaWdudXAtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVXBsb2FkU2luZ2xlSW1hZ2VNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L3VwbG9hZC1zaW5nbGUtaW1hZ2UtbW9kYWwvdXBsb2FkLXNpbmdsZS1pbWFnZS1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVcGxvYWRNdWx0aXBsZUltYWdlTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC91cGxvYWQtbXVsdGlwbGUtaW1hZ2UtbW9kYWwvdXBsb2FkLW11bHRpcGxlLWltYWdlLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvY2F0aW9uTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9sb2NhdGlvbi1tb2RhbC9sb2NhdGlvbi1tb2RhbC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgQWNjb3JkaW9uTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XHJcbiAgICAgICAgICAgICdmYSc6ICcuL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcydcclxuICAgICAgICB9KSxcclxuICAgICAgICBEcm9wRG93bk1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIE1pbkxlbmd0aERpcmVjdGl2ZSxcclxuICAgICAgICBNYXhMZW5ndGhEaXJlY3RpdmUsXHJcbiAgICAgICAgSXNFbWFpbERpcmVjdGl2ZSxcclxuICAgICAgICBBY3Rpb25CYXJDb21wb25lbnQsXHJcbiAgICAgICAgTWVudUJhckNvbXBvbmVudCxcclxuICAgICAgICBMb2dpbk1vZGFsQ29tcG9uZW50LFxyXG4gICAgICAgIFNpZ25VcE1vZGFsQ29tcG9uZW50LFxyXG4gICAgICAgIENhcm91c2VsRGlyZWN0aXZlLFxyXG4gICAgICAgIFVwbG9hZFNpbmdsZUltYWdlTW9kYWxDb21wb25lbnQsXHJcbiAgICAgICAgVXBsb2FkTXVsdGlwbGVJbWFnZU1vZGFsQ29tcG9uZW50LFxyXG4gICAgICAgIExvY2F0aW9uTW9kYWxDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgVE5TRm9udEljb25Nb2R1bGUsXHJcbiAgICAgICAgTWluTGVuZ3RoRGlyZWN0aXZlLFxyXG4gICAgICAgIE1heExlbmd0aERpcmVjdGl2ZSxcclxuICAgICAgICBJc0VtYWlsRGlyZWN0aXZlLFxyXG4gICAgICAgIEFjY29yZGlvbk1vZHVsZSxcclxuICAgICAgICBBY3Rpb25CYXJDb21wb25lbnQsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgICAgICBNZW51QmFyQ29tcG9uZW50LFxyXG4gICAgICAgIENhcm91c2VsRGlyZWN0aXZlLFxyXG4gICAgICAgIERyb3BEb3duTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICAgICAgTG9naW5Nb2RhbENvbXBvbmVudCxcclxuICAgICAgICBTaWduVXBNb2RhbENvbXBvbmVudCxcclxuICAgICAgICBVcGxvYWRTaW5nbGVJbWFnZU1vZGFsQ29tcG9uZW50LFxyXG4gICAgICAgIFVwbG9hZE11bHRpcGxlSW1hZ2VNb2RhbENvbXBvbmVudCxcclxuICAgICAgICBMb2NhdGlvbk1vZGFsQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xyXG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IENvcmVNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgICAgICAgICAgQXV0aEd1YXJkLFxyXG4gICAgICAgICAgICAgICAgTG9naW5TZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgRXhwbG9yZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBNb2RhbERpYWxvZ1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBDcmVhdGVkQXBwU2VydmljZSxcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgQ3VzdG9tZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59Il19