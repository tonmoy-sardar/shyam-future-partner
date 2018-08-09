"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var auth_guard_1 = require("./core/guard/auth.guard");
var routes = [
    { path: "login", loadChildren: "./login/login.module#LoginModule" },
    { path: "signup", loadChildren: "./signup/signup.module#SignupModule" },
    { path: '', loadChildren: './layout/layout.module#LayoutModule', canLoad: [auth_guard_1.AuthGuard] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFFdkUsc0RBQW9EO0FBSXBELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsa0NBQWtDLEVBQUU7SUFDbkUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxxQ0FBcUMsRUFBRTtJQUN2RSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLHFDQUFxQyxFQUFFLE9BQU8sRUFBRSxDQUFDLHNCQUFTLENBQUMsRUFBRTtDQUMxRixDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuL2NvcmUvZ3VhcmQvYXV0aC5ndWFyZCc7XG5cblxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwibG9naW5cIiwgbG9hZENoaWxkcmVuOiBcIi4vbG9naW4vbG9naW4ubW9kdWxlI0xvZ2luTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwic2lnbnVwXCIsIGxvYWRDaGlsZHJlbjogXCIuL3NpZ251cC9zaWdudXAubW9kdWxlI1NpZ251cE1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiAnJywgbG9hZENoaWxkcmVuOiAnLi9sYXlvdXQvbGF5b3V0Lm1vZHVsZSNMYXlvdXRNb2R1bGUnLCBjYW5Mb2FkOiBbQXV0aEd1YXJkXSB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=