import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreatedAppService } from "../../../core/services/created-app.service";
import { RouterExtensions } from "nativescript-angular/router";
import { LoadingIndicator } from "nativescript-loading-indicator";
import { Location } from '@angular/common';
@Component({
    selector: 'edit-service',
    moduleId: module.id,
    templateUrl: `edit-service.component.html`,
    styleUrls: [`edit-service.component.css`]
})

export class EditServiceComponent implements OnInit {
    form: FormGroup;

    app_id: string;
    product_id: string;
    product_details: any;
    product_data = {
        product_name: '',
        price: '',
        discounted_price: '',
        packing_charges: '',
        tags: '',
        app_master: '',
        product_category: ''
    }
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
    constructor(
        private route: ActivatedRoute,
        private CreatedAppService: CreatedAppService,
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
        private location: Location,
    ) { }

    ngOnInit() {
        var full_location = this.location.path().split('/');
        this.app_id = full_location[2].trim();
        this.product_id = this.route.snapshot.params["product_id"];
        console.log(this.product_id);
        console.log(this.app_id);
        this.getProductDetails(this.product_id);
        this.form = this.formBuilder.group({
            product_name: ['', Validators.required],
            price: ['0.00', Validators.required],
            discounted_price: ['0.00'],
            packing_charges: ['0.00'],
            tags: ['']
        });
    }

    getProductDetails(id) {
        this.loader.show(this.lodaing_options);
        this.CreatedAppService.getProductDetails(id).subscribe(
            res => {
                this.product_details = res;

                this.product_data.product_name = this.product_details.product_name;
                this.product_data.price = this.product_details.price;
                this.product_data.discounted_price = this.product_details.discounted_price;
                this.product_data.packing_charges = this.product_details.packing_charges;
                this.product_data.tags = this.product_details.tags;
                this.product_data.app_master = this.product_details.app_master;
                this.product_data.product_category = this.product_details.product_category;


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

    updateProduct() {
        if (this.form.valid) {
            console.log(this.product_data);

            this.loader.show(this.lodaing_options);
            this.CreatedAppService.updateProduct(this.product_id, this.product_data).subscribe(
                res => {
                    console.log("Success");
                    this.loader.hide();
                    this.router.navigate(['/created-app/' + this.app_id+'/products'])

                },
                error => {
                    this.loader.hide();
                    console.log(error)
                }
            )

        }
        else {
            this.markFormGroupTouched(this.form)
        }
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