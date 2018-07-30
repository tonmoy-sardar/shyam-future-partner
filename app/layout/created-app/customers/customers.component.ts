import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreatedAppService } from "../../../core/services/created-app.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: 'customers',
    moduleId: module.id,
    templateUrl: `customers.component.html`,
    styleUrls: [`customers.component.css`]
})

export class CustomersComponent implements OnInit {
    form: FormGroup;
    processing = false;

    app_id: string;
    customer_list: any = [];

    visible_key: boolean;
    constructor(
        private route: ActivatedRoute,
        private CreatedAppService: CreatedAppService,
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
    ) { }

    ngOnInit() {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
        this.getCustomerListByAppID(this.app_id);
    }


    getCustomerListByAppID(id) {
        this.CreatedAppService.getCustomerListByAppID(id).subscribe(
            res => {
                this.customer_list = res;
                console.log(res)
                console.log(this.customer_list)
                this.visible_key = true
            },
            error => {
                console.log(error)
            }
        )
    }
}