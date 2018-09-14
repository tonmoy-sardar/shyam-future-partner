import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreatedAppService } from "../../../core/services/created-app.service";
import { RouterExtensions } from "nativescript-angular/router";
import { LoadingIndicator } from "nativescript-loading-indicator"
import { ExploreService } from "../../../core/services/explore.service";

@Component({
    selector: 'products',
    moduleId: module.id,
    templateUrl: `products.component.html`,
    styleUrls: [`products.component.css`]
})

export class ProductsComponent implements OnInit {
    form: FormGroup;
    processing = false;

    app_id: string;
    app_details: any;
    app_data = {
        logo: '',
        business_name: '',
        business_description: ''
    }

    category_list: any = [];
    serviceType;

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
        private exploreService: ExploreService
    ) {
        exploreService.homePageStatus(false);
    }

    ngOnInit() {
        var full_location = this.location.path().split('/');
        this.app_id = full_location[2].trim();
        if (full_location.length > 4) {
            this.key = full_location[4].trim();
        }
        this.getAppDetails(this.app_id);

        this.form = this.formBuilder.group({
            business_name: ['', Validators.required],
            business_description: ['', Validators.required]
        });


    }



    next() {
        this.router.navigate(['/created-app/' + this.app_id + '/payment'])
    }

    addProdCat() {
        if (this.key != '') {
            this.router.navigate(['/created-app/' + this.app_id + '/add-product-category/' + 'new'])
        }
        else {
            this.router.navigate(['/created-app/' + this.app_id + '/add-product-category'])
        }

    }

    editProdCat(id) {
        if (this.key != '') {
            this.router.navigate(['/created-app/' + this.app_id + '/edit-product-category/' + id + 'new'])
        }
        else {
            this.router.navigate(['/created-app/' + this.app_id + '/edit-product-category/' + id])
        }
    }

    addProd(id) {
        if (this.key != '') {
            this.router.navigate(['/created-app/' + this.app_id + '/add-product/' + id + '/new'])
        }
        else {
            this.router.navigate(['/created-app/' + this.app_id + '/add-product/' + id])
        }
    }

    editProd(id) {
        if (this.key != '') {
            this.router.navigate(['/created-app/' + this.app_id + '/edit-product/' + id + '/new'])
        }
        else {
            this.router.navigate(['/created-app/' + this.app_id + '/edit-product/' + id])
        }
    }

    addService(id) {
        if (this.key != '') {
            this.router.navigate(['/created-app/' + this.app_id + '/add-service/' + id + '/new'])
        }
        else {
            this.router.navigate(['/created-app/' + this.app_id + '/add-service/' + id])
        }
    }

    editService(id) {
        if (this.key != '') {
            this.router.navigate(['/created-app/' + this.app_id + '/edit-service/' + id + '/new'])
        }
        else {
            this.router.navigate(['/created-app/' + this.app_id + '/edit-service/' + id])
        }
    }

    getAppDetails(id) {
        this.loader.show(this.lodaing_options);
        this.CreatedAppService.getCreatedAppDetails(id).subscribe(
            res => {
                this.app_details = res;
                if (this.app_details.is_product_service) {
                    this.serviceType = this.app_details.is_product_service;
                }
                else {
                    this.serviceType = 1
                }
                this.app_data.logo = this.app_details.logo;
                this.app_data.business_name = this.app_details.business_name;
                this.app_data.business_description = this.app_details.business_description;

                this.category_list = this.app_details.app_product_categories;
                // console.log(this.customer_cart_data);
                for (var i = 0; i < this.category_list.length; i++) {
                    this.category_list[i]['items'] = JSON.parse(JSON.stringify(this.category_list[i].products));
                }

                console.log(res)
                this.visible_key = true
                console.log(res)
                this.loader.hide();
            },
            error => {
                this.loader.hide();
                console.log(error)
            }
        )
    }

    deleteProductCategory(id) {
        // this.processing = true;
        let data = {
            is_active: false
        }
        this.loader.show(this.lodaing_options);
        this.CreatedAppService.deleteProductCategory(id, data).subscribe(
            res => {
                console.log("Success");
                this.loader.hide();
                this.router.navigate(['/created-app/' + this.app_id + '/products'])
            },
            error => {
                this.loader.hide();
                console.log(error)
            }
        )
    }

    deleteProduct(id) {
        // this.processing = true;
        let data = {
            is_active: false
        }
        this.loader.show(this.lodaing_options);
        this.CreatedAppService.deleteProduct(id, data).subscribe(
            res => {
                console.log("Success");
                this.loader.hide();
                this.router.navigate(['/created-app/' + this.app_id + '/products'])
            },
            error => {
                this.loader.hide();
                console.log(error)
            }
        )
    }

    getDiscount(price, discounted_price) {
        return Math.floor(((price - discounted_price) * 100) / price) + '%';
    }

    markFormGroupTouched(formGroup: FormGroup) {
        (<any>Object).values(formGroup.controls).forEach(control => {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(c => this.markFormGroupTouched(c));
            }
        });
    }

    isFieldValid(field: string) {
        return !this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched);
    }

    displayFieldCss(field: string) {
        return {
            'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
            'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
        };
    }


}