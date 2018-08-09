"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Globals = require("../../core/globals");
var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.createChatSessionView = function (param, data) {
        return this.http.post(Globals.apiEndpoint + 'messages/' + param, data);
    };
    MessageService.prototype.getMessageListByCustomer = function (thread) {
        return this.http.get(Globals.apiEndpoint + 'messages/' + thread + "/");
    };
    // http://192.168.24.208:8000/chat_members/?user=3&user_type=app_master
    MessageService.prototype.getChatMembersDetails = function (param) {
        return this.http.get(Globals.apiEndpoint + 'chat_members/' + param);
    };
    MessageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUs4QjtBQUc5Qiw0Q0FBOEM7QUFHOUM7SUFFRSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFekMsOENBQXFCLEdBQXJCLFVBQXNCLEtBQUssRUFBRSxJQUFJO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLFdBQVcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDeEUsQ0FBQztJQUVELGlEQUF3QixHQUF4QixVQUF5QixNQUFNO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLFdBQVcsR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUE7SUFDeEUsQ0FBQztJQUNELHVFQUF1RTtJQUN2RSw4Q0FBcUIsR0FBckIsVUFBc0IsS0FBSztRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxlQUFlLEdBQUUsS0FBSyxDQUFDLENBQUE7SUFDcEUsQ0FBQztJQWRVLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FHZSxpQkFBVTtPQUZ6QixjQUFjLENBZ0IxQjtJQUFELHFCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBIdHRwQ2xpZW50LFxyXG4gIEh0dHBIZWFkZXJzLFxyXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxyXG4gIEh0dHBQYXJhbXMsXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgdGhyb3dFcnJvciB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgKiBhcyBHbG9iYWxzIGZyb20gJy4uLy4uL2NvcmUvZ2xvYmFscyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9ICBcclxuXHJcbiAgY3JlYXRlQ2hhdFNlc3Npb25WaWV3KHBhcmFtLCBkYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoR2xvYmFscy5hcGlFbmRwb2ludCArICdtZXNzYWdlcy8nICsgcGFyYW0sIGRhdGEpXHJcbiAgfVxyXG5cclxuICBnZXRNZXNzYWdlTGlzdEJ5Q3VzdG9tZXIodGhyZWFkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChHbG9iYWxzLmFwaUVuZHBvaW50ICsgJ21lc3NhZ2VzLycgKyB0aHJlYWQgKyBcIi9cIilcclxuICB9XHJcbiAgLy8gaHR0cDovLzE5Mi4xNjguMjQuMjA4OjgwMDAvY2hhdF9tZW1iZXJzLz91c2VyPTMmdXNlcl90eXBlPWFwcF9tYXN0ZXJcclxuICBnZXRDaGF0TWVtYmVyc0RldGFpbHMocGFyYW0pe1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoR2xvYmFscy5hcGlFbmRwb2ludCArICdjaGF0X21lbWJlcnMvJysgcGFyYW0pXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=