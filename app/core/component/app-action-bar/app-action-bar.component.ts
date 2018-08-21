import { Component, OnInit, Input } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { getString, setString, getBoolean, setBoolean, clear } from "application-settings";
import { CreatedAppService } from "../../services/created-app.service";

@Component({
    selector: "app-action-bar",
    moduleId: module.id,
    templateUrl: "./app-action-bar.component.html",
    styleUrls: ['./app-action-bar.component.css']
})
export class AppActionBarComponent implements OnInit {
    app_details: any;
    product_list: any = [];
    @Input('appId') appId: string;
    visible_key: boolean
    isLoggedin: boolean;
    constructor(
        private _routerExtensions: RouterExtensions,
        private createdAppService: CreatedAppService,
        private routerExtensions: RouterExtensions
    ) {

    }

    ngOnInit() {
        if(getBoolean('isLoggedin')){
            this.isLoggedin = getBoolean('isLoggedin');
        }
        this.getAppDetails(this.appId);
    }    

    getAppDetails(id) {
        this.createdAppService.getCreatedAppDetails(id).subscribe(
            res => {
                this.app_details = res;
                this.app_details.app_product_categories.forEach(x => {
                    x.products.forEach(y => {
                        this.product_list.push(y)
                    })
                })
                console.log(res)
                console.log(this.product_list)
                this.visible_key = true;
            },
            error => {
                console.log(error)
            }
        )
    }
    goBack() {
        this.routerExtensions.back();
    }

    logout(){
        clear();
        this._routerExtensions.navigate(["/login"], { clearHistory: true });
    }

}