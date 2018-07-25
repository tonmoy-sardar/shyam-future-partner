import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreatedAppService } from "../../../core/services/created-app.service";
import { RouterExtensions } from "nativescript-angular/router";

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
    constructor(
        private route: ActivatedRoute,
        private CreatedAppService: CreatedAppService,
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
    ) { }

    ngOnInit() {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
        this.chats = [
            {
                contact: {
                    avatar: '~/images/shyam-wheel.png',
                    name: 'BM K'
                },
                type: 'DIRECT',
                when: new Date(),
                unread: parseInt(Math.random() * 10 + '', 10) - 3,
                text: 'Hi',
            },
            {
                contact: {
                    avatar: '~/images/shyam-wheel.png',
                    name: 'SR L'
                },
                type: 'DIRECT',
                when: new Date(),
                unread: parseInt(Math.random() * 10 + '', 10) - 3,
                text: 'how are you',
            },
            {
                contact: {
                    avatar: '~/images/shyam-wheel.png',
                    name: 'AK Sharma'
                },
                type: 'DIRECT',
                when: new Date(),
                unread: parseInt(Math.random() * 10 + '', 10) - 3,
                text: 'How the days?',
            }
        ]
    }


    goToChat(event){

    }
}