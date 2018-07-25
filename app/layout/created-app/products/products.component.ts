import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreatedAppService } from "../../../core/services/created-app.service";
import { RouterExtensions } from "nativescript-angular/router";

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
    

    visible_key: boolean;
    constructor(
        private route: ActivatedRoute,
        private CreatedAppService: CreatedAppService,
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
    ) { }

    ngOnInit() {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
        this.getAppDetails(this.app_id);

        this.form = this.formBuilder.group({
            business_name: ['', Validators.required],
            business_description: ['', Validators.required]
        });
    }

    getAppDetails(id) {
        this.CreatedAppService.getCreatedAppDetails(id).subscribe(
            res => {
                this.app_details = res;
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

            },
            error => {
                console.log(error)
            }
        )
    }

    updateAppInfo() {
        if (this.form.valid) {
            this.processing = true;
            console.log("aaa");
            console.log(this.form.value);


            this.CreatedAppService.updateAppInfo(this.app_id, this.form.value).subscribe(
                res => {
                    console.log("Success");

                    this.router.navigate(['/created-app/manage-app/' + this.app_id])

                },
                error => {
                    console.log(error)
                }
            )

        }
        else {
            this.markFormGroupTouched(this.form)
        }
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