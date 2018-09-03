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

const routes: Routes = [
    {
        path: ':id',
        component: CreatedAppComponent,
        children: [
            { path: "details", component: DetailsAppComponent },
            { path: "manage-app", component: ManageAppComponent },
            { path: "edit-app", component: EditAppComponent },
            { path: "products", component: ProductsComponent },
            { path: "edit-product-category/:product_id", component: EditProductCategoyComponent },
            { path: "add-product-category", component: AddProductCategoyComponent },
            { path: "edit-product/:product_id", component: EditProductComponent },
            { path: "add-product/:cat_id", component: AddProductComponent },
            { path: "edit-service/:product_id", component: EditServiceComponent },
            { path: "add-service/:cat_id", component: AddServiceComponent },
            { path: "customers", component: CustomersComponent },
            { path: "messages", component: MessagesComponent },
            { path: "chat/:user", component: ChatComponent },
            { path: "edit-owner-info", component: EditOwnerInfoComponent },
            { path: "edit-business-images", component: EditBusinessImagesComponent },
            { path: "report", component: ReportComponent },
            { path: "order-details/:order", component: OrderDetailsComponent },
            { path: "edit-social-media", component: EditSocialMediaComponent },
        ]
    }

];



@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CreatedAppRoutingModule { }
