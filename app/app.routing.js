"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var auth_guard_1 = require("./core/guard/auth.guard");
var routes = [
    { path: "login", loadChildren: "./login/login.module#LoginModule" },
    { path: "signup", loadChildren: "./signup/signup.module#SignupModule" },
    { path: "forgot-password", loadChildren: "./forgot-password/forgot-password.module#ForgotPasswordModule" },
    { path: '', loadChildren: './layout/layout.module#LayoutModule', canLoad: [auth_guard_1.AuthGuard] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes, { preloadingStrategy: router_2.PreloadAllModules })],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFDdkUsMENBQTREO0FBQzVELHNEQUFvRDtBQUlwRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGtDQUFrQyxFQUFFO0lBQ25FLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUscUNBQXFDLEVBQUU7SUFDdkUsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLCtEQUErRCxFQUFFO0lBQzFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUscUNBQXFDLEVBQUUsT0FBTyxFQUFFLENBQUMsc0JBQVMsQ0FBQyxFQUFFO0NBQzFGLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSwwQkFBaUIsRUFBRSxDQUFDLENBQUM7WUFDOUYsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVzLCBQcmVsb2FkQWxsTW9kdWxlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi9jb3JlL2d1YXJkL2F1dGguZ3VhcmQnO1xyXG5cclxuXHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBsb2FkQ2hpbGRyZW46IFwiLi9sb2dpbi9sb2dpbi5tb2R1bGUjTG9naW5Nb2R1bGVcIiB9LFxyXG4gICAgeyBwYXRoOiBcInNpZ251cFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9zaWdudXAvc2lnbnVwLm1vZHVsZSNTaWdudXBNb2R1bGVcIiB9LFxyXG4gICAgeyBwYXRoOiBcImZvcmdvdC1wYXNzd29yZFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLm1vZHVsZSNGb3Jnb3RQYXNzd29yZE1vZHVsZVwiIH0sXHJcbiAgICB7IHBhdGg6ICcnLCBsb2FkQ2hpbGRyZW46ICcuL2xheW91dC9sYXlvdXQubW9kdWxlI0xheW91dE1vZHVsZScsIGNhbkxvYWQ6IFtBdXRoR3VhcmRdIH0sXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcywgeyBwcmVsb2FkaW5nU3RyYXRlZ3k6IFByZWxvYWRBbGxNb2R1bGVzIH0pXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==