import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreatedAppService } from "../../../core/services/created-app.service";
import { RouterExtensions } from "nativescript-angular/router";
import { MessageService } from '../../../core/services/message.service';
import { LoadingIndicator } from "nativescript-loading-indicator";
import { Location } from '@angular/common';
import { NotificationService } from "../../../core/services/notification.service";

@Component({
    selector: 'messages',
    moduleId: module.id,
    templateUrl: `messages.component.html`,
    styleUrls: [`messages.component.css`]
})

export class MessagesComponent implements OnInit {
    form: FormGroup;
    processing = false;
    app_id: string;
    visible_key: boolean;
    chats: any = []
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
    badgeCountStatus: boolean;
    constructor(
        private route: ActivatedRoute,
        private CreatedAppService: CreatedAppService,
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
        private messageService: MessageService,
        private location: Location,
        private notificationService: NotificationService
    ) {
        notificationService.getBadgeCountStatus.subscribe(status => this.changebadgeCountStatus(status))
    }

    private changebadgeCountStatus(status: boolean): void {
        this.badgeCountStatus = status;
        console.log(this.badgeCountStatus)
        if (this.badgeCountStatus == true) {
            this.newGetChatMembersDetails();
        }
    }

    ngOnInit() {
        var full_location = this.location.path().split('/');
        this.app_id = full_location[2].trim();
        this.getChatMembersDetails();
    }

    getChatMembersDetails() {
        var data = {
            receiver: this.app_id,
            receiver_type: "app_master"
        }
        var param = "?user=" + this.app_id + "&user_type=app_master"
        this.loader.show(this.lodaing_options);
        this.messageService.getChatMembersDetails(param).subscribe(
            (res: any[]) => {
                console.log(res)
                this.chats = res;
                this.loader.hide();
            },
            error => {
                console.log(error)
                this.loader.hide();
            }
        )
    }

    newGetChatMembersDetails() {
        var data = {
            receiver: this.app_id,
            receiver_type: "app_master"
        }
        var param = "?user=" + this.app_id + "&user_type=app_master"
        this.loader.show(this.lodaing_options);
        this.messageService.getChatMembersDetails(param).subscribe(
            (res: any[]) => {
                console.log(res)
                this.chats = [];
                this.loader.hide();
            },
            error => {
                console.log(error)
                this.loader.hide();
            }
        )
    }

    goToChat(id) {
        this.router.navigate(['/created-app/' + this.app_id + '/chat/' + id])
    }

}