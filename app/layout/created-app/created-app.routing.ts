import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CreatedAppComponent } from "./created-app.component";
import { ManageAppComponent } from "./manage-app/manage-app.component";

const routes: Routes = [
    { path: "details/:id", component: CreatedAppComponent },
    { path: "manage-app/:id", component: ManageAppComponent },
];



@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CreatedAppRoutingModule { }
