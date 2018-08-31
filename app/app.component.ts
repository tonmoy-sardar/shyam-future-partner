
import { Component } from "@angular/core";
var orientation = require('nativescript-orientation');
import * as application from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
// import * as PushNotifications from "nativescript-push-notifications";


@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {

    constructor(private router: RouterExtensions) {
        orientation.setOrientation("portrait");
        application.android.on(application.AndroidApplication.activityBackPressedEvent, (args: any) => {
            if (this.router.canGoBack()) {
                args.cancel = true;
                this.router.back();
            } else {
                args.cancel = false;
            }
        });

        // push notification
        
    }

}
