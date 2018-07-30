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
@Component({
    selector: 'edit-owner-info',
    moduleId: module.id,
    templateUrl: `edit-owner-info.component.html`,
    styleUrls: [`edit-owner-info.component.css`]
})

export class EditOwnerInfoComponent implements OnInit {
    form: FormGroup;
    processing = false;
    app_id: string;
    visible_key: boolean;
    app_details: any;
    owner_details: any = {
        owner_name: '',
        owner_designation: '',
        owner_pic: '',
        business_est_year: '',
        store_address: '',
        lat: '',
        long: ''
    }
    options = {
        context: {},
        fullscreen: false,
        viewContainerRef: this.vcRef
    };
    selectedIndex: number = null;
    hint = "Select Designation";
    designations: ValueList<string>;


    constructor(
        private route: ActivatedRoute,
        private CreatedAppService: CreatedAppService,
        private modal: ModalDialogService,
        private vcRef: ViewContainerRef,
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
    ) {

    }

    ngOnInit() {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
        this.form = this.formBuilder.group({
            owner_name: ['', Validators.required],
            owner_designation: [''],
            business_est_year: [''],
            store_address: [''],
            lat: [''],
            long: ['']
        });

        this.getDesignationDropdown();
    }

    onchange(args: SelectedIndexChangedEventData) {
        console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}. New value is "${this.designations.getValue(
            args.newIndex)}"`);
        this.owner_details.owner_designation = this.designations.getValue(
            args.newIndex);
    }

    getDesignationDropdown() {
        this.CreatedAppService.getDesignationDropdown().subscribe(
            (data: any[]) => {
                console.log(data);
                this.designations = new ValueList<string>();
                for (let i = 0; i < data.length; i++) {
                    this.designations.push({
                        value: data[i]['id'],
                        display: data[i]['designation_name'],
                    });
                }
                this.getAppOwnerDetails(this.app_id);
            },
            error => {
                console.log(error)
            }
        );
    };

    getAppOwnerDetails(id) {
        this.CreatedAppService.getOwnerInfo(id).subscribe(
            res => {
                this.owner_details = res;
                this.selectedIndex = this.designations.getIndex(this.owner_details.owner_designation.toString());
                console.log(this.selectedIndex)
                console.log(this.owner_details.owner_designation)
                this.visible_key = true
                console.log(res)
            },
            error => {
                console.log(error)
            }
        )
    }

    searchLocation() {
        var option = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(LocationModalComponent, option).then(res => {
            console.log(res);
            if (res.name != "") {
                this.owner_details.store_address = res.name;
                this.owner_details.lat = res.latitude;
                this.owner_details.long = res.longitude
                // data.structured_formatting.main_text
            }
        })
    }

    pickLogo() {
        this.modal.showModal(UploadSingleImageModalComponent, this.options).then(res => {
            console.log(res);
            if (res != undefined) {
                if (res.camera == true) {
                    console.log(res.image)
                    this.owner_details.owner_pic = 'data:image/png;base64,' + res.image;
                    var data = {
                        id: this.app_id,
                        owner_pic: 'data:image/png;base64,' + res.image
                    }
                    this.updateOwnerLogo(data);
                }
                else if (res.gallery == true) {
                    console.log(res.image)
                    var data = {
                        id: this.app_id,
                        owner_pic: 'data:image/png;base64,' + res.image
                    }
                    this.updateOwnerLogo(data);
                    this.owner_details.owner_pic = 'data:image/png;base64,' + res.image
                }
            }
        })
    }

    updateOwnerLogo(data) {
        this.CreatedAppService.editOwnerLogo(data).subscribe(
            res => {
                this.getAppOwnerDetails(this.app_id);
                console.log(res)
            },
            error => {
                console.log(error)
            }
        )
    }


    updateOwnerInfo() {
        if (this.form.valid) {
            this.processing = true;
            this.CreatedAppService.editOwnerInfo(this.owner_details).subscribe(
                res => {
                    console.log(res);
                    this.processing = false;
                    this.getAppOwnerDetails(res['id'])
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