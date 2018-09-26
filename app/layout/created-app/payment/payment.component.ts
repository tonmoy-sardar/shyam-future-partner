import { Component, OnInit, NgZone, ViewContainerRef } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreatedAppService, RadioOption } from "../../../core/services/created-app.service";
import { RouterExtensions } from "nativescript-angular/router";
import { LoadingIndicator } from "nativescript-loading-indicator"
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";
import { Color } from "tns-core-modules/color";
import { ExploreService } from "../../../core/services/explore.service";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { TermsDialogComponent } from '../../../core/component/terms-dialog/terms-dialog.component';
import { getString, setString, getBoolean, setBoolean, clear } from "application-settings";
import {
    Paytm,
    Order,
    TransactionCallback,
    IOSCallback
} from "@nstudio/nativescript-paytm";

@Component({
    selector: 'payment',
    moduleId: module.id,
    templateUrl: `payment.component.html`,
    styleUrls: [`payment.component.css`]
})
export class PaymentComponent implements OnInit {
    private feedback: Feedback;
    cuponForm: FormGroup;
    app_id: string;
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
    radioOptions?: Array<RadioOption>;
    subscriptionTypeOptions: Array<RadioOption>;
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
    paymentdetails_data: any;
    paytmFormDetails: any;
    paytm: Paytm;

    orderToPaytm: Order = {
        MID: "",
        ORDER_ID: "",
        CUST_ID: "",
        INDUSTRY_TYPE_ID: "",
        CHANNEL_ID: "",
        TXN_AMOUNT: "",
        WEBSITE: "",
        CALLBACK_URL: "",
        CHECKSUMHASH: ""
    };
    key: string = '';
    subscription_type: number;
    referralForm: FormGroup;
    referral_code: string;
    referral_user_id: number;
    options = {
        context: {},
        fullscreen: false,
        viewContainerRef: this.vcRef
    };
    agree_terms_condition: boolean = false;
    customer_email: string;
    constructor(
        private route: ActivatedRoute,
        private ngZone: NgZone,
        private CreatedAppService: CreatedAppService,
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
        private location: Location,
        private exploreService: ExploreService,
        private modal: ModalDialogService,
        private vcRef: ViewContainerRef
    ) {
        this.feedback = new Feedback();
        exploreService.homePageStatus(false);
    }

    ngOnInit() {
        var full_location = this.location.path().split('/');
        this.app_id = full_location[2].trim();
        if (getString('email') != undefined) {
            this.customer_email = getString('email')
        }
        else {
            this.customer_email = "customer@" + getString('contact_no')
        }
        this.paytm = new Paytm();
        this.getPriceList();
        this.getSubscriptionTypeList();
        this.getOfferList();

        this.cuponForm = this.formBuilder.group({
            coupon: [null, Validators.required]
        });
        this.referralForm = this.formBuilder.group({
            referral_code: [null, Validators.required]
        });
    }

