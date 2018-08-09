import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreatedAppService } from "../../../core/services/created-app.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: 'add-product-category',
    moduleId: module.id,
    templateUrl: `add-product-category.component.html`,
    styleUrls: [`add-product-category.component.css`]
})

export class AddProductCategoyComponent implements OnInit {
    form: FormGroup;
    processing = false;

    app_id: string;
    product_category_data = {
        category_name: '',
        description:'',
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
        //this.product_category_id = this.route.snapshot.params["id"];

        //this.getProductCategoryDetails(this.product_category_id);

        this.form = this.formBuilder.group({
            category_name: ['', Validators.required],
            description:['']
        });
    }

    

    createProductCategory() {
        if (this.form.valid) {
            this.processing = true;
            console.log("aaa");
            this.product_category_data.app_master = this.app_id;
            console.log(this.product_category_data);

            this.CreatedAppService.createProductCategory(this.product_category_data).subscribe(
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