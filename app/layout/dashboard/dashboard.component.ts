import { Component, OnInit } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';
import { LoadingIndicator } from "nativescript-loading-indicator"

registerElement('CardView', () => CardView);

import { ExploreService } from "../../core/services/explore.service";
import { getString, setString, getBoolean, setBoolean, clear } from "application-settings";
import * as Globals from '../../core/globals';

@Component({
    selector: "dashboard",
    moduleId: module.id,
    templateUrl: "./dashboard.component.html",
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    user_id: string;
    user_app_list: any = [];
    base_url: string = Globals.img_base_url;
    processing = false;

    loader = new LoadingIndicator();
    lodaing_options = {
        message: 'Loading...',
        progress: 0.65,
        android: {
            indeterminate: true,
            cancelable: false,
            cancelListener: function (dialog) { console.log("Loading cancelled") },
            max: 100,
            progressNumberFormat: "%1d/%2d",
            progressPercentFormat: 0.53,
            progressStyle: 1,
            secondaryProgress: 1
        },
        ios: {
            details: "Additional detail note!",
            margin: 10,
            dimBackground: true,
            color: "#4B9ED6",
            backgroundColor: "yellow",
            userInteractionEnabled: false,
            hideBezel: true,
        }
    }

    constructor(
        private exploreService: ExploreService
    ) {

    }

    ngOnInit() {
        this.user_id = getString('user_id');
        console.log(this.user_id);
        this.getDashboardAppList();

    }

    getDashboardAppList() {
        this.loader.show(this.lodaing_options);
        this.exploreService.getAppAndUserDetailsByUserID(this.user_id).subscribe(
            res => {
                // this.processing = false;
                console.log(res);
                this.user_app_list = res['user_details'][0].app_details;
                console.log(this.user_app_list);
                this.loader.hide();
            },
            error => {
                // this.processing = false;
                console.log(error)
                this.loader.hide();
            }
        )
    }
}