    totalPriceChange() {
        var intial = parseFloat(this.priceList[0].cost)
        if (this.totalPrice < intial) {
            this.totalPrice = intial
        }
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

    getPaidTotal() {
        return (this.subscription_value * this.totalPrice).toFixed(2)
    }



    getSubscriptionTypeList() {
        this.CreatedAppService.getSubscriptionTypeList().subscribe(
            (res: any[]) => {
                // console.log(res)
                this.subscriptionTypeOptions = [];
                res.forEach(x => {
                    this.subscriptionTypeOptions.push(new RadioOption(x.type_name, x.id))
                })

                this.subscriptionTypeOptions[0]['selected'] = true;

                this.subscriptionTypeList = res;

                this.subscription_type_id = this.subscriptionTypeList[0]['id'];
                this.subscription_value = this.subscriptionTypeList[0]['days']
            },
            error => {
                console.log(error)
            }
        )
    }

    changeCheckedRadioSubscriptionMode(radioOption: RadioOption): void {
        radioOption.selected = !radioOption.selected;
        this.subscription_type = radioOption.id
        if (!radioOption.selected) {
            return;
        }

        // uncheck all other options
        this.subscriptionTypeOptions.forEach(option => {
            if (option.text !== radioOption.text) {
                option.selected = false;
            }
        });
        console.log(this.subscription_type)

        var arrData = this.subscriptionTypeList.filter(x => x.id == this.subscription_type)
        if (arrData.length > 0) {
            this.subscription_value = arrData[0]['days']
        }
    }

    openTermsModal(app_id) {
        this.modal.showModal(TermsDialogComponent, this.options).then(res => {
            console.log(res);
        })
    }

    // changeCheckedRadio(radioOption: RadioOption): void {
    //     radioOption.selected = !radioOption.selected;
    //     this.address_id = radioOption.id
    //     if (!radioOption.selected) {
    //         return;
    //     }

    //     // uncheck all other options
    //     this.radioOptions.forEach(option => {
    //         if (option.text !== radioOption.text) {
    //             option.selected = false;
    //         }
    //     });
    //     console.log(this.address_id)
    // }

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

    applyOffer() {
        if (this.cuponForm.valid) {
            var valid = this.offerList.filter(x => x.offer_code == this.cuponForm.value.coupon.toUpperCase())
            console.log(valid)
            if (valid.length > 0) {
                this.offer_price = valid[0].offer_value;
                this.coupon_code = valid[0].offer_code;
                console.log("sdadawd")
                this.feedback.success({
                    title: 'Coupon code accepted',
                    backgroundColor: new Color("green"),
                    titleColor: new Color("black"),
                    position: FeedbackPosition.Bottom,
                    type: FeedbackType.Custom
                });
            }
            else {
                console.log("qweqw")
                this.feedback.error({
                    title: 'Invalid Coupon code!',
                    backgroundColor: new Color("red"),
                    titleColor: new Color("black"),
                    position: FeedbackPosition.Bottom,
                    type: FeedbackType.Custom
                });

            }
        } else {
            this.markFormGroupTouched(this.referralForm)
        }

    }
    applyReferral() {
        if (this.referralForm.valid) {
            this.referral_code = this.referralForm.value.referral_code
            var data = {
                referral_code: this.referral_code
            }
            this.CreatedAppService.checkReferralCode(data).subscribe(
                res => {
                    console.log(res)
                    this.referral_user_id = res['referral_user_id'];
                    this.feedback.success({
                        title: 'Referral code accepted',
                        backgroundColor: new Color("green"),
                        titleColor: new Color("black"),
                        position: FeedbackPosition.Bottom,
                        type: FeedbackType.Custom
                    });
                },
                error => {
                    console.log(error)
                    this.feedback.error({
                        title: 'Invalid Referral Code!',
                        backgroundColor: new Color("red"),
                        titleColor: new Color("black"),
                        position: FeedbackPosition.Bottom,
                        type: FeedbackType.Custom
                    });
                }
            )
        } else {
            this.markFormGroupTouched(this.referralForm)
        }
    }
    getPaidTotalAfterOffer() {
        var totalPrice = this.subscription_value * this.totalPrice;
        var totalAfterOffer = totalPrice - this.offer_price;
        return (totalAfterOffer).toFixed(2);

    }

    updateAppSubscription(id, data) {
        this.loader.show(this.lodaing_options);
        this.CreatedAppService.updateAppSubscription(id, data).subscribe(
            res => {
                this.loader.hide();
                this.ngZone.run(() => {
                    this.router.navigate(['/created-app/', this.app_id, 'payment-success'])
                })
            },
            error => {
                this.loader.hide();
                console.log(error)
            }
        )
    }

    // redirectToSuccess()
    // {
    //     this.router.navigate(['created-app', this.app_id , 'payment-success'])
    // }
    toggleTermsCheck() {
        this.agree_terms_condition = !this.agree_terms_condition;
    }
    pay() {
        console.log(this.agree_terms_condition)
        var intial = parseFloat(this.priceList[0].cost)
        if (this.totalPrice < intial) {
            this.feedback.error({
                title: 'Price per day cannot be less than ' + intial,
                backgroundColor: new Color("red"),
                titleColor: new Color("black"),
                position: FeedbackPosition.Bottom,
                type: FeedbackType.Custom
            });
        }
        else if (!this.agree_terms_condition) {
            this.feedback.error({
                title: 'Please accept terms & conditions',
                backgroundColor: new Color("red"),
                titleColor: new Color("black"),
                position: FeedbackPosition.Bottom,
                type: FeedbackType.Custom
            });

        }
        else {
            var sum = this.totalPrice * this.subscription_value - this.offer_price;
            this.getPaymentSettingsDetails(sum);
        }

    }

    getPaymentSettingsDetails(amount) {
        this.CreatedAppService.paytmFormValue(this.app_id, amount, this.customer_email).subscribe(
            (
                data => {
                    this.paymentdetails_data = data;
                    var subscription_data = {
                        app_master: +this.app_id,
                        subscription_type: this.subscription_type_id,
                        price_master: this.price_id[0],
                        total_cost: (this.totalPrice * this.subscription_value) - this.offer_price,
                        order_id: this.paymentdetails_data['ORDER_ID']
                    }
                    var arrCoupon = this.offerList.filter(x => x.offer_code == this.coupon_code)
                    if (arrCoupon.length > 0) {
                        var coupon = arrCoupon[0]['id'];
                        subscription_data['offer_code'] = coupon;
                    }
                    if (this.referral_user_id != null) {
                        subscription_data['referral_code_userid'] = this.referral_user_id;
                    }
                    // console.log(subscription_data)
                    this.appSubscribe(subscription_data)
                }
            ),
        );
    }

    appSubscribe(data) {
        this.CreatedAppService.appSubscription(data).subscribe(
            res => {
                this.payViaPaytm();
            },
            error => {
                console.log(error)
            }
        )
    }

    markFormGroupTouched(formGroup: FormGroup) {
        (<any>Object).values(formGroup.controls).forEach(control => {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(c => this.markFormGroupTouched(c));
            }
        });
    }

