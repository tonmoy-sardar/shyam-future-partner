"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Globals = require("../../core/globals");
var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.createChatSessionView = function (data) {
        return this.http.post(Globals.apiEndpoint + 'chats/', data);
    };
    MessageService.prototype.getMessageListByCustomer = function (uri) {
        return this.http.get(Globals.apiEndpoint + 'chats/' + uri + '/messages/');
    };
    MessageService.prototype.messageToCustomer = function (data, uri) {
        return this.http.post(Globals.apiEndpoint + 'chats/' + uri + '/messages/', data);
    };
    MessageService.prototype.getChatMembersDetails = function (data) {
        return this.http.post(Globals.apiEndpoint + 'chat_members_details/', data);
    };
    MessageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUs4QjtBQUc5Qiw0Q0FBOEM7QUFHOUM7SUFFRSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFekMsOENBQXFCLEdBQXJCLFVBQXNCLElBQUk7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzdELENBQUM7SUFFRCxpREFBd0IsR0FBeEIsVUFBeUIsR0FBRztRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFBO0lBQzNFLENBQUM7SUFFRCwwQ0FBaUIsR0FBakIsVUFBa0IsSUFBSSxFQUFFLEdBQUc7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsUUFBUSxHQUFHLEdBQUcsR0FBRyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDbEYsQ0FBQztJQUVELDhDQUFxQixHQUFyQixVQUFzQixJQUFJO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLHVCQUF1QixFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzVFLENBQUM7SUFsQlUsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQUdlLGlCQUFVO09BRnpCLGNBQWMsQ0FvQjFCO0lBQUQscUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIEh0dHBDbGllbnQsXHJcbiAgSHR0cEhlYWRlcnMsXHJcbiAgSHR0cEVycm9yUmVzcG9uc2UsXHJcbiAgSHR0cFBhcmFtcyxcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCB0aHJvd0Vycm9yIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCAqIGFzIEdsb2JhbHMgZnJvbSAnLi4vLi4vY29yZS9nbG9iYWxzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH0gIFxyXG5cclxuICBjcmVhdGVDaGF0U2Vzc2lvblZpZXcoZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnY2hhdHMvJywgZGF0YSlcclxuICB9XHJcblxyXG4gIGdldE1lc3NhZ2VMaXN0QnlDdXN0b21lcih1cmkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnY2hhdHMvJyArIHVyaSArICcvbWVzc2FnZXMvJylcclxuICB9XHJcblxyXG4gIG1lc3NhZ2VUb0N1c3RvbWVyKGRhdGEsIHVyaSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KEdsb2JhbHMuYXBpRW5kcG9pbnQgKyAnY2hhdHMvJyArIHVyaSArICcvbWVzc2FnZXMvJywgZGF0YSlcclxuICB9XHJcblxyXG4gIGdldENoYXRNZW1iZXJzRGV0YWlscyhkYXRhKXtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ2NoYXRfbWVtYmVyc19kZXRhaWxzLycsIGRhdGEpXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=