import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreatedAppService } from "../../../core/services/created-app.service";
import { RouterExtensions } from "nativescript-angular/router";
import { LoadingIndicator } from "nativescript-loading-indicator"

@Component({
    selector: 'payment',
    moduleId: module.id,
    templateUrl: `payment.component.html`,
    styleUrls: [`payment.component.css`]
})
export class PaymentComponent implements OnInit {

    totalPrice: number;
    priceList: any = [];
    price_id: any = [];
    subscription_type_id: number;
    subscription_value: number;
    subscriptionTypeList: any = [];
    offerList: any = [];
    offer_price: number = 0;
    coupon_code: string;
    visible_key: boolean;
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
    key: string = '';
    constructor(
        private route: ActivatedRoute,
        private CreatedAppService: CreatedAppService,
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
        private location: Location,
    ) { }

    ngOnInit() {
        this.getPriceList();
        this.getSubscriptionTypeList();
        this.getOfferList();
    }


    getPriceList() {
        this.CreatedAppService.getPriceList().subscribe(
            res => {
                // console.log(res)
                this.priceList = res;
                for (var i = 0; i < this.priceList.length; i += 1) {
                    if (i == 0) {
                        this.priceList[i]['checked'] = true;
                        this.priceList[i]['setDisabled'] = true;
                        this.price_id.push(this.priceList[i].id)
                    }
                    else {
                        this.priceList[i]['checked'] = false;
                        this.priceList[i]['setDisabled'] = false;
                    }

                }
                this.totalPrice = parseFloat(this.priceList[0].cost);
            },
            error => {
                // console.log(error)
            }
        )
    }

    getSubscriptionTypeList() {
        this.CreatedAppService.getSubscriptionTypeList().subscribe(
            res => {
                // console.log(res)
                this.subscriptionTypeList = res;
                this.subscription_type_id = this.subscriptionTypeList[0]['id'];
                this.subscription_value = this.subscriptionTypeList[0]['days']
            },
            error => {
                console.log(error)
            }
        )
    }

    getOfferList() {
        this.CreatedAppService.getOfferList().subscribe(
            res => {
                // console.log(res)
                this.offerList = res;
            },
            error => {
                console.log(error)
            }
        )
    }
}