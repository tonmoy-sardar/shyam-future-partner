import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CreatedAppComponent } from "./created-app.component";
import { ManageAppComponent } from "./manage-app/manage-app.component";
import { EditAppComponent } from "./edit-app/edit-app.component";
import { ProductsComponent } from "./products/products.component";
import { EditProductCategoyComponent } from "./edit-product-category/edit-product-category.component";
import { EditProductComponent } from "./edit-product/edit-product.component";

import { CustomersComponent } from "./customers/customers.component";
import { MessagesComponent } from "./messages/messages.component";

const routes: Routes = [
    { path: "details/:id", component: CreatedAppComponent },
    { path: "manage-app/:id", component: ManageAppComponent },
    { path: "edit-app/:id", component: EditAppComponent },
    { path: "products/:id", component: ProductsComponent },
    { path: "edit-product-category/:app_id/:id", component: EditProductCategoyComponent },
    { path: "edit-product/:app_id/:id", component: EditProductComponent },
    { path: "customers/:id", component: CustomersComponent },
    { path: "messages/:id", component: MessagesComponent },
];



@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CreatedAppRoutingModule { }
