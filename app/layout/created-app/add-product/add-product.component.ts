import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreatedAppService } from "../../../core/services/created-app.service";
import { RouterExtensions } from "nativescript-angular/router";
import { LoadingIndicator } from "nativescript-loading-indicator"
import { Location } from '@angular/common';
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { UploadSingleImageModalComponent } from "../../../core/component/upload-single-image-modal/upload-single-image-modal.component";

@Component({
    selector: 'add-product',
    moduleId: module.id,
    templateUrl: `add-product.component.html`,
    styleUrls: [`add-product.component.css`]
})

export class AddProductComponent implements OnInit {
    form: FormGroup;

    app_id: string;
    cat_id: string;
    product_details: any;
    product_data = {
        product_name: '',
        price: '',
        discounted_price: '',
        packing_charges: '',
        tags: '',
        app_master: '',
        product_category: '',
        product_image: ''
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
    options = {
        context: {},
        fullscreen: false,
        viewContainerRef: this.vcRef
    };

    constructor(
        private route: ActivatedRoute,
        private CreatedAppService: CreatedAppService,
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
        private location: Location,
        private modal: ModalDialogService,
        private vcRef: ViewContainerRef,
    ) { }

    ngOnInit() {
        var full_location = this.location.path().split('/');
        this.app_id = full_location[2].trim();
        this.cat_id = this.route.snapshot.params["cat_id"];
        console.log(this.cat_id);
        console.log(this.app_id);

        this.form = this.formBuilder.group({
            product_name: ['', Validators.required],
            price: ['', Validators.required],
            discounted_price: [''],
            packing_charges: [''],
            tags: ['']
        });
    }


    createProduct() {

        if (this.form.valid) {
            this.product_data.app_master = this.app_id;
            this.product_data.product_category = this.cat_id;

            console.log(this.product_data);
            this.loader.show(this.lodaing_options);
            this.CreatedAppService.createProduct(this.product_data).subscribe(
                res => {
                    this.loader.hide();
                    console.log("Success");

                    this.router.navigate(['/created-app/' + this.app_id + '/products'])

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

    pickImage() {
        this.modal.showModal(UploadSingleImageModalComponent, this.options).then(res => {
            console.log(res);
            if (res != undefined) {
                if (res.camera == true) {
                    console.log(res.image)
                    var _pic = 'data:image/png;base64,' + res.image;
                    this.product_data.product_image = _pic
                }
                else if (res.gallery == true) {
                    console.log(res.image)
                    var _pic = 'data:image/png;base64,' + res.image
                    this.product_data.product_image = _pic
                }
            }
        })
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