    isFieldValid(form: FormGroup, field: string) {
        return !form.get(field).valid && (form.get(field).dirty || form.get(field).touched);
    }

    displayFieldCss(form: FormGroup, field: string) {
        return {
            'is-invalid': form.get(field).invalid && (form.get(field).dirty || form.get(field).touched),
            'is-valid': form.get(field).valid && (form.get(field).dirty || form.get(field).touched)
        };
    }

    payViaPaytm() {
        var $this = this;
        this.paytm.setIOSCallbacks({
            didFinishedResponse: function (response) {
                console.log(response);
            },
            didCancelTransaction: function () {
                console.log("User cancelled transaction");
            },
            errorMissingParameterError: function (error) {
                console.log(error);
            }
        });
        this.orderToPaytm = {
            MID: this.paymentdetails_data['MID'],
            ORDER_ID: this.paymentdetails_data['ORDER_ID'],
            CUST_ID: this.paymentdetails_data['CUST_ID'],
            INDUSTRY_TYPE_ID: this.paymentdetails_data['INDUSTRY_TYPE_ID'],
            CHANNEL_ID: this.paymentdetails_data['CHANNEL_ID'],
            TXN_AMOUNT: this.paymentdetails_data['TXN_AMOUNT'],
            WEBSITE: this.paymentdetails_data['WEBSITE'],
            CALLBACK_URL: this.paymentdetails_data['CALLBACK_URL'],
            CHECKSUMHASH: this.paymentdetails_data['CHECKSUMHASH']
        };
        console.log(new Date());
        console.log("createOrder");
        this.paytm.createOrder(this.orderToPaytm);
        this.paytm.initialize("STAGING");
        this.paytm.startPaymentTransaction({
            someUIErrorOccurred: function (inErrorMessage) {
                console.log("1");
                console.log(inErrorMessage);
            },
            onTransactionResponse: function (inResponse) {
                console.log("2");
                console.log(inResponse);
                var response = JSON.parse(inResponse);
                console.log(response);
                var ORDERID = response['ORDERID'];
                var txn_id = response['TXNID'];
                var txn_status;
                if (response['STATUS'] == 'TXN_SUCCESS') {
                    txn_status = 2;
                }
                else if (response['STATUS'] == 'PROCESSING') {
                    txn_status = 1;
                }
                else if (response['STATUS'] == 'TXN_FAILURE') {
                    txn_status = 0;
                }
                else if (response['STATUS'] == 'PENDING') {
                    txn_status = 3;
                }
                var data = {
                    txn_status: txn_status,
                    txn_id: txn_id,
                    paytm_response: inResponse
                }
                console.log(ORDERID);
                console.log(data);
                $this.updateAppSubscription(ORDERID, data)

            },
            networkNotAvailable: function () {
                console.log("3");
                console.log("Network not available");
            },
            clientAuthenticationFailed: function (inErrorMessage) {
                console.log("4")
                console.log(inErrorMessage);
            },
            onErrorLoadingWebPage: function (
                iniErrorCode,
                inErrorMessage,
                inFailingUrl
            ) {
                console.log("5")
                console.log(iniErrorCode, inErrorMessage, inFailingUrl);
            },
            onBackPressedCancelTransaction: function () {
                console.log("6")
                console.log("User cancelled transaction by pressing back button");
            },
            onTransactionCancel: function (inErrorMessage, inResponse) {
                console.log("7")
                console.log(inErrorMessage, inResponse);
            }
        });
    }
}