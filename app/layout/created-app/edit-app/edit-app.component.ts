import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreatedAppService } from "../../../core/services/created-app.service";
import { RouterExtensions } from "nativescript-angular/router";
import { LoadingIndicator } from "nativescript-loading-indicator"

@Component({
    selector: 'edit-app',
    moduleId: module.id,
    templateUrl: `edit-app.component.html`,
    styleUrls: [`edit-app.component.css`]
})

export class EditAppComponent implements OnInit {
    form: FormGroup;

    app_id: string;
    app_details: any;
    app_data = {
        logo: '',
        business_name: '',
        business_description: '',
        app_website_url:''
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
        this.getAppDetails(this.app_id);

        this.form = this.formBuilder.group({
            business_name: ['', Validators.required],
            business_description: ['', Validators.required],
            app_website_url: [''],
        });
    }

    getAppDetails(id) {
        this.loader.show(this.lodaing_options);
        this.CreatedAppService.getCreatedAppDetails(id).subscribe(
            res => {
                this.app_details = res;
                this.app_data.logo = this.app_details.logo;
                this.app_data.business_name = this.app_details.business_name;
                this.app_data.business_description = this.app_details.business_description;
                this.app_data.app_website_url = this.app_details.app_website_url;
                this.visible_key = true
                console.log(res)
                this.loader.hide();

            },
            error => {
                console.log(error)
                this.loader.hide();
            }
        )
    }

    updateAppInfo() {
        if (this.form.valid) {
            console.log("aaa");
            console.log(this.form.value);

            this.loader.show(this.lodaing_options);
            this.CreatedAppService.updateAppInfo(this.app_id, this.form.value).subscribe(
                res => {
                    console.log("Success");
                    this.loader.hide();
                    this.router.navigate(['/created-app/' + this.app_id+'/manage-app'])

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