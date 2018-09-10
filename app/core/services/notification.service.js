"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Globals = require("../../core/globals");
var NotificationService = /** @class */ (function () {
    function NotificationService(http) {
        this.http = http;
        this.getBadgeCountStatus = new core_1.EventEmitter();
    }
    NotificationService.prototype.badgeCountStatus = function (data) {
        if (data == true) {
            this.getBadgeCountStatus.emit(true);
            return;
        }
        else {
            this.getBadgeCountStatus.emit(false);
            return;
        }
    };
    NotificationService.prototype.updateDeviceToken = function (id, data) {
        return this.http.put(Globals.apiEndpoint + 'partner_device_token/' + id + '/', data);
    };
    NotificationService.prototype.getCustomerDeviceToken = function (customer) {
        return this.http.get(Globals.apiEndpoint + 'customer_device_token/' + customer + '/');
    };
    NotificationService.prototype.sendPushNotification = function (token, value) {
        var data = {
            notification: {
                title: value.title,
                subtitle: value.subtitle,
                text: value.text,
                badge: "1",
                sound: "default",
                showWhenInForeground: true
            },
            content_available: false,
            data: {},
            priority: "High",
            to: token
        };
        return this.http.post(Globals.firebase_url, data, {
            headers: new http_1.HttpHeaders().set('Authorization', 'key=' + Globals.server_key)
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NotificationService.prototype, "getBadgeCountStatus", void 0);
    NotificationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], NotificationService);
    return NotificationService;
}());
exports.NotificationService = NotificationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRTtBQUNqRSw2Q0FLOEI7QUFHOUIsNENBQThDO0FBRzlDO0lBSUUsNkJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGMUIsd0JBQW1CLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBRTlCLENBQUM7SUFFekMsOENBQWdCLEdBQWhCLFVBQWlCLElBQUk7UUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxNQUFNLENBQUE7UUFDUixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQTtRQUNSLENBQUM7SUFDSCxDQUFDO0lBRUQsK0NBQWlCLEdBQWpCLFVBQWtCLEVBQUUsRUFBRSxJQUFJO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLHVCQUF1QixHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDdEYsQ0FBQztJQUVELG9EQUFzQixHQUF0QixVQUF1QixRQUFRO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLHdCQUF3QixHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQTtJQUN2RixDQUFDO0lBRUQsa0RBQW9CLEdBQXBCLFVBQXFCLEtBQUssRUFBRSxLQUFLO1FBQy9CLElBQUksSUFBSSxHQUFHO1lBQ1QsWUFBWSxFQUFFO2dCQUNaLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztnQkFDbEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO2dCQUN4QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7Z0JBQ2hCLEtBQUssRUFBRSxHQUFHO2dCQUNWLEtBQUssRUFBRSxTQUFTO2dCQUNoQixvQkFBb0IsRUFBRSxJQUFJO2FBQzNCO1lBQ0QsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixJQUFJLEVBQUUsRUFFTDtZQUNELFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEVBQUUsRUFBRSxLQUFLO1NBQ1YsQ0FBQTtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRTtZQUNoRCxPQUFPLEVBQUUsSUFBSSxrQkFBVyxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztTQUM3RSxDQUFDLENBQUE7SUFDSixDQUFDO0lBMUNTO1FBQVQsYUFBTSxFQUFFO2tDQUFzQixtQkFBWTtvRUFBMkI7SUFGM0QsbUJBQW1CO1FBRC9CLGlCQUFVLEVBQUU7eUNBS2UsaUJBQVU7T0FKekIsbUJBQW1CLENBK0MvQjtJQUFELDBCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7QUEvQ1ksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIEh0dHBDbGllbnQsXHJcbiAgSHR0cEhlYWRlcnMsXHJcbiAgSHR0cEVycm9yUmVzcG9uc2UsXHJcbiAgSHR0cFBhcmFtcyxcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCB0aHJvd0Vycm9yIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCAqIGFzIEdsb2JhbHMgZnJvbSAnLi4vLi4vY29yZS9nbG9iYWxzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblNlcnZpY2Uge1xyXG5cclxuICBAT3V0cHV0KCkgZ2V0QmFkZ2VDb3VudFN0YXR1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIGJhZGdlQ291bnRTdGF0dXMoZGF0YSkge1xyXG4gICAgaWYgKGRhdGEgPT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLmdldEJhZGdlQ291bnRTdGF0dXMuZW1pdCh0cnVlKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldEJhZGdlQ291bnRTdGF0dXMuZW1pdChmYWxzZSk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGV2aWNlVG9rZW4oaWQsIGRhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAncGFydG5lcl9kZXZpY2VfdG9rZW4vJyArIGlkICsgJy8nLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3VzdG9tZXJEZXZpY2VUb2tlbihjdXN0b21lcikge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdjdXN0b21lcl9kZXZpY2VfdG9rZW4vJyArIGN1c3RvbWVyICsgJy8nKVxyXG4gIH1cclxuXHJcbiAgc2VuZFB1c2hOb3RpZmljYXRpb24odG9rZW4sIHZhbHVlKSB7XHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgbm90aWZpY2F0aW9uOiB7XHJcbiAgICAgICAgdGl0bGU6IHZhbHVlLnRpdGxlLFxyXG4gICAgICAgIHN1YnRpdGxlOiB2YWx1ZS5zdWJ0aXRsZSxcclxuICAgICAgICB0ZXh0OiB2YWx1ZS50ZXh0LFxyXG4gICAgICAgIGJhZGdlOiBcIjFcIixcclxuICAgICAgICBzb3VuZDogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgc2hvd1doZW5JbkZvcmVncm91bmQ6IHRydWVcclxuICAgICAgfSxcclxuICAgICAgY29udGVudF9hdmFpbGFibGU6IGZhbHNlLFxyXG4gICAgICBkYXRhOiB7XHJcblxyXG4gICAgICB9LFxyXG4gICAgICBwcmlvcml0eTogXCJIaWdoXCIsXHJcbiAgICAgIHRvOiB0b2tlblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KEdsb2JhbHMuZmlyZWJhc2VfdXJsLCBkYXRhLCB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQXV0aG9yaXphdGlvbicsICdrZXk9JyArIEdsb2JhbHMuc2VydmVyX2tleSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19