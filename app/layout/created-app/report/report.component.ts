import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterExtensions } from "nativescript-angular/router";
import { CreatedAppService } from "../../../core/services/created-app.service";
import { LoadingIndicator } from "nativescript-loading-indicator";
import { NotificationService } from "../../../core/services/notification.service";
import { ExploreService } from "../../../core/services/explore.service";

@Component({
    selector: 'report',
    moduleId: module.id,
    templateUrl: `report.component.html`,
    styleUrls: [`report.component.css`]
})

export class ReportComponent implements OnInit {
    form: FormGroup;
    processing = false;
    app_id: string;
    visible_key: boolean;
    order_list: any = [];
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
    page: number = 1;
    next_page: string;
    total_item: number;
    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
        private createdAppService: CreatedAppService,
        private location: Location,
        private notificationService: NotificationService,
        private exploreService: ExploreService
    ) {
        notificationService.getBadgeCountStatus.subscribe(status => this.changebadgeCountStatus(status))
        exploreService.homePageStatus(false);
    }

    ngOnInit() {
        this.loader.show(this.lodaing_options);
        var full_location = this.location.path().split('/');
        this.app_id = full_location[2].trim();
        this.getOrderList()
    }

    private changebadgeCountStatus(status: boolean): void {
        this.badgeCountStatus = status;
        console.log(this.badgeCountStatus)
        if (this.badgeCountStatus == true) {
            this.order_list = [];
            this.getOrderList();
        }
    }

    getOrderList() {
        let params = '';
        params = '?page=' + this.page;
        this.createdAppService.getAppOrderList(this.app_id, params).subscribe(
            (res) => {
                this.next_page = res['next'];
                this.total_item = res['count'];
                res['results'].forEach(x => {
                    this.order_list.push(x)
                })

                this.visible_key = true;
                this.loader.hide();
            },
            error => {
                this.loader.hide();
                console.log(error)
            }
        )
    }

    more() {
        if (this.next_page != null) {
            var num_arr = this.next_page.split('=');
            var count = +num_arr[num_arr.length - 1]
            if (this.page == count - 1) {
                this.page = count;
                this.getOrderList();
            }
        }
    }


}