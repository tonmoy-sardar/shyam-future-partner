import { Component, OnInit } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';
import { LoadingIndicator } from "nativescript-loading-indicator"
import { CreatedAppService } from "../../../core/services/created-app.service";
import { SecureStorage } from "nativescript-secure-storage";
// registerElement('CardView', () => CardView);

import { ExploreService } from "../../../core/services/explore.service";
import { getString, setString, getBoolean, setBoolean, clear } from "application-settings";
import * as Globals from '../../../core/globals';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterExtensions } from "nativescript-angular/router";


@Component({
    selector: "business-info",
    moduleId: module.id,
    templateUrl: "./business-info.component.html",
    styleUrls: ['./business-info.component.css']
})
export class BusinessInfoComponent implements OnInit {
    form: FormGroup;
    user_id: string;
    category_list: any = [];
    base_url: string = Globals.img_base_url;
    processing = false;
    secureStorage: SecureStorage;
    create_app_data: any;

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
        private exploreService: ExploreService,
        private createdAppService: CreatedAppService,
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
    ) {
        this.secureStorage = new SecureStorage();
    }

    ngOnInit() {
        this.user_id = getString('user_id');
        this.form = this.formBuilder.group({
            business_name: ['', Validators.required],
            business_description: ['', Validators.required],
            app_website_url: [''],
        });
        //this.getCategoryList();
        this.populateData();

    }


    populateData() {
        this.secureStorage.get({
            key: "create_app_data"
        }).then(
            value => {
                var data = JSON.parse(value);
                console.log(data);
                if (data != null) {
                    this.create_app_data = data;
                }
                else {
                   
                }
            }
        );
    }
    submitCreateAppBusinessInfo()
    {
        if (this.form.valid) {
           
            var data = {
                app_category: this.create_app_data.app_category,
                business_name:this.form.value.business_name,
                business_description: this.form.value.business_name,
                app_website_url: this.form.value.app_website_url,
            }
            this.setCreateAppData(data)
            this.router.navigate(['/app-create/owner-info'])
        }
        else {
            this.markFormGroupTouched(this.form)  
        }
    }

    setCreateAppData(data) {
        this.secureStorage.set({
            key: 'create_app_data',
            value: JSON.stringify(data)
        }).then(success => {
            console.log(success)
        });
    };

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