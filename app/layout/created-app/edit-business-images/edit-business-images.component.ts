import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterExtensions } from "nativescript-angular/router";
@Component({
    selector: 'edit-business-images',
    moduleId: module.id,
    templateUrl: `edit-business-images.component.html`,
    styleUrls: [`edit-business-images.component.css`]
})

export class EditBusinessImagesComponent implements OnInit {
    form: FormGroup;
    processing = false;
    app_id: string;
    visible_key: boolean;
    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
    ) { }

    ngOnInit() {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
    }


}