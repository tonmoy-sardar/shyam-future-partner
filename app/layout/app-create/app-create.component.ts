import { Component, OnInit } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';
import { LoadingIndicator } from "nativescript-loading-indicator"
import { CreatedAppService } from "../../core/services/created-app.service";
import { SecureStorage } from "nativescript-secure-storage";
import { RouterExtensions } from "nativescript-angular/router";
// registerElement('CardView', () => CardView);

import { ExploreService } from "../../core/services/explore.service";
import { getString, setString, getBoolean, setBoolean, clear } from "application-settings";
import * as Globals from '../../core/globals';


@Component({
    selector: "app-create",
    moduleId: module.id,
    templateUrl: "./app-create.component.html",
    styleUrls: ['./app-create.component.css']
})
export class AppCreateComponent implements OnInit {
    user_id: string;
    category_list: any = [];
    base_url: string = Globals.img_base_url;
    processing = false;
    secureStorage: SecureStorage;

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
        private exploreService: ExploreService,
        private createdAppService: CreatedAppService,
        private router: RouterExtensions,
    ) {
        this.secureStorage = new SecureStorage();
        exploreService.homePageStatus(false);
    }

    ngOnInit() {
        this.user_id = getString('user_id');
       
        this.getCategoryList();

    }

    chooseCategory(id)
    {
        var data = {
            app_category: id
        }
        this.setCreateAppData(data);

        this.router.navigate(['/app-create/business-info'])
    }

    setCreateAppData(data) {
        this.secureStorage.set({
            key: 'create_app_data',
            value: JSON.stringify(data)
        }).then(success => {
        });
    };

    getCategoryList() {
        this.loader.show(this.lodaing_options);
        this.createdAppService.getCategoryList().subscribe(
          res => {
            this.category_list = res;
            this.loader.hide();
          },
          error => {
            console.log(error)
            this.loader.hide();
          }
        )
      }

    
}