import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CreatedAppComponent } from "./created-app.component";
import { DetailsAppComponent } from "./details-app/details-app.component";
import { ManageAppComponent } from "./manage-app/manage-app.component";
import { EditAppComponent } from "./edit-app/edit-app.component";
import { ProductsComponent } from "./products/products.component";
import { EditProductCategoyComponent } from "./edit-product-category/edit-product-category.component";
import { AddProductCategoyComponent } from "./add-product-category/add-product-category.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { AddServiceComponent } from "./add-service/add-service.component";
import { EditServiceComponent } from "./edit-service/edit-service.component";

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

const routes: Routes = [
    {
        path: ':id',
        component: CreatedAppComponent,
        children: [
            { path: "details", component: DetailsAppComponent },
            { path: "manage-app", component: ManageAppComponent },
            { path: "edit-app", component: EditAppComponent },
            { path: "products", component: ProductsComponent },
            { path: "products/:key", component: ProductsComponent },
            { path: "edit-product-category/:id", component: EditProductCategoyComponent },
            { path: "edit-product-category/:id/:key", component: EditProductCategoyComponent },
            { path: "add-product-category", component: AddProductCategoyComponent },
            { path: "add-product-category/:key", component: AddProductCategoyComponent },
            { path: "edit-product/:id", component: EditProductComponent },
            { path: "edit-product/:id/:key", component: EditProductComponent },
            { path: "add-product/:id", component: AddProductComponent },
            { path: "add-product/:id/:key", component: AddProductComponent },
            { path: "edit-service/:id", component: EditServiceComponent },
            { path: "edit-service/:id/:key", component: EditServiceComponent },
            { path: "add-service/:id", component: AddServiceComponent },
            { path: "add-service/:id/:key", component: AddServiceComponent },
            { path: "customers", component: CustomersComponent },
            { path: "messages", component: MessagesComponent },
            { path: "chat/:user", component: ChatComponent },
            { path: "edit-owner-info", component: EditOwnerInfoComponent },
            { path: "edit-business-images", component: EditBusinessImagesComponent },
            { path: "edit-business-images/:key", component: EditBusinessImagesComponent },
            { path: "report", component: ReportComponent },
            { path: "order-details/:order", component: OrderDetailsComponent },
            { path: "edit-social-media", component: EditSocialMediaComponent },
            { path: "payment", component: PaymentComponent },
            { path: "payment-success", component: PaymentSuccessComponent },
            { path: "subscription-details", component: SubscriptionDetailsComponent },
        ]
    }

];



@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CreatedAppRoutingModule { }
