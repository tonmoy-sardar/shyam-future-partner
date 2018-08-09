import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CreatedAppService } from "../../../core/services/created-app.service";

import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { UploadSingleImageModalComponent } from "../../../core/component/upload-single-image-modal/upload-single-image-modal.component";

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

  options = {
    context: {},
    fullscreen: false,
    viewContainerRef: this.vcRef
  };
  imageUrl: any;
  constructor(
    private route: ActivatedRoute,
    private CreatedAppService: CreatedAppService,
    private modal: ModalDialogService,
    private vcRef: ViewContainerRef,
  ) { }

  ngOnInit() {
    this.app_id = this.route.snapshot.params["id"];
    console.log(this.route.snapshot.params["id"]);
    this.getAppDetails(this.app_id);
    this.imageUrl = null;
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

  pickLogo() {
    this.modal.showModal(UploadSingleImageModalComponent, this.options).then(res => {
      console.log(res);
      if (res != undefined) {
        if (res.camera == true) {
          console.log(res.image)
          this.imageUrl = res.image
          this.app_data.logo = 'data:image/png;base64,' + res.image;
          var data = {
              id: this.app_id,
              logo: 'data:image/png;base64,' + res.image
          }
          this.updateAppLogo(data);

        }
        else if (res.gallery == true) {
          console.log(res.image)
          this.imageUrl = res.image
          this.app_data.logo = 'data:image/png;base64,' + res.image;

          var data = {
              id: this.app_id,
              logo: 'data:image/png;base64,' + res.image
          }
          this.updateAppLogo(data);
        }
      }
    })
  }

  updateAppLogo(data) {
    this.CreatedAppService.editAppLogo(data).subscribe(
        res => {
            this.getAppDetails(this.app_id);
            console.log(res)
        },
        error => {
            console.log(error)
        }
    )
}




}