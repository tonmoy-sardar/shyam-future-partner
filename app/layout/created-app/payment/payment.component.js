"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var created_app_service_1 = require("../../../core/services/created-app.service");
var router_2 = require("nativescript-angular/router");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var nativescript_paytm_1 = require("@nstudio/nativescript-paytm");
var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(route, CreatedAppService, formBuilder, router, location) {
        this.route = route;
        this.CreatedAppService = CreatedAppService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.location = location;
        this.priceList = [];
        this.price_id = [];
        this.subscriptionTypeList = [];
        this.offerList = [];
        this.offer_price = 0;
        this.loader = new nativescript_loading_indicator_1.LoadingIndicator();
        this.lodaing_options = {
            message: 'Loading...',
            progress: 0.65,
            android: {
                indeterminate: true,
                cancelable: false,
                cancelListener: function (dialog) { console.log("Loading cancelled"); },
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
        };
        this.orderToPaytm = {
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
        this.key = '';
    }
    PaymentComponent.prototype.ngOnInit = function () {
        var full_location = this.location.path().split('/');
        this.app_id = full_location[2].trim();
        this.paytm = new nativescript_paytm_1.Paytm();
        this.getPriceList();
        this.getSubscriptionTypeList();
        this.getOfferList();
        this.form = this.formBuilder.group({
            coupon: [null, forms_1.Validators.required]
        });
    };
    PaymentComponent.prototype.getPriceList = function () {
        var _this = this;
        this.CreatedAppService.getPriceList().subscribe(function (res) {
            // console.log(res)
            _this.priceList = res;
            for (var i = 0; i < _this.priceList.length; i += 1) {
                if (i == 0) {
                    _this.priceList[i]['checked'] = true;
                    _this.priceList[i]['setDisabled'] = true;
                    _this.price_id.push(_this.priceList[i].id);
                }
                else {
                    _this.priceList[i]['checked'] = false;
                    _this.priceList[i]['setDisabled'] = false;
                }
            }
            _this.totalPrice = parseFloat(_this.priceList[0].cost);
        }, function (error) {
            // console.log(error)
        });
    };
    PaymentComponent.prototype.getPaidTotal = function () {
        return (this.subscription_value * this.totalPrice).toFixed(2);
    };
    PaymentComponent.prototype.getSubscriptionTypeList = function () {
        var _this = this;
        this.CreatedAppService.getSubscriptionTypeList().subscribe(function (res) {
            // console.log(res)
            _this.subscriptionTypeOptions = [];
            res.forEach(function (x) {
                _this.subscriptionTypeOptions.push(new created_app_service_1.RadioOption(x.type_name, x.id));
            });
            _this.subscriptionTypeOptions[0]['selected'] = true;
            _this.subscriptionTypeList = res;
            _this.subscription_type_id = _this.subscriptionTypeList[0]['id'];
            _this.subscription_value = _this.subscriptionTypeList[0]['days'];
        }, function (error) {
            console.log(error);
        });
    };
    PaymentComponent.prototype.changeCheckedRadioSubscriptionMode = function (radioOption) {
        var _this = this;
        radioOption.selected = !radioOption.selected;
        this.subscription_type = radioOption.id;
        if (!radioOption.selected) {
            return;
        }
        // uncheck all other options
        this.subscriptionTypeOptions.forEach(function (option) {
            if (option.text !== radioOption.text) {
                option.selected = false;
            }
        });
        console.log(this.subscription_type);
        var arrData = this.subscriptionTypeList.filter(function (x) { return x.id == _this.subscription_type; });
        if (arrData.length > 0) {
            this.subscription_value = arrData[0]['days'];
        }
    };
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
    PaymentComponent.prototype.getOfferList = function () {
        var _this = this;
        this.CreatedAppService.getOfferList().subscribe(function (res) {
            // console.log(res)
            _this.offerList = res;
        }, function (error) {
            console.log(error);
        });
    };
    PaymentComponent.prototype.applyOffer = function () {
        var _this = this;
        var valid = this.offerList.filter(function (x) { return x.offer_code == _this.coupon.toUpperCase(); });
        console.log(valid);
        if (valid.length > 0) {
            this.offer_price = valid[0].offer_value;
            this.coupon_code = valid[0].offer_code;
            console.log("sdadawd");
        }
        else {
            console.log("qweqw");
        }
    };
    PaymentComponent.prototype.getPaidTotalAfterOffer = function () {
        var totalPrice = this.subscription_value * this.totalPrice;
        var totalAfterOffer = totalPrice - this.offer_price;
        return (totalAfterOffer).toFixed(2);
    };
    PaymentComponent.prototype.updateAppSubscription = function (id, data) {
        var _this = this;
        this.loader.show(this.lodaing_options);
        this.CreatedAppService.updateAppSubscription(id, data).subscribe(function (res) {
            console.log(res);
            console.log("pa");
            console.log(_this.app_id);
            _this.loader.hide();
            //this.router.navigate(['/created-app/' + this.app_id + '/payment-success'])
            _this.router.navigateByUrl('/created-app/' + _this.app_id + '/payment-success');
            // this.offerList = res;
            console.log("asda");
        }, function (error) {
            _this.loader.hide();
            console.log(error);
        });
    };
    PaymentComponent.prototype.pay = function () {
        var sum = this.totalPrice * this.subscription_value - this.offer_price;
        this.getPaymentSettingsDetails(sum);
    };
    PaymentComponent.prototype.getPaymentSettingsDetails = function (amount) {
        var _this = this;
        this.CreatedAppService.paytmFormValue(this.app_id, amount).subscribe((function (data) {
            _this.paymentdetails_data = data;
            console.log(_this.paymentdetails_data);
            var subscription_data = {
                app_master: +_this.app_id,
                subscription_type: _this.subscription_type_id,
                price_master: _this.price_id[0],
                total_cost: (_this.totalPrice * _this.subscription_value) - _this.offer_price,
                order_id: _this.paymentdetails_data['ORDER_ID']
            };
            var arrCoupon = _this.offerList.filter(function (x) { return x.offer_code == _this.coupon_code; });
            if (arrCoupon.length > 0) {
                var coupon = arrCoupon[0]['id'];
                subscription_data['offer_code'] = coupon;
            }
            // console.log(subscription_data)
            _this.appSubscribe(subscription_data);
        }));
    };
    PaymentComponent.prototype.appSubscribe = function (data) {
        var _this = this;
        this.CreatedAppService.appSubscription(data).subscribe(function (res) {
            console.log(res);
            _this.payViaPaytm();
        }, function (error) {
            console.log(error);
        });
    };
    PaymentComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    PaymentComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched);
    };
    PaymentComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
            'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
        };
    };
    PaymentComponent.prototype.payViaPaytm = function () {
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
                };
                console.log(ORDERID);
                console.log(data);
                $this.updateAppSubscription(ORDERID, data);
            },
            networkNotAvailable: function () {
                console.log("3");
                console.log("Network not available");
            },
            clientAuthenticationFailed: function (inErrorMessage) {
                console.log("4");
                console.log(inErrorMessage);
            },
            onErrorLoadingWebPage: function (iniErrorCode, inErrorMessage, inFailingUrl) {
                console.log("5");
                console.log(iniErrorCode, inErrorMessage, inFailingUrl);
            },
            onBackPressedCancelTransaction: function () {
                console.log("6");
                console.log("User cancelled transaction by pressing back button");
            },
            onTransactionCancel: function (inErrorMessage, inResponse) {
                console.log("7");
                console.log(inErrorMessage, inResponse);
            }
        });
    };
    PaymentComponent = __decorate([
        core_1.Component({
            selector: 'payment',
            moduleId: module.id,
            templateUrl: "payment.component.html",
            styleUrls: ["payment.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            created_app_service_1.CreatedAppService,
            forms_1.FormBuilder,
            router_2.RouterExtensions,
            common_1.Location])
    ], PaymentComponent);
    return PaymentComponent;
}());
exports.PaymentComponent = PaymentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXltZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwwQ0FBMkM7QUFDM0MsMENBQWlEO0FBQ2pELHdDQUFvRTtBQUNwRSxrRkFBNEY7QUFDNUYsc0RBQStEO0FBQy9ELGlGQUFpRTtBQUNqRSxrRUFLcUM7QUFRckM7SUF5REksMEJBQ1ksS0FBcUIsRUFDckIsaUJBQW9DLEVBQ3BDLFdBQXdCLEVBQ3hCLE1BQXdCLEVBQ3hCLFFBQWtCO1FBSmxCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQTFEOUIsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBR25CLHlCQUFvQixHQUFRLEVBQUUsQ0FBQztRQUMvQixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBSXhCLFdBQU0sR0FBRyxJQUFJLGlEQUFnQixFQUFFLENBQUM7UUFHaEMsb0JBQWUsR0FBRztZQUNkLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsT0FBTyxFQUFFO2dCQUNMLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixVQUFVLEVBQUUsS0FBSztnQkFDakIsY0FBYyxFQUFFLFVBQVUsTUFBTSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQSxDQUFDLENBQUM7Z0JBQ3RFLEdBQUcsRUFBRSxHQUFHO2dCQUNSLG9CQUFvQixFQUFFLFNBQVM7Z0JBQy9CLHFCQUFxQixFQUFFLElBQUk7Z0JBQzNCLGFBQWEsRUFBRSxDQUFDO2dCQUNoQixp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ZCxZQUFZO2dCQUVaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUM1RCxDQUFDO1lBQ0QsOEJBQThCLEVBQUU7Z0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0RBQW9ELENBQUMsQ0FBQztZQUN0RSxDQUFDO1lBQ0QsbUJBQW1CLEVBQUUsVUFBVSxjQUFjLEVBQUUsVUFBVTtnQkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDNUMsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUF6WFEsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDO3lDQTJEcUIsdUJBQWM7WUFDRix1Q0FBaUI7WUFDdkIsbUJBQVc7WUFDaEIseUJBQWdCO1lBQ2QsaUJBQVE7T0E5RHJCLGdCQUFnQixDQTBYNUI7SUFBRCx1QkFBQztDQUFBLEFBMVhELElBMFhDO0FBMVhZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ3JlYXRlZEFwcFNlcnZpY2UsIFJhZGlvT3B0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvc2VydmljZXMvY3JlYXRlZC1hcHAuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBMb2FkaW5nSW5kaWNhdG9yIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2FkaW5nLWluZGljYXRvclwiXHJcbmltcG9ydCB7XHJcbiAgICBQYXl0bSxcclxuICAgIE9yZGVyLFxyXG4gICAgVHJhbnNhY3Rpb25DYWxsYmFjayxcclxuICAgIElPU0NhbGxiYWNrXHJcbn0gZnJvbSBcIkBuc3R1ZGlvL25hdGl2ZXNjcmlwdC1wYXl0bVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BheW1lbnQnLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBgcGF5bWVudC5jb21wb25lbnQuaHRtbGAsXHJcbiAgICBzdHlsZVVybHM6IFtgcGF5bWVudC5jb21wb25lbnQuY3NzYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBheW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZm9ybTogRm9ybUdyb3VwO1xyXG4gICAgYXBwX2lkOiBzdHJpbmc7XHJcbiAgICB0b3RhbFByaWNlOiBudW1iZXI7XHJcbiAgICBwcmljZUxpc3Q6IGFueSA9IFtdO1xyXG4gICAgcHJpY2VfaWQ6IGFueSA9IFtdO1xyXG4gICAgc3Vic2NyaXB0aW9uX3R5cGVfaWQ6IG51bWJlcjtcclxuICAgIHN1YnNjcmlwdGlvbl92YWx1ZTogbnVtYmVyO1xyXG4gICAgc3Vic2NyaXB0aW9uVHlwZUxpc3Q6IGFueSA9IFtdO1xyXG4gICAgb2ZmZXJMaXN0OiBhbnkgPSBbXTtcclxuICAgIG9mZmVyX3ByaWNlOiBudW1iZXIgPSAwO1xyXG4gICAgY291cG9uX2NvZGU6IHN0cmluZztcclxuICAgIGNvdXBvbjpzdHJpbmc7XHJcbiAgICB2aXNpYmxlX2tleTogYm9vbGVhbjtcclxuICAgIGxvYWRlciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XHJcbiAgICByYWRpb09wdGlvbnM/OiBBcnJheTxSYWRpb09wdGlvbj47XHJcbiAgICBzdWJzY3JpcHRpb25UeXBlT3B0aW9uczogQXJyYXk8UmFkaW9PcHRpb24+O1xyXG4gICAgbG9kYWluZ19vcHRpb25zID0ge1xyXG4gICAgICAgIG1lc3NhZ2U6ICdMb2FkaW5nLi4uJyxcclxuICAgICAgICBwcm9ncmVzczogMC42NSxcclxuICAgICAgICBhbmRyb2lkOiB7XHJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYW5jZWxMaXN0ZW5lcjogZnVuY3Rpb24gKGRpYWxvZykgeyBjb25zb2xlLmxvZyhcIkxvYWRpbmcgY2FuY2VsbGVkXCIpIH0sXHJcbiAgICAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICAgICBwcm9ncmVzc051bWJlckZvcm1hdDogXCIlMWQvJTJkXCIsXHJcbiAgICAgICAgICAgIHByb2dyZXNzUGVyY2VudEZvcm1hdDogMC41MyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3NTdHlsZTogMSxcclxuICAgICAgICAgICAgc2Vjb25kYXJ5UHJvZ3Jlc3M6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlvczoge1xyXG4gICAgICAgICAgICBkZXRhaWxzOiBcIkFkZGl0aW9uYWwgZGV0YWlsIG5vdGUhXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogMTAsXHJcbiAgICAgICAgICAgIGRpbUJhY2tncm91bmQ6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiM0QjlFRDZcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd1wiLFxyXG4gICAgICAgICAgICB1c2VySW50ZXJhY3Rpb25FbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgaGlkZUJlemVsOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBheW1lbnRkZXRhaWxzX2RhdGE6IGFueTtcclxuICAgIHBheXRtRm9ybURldGFpbHM6IGFueTtcclxuICAgIHBheXRtOiBQYXl0bTtcclxuXHJcbiAgICBvcmRlclRvUGF5dG06IE9yZGVyID0ge1xyXG4gICAgICAgIE1JRDogXCJcIixcclxuICAgICAgICBPUkRFUl9JRDogXCJcIixcclxuICAgICAgICBDVVNUX0lEOiBcIlwiLFxyXG4gICAgICAgIElORFVTVFJZX1RZUEVfSUQ6IFwiXCIsXHJcbiAgICAgICAgQ0hBTk5FTF9JRDogXCJcIixcclxuICAgICAgICBUWE5fQU1PVU5UOiBcIlwiLFxyXG4gICAgICAgIFdFQlNJVEU6IFwiXCIsXHJcbiAgICAgICAgQ0FMTEJBQ0tfVVJMOiBcIlwiLFxyXG4gICAgICAgIENIRUNLU1VNSEFTSDogXCJcIlxyXG4gICAgfTtcclxuICAgIGtleTogc3RyaW5nID0gJyc7XHJcbiAgICBzdWJzY3JpcHRpb25fdHlwZTogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBDcmVhdGVkQXBwU2VydmljZTogQ3JlYXRlZEFwcFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHZhciBmdWxsX2xvY2F0aW9uID0gdGhpcy5sb2NhdGlvbi5wYXRoKCkuc3BsaXQoJy8nKTtcclxuICAgICAgICB0aGlzLmFwcF9pZCA9IGZ1bGxfbG9jYXRpb25bMl0udHJpbSgpO1xyXG4gICAgICAgIHRoaXMucGF5dG0gPSBuZXcgUGF5dG0oKTtcclxuICAgICAgICB0aGlzLmdldFByaWNlTGlzdCgpO1xyXG4gICAgICAgIHRoaXMuZ2V0U3Vic2NyaXB0aW9uVHlwZUxpc3QoKTtcclxuICAgICAgICB0aGlzLmdldE9mZmVyTGlzdCgpO1xyXG5cclxuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgY291cG9uOiBbbnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRQcmljZUxpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5DcmVhdGVkQXBwU2VydmljZS5nZXRQcmljZUxpc3QoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlTGlzdCA9IHJlcztcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcmljZUxpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VMaXN0W2ldWydjaGVja2VkJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlTGlzdFtpXVsnc2V0RGlzYWJsZWQnXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VfaWQucHVzaCh0aGlzLnByaWNlTGlzdFtpXS5pZClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VMaXN0W2ldWydjaGVja2VkJ10gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZUxpc3RbaV1bJ3NldERpc2FibGVkJ10gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbFByaWNlID0gcGFyc2VGbG9hdCh0aGlzLnByaWNlTGlzdFswXS5jb3N0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFpZFRvdGFsKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5zdWJzY3JpcHRpb25fdmFsdWUgKiB0aGlzLnRvdGFsUHJpY2UpLnRvRml4ZWQoMilcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGdldFN1YnNjcmlwdGlvblR5cGVMaXN0KCkge1xyXG4gICAgICAgIHRoaXMuQ3JlYXRlZEFwcFNlcnZpY2UuZ2V0U3Vic2NyaXB0aW9uVHlwZUxpc3QoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXM6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblR5cGVPcHRpb25zID0gW107XHJcbiAgICAgICAgICAgICAgICByZXMuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblR5cGVPcHRpb25zLnB1c2gobmV3IFJhZGlvT3B0aW9uKHgudHlwZV9uYW1lLCB4LmlkKSlcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25UeXBlT3B0aW9uc1swXVsnc2VsZWN0ZWQnXSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25UeXBlTGlzdCA9IHJlcztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbl90eXBlX2lkID0gdGhpcy5zdWJzY3JpcHRpb25UeXBlTGlzdFswXVsnaWQnXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uX3ZhbHVlID0gdGhpcy5zdWJzY3JpcHRpb25UeXBlTGlzdFswXVsnZGF5cyddXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUNoZWNrZWRSYWRpb1N1YnNjcmlwdGlvbk1vZGUocmFkaW9PcHRpb246IFJhZGlvT3B0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgcmFkaW9PcHRpb24uc2VsZWN0ZWQgPSAhcmFkaW9PcHRpb24uc2VsZWN0ZWQ7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25fdHlwZSA9IHJhZGlvT3B0aW9uLmlkXHJcbiAgICAgICAgaWYgKCFyYWRpb09wdGlvbi5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB1bmNoZWNrIGFsbCBvdGhlciBvcHRpb25zXHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25UeXBlT3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb24udGV4dCAhPT0gcmFkaW9PcHRpb24udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN1YnNjcmlwdGlvbl90eXBlKVxyXG5cclxuICAgICAgICB2YXIgYXJyRGF0YSA9IHRoaXMuc3Vic2NyaXB0aW9uVHlwZUxpc3QuZmlsdGVyKHggPT4geC5pZCA9PSB0aGlzLnN1YnNjcmlwdGlvbl90eXBlKVxyXG4gICAgICAgIGlmIChhcnJEYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25fdmFsdWUgPSBhcnJEYXRhWzBdWydkYXlzJ11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hhbmdlQ2hlY2tlZFJhZGlvKHJhZGlvT3B0aW9uOiBSYWRpb09wdGlvbik6IHZvaWQge1xyXG4gICAgLy8gICAgIHJhZGlvT3B0aW9uLnNlbGVjdGVkID0gIXJhZGlvT3B0aW9uLnNlbGVjdGVkO1xyXG4gICAgLy8gICAgIHRoaXMuYWRkcmVzc19pZCA9IHJhZGlvT3B0aW9uLmlkXHJcbiAgICAvLyAgICAgaWYgKCFyYWRpb09wdGlvbi5zZWxlY3RlZCkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAvLyB1bmNoZWNrIGFsbCBvdGhlciBvcHRpb25zXHJcbiAgICAvLyAgICAgdGhpcy5yYWRpb09wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAob3B0aW9uLnRleHQgIT09IHJhZGlvT3B0aW9uLnRleHQpIHtcclxuICAgIC8vICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5hZGRyZXNzX2lkKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGdldE9mZmVyTGlzdCgpIHtcclxuICAgICAgICB0aGlzLkNyZWF0ZWRBcHBTZXJ2aWNlLmdldE9mZmVyTGlzdCgpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgIHRoaXMub2ZmZXJMaXN0ID0gcmVzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBhcHBseU9mZmVyKClcclxuICAgIHtcclxuICAgICAgICB2YXIgdmFsaWQgPSB0aGlzLm9mZmVyTGlzdC5maWx0ZXIoeCA9PiB4Lm9mZmVyX2NvZGUgPT0gdGhpcy5jb3Vwb24udG9VcHBlckNhc2UoKSlcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWxpZClcclxuICAgICAgICBpZiAodmFsaWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdGhpcy5vZmZlcl9wcmljZSA9IHZhbGlkWzBdLm9mZmVyX3ZhbHVlO1xyXG4gICAgICAgICAgdGhpcy5jb3Vwb25fY29kZSA9IHZhbGlkWzBdLm9mZmVyX2NvZGU7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInNkYWRhd2RcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicXdlcXdcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRQYWlkVG90YWxBZnRlck9mZmVyICgpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHRvdGFsUHJpY2UgPSAgdGhpcy5zdWJzY3JpcHRpb25fdmFsdWUgKiB0aGlzLnRvdGFsUHJpY2U7XHJcbiAgICAgICAgdmFyIHRvdGFsQWZ0ZXJPZmZlciA9IHRvdGFsUHJpY2UgLSB0aGlzLm9mZmVyX3ByaWNlO1xyXG4gICAgICAgIHJldHVybih0b3RhbEFmdGVyT2ZmZXIpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQXBwU3Vic2NyaXB0aW9uKGlkLGRhdGEpIHtcclxuICAgICAgICB0aGlzLmxvYWRlci5zaG93KHRoaXMubG9kYWluZ19vcHRpb25zKTtcclxuICAgICAgICB0aGlzLkNyZWF0ZWRBcHBTZXJ2aWNlLnVwZGF0ZUFwcFN1YnNjcmlwdGlvbihpZCxkYXRhKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBhXCIpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFwcF9pZClcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY3JlYXRlZC1hcHAvJyArIHRoaXMuYXBwX2lkICsgJy9wYXltZW50LXN1Y2Nlc3MnXSlcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9jcmVhdGVkLWFwcC8nICsgdGhpcy5hcHBfaWQgKyAnL3BheW1lbnQtc3VjY2VzcycpO1xyXG4gICAgICAgICAgICAgICAvLyB0aGlzLm9mZmVyTGlzdCA9IHJlcztcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhc2RhXCIpXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBwYXkoKSB7XHJcbiAgICAgICAgdmFyIHN1bSA9IHRoaXMudG90YWxQcmljZSAqIHRoaXMuc3Vic2NyaXB0aW9uX3ZhbHVlIC0gdGhpcy5vZmZlcl9wcmljZTtcclxuICAgICAgICB0aGlzLmdldFBheW1lbnRTZXR0aW5nc0RldGFpbHMoc3VtKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXltZW50U2V0dGluZ3NEZXRhaWxzKGFtb3VudCkge1xyXG4gICAgICAgIHRoaXMuQ3JlYXRlZEFwcFNlcnZpY2UucGF5dG1Gb3JtVmFsdWUodGhpcy5hcHBfaWQsIGFtb3VudCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBheW1lbnRkZXRhaWxzX2RhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGF5bWVudGRldGFpbHNfZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uX2RhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcF9tYXN0ZXI6ICt0aGlzLmFwcF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uX3R5cGU6IHRoaXMuc3Vic2NyaXB0aW9uX3R5cGVfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlX21hc3RlcjogdGhpcy5wcmljZV9pZFswXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxfY29zdDogKHRoaXMudG90YWxQcmljZSAqIHRoaXMuc3Vic2NyaXB0aW9uX3ZhbHVlKSAtIHRoaXMub2ZmZXJfcHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyX2lkOiB0aGlzLnBheW1lbnRkZXRhaWxzX2RhdGFbJ09SREVSX0lEJ11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyckNvdXBvbiA9IHRoaXMub2ZmZXJMaXN0LmZpbHRlcih4ID0+IHgub2ZmZXJfY29kZSA9PSB0aGlzLmNvdXBvbl9jb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJDb3Vwb24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY291cG9uID0gYXJyQ291cG9uWzBdWydpZCddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25fZGF0YVsnb2ZmZXJfY29kZSddID0gY291cG9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdWJzY3JpcHRpb25fZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFN1YnNjcmliZShzdWJzY3JpcHRpb25fZGF0YSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcFN1YnNjcmliZShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5DcmVhdGVkQXBwU2VydmljZS5hcHBTdWJzY3JpcHRpb24oZGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXlWaWFQYXl0bSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBtYXJrRm9ybUdyb3VwVG91Y2hlZChmb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xyXG4gICAgICAgICg8YW55Pk9iamVjdCkudmFsdWVzKGZvcm1Hcm91cC5jb250cm9scykuZm9yRWFjaChjb250cm9sID0+IHtcclxuICAgICAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICAgICAgICAgIGlmIChjb250cm9sLmNvbnRyb2xzKSB7XHJcbiAgICAgICAgICAgICAgICBjb250cm9sLmNvbnRyb2xzLmZvckVhY2goYyA9PiB0aGlzLm1hcmtGb3JtR3JvdXBUb3VjaGVkKGMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRmllbGRWYWxpZChmaWVsZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmZvcm0uZ2V0KGZpZWxkKS52YWxpZCAmJiAodGhpcy5mb3JtLmdldChmaWVsZCkuZGlydHkgfHwgdGhpcy5mb3JtLmdldChmaWVsZCkudG91Y2hlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheUZpZWxkQ3NzKGZpZWxkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAnaXMtaW52YWxpZCc6IHRoaXMuZm9ybS5nZXQoZmllbGQpLmludmFsaWQgJiYgKHRoaXMuZm9ybS5nZXQoZmllbGQpLmRpcnR5IHx8IHRoaXMuZm9ybS5nZXQoZmllbGQpLnRvdWNoZWQpLFxyXG4gICAgICAgICAgICAnaXMtdmFsaWQnOiB0aGlzLmZvcm0uZ2V0KGZpZWxkKS52YWxpZCAmJiAodGhpcy5mb3JtLmdldChmaWVsZCkuZGlydHkgfHwgdGhpcy5mb3JtLmdldChmaWVsZCkudG91Y2hlZClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHBheVZpYVBheXRtKCkge1xyXG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wYXl0bS5zZXRJT1NDYWxsYmFja3Moe1xyXG4gICAgICAgICAgICBkaWRGaW5pc2hlZFJlc3BvbnNlOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGlkQ2FuY2VsVHJhbnNhY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBjYW5jZWxsZWQgdHJhbnNhY3Rpb25cIik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yTWlzc2luZ1BhcmFtZXRlckVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub3JkZXJUb1BheXRtID0ge1xyXG4gICAgICAgICAgICBNSUQ6IHRoaXMucGF5bWVudGRldGFpbHNfZGF0YVsnTUlEJ10sXHJcbiAgICAgICAgICAgIE9SREVSX0lEOiB0aGlzLnBheW1lbnRkZXRhaWxzX2RhdGFbJ09SREVSX0lEJ10sXHJcbiAgICAgICAgICAgIENVU1RfSUQ6IHRoaXMucGF5bWVudGRldGFpbHNfZGF0YVsnQ1VTVF9JRCddLFxyXG4gICAgICAgICAgICBJTkRVU1RSWV9UWVBFX0lEOiB0aGlzLnBheW1lbnRkZXRhaWxzX2RhdGFbJ0lORFVTVFJZX1RZUEVfSUQnXSxcclxuICAgICAgICAgICAgQ0hBTk5FTF9JRDogdGhpcy5wYXltZW50ZGV0YWlsc19kYXRhWydDSEFOTkVMX0lEJ10sXHJcbiAgICAgICAgICAgIFRYTl9BTU9VTlQ6IHRoaXMucGF5bWVudGRldGFpbHNfZGF0YVsnVFhOX0FNT1VOVCddLFxyXG4gICAgICAgICAgICBXRUJTSVRFOiB0aGlzLnBheW1lbnRkZXRhaWxzX2RhdGFbJ1dFQlNJVEUnXSxcclxuICAgICAgICAgICAgQ0FMTEJBQ0tfVVJMOiB0aGlzLnBheW1lbnRkZXRhaWxzX2RhdGFbJ0NBTExCQUNLX1VSTCddLFxyXG4gICAgICAgICAgICBDSEVDS1NVTUhBU0g6IHRoaXMucGF5bWVudGRldGFpbHNfZGF0YVsnQ0hFQ0tTVU1IQVNIJ11cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ldyBEYXRlKCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlT3JkZXJcIik7XHJcbiAgICAgICAgdGhpcy5wYXl0bS5jcmVhdGVPcmRlcih0aGlzLm9yZGVyVG9QYXl0bSk7XHJcbiAgICAgICAgdGhpcy5wYXl0bS5pbml0aWFsaXplKFwiU1RBR0lOR1wiKTtcclxuICAgICAgICB0aGlzLnBheXRtLnN0YXJ0UGF5bWVudFRyYW5zYWN0aW9uKHtcclxuICAgICAgICAgICAgc29tZVVJRXJyb3JPY2N1cnJlZDogZnVuY3Rpb24gKGluRXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjFcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbkVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uVHJhbnNhY3Rpb25SZXNwb25zZTogZnVuY3Rpb24gKGluUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMlwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gSlNPTi5wYXJzZShpblJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIHZhciBPUkRFUklEID0gcmVzcG9uc2VbJ09SREVSSUQnXTtcclxuICAgICAgICAgICAgICAgIHZhciB0eG5faWQgPSByZXNwb25zZVsnVFhOSUQnXTtcclxuICAgICAgICAgICAgICAgIHZhciB0eG5fc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2VbJ1NUQVRVUyddID09ICdUWE5fU1VDQ0VTUycpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHhuX3N0YXR1cyA9IDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHJlc3BvbnNlWydTVEFUVVMnXSA9PSAnUFJPQ0VTU0lORycpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHhuX3N0YXR1cyA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHJlc3BvbnNlWydTVEFUVVMnXSA9PSAnVFhOX0ZBSUxVUkUnKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR4bl9zdGF0dXMgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihyZXNwb25zZVsnU1RBVFVTJ10gPT0gJ1BFTkRJTkcnKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR4bl9zdGF0dXMgPSAzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPXtcclxuICAgICAgICAgICAgICAgICAgICB0eG5fc3RhdHVzOiB0eG5fc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHR4bl9pZDogdHhuX2lkLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coT1JERVJJRCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAkdGhpcy51cGRhdGVBcHBTdWJzY3JpcHRpb24oT1JERVJJRCxkYXRhKVxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbmV0d29ya05vdEF2YWlsYWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIzXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXR3b3JrIG5vdCBhdmFpbGFibGVcIik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsaWVudEF1dGhlbnRpY2F0aW9uRmFpbGVkOiBmdW5jdGlvbiAoaW5FcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiNFwiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5FcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkVycm9yTG9hZGluZ1dlYlBhZ2U6IGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgICAgIGluaUVycm9yQ29kZSxcclxuICAgICAgICAgICAgICAgIGluRXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgaW5GYWlsaW5nVXJsXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI1XCIpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmlFcnJvckNvZGUsIGluRXJyb3JNZXNzYWdlLCBpbkZhaWxpbmdVcmwpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkJhY2tQcmVzc2VkQ2FuY2VsVHJhbnNhY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiNlwiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGNhbmNlbGxlZCB0cmFuc2FjdGlvbiBieSBwcmVzc2luZyBiYWNrIGJ1dHRvblwiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25UcmFuc2FjdGlvbkNhbmNlbDogZnVuY3Rpb24gKGluRXJyb3JNZXNzYWdlLCBpblJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjdcIilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluRXJyb3JNZXNzYWdlLCBpblJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19