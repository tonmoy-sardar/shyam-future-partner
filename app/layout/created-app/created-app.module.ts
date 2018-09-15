import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CreatedAppRoutingModule } from './created-app.routing';
import { CreatedAppComponent } from './created-app.component';
import { DetailsAppComponent } from './details-app/details-app.component';
import { ManageAppComponent } from './manage-app/manage-app.component';
import { EditAppComponent } from './edit-app/edit-app.component';
import { ProductsComponent } from './products/products.component';
import { EditProductCategoyComponent } from "./edit-product-category/edit-product-category.component";
import { AddProductCategoyComponent } from "./add-product-category/add-product-category.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { EditServiceComponent } from "./edit-service/edit-service.component";
import { AddServiceComponent } from "./add-service/add-service.component";

import { CustomersComponent } from "./customers/customers.component";
import { MessagesComponent } from "./messages/messages.component";
import { ChatComponent } from "./chat/chat.component";
import { EditOwnerInfoComponent } from "./edit-owner-info/edit-owner-info.component";
import { EditBusinessImagesComponent } from "./edit-business-images/edit-business-images.component";
import { ReportComponent } from "./report/report.component";
import { OrderDetailsComponent } from "./order-details/order-details.component";
import { EditSocialMediaComponent } from "./edit-social-media/edit-social-media.component";
import { PaymentComponent } from "./payment/payment.component";
import { PaymentSuccessComponent } from "./payment-success/payment-success.component";
import { SubscriptionDetailsComponent } from "./subscription-details/subscription-details.component";

import { CoreModule } from "../../core/core.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CreatedAppRoutingModule,
        CoreModule
    ],
    declarations: [
        CreatedAppComponent,
        DetailsAppComponent,
        ManageAppComponent,
        EditAppComponent,
        ProductsComponent,
        EditProductCategoyComponent,
        AddProductCategoyComponent,
        EditProductComponent,
        AddProductComponent,
        EditServiceComponent,
        AddServiceComponent,
        CustomersComponent,
        MessagesComponent,
        ChatComponent,
        EditOwnerInfoComponent,
        EditBusinessImagesComponent,
        ReportComponent,
        OrderDetailsComponent,
        EditSocialMediaComponent,
        PaymentComponent,
        PaymentSuccessComponent,
        SubscriptionDetailsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CreatedAppModule { }
