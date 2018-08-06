import { Component, OnInit, OnDestroy, NgZone, Inject, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { CreatedAppService } from "../../../core/services/created-app.service";
import { MessageService } from '../../../core/services/message.service';
import { RouterExtensions } from "nativescript-angular/router";
import { getString, setString, getBoolean, setBoolean, clear } from "application-settings";
require("nativescript-websockets");
@Component({
    selector: 'chat',
    moduleId: module.id,
    templateUrl: `chat.component.html`,
    styleUrls: [`chat.component.css`]
})
export class ChatComponent implements OnInit, OnDestroy {
    app_id: string;
    visible_key: boolean;
    message: string;
    socket: any;
    messages: Array<any>;
    user_id: string;
    @ViewChild("ScrollList") scrollList: ElementRef;
    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private messageService: MessageService,
        private router: RouterExtensions,
        private zone: NgZone,
        private CreatedAppService: CreatedAppService,
    ) {

        this.messages = [];
        this.message = "";
    }
    ngOnInit() {
        this.app_id = this.route.snapshot.params["id"];
        this.user_id = this.route.snapshot.params["user"];
        this.createChatSession();
        this.socket = new WebSocket("ws://132.148.147.239:8001/messages/?sender=" + this.app_id + "&sender_type=app_master&receiver=" + this.user_id + "&receiver_type=customer");
        this.socket.onopen = (evt) => this.onOpen(evt)
        this.socket.onclose = (evt) => this.onClose(evt)
        this.socket.onmessage = (evt) => this.onMessage(evt)
        this.socket.onerror = (evt) => this.onError(evt)
    }

    onOpen(evt) {
        console.log(evt)
        // this.zone.run(() => {
        //     var data = {
        //         text: "Welcome to the chat!",
        //         created: new Date(),
        //         sender: false
        //     }
        //     this.messages.push(data);
        // });
        console.log("Welcome to the chat!");
    }

    onClose(evt) {
        // this.zone.run(() => {
        //     var data = {
        //         text: "You have been disconnected",
        //         created: new Date(),
        //         sender: false
        //     }
        //     this.messages.push(data);
        // });
        console.log("You have been disconnected");
    }

    onMessage(evt) {
        console.log(JSON.parse(evt.data))
        var msgData = JSON.parse(evt.data)
        this.zone.run(() => {
            var data = {
                text: msgData.message,
                created: msgData.datetime
            }
            if (msgData.chat_user == this.app_id) {
                data['sender'] = true
            }
            else {
                data['sender'] = false
            }
            this.messages.push(data);
            this.scrollToBottom();
        });
    }

    onError(evt) {
        console.log("The socket had an error");
    }

    ngOnDestroy() {
        // this.socket.close();
    }



    isViewed(message) {
        return false
    }

    send() {
        if (this.message) {
            var data = {
                chat_user: this.app_id,
                chat_user_type: "app_master",
                message: this.message
            }
            this.socket.send(JSON.stringify(data));
            this.message = "";
        }
    }


    createChatSession() {
        var data = {
            chat_user: '',
            message: '',
            chat_user_type: ''
        }
        var param = "?sender=" + this.app_id + "&sender_type=app_master&receiver=" + this.user_id + "&receiver_type=customer"
        this.messageService.createChatSessionView(param, data).subscribe(
            res => {
                console.log(res)
                var thread = res['thread']
                this.getMessageList(thread);
            },
            error => {
                console.log(error)
            }
        )
    }


    getMessageList(thread) {
        this.messageService.getMessageListByCustomer(thread).subscribe(
            (res: any[]) => {
                console.log(res)
                res.forEach(x => {
                    var data = {
                        text: x.message,
                        created: x.datetime
                    }
                    if (x.chat_user == this.app_id) {
                        data['sender'] = true
                    }
                    else {
                        data['sender'] = false
                    }
                    this.messages.push(data)
                    console.log(this.messages)
                    this.scrollToBottom();
                })
            },
            error => {
                console.log(error)
            }
        )
    }


    scrollToBottom() {
        setTimeout(() => {
            this.scrollList.nativeElement.scrollToVerticalOffset(100000);
        }, 1000);
    }
}