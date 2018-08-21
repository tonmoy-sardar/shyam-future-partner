import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterExtensions } from "nativescript-angular/router";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { UploadSingleImageModalComponent } from "../../../core/component/upload-single-image-modal/upload-single-image-modal.component";
import { CreatedAppService } from "../../../core/services/created-app.service";
import * as Globals from '../../../core/globals';
import { LoadingIndicator } from "nativescript-loading-indicator";
import { Location } from '@angular/common';
@Component({
    selector: 'edit-business-images',
    moduleId: module.id,
    templateUrl: `edit-business-images.component.html`,
    styleUrls: [`edit-business-images.component.css`]
})

export class EditBusinessImagesComponent implements OnInit {
    form: FormGroup;
    processing = false;
    app_id: string;
    app_details: any;
    visible_key: boolean;
    options = {
        context: {},
        fullscreen: false,
        viewContainerRef: this.vcRef
    };
    gallery_images: Array<any> = [];
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
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
        private modal: ModalDialogService,
        private vcRef: ViewContainerRef,
        private CreatedAppService: CreatedAppService,
        private location: Location,
    ) { }

    ngOnInit() {
        var full_location = this.location.path().split('/');
        this.app_id = full_location[2].trim();
        this.getAppDetails(this.app_id);
    }

    getAppDetails(id) {
        this.loader.show(this.lodaing_options);
        this.CreatedAppService.getCreatedAppDetails(id).subscribe(
            res => {
                this.app_details = res;
                this.gallery_images = [];
                if (this.app_details.app_imgs.length > 0) {
                    this.app_details.app_imgs.forEach(x => {
                        var data = {
                            id: x.id,
                            app_master_id: x.app_master_id,
                            app_img: Globals.img_base_url + x.app_img
                        }
                        this.gallery_images.push(data)
                    })
                }

                this.visible_key = true
                console.log(res);
                console.log(this.gallery_images);
                this.loader.hide();
            },
            error => {
                console.log(error)
                this.loader.hide();
            }
        )
    }

    pickBusinessImages(id) {
        this.modal.showModal(UploadSingleImageModalComponent, this.options).then(res => {
            console.log(res);
            if (res != undefined) {
                if (res.camera == true) {
                    console.log(res.image)
                    // this.gallery.push({
                    //     image: 'data:image/png;base64,' + res.image
                    // })
                    var data = {
                        app_image_id: id,
                        appmaster: this.app_id,
                        app_images: 'data:image/png;base64,' + res.image
                    }
                    this.updateBusinessImages(data);
                }
                else if (res.gallery == true) {
                    console.log(res.image)
                    // this.gallery.push({
                    //     image: 'data:image/png;base64,' + res.image
                    // })
                    var data = {
                        app_image_id: id,
                        appmaster: this.app_id,
                        app_images: 'data:image/png;base64,' + res.image
                    }
                    this.updateBusinessImages(data);
                }
            }
        })
    }

    pickNewBusinessImages() {
        this.modal.showModal(UploadSingleImageModalComponent, this.options).then(res => {
            console.log(res);
            if (res != undefined) {
                if (res.camera == true) {
                    console.log(res.image)
                    // this.gallery.push({
                    //     image: 'data:image/png;base64,' + res.image
                    // })
                    var data = {
                        app_image_id: 0,
                        appmaster: this.app_id,
                        app_images: 'data:image/png;base64,' + res.image
                    }
                    this.updateBusinessImages(data);
                }
                else if (res.gallery == true) {
                    console.log(res.image)
                    // this.gallery.push({
                    //     image: 'data:image/png;base64,' + res.image
                    // })
                    var data = {
                        app_image_id: 0,
                        appmaster: this.app_id,
                        app_images: 'data:image/png;base64,' + res.image
                    }
                    this.updateBusinessImages(data);
                }
            }
        })
    }


    updateBusinessImages(data) {
        this.loader.show(this.lodaing_options);
        this.CreatedAppService.updateBusinessImages(data).subscribe(
            res => {

                this.getAppDetails(this.app_id);
                console.log(res)
                this.loader.hide();
            },
            error => {
                console.log(error)
                this.loader.hide();
            }
        )
    }


}