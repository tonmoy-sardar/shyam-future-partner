import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { DropDownModule } from "nativescript-drop-down/angular";
import { AccordionModule } from "nativescript-accordion/angular";
// directive
import { MinLengthDirective, MaxLengthDirective, IsEmailDirective } from "./directive/input.directive";
import { CarouselDirective } from "./directive/carousel.directive";
// guard
import { AuthGuard } from './guard/auth.guard';

// services
import { LoginService } from './services/login.service';
import { ExploreService } from './services/explore.service';
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { CreatedAppService } from './services/created-app.service';
import { MessageService } from './services/message.service';
import { CustomerService } from './services/customer.service';
// component
import { ActionBarComponent } from './component/action-bar/action-bar.component';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { LoginModalComponent } from './component/login-modal/login-modal.component';
import { SignUpModalComponent } from './component/signup-modal/signup-modal.component';
import { UploadSingleImageModalComponent } from './component/upload-single-image-modal/upload-single-image-modal.component';
import { UploadMultipleImageModalComponent } from './component/upload-multiple-image-modal/upload-multiple-image-modal.component';
import { LocationModalComponent } from './component/location-modal/location-modal.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,
        AccordionModule,
        NativeScriptHttpClientModule,
        TNSFontIconModule.forRoot({
            'fa': './css/font-awesome.min.css'
        }),
        DropDownModule
    ],
    declarations: [
        MinLengthDirective,
        MaxLengthDirective,
        IsEmailDirective,
        ActionBarComponent,
        MenuBarComponent,
        LoginModalComponent,
        SignUpModalComponent,
        CarouselDirective,
        UploadSingleImageModalComponent,
        UploadMultipleImageModalComponent,
        LocationModalComponent
    ],
    exports: [
        TNSFontIconModule,
        MinLengthDirective,
        MaxLengthDirective,
        IsEmailDirective,
        AccordionModule,
        ActionBarComponent,
        NativeScriptFormsModule,
        ReactiveFormsModule,
        MenuBarComponent,
        CarouselDirective,
        DropDownModule
    ],
    entryComponents: [
        LoginModalComponent,
        SignUpModalComponent,
        UploadSingleImageModalComponent,
        UploadMultipleImageModalComponent,
        LocationModalComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                AuthGuard,
                LoginService,
                ExploreService,
                ModalDialogService,
                CreatedAppService,
                MessageService,
                CustomerService
            ]
        };
    }
}