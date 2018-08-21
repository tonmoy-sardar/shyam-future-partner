import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterExtensions } from "nativescript-angular/router";
import { CreatedAppService } from "../../../core/services/created-app.service";
import { LoadingIndicator } from "nativescript-loading-indicator";
import { Location } from '@angular/common';
@Component({
    selector: 'order-details',
    moduleId: module.id,
    templateUrl: `order-details.component.html`,
    styleUrls: [`order-details.component.css`]
})

export class OrderDetailsComponent implements OnInit {
    form: FormGroup;
    processing = false;
    order_id: string;
    visible_key: boolean;
    order_details;
    app_id: string;

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
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
        private createdAppService: CreatedAppService,
        private location: Location,
    ) { }

    ngOnInit() {
        var full_location = this.location.path().split('/');
        this.app_id = full_location[2].trim();
        this.order_id = this.route.snapshot.params["order"];
       
        this.getAppOrderDetails(this.order_id)
    }

    getAppOrderDetails(id) {
        this.loader.show(this.lodaing_options);
        this.createdAppService.getAppOrderDetails(id).subscribe(
            res => {
                this.order_details = res[0];
                this.visible_key = true
                console.log(res)
                this.loader.hide();
            },
            error => {
                console.log(error)
                this.loader.hide();
            }
        )
    }

    getDiscount(price, discounted_price) {
        return Math.floor(((price - discounted_price) * 100) / price) + '%';
    }

    updateCustomerOrderPayment() {

        var data = {
            id:this.app_id,
        }
        this.loader.show(this.lodaing_options);
        this.createdAppService.updateCustomerOrderPayment(data).subscribe(
            res => {
                console.log("Success");
                this.loader.hide();
                this.getAppOrderDetails(this.order_id)

            },
            error => {
                this.loader.hide();
                console.log(error)
            }
        )

    }


    updateCustomerOrderDelivery() {
        var data = {
            id:this.app_id,
        }
        this.loader.show(this.lodaing_options);
        this.createdAppService.updateCustomerOrderDelivery(data).subscribe(
            res => {
                console.log("Success");
                this.loader.hide();
                this.getAppOrderDetails(this.order_id)

            },
            error => {
                this.loader.hide();
                console.log(error)
            }
        )

    }



}