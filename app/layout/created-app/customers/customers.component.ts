import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreatedAppService } from "../../../core/services/created-app.service";
import { RouterExtensions } from "nativescript-angular/router";
import { CustomerService } from "../../../core/services/customer.service"
import { LoadingIndicator } from "nativescript-loading-indicator";
import { Location } from '@angular/common';
import { ExploreService } from "../../../core/services/explore.service";

@Component({
    selector: 'customers',
    moduleId: module.id,
    templateUrl: `customers.component.html`,
    styleUrls: [`customers.component.css`]
})

export class CustomersComponent implements OnInit {
    form: FormGroup;
    processing = false;
    app_id: string;
    visible_key: boolean;
    customer_list: any = [];
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
        private route: ActivatedRoute,
        private CreatedAppService: CreatedAppService,
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
        private customerService: CustomerService,
        private location: Location,
        private exploreService: ExploreService
    ) {
        exploreService.homePageStatus(false);
    }

    ngOnInit() {
        var full_location = this.location.path().split('/');
        this.app_id = full_location[2].trim();
        this.getCustomerList(this.app_id);
    }

    getCustomerList(id) {
        this.loader.show(this.lodaing_options);
        this.customerService.getCustomerListByApp(id).subscribe(
            res => {
                this.loader.hide();
                this.customer_list = res;
                this.visible_key = true;
            },
            error => {
                this.loader.hide();
                console.log(error)
            }
        )
    }
}