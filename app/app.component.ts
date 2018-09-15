
import { Component, ViewChild, ElementRef } from "@angular/core";
var orientation = require('nativescript-orientation');
import * as application from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
const firebase = require("nativescript-plugin-firebase");
const dialogs = require("ui/dialogs");
let deviceToken = "";
import { getString, setString, getBoolean, setBoolean, clear } from "application-settings";
import { NotificationService } from "./core/services/notification.service";
import { Button } from "ui/button";
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";
import { Color } from "tns-core-modules/color";
const connectivityModule = require("tns-core-modules/connectivity");
const connectionType = connectivityModule.getConnectionType();
@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {

    @ViewChild("button") button: ElementRef;
    private feedback: Feedback;
    constructor(
        private router: RouterExtensions,
        private notificationService: NotificationService
    ) {
        orientation.setOrientation("portrait");
        application.android.on(application.AndroidApplication.activityBackPressedEvent, (args: any) => {
            if (this.router.canGoBack()) {
                args.cancel = true;
                // this.router.back();
            } else {
                args.cancel = false;
            }
        });

        // push notification
        var $this = this;
        firebase.init({
            onPushTokenReceivedCallback: function (token) {
                deviceToken = token;
                console.log("Firebase push token: " + token);
            },
            onMessageReceivedCallback: function (message) {
                let el: Button = $this.button.nativeElement;
                el.notify({ eventName: "tap", object: el })
            },
            persist: false
        }).then(
            instance => {
                console.log("firebase.init done");
            },
            error => {
                console.log(`firebase.init error: ${error}`);
            }
        );

        // network connection issue
        this.feedback = new Feedback();
        switch (connectionType) {
            case connectivityModule.connectionType.none:
                // Denotes no Internet connection.
                console.log("No connection");
                this.feedback.error({
                    title: "No connection",
                    backgroundColor: new Color("red"),
                    titleColor: new Color("black"),
                    position: FeedbackPosition.Bottom,
                    type: FeedbackType.Custom
                });
                break;
            case connectivityModule.connectionType.wifi:
                // Denotes a WiFi connection.
                console.log("WiFi connection");
                break;
            case connectivityModule.connectionType.mobile:
                // Denotes a mobile connection, i.e. cellular network or WAN.
                console.log("Mobile connection");
                break;
            default:
                break;
        }


    }

    pushN() {
        this.notificationService.badgeCountStatus(true);
    }



}
