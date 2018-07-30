import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterExtensions } from "nativescript-angular/router";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { UploadSingleImageModalComponent } from "../../../core/component/upload-single-image-modal/upload-single-image-modal.component";
import { CreatedAppService } from "../../../core/services/created-app.service";
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
    visible_key: boolean;
    options = {
        context: {},
        fullscreen: false,
        viewContainerRef: this.vcRef
    };
    gallery: any = []
    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
        private modal: ModalDialogService,
        private vcRef: ViewContainerRef,
        private CreatedAppService: CreatedAppService,
    ) { }

    ngOnInit() {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
    }

    pickBusinessImages() {
        this.modal.showModal(UploadSingleImageModalComponent, this.options).then(res => {
            console.log(res);
            if (res != undefined) {
                if (res.camera == true) {
                    console.log(res.image)
                    this.gallery.push({
                        image: 'data:image/png;base64,' + res.image
                    })
                    var data = {
                        id: this.app_id,
                        img: 'data:image/png;base64,' + res.image
                    }
                    this.updateBusinessImages(data);
                }
                else if (res.gallery == true) {
                    console.log(res.image)
                    this.gallery.push({
                        image: 'data:image/png;base64,' + res.image
                    })
                    var data = {
                        id: this.app_id,
                        img: 'data:image/png;base64,' + res.image
                    }
                    this.updateBusinessImages(data);
                }
            }
        })
    }


    updateBusinessImages(data) {
        this.CreatedAppService.updateBusinessImages(data).subscribe(
            res => {
                console.log(res)
            },
            error => {
                console.log(error)
            }
        )
    }


}