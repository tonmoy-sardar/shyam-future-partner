android.app.IntentService.extend("com.tns.notifications.NotificationIntentService", {
    onHandleIntent: function (intent) {
        var action = intent.getAction();
        if ("ACTION_START" == action) {
            postNotification();
        } else if ("ACTION_STOP" == action) {
            /* get the system alarm manager and cancel all pending alarms, which will stop the service from executing periodically  */
        }
        android.support.v4.content.WakefulBroadcastReceiver.completeWakefulIntent(intent);
    }
})



function postNotification() {
    // Do something. For example, fetch fresh data from backend to create a rich notification?
    var utils = require("utils/utils");
    var context = utils.ad.getApplicationContext(); // get a reference to the application context in Android
    var builder = new android.app.Notification.Builder(context);
    builder.setContentTitle("Scheduled Notification")
        .setAutoCancel(true)
        .setColor(android.R.color.holo_purple) // optional
        .setContentText("This notification has been triggered by Notification Service")
        .setVibrate([100, 200, 100]) // optional
        .setSmallIcon(android.R.drawable.btn_star_big_on);
    // will open main NativeScript activity when the notification is pressed
    var mainIntent = new android.content.Intent(context, com.tns.NativeScriptActivity.class);
    var pendingIntent = android.app.PendingIntent.getActivity(context,
        1,
        mainIntent,
        android.app.PendingIntent.FLAG_UPDATE_CURRENT);
    builder.setContentIntent(pendingIntent);
    builder.setDeleteIntent(getDeleteIntent(context));
    var manager = context.getSystemService(android.content.Context.NOTIFICATION_SERVICE);
    manager.notify(1, builder.build());
}
/* only necessary for dismissing the notification from the Notifications Screen */
function getDeleteIntent(context) {
    var intent = new android.content.Intent(context, com.tns.broadcastreceivers.NotificationEventReceiver.class);
    intent.setAction("ACTION_DELETE_NOTIFICATION");
    return android.app.PendingIntent.getBroadcast(context, 0, intent, android.app.PendingIntent.FLAG_UPDATE_CURRENT);
}