import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreatedAppService } from "../../../core/services/created-app.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: 'edit-product',
    moduleId: module.id,
    templateUrl: `edit-product.component.html`,
    styleUrls: [`edit-product.component.css`]
})

export class EditProductComponent implements OnInit {
    form: FormGroup;
    processing = false;

    app_id: string;
    product_id: string;
    product_details: any;
    product_data = {
        product_name: '',
        price:'',
        discounted_price:'',
        packing_charges:'',
        tags:'',
        app_master:'',
        product_category:''
    }
    visible_key: boolean;
    constructor(
        private route: ActivatedRoute,
        private CreatedAppService: CreatedAppService,
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
    ) { }

    ngOnInit() {
        this.app_id = this.route.snapshot.params["app_id"];
        this.product_id = this.route.snapshot.params["id"];
        console.log(this.product_id);
        console.log(this.app_id);
        this.getProductDetails(this.product_id);
        this.form = this.formBuilder.group({
            product_name: ['', Validators.required],
            price: ['', Validators.required],
            discounted_price: [''],
            packing_charges: [''],
            tags: ['']
        });
    }

    getProductDetails(id) {
        this.CreatedAppService.getProductDetails(id).subscribe(
            res => {
                this.product_details = res;

                this.product_data.product_name = this.product_details.product_name;
                this.product_data.price = this.product_details.price;
                this.product_data.discounted_price = this.product_details.discounted_price;
                this.product_data.packing_charges = this.product_details.packing_charges;
                this.product_data.tags = this.product_details.tags;
                this.product_data.app_master =  this.product_details.app_master;
                this.product_data.product_category = this.product_details.product_category;


                this.visible_key = true
                console.log(res)

            },
            error => {
                console.log(error)
            }
        )
    }

    updateProduct() {
        if (this.form.valid) {
            this.processing = true;
            console.log(this.product_data);


            this.CreatedAppService.updateProduct(this.product_id, this.product_data).subscribe(
                res => {
                    console.log("Success");

                    this.router.navigate(['/created-app/products/' + this.app_id])

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