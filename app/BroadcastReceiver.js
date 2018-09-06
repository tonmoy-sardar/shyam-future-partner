android.support.v4.content.WakefulBroadcastReceiver.extend("com.tns.broadcastreceivers.NotificationEventReceiver", {
    onReceive: function (context, intent) {
        var action = intent.getAction();
        var serviceIntent;
        if ("ACTION_START_NOTIFICATION_SERVICE" == action) {
            serviceIntent = createIntentStartNotificationService(context);
        } else if ("ACTION_DELETE_NOTIFICATION" == action) {
            serviceIntent = createIntentDeleteNotification(context);
        }
        if (serviceIntent) {
            android.support.v4.content.WakefulBroadcastReceiver.startWakefulService(context, serviceIntent);
        }
    }
})

var Intent = android.content.Intent;

function createIntentStartNotificationService(context) {
    var intent = new Intent(context, com.tns.notifications.NotificationIntentService.class);
    intent.setAction("ACTION_START");
    return intent;
}

function createIntentDeleteNotification(context) {
    /* Similar as above, just with a different action */
}