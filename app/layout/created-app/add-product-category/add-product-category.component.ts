import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreatedAppService } from "../../../core/services/created-app.service";
import { RouterExtensions } from "nativescript-angular/router";
import { LoadingIndicator } from "nativescript-loading-indicator"
import { Location } from '@angular/common';
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";
import { Color } from "tns-core-modules/color";
import { ExploreService } from "../../../core/services/explore.service";

@Component({
    selector: 'add-product-category',
    moduleId: module.id,
    templateUrl: `add-product-category.component.html`,
    styleUrls: [`add-product-category.component.css`]
})

export class AddProductCategoyComponent implements OnInit {
    form: FormGroup;
    processing = false;
    private feedback: Feedback;
    app_id: string;
    product_category_data = {
        category_name: '',
        description: '',
        app_master: ''
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
    key: string = '';
    constructor(
        private route: ActivatedRoute,
        private CreatedAppService: CreatedAppService,
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
        private location: Location,
        private exploreService: ExploreService
    ) {
        this.feedback = new Feedback();
        exploreService.homePageStatus(false);
    }

    ngOnInit() {
        var full_location = this.location.path().split('/');
        this.app_id = full_location[2].trim();
        if (full_location.length > 4) {
            this.key = full_location[4].trim();
        }
        this.form = this.formBuilder.group({
            category_name: ['', Validators.required],
            description: ['']
        });
    }



    createProductCategory() {
        if (this.form.valid) {

            this.product_category_data.app_master = this.app_id;

            this.loader.show(this.lodaing_options);
            this.CreatedAppService.createProductCategory(this.product_category_data).subscribe(
                res => {


                    this.loader.hide();
                    if (this.key != '') {
                        this.router.navigate(['/created-app/' + this.app_id + '/products' + '/new'])
                    }
                    else {
                        this.feedback.success({
                            title: 'Category added successfully',
                            backgroundColor: new Color("green"),
                            titleColor: new Color("black"),
                            position: FeedbackPosition.Bottom,
                            type: FeedbackType.Custom
                        });
                        this.router.navigate(['/created-app/' + this.app_id + '/products'])
                    }


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