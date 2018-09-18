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
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";
import { Color } from "tns-core-modules/color";
import { ExploreService } from "../../../core/services/explore.service";

@Component({
    selector: 'edit-business-images',
    moduleId: module.id,
    templateUrl: `edit-business-images.component.html`,
    styleUrls: [`edit-business-images.component.css`]
})

export class EditBusinessImagesComponent implements OnInit {
    form: FormGroup;
    private feedback: Feedback;
    processing = false;
    app_id: string;
    visible_key: boolean;
    options = {
        context: {},
        fullscreen: false,
        viewContainerRef: this.vcRef
    };
    gallery_images: any = [];
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
    is_product_service: number;
    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
        private modal: ModalDialogService,
        private vcRef: ViewContainerRef,
        private CreatedAppService: CreatedAppService,
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
        this.getAppBusinessImages(this.app_id);
    }

    getAppBusinessImages(id) {

        this.loader.show(this.lodaing_options);
        this.CreatedAppService.getAppBusinessImages(id).subscribe(
            res => {
                console.log(res)
                this.gallery_images = res['results'];
                this.is_product_service = res['is_product_service']
                this.visible_key = true
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

            if (res != undefined) {
                if (res.camera == true) {
                    var data = {
                        app_image_id: id,
                        appmaster: this.app_id,
                        app_images: 'data:image/png;base64,' + res.image
                    }

                    this.updateBusinessImages(data);
                }
                else if (res.gallery == true) {
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
                    var data = {
                        app_image_id: 0,
                        appmaster: this.app_id,
                        app_images: 'data:image/png;base64,' + res.image
                    }

                    this.updateBusinessImages(data);
                }
                else if (res.gallery == true) {
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

        this.CreatedAppService.updateBusinessImages(data).subscribe(
            res => {
                if (this.key == '') {
                    this.feedback.success({
                        title: 'Business image has been successfully updated',
                        backgroundColor: new Color("green"),
                        titleColor: new Color("black"),
                        position: FeedbackPosition.Bottom,
                        type: FeedbackType.Custom
                    });
                }

                this.getAppBusinessImages(this.app_id);
                console.log(res)
            },
            error => {
                console.log(error)

            }
        )
    }

    next() {
        if (this.key != '') {
            if (this.is_product_service != 0) {
                this.router.navigate(['/created-app/' + this.app_id + '/products/' + 'new'])
            }
            else {
                this.router.navigate(['/created-app/' + this.app_id + '/payment'])
            }

        }
    }


}