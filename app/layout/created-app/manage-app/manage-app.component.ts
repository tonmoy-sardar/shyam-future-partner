import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CreatedAppService } from "../../../core/services/created-app.service";
import { takePicture, requestPermissions } from 'nativescript-camera';
import { ImageAsset } from 'tns-core-modules/image-asset';
import * as imagepicker from "nativescript-imagepicker";
@Component({
  selector: 'manage-app',
  moduleId: module.id,
  templateUrl: `manage-app.component.html`,
  styleUrls: [`manage-app.component.css`]
})

export class ManageAppComponent implements OnInit {
  app_id: string;
  app_details: any;
  app_data = {
    logo: '',
    business_name: ''
  }
  visible_key: boolean;
  cameraImage: ImageAsset;
  imageAssets = [];
  isSingleMode: boolean = true;
  thumbSize: number = 80;
  previewSize: number = 300;
  constructor(
    private route: ActivatedRoute,
    private CreatedAppService: CreatedAppService
  ) { }

  ngOnInit() {
    this.app_id = this.route.snapshot.params["id"];
    console.log(this.route.snapshot.params["id"]);
    this.getAppDetails(this.app_id);
  }

  getAppDetails(id) {
    this.CreatedAppService.getCreatedAppDetails(id).subscribe(
      res => {
        this.app_details = res;
        this.app_data.logo = this.app_details.logo;
        this.app_data.business_name = this.app_details.business_name;
        this.visible_key = true
        console.log(res)

      },
      error => {
        console.log(error)
      }
    )
  }

  onTakePictureTap(args) {
    requestPermissions().then(
      () => {
        takePicture({ width: 200, height: 200, keepAspectRatio: true, saveToGallery: true })
          .then((imageAsset: any) => {
            this.cameraImage = imageAsset;
            imageAsset.getImageAsync(function (nativeImage) {
              let scale = 1;
              let height = 0;
              let width = 0;
              if (imageAsset.android) {
                scale = nativeImage.getDensity();
                height = imageAsset.options.height;
                width = imageAsset.options.width;
              } else {
                scale = nativeImage.scale;
                width = nativeImage.size.width * scale;
                height = nativeImage.size.height * scale;
              }
              console.log(`Displayed Size: ${width}x${height} with scale ${scale}`);
              console.log(`Image Size: ${width / scale}x${height / scale}`);
            });
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
        selection.forEach(function (element) {
          element.options.width = that.isSingleMode ? that.previewSize : that.thumbSize;
          element.options.height = that.isSingleMode ? that.previewSize : that.thumbSize;
          that.imageAssets.push(element)
        });
      }).catch(function (e) {
        console.log(e);
      });
  }


}