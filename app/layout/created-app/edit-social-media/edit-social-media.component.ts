import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterExtensions } from "nativescript-angular/router";
import { CreatedAppService } from "../../../core/services/created-app.service";

import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { UploadSingleImageModalComponent } from "../../../core/component/upload-single-image-modal/upload-single-image-modal.component";
import { SelectedIndexChangedEventData, ValueList } from "nativescript-drop-down";
import { LocationModalComponent } from '../../../core/component/location-modal/location-modal.component';
import * as Globals from '../../../core/globals';
import { LoadingIndicator } from "nativescript-loading-indicator";
import { Location } from '@angular/common';
import { FORMS_DIRECTIVES } from 'nativescript-angular/forms';
@Component({
    selector: 'edit-social-media',
    moduleId: module.id,
    templateUrl: `edit-social-media.component.html`,
    styleUrls: [`edit-social-media.component.css`]
})

export class EditSocialMediaComponent implements OnInit {
    form: FormGroup;
    app_id: string;
    visible_key: boolean;
    social_media_type: any;
    app_socila_media:any;

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
        private modal: ModalDialogService,
        private vcRef: ViewContainerRef,
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
        private location: Location,
    ) {

    }

    ngOnInit() {
        var full_location = this.location.path().split('/');
        this.app_id = full_location[2].trim();
        // this.form = this.formBuilder.group({
        //     owner_name: ['', Validators.required],
        //     owner_designation: [''],
        //     business_est_year: [''],
        //     store_address: [''],
        //     lat: [''],
        //     long: ['']
        // });

        //this.getSocialMediaType();
        this.getAppSocialMedia(this.app_id);
    }

  

    getSocialMediaType(app_socila_media) {
        
        this.CreatedAppService.getSocialMediaType().subscribe(
            (data: any[]) => {
                console.log(data);

                
                this.social_media_type =data;
                for(var i=0 ; i<this.social_media_type.length;i++)
                {
                    
                }
                    
                this.loader.hide();
                
            },
            error => {
                console.log(error)
                this.loader.hide();
            }
        );
    };

    getAppSocialMedia(id) {
        this.loader.show(this.lodaing_options);
        this.CreatedAppService.getAppSocialMedia(id).subscribe(
            res => {
                console.log(res);
                this.app_socila_media = res;
                this.loader.hide();
                this.getSocialMediaType(this.app_socila_media);
            },
            error => {
                console.log(error)
                this.loader.hide();
            }
        )
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