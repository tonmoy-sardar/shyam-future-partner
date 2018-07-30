import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { takePicture, requestPermissions } from 'nativescript-camera';
import { ImageAsset } from 'tns-core-modules/image-asset';
import * as imagepicker from "nativescript-imagepicker";

@Component({
    selector: "upload-multiple-image-modal",
    moduleId: module.id,
    templateUrl: "upload-multiple-image-modal.component.html",
    styleUrls: ["upload-multiple-image-modal.component.css"]
})

export class UploadMultipleImageModalComponent implements OnInit {
    processing = false;
    cameraImage: ImageAsset;
    imageAssets = [];
    isSingleMode: boolean = true;
    thumbSize: number = 80;
    previewSize: number = 300;
    constructor(
        private params: ModalDialogParams,
    ) {
    }

    ngOnInit() {

    }

    cancel() {
        this.params.closeCallback({ "close": true });
    }

    onTakePictureTap(args) {
        requestPermissions().then(
            () => {
                takePicture({ width: 200, height: 200, keepAspectRatio: true, saveToGallery: true })
                    .then((imageAsset: any) => {
                        this.cameraImage = imageAsset;
                        // imageAsset.getImageAsync(nativeImage => {
                        //     let scale = 1;
                        //     let height = 0;
                        //     let width = 0;
                        //     if (imageAsset.android) {
                        //         scale = nativeImage.getDensity();
                        //         height = imageAsset.options.height;
                        //         width = imageAsset.options.width;
                        //     } else {
                        //         scale = nativeImage.scale;
                        //         width = nativeImage.size.width * scale;
                        //         height = nativeImage.size.height * scale;
                        //     }
                        //     console.log(`Displayed Size: ${width}x${height} with scale ${scale}`);
                        //     console.log(`Image Size: ${width / scale}x${height / scale}`);
                        // });
                        this.params.closeCallback({ camera: true, image: this.cameraImage });
                    }, (error) => {
                        console.log("Error: " + error);
                    });
            },
            () => alert('permissions rejected')
        );
    }

    onSelectMultipleTap() {
        this.isSingleMode = false;

        let context = imagepicker.create({
            mode: "multiple"
        });
        this.startSelection(context);
    }

    onSelectSingleTap() {
        this.isSingleMode = true;

        let context = imagepicker.create({
            mode: "single"
        });
        this.startSelection(context);
    }

    startSelection(context) {
        let that = this;

        context
            .authorize()
            .then(() => {
                that.imageAssets = [];
                return context.present();
            })
            .then((selection) => {
                selection.forEach(element => {
                    element.options.width = that.isSingleMode ? that.previewSize : that.thumbSize;
                    element.options.height = that.isSingleMode ? that.previewSize : that.thumbSize;
                    that.imageAssets.push(element)
                });
                this.params.closeCallback({ gallery: true, image: that.imageAssets });
            }).catch(e => {
                console.log(e);
            });
    }

}