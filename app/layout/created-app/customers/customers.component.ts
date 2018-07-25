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
        // this.getAppDetails(this.app_id);

        // this.form = this.formBuilder.group({
        //     business_name: ['', Validators.required],
        //     business_description: ['', Validators.required]
        // });
    }
}