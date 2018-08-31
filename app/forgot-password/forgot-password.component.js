"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var forms_1 = require("@angular/forms");
var login_service_1 = require("../core/services/login.service");
var application_settings_1 = require("application-settings");
var router_1 = require("nativescript-angular/router");
var nativescript_feedback_1 = require("nativescript-feedback");
var color_1 = require("tns-core-modules/color");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(page, router, formBuilder, loginService, modal, vcRef) {
        this.page = page;
        this.router = router;
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.modal = modal;
        this.vcRef = vcRef;
        this.processing = false;
        this.showOtpSection = false;
        this.newPwdSection = false;
        this.loader = new nativescript_loading_indicator_1.LoadingIndicator();
        this.lodaing_options = {
            message: 'Loading...',
            progress: 0.65,
            android: {
                indeterminate: true,
                cancelable: false,
                cancelListener: function (dialog) { console.log("Loading cancelled"); },
                max: 100,
                progressNumberFormat: "%1d/%2d",
                progressPercentFormat: 0.53,
                progressStyle: 1,
                secondaryProgress: 1
            },
            ios: {
                details: "Additional detail note!",
                margin: 10,
                dimBackground: true,
                color: "#4B9ED6",
                backgroundColor: "yellow",
                userInteractionEnabled: false,
                hideBezel: true,
            }
        };
        this.options = {
            context: {},
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.page.actionBarHidden = true;
        this.feedback = new nativescript_feedback_1.Feedback();
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            contact_no: ['', forms_1.Validators.required]
        });
        this.otpForm = this.formBuilder.group({
            otp: ['', forms_1.Validators.required]
        });
        this.passwordForm = this.formBuilder.group({
            password: ['', forms_1.Validators.required],
            conf_password: ['', forms_1.Validators.required]
        });
    };
    ForgotPasswordComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched);
    };
    ForgotPasswordComponent.prototype.isFieldValid1 = function (field) {
        return !this.otpForm.get(field).valid && (this.otpForm.get(field).dirty || this.otpForm.get(field).touched);
    };
    ForgotPasswordComponent.prototype.isFieldValid2 = function (field) {
        return !this.passwordForm.get(field).valid && (this.passwordForm.get(field).dirty || this.passwordForm.get(field).touched);
    };
    ForgotPasswordComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
            'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
        };
    };
    ForgotPasswordComponent.prototype.displayFieldCss1 = function (field) {
        return {
            'is-invalid': this.otpForm.get(field).invalid && (this.otpForm.get(field).dirty || this.otpForm.get(field).touched),
            'is-valid': this.otpForm.get(field).valid && (this.otpForm.get(field).dirty || this.otpForm.get(field).touched)
        };
    };
    ForgotPasswordComponent.prototype.displayFieldCss2 = function (field) {
        return {
            'is-invalid': this.passwordForm.get(field).invalid && (this.passwordForm.get(field).dirty || this.passwordForm.get(field).touched),
            'is-valid': this.passwordForm.get(field).valid && (this.passwordForm.get(field).dirty || this.passwordForm.get(field).touched)
        };
    };
    ForgotPasswordComponent.prototype.customerForgotPasswordOtp = function () {
        var _this = this;
        if (this.form.valid) {
            this.loader.show(this.lodaing_options);
            this.contact_no = this.form.value.contact_no;
            this.loginService.userForgetPasswordOtp(this.form.value).subscribe(function (res) {
                _this.loader.hide();
                console.log(res);
                _this.otp = res.otp;
                _this.showOtpSection = true;
            }, function (error) {
                _this.loader.hide();
                console.log(error);
                _this.feedback.error({
                    title: error.error.msg,
                    backgroundColor: new color_1.Color("red"),
                    titleColor: new color_1.Color("black"),
                    position: nativescript_feedback_1.FeedbackPosition.Bottom,
                    type: nativescript_feedback_1.FeedbackType.Custom
                });
            });
        }
        else {
            this.markFormGroupTouched(this.form);
        }
    };
    ForgotPasswordComponent.prototype.resendOtp = function () {
        var _this = this;
        this.loader.show(this.lodaing_options);
        var data = {
            contact_no: this.contact_no
        };
        this.loginService.userForgetPasswordOtp(data).subscribe(function (res) {
            _this.loader.hide();
            console.log(res);
            _this.otp = res.otp;
            _this.showOtpSection = true;
        }, function (error) {
            _this.loader.hide();
            console.log(error);
            _this.feedback.error({
                title: error.error.msg,
                backgroundColor: new color_1.Color("red"),
                titleColor: new color_1.Color("black"),
                position: nativescript_feedback_1.FeedbackPosition.Bottom,
                type: nativescript_feedback_1.FeedbackType.Custom
            });
        });
    };
    ForgotPasswordComponent.prototype.submitOtp = function () {
        if (this.otp == this.otpForm.value.otp) {
            this.newPwdSection = true;
            this.otp_check = 1;
        }
        else {
            this.feedback.error({
                title: 'Please Enter Valid OTP',
                backgroundColor: new color_1.Color("red"),
                titleColor: new color_1.Color("black"),
                position: nativescript_feedback_1.FeedbackPosition.Bottom,
                type: nativescript_feedback_1.FeedbackType.Custom
            });
        }
    };
    ForgotPasswordComponent.prototype.submitNewPwd = function () {
        var _this = this;
        if (this.passwordForm.valid) {
            if (this.passwordForm.value.conf_password != this.passwordForm.value.password) {
                this.feedback.error({
                    title: 'Password & Confirm Password are not same',
                    backgroundColor: new color_1.Color("red"),
                    titleColor: new color_1.Color("black"),
                    position: nativescript_feedback_1.FeedbackPosition.Bottom,
                    type: nativescript_feedback_1.FeedbackType.Custom
                });
            }
            else {
                this.loader.show(this.lodaing_options);
                var data = {
                    contact_no: this.contact_no,
                    otp_check: this.otp_check,
                    password: this.passwordForm.value.password
                };
                this.loginService.userForgetPasswordUpdate(data).subscribe(function (res) {
                    _this.loader.hide();
                    _this.feedback.success({
                        title: 'Password has been successfully changed. ',
                        backgroundColor: new color_1.Color("green"),
                        titleColor: new color_1.Color("black"),
                        position: nativescript_feedback_1.FeedbackPosition.Bottom,
                        type: nativescript_feedback_1.FeedbackType.Custom
                    });
                    _this.router.navigate(['/login']);
                }, function (error) {
                    _this.loader.hide();
                    console.log(error);
                    _this.feedback.error({
                        title: error.error.msg,
                        backgroundColor: new color_1.Color("red"),
                        titleColor: new color_1.Color("black"),
                        position: nativescript_feedback_1.FeedbackPosition.Bottom,
                        type: nativescript_feedback_1.FeedbackType.Custom
                    });
                });
            }
        }
        else {
            this.markFormGroupTouched(this.form);
        }
    };
    ForgotPasswordComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    ForgotPasswordComponent.prototype.skip = function () {
        application_settings_1.setBoolean("isSkipped", true);
        this.router.navigate(['/']);
    };
    ForgotPasswordComponent = __decorate([
        core_1.Component({
            selector: "forgot-password",
            moduleId: module.id,
            templateUrl: "./forgot-password.component.html",
            styleUrls: ['./forgot-password.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions,
            forms_1.FormBuilder,
            login_service_1.LoginService,
            dialogs_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
exports.ForgotPasswordComponent = ForgotPasswordComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFHcEUsaURBQWdEO0FBQ2hELHdDQUFvRTtBQUNwRSxnRUFBOEQ7QUFDOUQsNkRBQTJGO0FBQzNGLHNEQUErRDtBQUMvRCwrREFBaUY7QUFDakYsZ0RBQStDO0FBQy9DLGlGQUFrRTtBQUNsRSxtRUFBNkU7QUFTN0U7SUF5Q0UsaUNBQ1UsSUFBVSxFQUNWLE1BQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLFlBQTBCLEVBQzFCLEtBQXlCLEVBQ3pCLEtBQXVCO1FBTHZCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQTNDakMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUl0QixXQUFNLEdBQUcsSUFBSSxpREFBZ0IsRUFBRSxDQUFDO1FBRWhDLG9CQUFlLEdBQUc7WUFDaEIsT0FBTyxFQUFFLFlBQVk7WUFDckIsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUU7Z0JBQ1AsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixjQUFjLEVBQUUsVUFBVSxNQUFNLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztnQkFDdEUsR0FBRyxFQUFFLEdBQUc7Z0JBQ1Isb0JBQW9CLEVBQUUsU0FBUztnQkFDL0IscUJBQXFCLEVBQUUsSUFBSTtnQkFDM0IsYUFB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VyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztTQUMvQyxDQUFDO3lDQTJDZ0IsV0FBSTtZQUNGLHlCQUFnQjtZQUNYLG1CQUFXO1lBQ1YsNEJBQVk7WUFDbkIsNEJBQWtCO1lBQ2xCLHVCQUFnQjtPQS9DdEIsdUJBQXVCLENBOFBuQztJQUFELDhCQUFDO0NBQUEsQUE5UEQsSUE4UEM7QUE5UFksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IGFsZXJ0LCBwcm9tcHQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCIuLi9jb3JlL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIGdldEJvb2xlYW4sIHNldEJvb2xlYW4sIGNsZWFyIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZlZWRiYWNrLCBGZWVkYmFja1R5cGUsIEZlZWRiYWNrUG9zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZlZWRiYWNrXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIjtcclxuaW1wb3J0IHsgTG9hZGluZ0luZGljYXRvciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImZvcmdvdC1wYXNzd29yZFwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFsnLi9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZm9ybTogRm9ybUdyb3VwO1xyXG4gIG90cEZvcm06IEZvcm1Hcm91cDtcclxuICBwYXNzd29yZEZvcm06IEZvcm1Hcm91cDtcclxuICBwcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgc2hvd090cFNlY3Rpb24gPSBmYWxzZTtcclxuICBuZXdQd2RTZWN0aW9uID0gZmFsc2U7XHJcbiAgY29udGFjdF9ubztcclxuICBvdHBfY2hlY2s7XHJcbiAgcHJpdmF0ZSBmZWVkYmFjazogRmVlZGJhY2s7XHJcbiAgbG9hZGVyID0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcclxuICBvdHA7XHJcbiAgbG9kYWluZ19vcHRpb25zID0ge1xyXG4gICAgbWVzc2FnZTogJ0xvYWRpbmcuLi4nLFxyXG4gICAgcHJvZ3Jlc3M6IDAuNjUsXHJcbiAgICBhbmRyb2lkOiB7XHJcbiAgICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXHJcbiAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxyXG4gICAgICBjYW5jZWxMaXN0ZW5lcjogZnVuY3Rpb24gKGRpYWxvZykgeyBjb25zb2xlLmxvZyhcIkxvYWRpbmcgY2FuY2VsbGVkXCIpIH0sXHJcbiAgICAgIG1heDogMTAwLFxyXG4gICAgICBwcm9ncmVzc051bWJlckZvcm1hdDogXCIlMWQvJTJkXCIsXHJcbiAgICAgIHByb2dyZXNzUGVyY2VudEZvcm1hdDogMC41MyxcclxuICAgICAgcHJvZ3Jlc3NTdHlsZTogMSxcclxuICAgICAgc2Vjb25kYXJ5UHJvZ3Jlc3M6IDFcclxuICAgIH0sXHJcbiAgICBpb3M6IHtcclxuICAgICAgZGV0YWlsczogXCJBZGRpdGlvbmFsIGRldGFpbCBub3RlIVwiLFxyXG4gICAgICBtYXJnaW46IDEwLFxyXG4gICAgICBkaW1CYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgICBjb2xvcjogXCIjNEI5RUQ2XCIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dcIixcclxuICAgICAgdXNlckludGVyYWN0aW9uRW5hYmxlZDogZmFsc2UsXHJcbiAgICAgIGhpZGVCZXplbDogdHJ1ZSxcclxuICAgIH1cclxuICB9XHJcbiAgb3B0aW9ucyA9IHtcclxuICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcclxuICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSxcclxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgKSB7XHJcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIHRoaXMuZmVlZGJhY2sgPSBuZXcgRmVlZGJhY2soKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5mb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgIGNvbnRhY3Rfbm86IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub3RwRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICBvdHA6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucGFzc3dvcmRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBjb25mX3Bhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBpc0ZpZWxkVmFsaWQoZmllbGQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuICF0aGlzLmZvcm0uZ2V0KGZpZWxkKS52YWxpZCAmJiAodGhpcy5mb3JtLmdldChmaWVsZCkuZGlydHkgfHwgdGhpcy5mb3JtLmdldChmaWVsZCkudG91Y2hlZCk7XHJcbiAgfVxyXG4gIGlzRmllbGRWYWxpZDEoZmllbGQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuICF0aGlzLm90cEZvcm0uZ2V0KGZpZWxkKS52YWxpZCAmJiAodGhpcy5vdHBGb3JtLmdldChmaWVsZCkuZGlydHkgfHwgdGhpcy5vdHBGb3JtLmdldChmaWVsZCkudG91Y2hlZCk7XHJcbiAgfVxyXG4gIGlzRmllbGRWYWxpZDIoZmllbGQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuICF0aGlzLnBhc3N3b3JkRm9ybS5nZXQoZmllbGQpLnZhbGlkICYmICh0aGlzLnBhc3N3b3JkRm9ybS5nZXQoZmllbGQpLmRpcnR5IHx8IHRoaXMucGFzc3dvcmRGb3JtLmdldChmaWVsZCkudG91Y2hlZCk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5RmllbGRDc3MoZmllbGQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgJ2lzLWludmFsaWQnOiB0aGlzLmZvcm0uZ2V0KGZpZWxkKS5pbnZhbGlkICYmICh0aGlzLmZvcm0uZ2V0KGZpZWxkKS5kaXJ0eSB8fCB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKSxcclxuICAgICAgJ2lzLXZhbGlkJzogdGhpcy5mb3JtLmdldChmaWVsZCkudmFsaWQgJiYgKHRoaXMuZm9ybS5nZXQoZmllbGQpLmRpcnR5IHx8IHRoaXMuZm9ybS5nZXQoZmllbGQpLnRvdWNoZWQpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheUZpZWxkQ3NzMShmaWVsZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAnaXMtaW52YWxpZCc6IHRoaXMub3RwRm9ybS5nZXQoZmllbGQpLmludmFsaWQgJiYgKHRoaXMub3RwRm9ybS5nZXQoZmllbGQpLmRpcnR5IHx8IHRoaXMub3RwRm9ybS5nZXQoZmllbGQpLnRvdWNoZWQpLFxyXG4gICAgICAnaXMtdmFsaWQnOiB0aGlzLm90cEZvcm0uZ2V0KGZpZWxkKS52YWxpZCAmJiAodGhpcy5vdHBGb3JtLmdldChmaWVsZCkuZGlydHkgfHwgdGhpcy5vdHBGb3JtLmdldChmaWVsZCkudG91Y2hlZClcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5RmllbGRDc3MyKGZpZWxkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICdpcy1pbnZhbGlkJzogdGhpcy5wYXNzd29yZEZvcm0uZ2V0KGZpZWxkKS5pbnZhbGlkICYmICh0aGlzLnBhc3N3b3JkRm9ybS5nZXQoZmllbGQpLmRpcnR5IHx8IHRoaXMucGFzc3dvcmRGb3JtLmdldChmaWVsZCkudG91Y2hlZCksXHJcbiAgICAgICdpcy12YWxpZCc6IHRoaXMucGFzc3dvcmRGb3JtLmdldChmaWVsZCkudmFsaWQgJiYgKHRoaXMucGFzc3dvcmRGb3JtLmdldChmaWVsZCkuZGlydHkgfHwgdGhpcy5wYXNzd29yZEZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgY3VzdG9tZXJGb3Jnb3RQYXNzd29yZE90cCgpIHtcclxuXHJcbiAgICBpZiAodGhpcy5mb3JtLnZhbGlkKSB7XHJcbiAgICAgIHRoaXMubG9hZGVyLnNob3codGhpcy5sb2RhaW5nX29wdGlvbnMpO1xyXG4gICAgICB0aGlzLmNvbnRhY3Rfbm8gPSB0aGlzLmZvcm0udmFsdWUuY29udGFjdF9ubztcclxuICAgICAgdGhpcy5sb2dpblNlcnZpY2UudXNlckZvcmdldFBhc3N3b3JkT3RwKHRoaXMuZm9ybS52YWx1ZSkuc3Vic2NyaWJlKFxyXG4gICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICB0aGlzLm90cCA9IHJlcy5vdHBcclxuICAgICAgICAgIHRoaXMuc2hvd090cFNlY3Rpb24gPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcblxyXG4gICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICB0aGlzLmZlZWRiYWNrLmVycm9yKHtcclxuICAgICAgICAgICAgdGl0bGU6IGVycm9yLmVycm9yLm1zZyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCJyZWRcIiksXHJcbiAgICAgICAgICAgIHRpdGxlQ29sb3I6IG5ldyBDb2xvcihcImJsYWNrXCIpLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogRmVlZGJhY2tQb3NpdGlvbi5Cb3R0b20sXHJcbiAgICAgICAgICAgIHR5cGU6IEZlZWRiYWNrVHlwZS5DdXN0b21cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMubWFya0Zvcm1Hcm91cFRvdWNoZWQodGhpcy5mb3JtKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZW5kT3RwKCkge1xyXG4gICAgdGhpcy5sb2FkZXIuc2hvdyh0aGlzLmxvZGFpbmdfb3B0aW9ucyk7XHJcblxyXG4gICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgIGNvbnRhY3Rfbm86IHRoaXMuY29udGFjdF9ub1xyXG4gICAgfVxyXG4gICAgdGhpcy5sb2dpblNlcnZpY2UudXNlckZvcmdldFBhc3N3b3JkT3RwKGRhdGEpLnN1YnNjcmliZShcclxuICAgICAgcmVzID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIHRoaXMub3RwID0gcmVzLm90cFxyXG4gICAgICAgIHRoaXMuc2hvd090cFNlY3Rpb24gPSB0cnVlO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB0aGlzLmZlZWRiYWNrLmVycm9yKHtcclxuICAgICAgICAgIHRpdGxlOiBlcnJvci5lcnJvci5tc2csXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcInJlZFwiKSxcclxuICAgICAgICAgIHRpdGxlQ29sb3I6IG5ldyBDb2xvcihcImJsYWNrXCIpLFxyXG4gICAgICAgICAgcG9zaXRpb246IEZlZWRiYWNrUG9zaXRpb24uQm90dG9tLFxyXG4gICAgICAgICAgdHlwZTogRmVlZGJhY2tUeXBlLkN1c3RvbVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBzdWJtaXRPdHAoKSB7XHJcbiAgICBpZiAodGhpcy5vdHAgPT0gdGhpcy5vdHBGb3JtLnZhbHVlLm90cCkge1xyXG5cclxuICAgICAgdGhpcy5uZXdQd2RTZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgdGhpcy5vdHBfY2hlY2sgPSAxO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuZmVlZGJhY2suZXJyb3Ioe1xyXG4gICAgICAgIHRpdGxlOiAnUGxlYXNlIEVudGVyIFZhbGlkIE9UUCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCJyZWRcIiksXHJcbiAgICAgICAgdGl0bGVDb2xvcjogbmV3IENvbG9yKFwiYmxhY2tcIiksXHJcbiAgICAgICAgcG9zaXRpb246IEZlZWRiYWNrUG9zaXRpb24uQm90dG9tLFxyXG4gICAgICAgIHR5cGU6IEZlZWRiYWNrVHlwZS5DdXN0b21cclxuICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICBzdWJtaXROZXdQd2QoKSB7XHJcblxyXG4gICAgaWYgKHRoaXMucGFzc3dvcmRGb3JtLnZhbGlkKSB7XHJcbiAgICAgIGlmICh0aGlzLnBhc3N3b3JkRm9ybS52YWx1ZS5jb25mX3Bhc3N3b3JkICE9IHRoaXMucGFzc3dvcmRGb3JtLnZhbHVlLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgdGhpcy5mZWVkYmFjay5lcnJvcih7XHJcbiAgICAgICAgICB0aXRsZTogJ1Bhc3N3b3JkICYgQ29uZmlybSBQYXNzd29yZCBhcmUgbm90IHNhbWUnLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCJyZWRcIiksXHJcbiAgICAgICAgICB0aXRsZUNvbG9yOiBuZXcgQ29sb3IoXCJibGFja1wiKSxcclxuICAgICAgICAgIHBvc2l0aW9uOiBGZWVkYmFja1Bvc2l0aW9uLkJvdHRvbSxcclxuICAgICAgICAgIHR5cGU6IEZlZWRiYWNrVHlwZS5DdXN0b21cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmxvYWRlci5zaG93KHRoaXMubG9kYWluZ19vcHRpb25zKTtcclxuICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgIGNvbnRhY3Rfbm86IHRoaXMuY29udGFjdF9ubyxcclxuICAgICAgICAgIG90cF9jaGVjazogdGhpcy5vdHBfY2hlY2ssXHJcbiAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZEZvcm0udmFsdWUucGFzc3dvcmRcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UudXNlckZvcmdldFBhc3N3b3JkVXBkYXRlKGRhdGEpLnN1YnNjcmliZShcclxuICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5mZWVkYmFjay5zdWNjZXNzKHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ1Bhc3N3b3JkIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBjaGFuZ2VkLiAnLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKFwiZ3JlZW5cIiksXHJcbiAgICAgICAgICAgICAgdGl0bGVDb2xvcjogbmV3IENvbG9yKFwiYmxhY2tcIiksXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IEZlZWRiYWNrUG9zaXRpb24uQm90dG9tLFxyXG4gICAgICAgICAgICAgIHR5cGU6IEZlZWRiYWNrVHlwZS5DdXN0b21cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyb3IgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgdGhpcy5mZWVkYmFjay5lcnJvcih7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IGVycm9yLmVycm9yLm1zZyxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcInJlZFwiKSxcclxuICAgICAgICAgICAgICB0aXRsZUNvbG9yOiBuZXcgQ29sb3IoXCJibGFja1wiKSxcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogRmVlZGJhY2tQb3NpdGlvbi5Cb3R0b20sXHJcbiAgICAgICAgICAgICAgdHlwZTogRmVlZGJhY2tUeXBlLkN1c3RvbVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMubWFya0Zvcm1Hcm91cFRvdWNoZWQodGhpcy5mb3JtKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBtYXJrRm9ybUdyb3VwVG91Y2hlZChmb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xyXG4gICAgKDxhbnk+T2JqZWN0KS52YWx1ZXMoZm9ybUdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGNvbnRyb2wgPT4ge1xyXG4gICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgICAgaWYgKGNvbnRyb2wuY29udHJvbHMpIHtcclxuICAgICAgICBjb250cm9sLmNvbnRyb2xzLmZvckVhY2goYyA9PiB0aGlzLm1hcmtGb3JtR3JvdXBUb3VjaGVkKGMpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBza2lwKCkge1xyXG4gICAgc2V0Qm9vbGVhbihcImlzU2tpcHBlZFwiLCB0cnVlKVxyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pXHJcbiAgfVxyXG5cclxuXHJcblxyXG59Il19