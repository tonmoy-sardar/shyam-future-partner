import { Component, OnInit, OnDestroy, NgZone, Inject } from "@angular/core";
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
    uri: string;
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
        // this.socket = new WebSocket("wss://echo.websocket.org:443", []);
        // this.socket.onopen = (evt) => this.onOpen(evt)
        // this.socket.onclose = (evt) => this.onClose(evt)
        // this.socket.onmessage = (evt) => this.onMessage(evt)
        // this.socket.onerror = (evt) => this.onError(evt)
    }
    ngOnInit() {
        this.app_id = this.route.snapshot.params["id"];
        this.user_id = this.route.snapshot.params["user"];
        this.uri = this.route.snapshot.params["uri"];
        this.createChatSession();
    }

    onOpen(evt) {
        console.log(evt)
        this.zone.run(() => {
            var data = {
                text: "Welcome to the chat!",
                created: new Date(),
                sender: true
            }
            this.messages.push(data);
        });
    }

    onClose(evt) {
        this.zone.run(() => {
            var data = {
                text: "You have been disconnected",
                created: new Date(),
                sender: true
            }
            this.messages.push(data);
        });
    }

    onMessage(evt) {
        console.log(evt)
        this.zone.run(() => {
            var data = {
                text: evt.data,
                created: new Date(),
                sender: false
            }
            this.messages.push(data);
        });
    }

    onError(evt) {
        console.log("The socket had an error", evt.error);
    }

    ngOnDestroy() {
        // this.socket.close();
    }
    


    isViewed(message) {
        return false
    }

    send() {
        if (this.message) {
            // this.socket.send(this.message);
            this.sendMessageToApp();
            this.message = "";
        }
    }


    createChatSession() {
        var data = {
            sender: this.app_id,
            sender_type: "app_master",
            receiver: this.user_id,
            receiver_type: "customer"
        }
        this.messageService.createChatSessionView(data).subscribe(
            res => {
                console.log(res)
                this.uri = res['uri'];
                this.getMessageList();
            },
            error => {
                console.log(error)
            }
        )
    }


    getMessageList() {
        this.messageService.getMessageListByCustomer(this.uri).subscribe(
            res => {
                console.log(res)
                res['messages'].forEach(x => {
                    var type = x['user_type'];
                    var data = {
                        text: '',
                        created: new Date(),
                        sender: false
                    }
                    data.text = x['message']
                    if(type.toLowerCase() == "app_master"){
                        data.sender = true;
                    }
                    this.messages.push(data)
                    
                })
            },
            error => {
                console.log(error)
            }
        )
    }

    sendMessageToApp() {
        var data = {
            user_id: this.app_id,
            user_type: "app_master",
            message: this.message
        }
        this.messageService.messageToCustomer(data, this.uri).subscribe(
            res => {
                console.log(res)
                var data = {
                    text: '',
                    created: new Date(),
                    sender: true
                }
                data.text = res['message'];                
                this.messages.push(data)
            },
            error => {
                console.log(error)
            }
        )
    }
}