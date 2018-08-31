import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AppCreateRoutingModule } from './app-create.routing';
import { AppCreateComponent } from './app-create.component';
import { BusinessInfoComponent } from './business-info/business-info.component';
import { OwnerInfoComponent } from './owner-info/owner-info.component';

import { CoreModule } from "../../core/core.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AppCreateRoutingModule,
        CoreModule
    ],
    declarations: [
        AppCreateComponent,
        BusinessInfoComponent,
        OwnerInfoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppCreateModule { }
