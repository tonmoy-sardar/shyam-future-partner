import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreatedAppService } from "../../../core/services/created-app.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: 'edit-product-category',
    moduleId: module.id,
    templateUrl: `edit-product-category.component.html`,
    styleUrls: [`edit-product-category.component.css`]
})

export class EditProductCategoyComponent implements OnInit {
    form: FormGroup;
    processing = false;

    app_id: string;
    product_category_id: string;
    product_category_details: any;
    product_category_data = {
        category_name: '',
        app_master:''
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
        this.product_category_id = this.route.snapshot.params["id"];

        this.getProductCategoryDetails(this.product_category_id);

        this.form = this.formBuilder.group({
            category_name: ['', Validators.required],
        });
    }

    getProductCategoryDetails(id) {
        this.CreatedAppService.getProductCategoryDetails(id).subscribe(
            res => {
                this.product_category_details = res;
                this.product_category_data.category_name = this.product_category_details.category_name;
                this.product_category_data.app_master =  this.app_id;
                this.visible_key = true
                console.log(res)

            },
            error => {
                console.log(error)
            }
        )
    }

    updateProductCategory() {
        if (this.form.valid) {
            this.processing = true;
            console.log("aaa");
            console.log(this.product_category_data);

            this.CreatedAppService.updateProductCategory(this.product_category_id, this.product_category_data).subscribe(
                res => {
                    console.log("Success");
                    this.processing = false;
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