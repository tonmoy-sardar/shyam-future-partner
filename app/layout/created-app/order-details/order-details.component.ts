import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterExtensions } from "nativescript-angular/router";
import { CreatedAppService } from "../../../core/services/created-app.service";
@Component({
    selector: 'order-details',
    moduleId: module.id,
    templateUrl: `order-details.component.html`,
    styleUrls: [`order-details.component.css`]
})

export class OrderDetailsComponent implements OnInit {
    form: FormGroup;
    processing = false;
    order_id: string;
    visible_key: boolean;
    order_details;
    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
        private createdAppService: CreatedAppService
    ) { }

    ngOnInit() {
        this.order_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
        this.getAppOrderDetails(this.order_id)
    }

    getAppOrderDetails(id) {
        this.createdAppService.getAppOrderDetails(id).subscribe(
            res => {
                this.order_details = res[0];
                this.visible_key = true
                console.log(res)
            },
            error => {
                console.log(error)
            }
        )
    }


}