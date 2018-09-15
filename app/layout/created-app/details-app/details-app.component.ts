import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CreatedAppService } from "../../../core/services/created-app.service";
import { Location } from '@angular/common';
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { UploadSingleImageModalComponent } from "../../../core/component/upload-single-image-modal/upload-single-image-modal.component";
import { LoadingIndicator } from "nativescript-loading-indicator"
import * as SocialShare from "nativescript-social-share";
import { MessageService } from '../../../core/services/message.service';
import { NotificationService } from "../../../core/services/notification.service";
import { ExploreService } from "../../../core/services/explore.service";

@Component({
  selector: 'details-app',
  moduleId: module.id,
  templateUrl: `details-app.component.html`,
  styleUrls: [`details-app.component.css`]
})

export class DetailsAppComponent implements OnInit {
  app_id: string;
  app_details: any;
  visible_key: boolean;

  app_data = {
    logo: '',
    business_name: ''
  }

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
  unSeenOrder: number = 0;
  unSeenMessage: number = 0;
  badgeCountStatus: boolean;
  constructor(
    private route: ActivatedRoute,
    private CreatedAppService: CreatedAppService,
    private location: Location,
    private messageService: MessageService,
    private notificationService: NotificationService,
    private exploreService: ExploreService
  ) {
    notificationService.getBadgeCountStatus.subscribe(status => this.changebadgeCountStatus(status))
    exploreService.homePageStatus(true);
  }

  private changebadgeCountStatus(status: boolean): void {
    this.badgeCountStatus = status;

    if (this.badgeCountStatus == true) {
      this.getOrderSeenActivity(this.app_id);
      this.gerMessageSeenActivity(this.app_id)

    }
  }

  ngOnInit() {
    var full_location = this.location.path().split('/');
    this.app_id = full_location[2].trim();
    this.getAppDetails(this.app_id);
    this.getOrderSeenActivity(this.app_id);
    this.gerMessageSeenActivity(this.app_id)
  }

  getAppDetails(id) {
    this.loader.show(this.lodaing_options);
    this.CreatedAppService.getCreatedAppDetails(id).subscribe(
      res => {
        console.log(res)
        this.app_details = res;
        this.app_data.logo = this.app_details.logo;
        this.app_data.business_name = this.app_details.business_name;
        this.visible_key = true

        this.loader.hide();
      },
      error => {
        this.loader.hide();
        console.log(error)
      }
    )
  }

  shareApp() {
    SocialShare.shareText("I love NativeScript!");
  }


  getOrderSeenActivity(id) {
    this.CreatedAppService.getOrderSeenActivity(id).subscribe(
      res => {
        this.unSeenOrder = res['unseen_count'];
      },
      error => {
        console.log(error)
      }
    )
  }


  gerMessageSeenActivity(id) {
    var param = "?user=" + id + "&user_type=app_master"
    this.messageService.getChatMembersDetails(param).subscribe(
      (res: any[]) => {
        var total = 0;
        res.forEach(x => {
          total += x.unread_messages;
        })
        this.unSeenMessage = total;
      },
      error => {
        console.log(error)
      }
    )
  }



}