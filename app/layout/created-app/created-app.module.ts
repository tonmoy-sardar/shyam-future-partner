import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CreatedAppRoutingModule } from './created-app.routing';
import { CreatedAppComponent } from './created-app.component';
import { ManageAppComponent } from './manage-app/manage-app.component';
import { EditAppComponent } from './edit-app/edit-app.component';
import { ProductsComponent } from './products/products.component';
import { EditProductCategoyComponent } from "./edit-product-category/edit-product-category.component";
import { EditProductComponent } from "./edit-product/edit-product.component";

import { CustomersComponent } from "./customers/customers.component";
import { MessagesComponent } from "./messages/messages.component";
import { ChatComponent } from "./chat/chat.component";
import { EditOwnerInfoComponent } from "./edit-owner-info/edit-owner-info.component";
import { EditBusinessImagesComponent } from "./edit-business-images/edit-business-images.component";
import { ReportComponent } from "./report/report.component";

import { CoreModule } from "../../core/core.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CreatedAppRoutingModule,
        CoreModule
    ],
    declarations: [
        CreatedAppComponent,
        ManageAppComponent,
        EditAppComponent,
        ProductsComponent,
        EditProductCategoyComponent,
        EditProductComponent,
        CustomersComponent,
        MessagesComponent,
        ChatComponent,
        EditOwnerInfoComponent,
        EditBusinessImagesComponent,
        ReportComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CreatedAppModule { }
