import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppCreateComponent } from "./app-create.component";
import { BusinessInfoComponent } from './business-info/business-info.component';
import { OwnerInfoComponent } from './owner-info/owner-info.component';

const routes: Routes = [
    { path: "", component: AppCreateComponent },
    { path: "business-info", component: BusinessInfoComponent },
    { path: "owner-info", component: OwnerInfoComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppCreateRoutingModule { }
