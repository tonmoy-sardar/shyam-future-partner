import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreatedAppService } from "../../../core/services/created-app.service";
import { RouterExtensions } from "nativescript-angular/router";
import { MessageService } from '../../../core/services/message.service';
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
        private messageService: MessageService
    ) { }

    ngOnInit() {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);       

        this.getChatMembersDetails();
    }

    getChatMembersDetails(){
        var data = {
            receiver: this.app_id,
            receiver_type: "app_master"
        }
        this.messageService.getChatMembersDetails(data).subscribe(
            (res: any[]) => {
                console.log(res)
                res.forEach(x => {
                    x['when'] = new Date();
                    x['unread'] = x['message'].length;
                    x['text'] = x['message'][x['message'].length - 1].message;
                    this.chats.push(x)
                })
            },
            error => {
                console.log(error)
            }
        )
    }


    goToChat(event) {
        console.log(event)
    }
}