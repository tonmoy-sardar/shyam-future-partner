import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreatedAppService } from "../../../core/services/created-app.service";
import { RouterExtensions } from "nativescript-angular/router";
import { CustomerService } from "../../../core/services/customer.service"
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
    visible_key: boolean;
    customer_list: any = [];
    constructor(
        private route: ActivatedRoute,
        private CreatedAppService: CreatedAppService,
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
        private customerService: CustomerService
    ) { }

    ngOnInit() {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
        this.getCustomerList(this.app_id);
    }

    getCustomerList(id) {
        this.customerService.getCustomerListByApp(id).subscribe(
            res => {
                console.log(res)
                this.customer_list = res;
            },
            error => {
                console.log(error)
            }
        )
    }
}