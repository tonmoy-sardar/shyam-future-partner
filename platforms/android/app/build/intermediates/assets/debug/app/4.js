(global.webpackJsonp=global.webpackJsonp||[]).push([[4],{341:function(r,t,n){"use strict";n.r(t);var e=n(0),o=n(87),a=n(26),i=n(28),s=n(13),l=n(62),c=n(12),d=function(){function r(r,t,n,e){this.page=r;this.router=t;this.formBuilder=n;this.loginService=e;this.processing=!1;this.page.actionBarHidden=!0}r.prototype.ngOnInit=function(){this.form=this.formBuilder.group({customer_name:["",s.Validators.required],email:["",[s.Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],contact_no:["",[s.Validators.required,s.Validators.minLength(10),s.Validators.maxLength(12)]],password:["",s.Validators.required]})};r.prototype.markFormGroupTouched=function(r){var t=this;Object.values(r.controls).forEach(function(r){r.markAsTouched();r.controls&&r.controls.forEach(function(r){return t.markFormGroupTouched(r)})})};r.prototype.signUp=function(){var r=this;if(this.form.valid){this.processing=!0;this.loginService.signup(this.form.value).subscribe(function(t){console.log(t);Object(c.clear)();Object(c.setBoolean)("isLoggedin",!0);""!=t.email&&Object(c.setString)("email",t.email);Object(c.setString)("contact_no",t.contact_no);Object(c.setString)("user_id",t.user_id.toString());r.router.navigate(["/"])},function(r){console.log(r)})}else this.markFormGroupTouched(this.form)};r.prototype.isFieldValid=function(r){return!this.form.get(r).valid&&(this.form.get(r).dirty||this.form.get(r).touched)};r.prototype.displayFieldCss=function(r){return{"is-invalid":this.form.get(r).invalid&&(this.form.get(r).dirty||this.form.get(r).touched),"is-valid":this.form.get(r).valid&&(this.form.get(r).dirty||this.form.get(r).touched)}};r=__decorate([Object(e.Component)({selector:"signup",template:n(387),styles:[n(386)]}),__metadata("design:paramtypes",[i.Page,a.RouterExtensions,s.FormBuilder,l.a])],r);return r}(),u=[{path:"",component:d}],p=function(){function r(){}r=__decorate([Object(e.NgModule)({imports:[a.NativeScriptRouterModule.forChild(u)],exports:[a.NativeScriptRouterModule]})],r);return r}(),g=n(101);n.d(t,"SignupModule",function(){return f});var f=function(){function r(){}r=__decorate([Object(e.NgModule)({imports:[o.NativeScriptCommonModule,p,g.a],declarations:[d],schemas:[e.NO_ERRORS_SCHEMA]})],r);return r}()},386:function(r,t){r.exports=".login-page {\r\n    align-items: center;\r\n    flex-direction: column;\r\n    background: #fff;\r\n    background-size: cover;\r\n}\r\n\r\n.logo {\r\n    margin-top: 15;\r\n    height: 90;\r\n    font-weight: bold;\r\n}\r\n\r\n.apps-container {\r\n    width: 90%;\r\n    background-color: #dedede;\r\n    border-radius: 20;\r\n    -webkit-box-shadow: 0 0 18 3 rgba(0, 0, 0, 0.61);\r\n    -moz-box-shadow: 0 0 18 3 rgba(0, 0, 0, 0.61);\r\n    box-shadow: 0 0 18 3 rgba(0, 0, 0, 0.61);\r\n    height: 100%;\r\n    margin: 3% auto;\r\n    padding: 25;\r\n}\r\n\r\n.head-line {\r\n    color: #284058;\r\n    text-align: center;\r\n    font-size: 25;\r\n    font-weight: 600;\r\n}\r\n\r\n.tag-line-grey {\r\n    color: #284058;\r\n    text-align: center;\r\n    font-size: 15;\r\n    font-weight: 600;\r\n}"},387:function(r,t){r.exports='<FlexboxLayout class="login-page">\r\n    <Image class="logo" src="~/images/logo.png"></Image>\r\n    <StackLayout class="apps-container">\r\n\r\n        <StackLayout class="form" [formGroup]="form" novalidate>\r\n            <label class="head-line" text="Sign Up"></label>\r\n            <GridLayout rows="auto, auto, auto, auto">\r\n                <StackLayout class="input-filld" row="0">\r\n                    <TextField hint="Name" class="input input-border cyan-border m-t-20" borderColor="#49ddff"  returnKeyType="next"\r\n                        [isEnabled]="!processing" formControlName="customer_name" [ngClass]="displayFieldCss(\'customer_name\')"></TextField>\r\n                    <StackLayout *ngIf="isFieldValid(\'customer_name\')" class="invalid-feedback">\r\n                        <Label text="Name is required"></Label>\r\n                    </StackLayout>\r\n                </StackLayout>\r\n\r\n                <StackLayout class="input-filld" row="1">\r\n                    <TextField hint="Phone number" class="input input-border cyan-border m-t-10" borderColor="#49ddff"  returnKeyType="next"\r\n                        keyboardType="number" [isEnabled]="!processing" formControlName="contact_no" [ngClass]="displayFieldCss(\'contact_no\')"></TextField>\r\n                    <StackLayout class="invalid-feedback" *ngIf="isFieldValid(\'contact_no\')">\r\n                        <Label text="Please enter valid phone number"></Label>\r\n                    </StackLayout>\r\n                </StackLayout>\r\n\r\n                <StackLayout class="input-filld" row="2">\r\n                    <TextField hint="Email id" class="input input-border cyan-border m-t-10" borderColor="#49ddff"  autocorrect="false"\r\n                        autocapitalizationType="none" returnKeyType="next" keyboardType="email" [isEnabled]="!processing" formControlName="email"\r\n                        [ngClass]="displayFieldCss(\'email\')"></TextField>\r\n                    <StackLayout class="invalid-feedback" *ngIf="form.controls[\'email\'].hasError(\'pattern\') && !form.controls[\'email\'].hasError(\'required\')">\r\n                        <Label text="Please enter a valid email address"></Label>\r\n                    </StackLayout>\r\n                </StackLayout>\r\n\r\n                <StackLayout class="input-filld" row="3">\r\n                    <TextField hint="Password" class="input input-border cyan-border m-t-10" borderColor="#49ddff"  secure="true"\r\n                        returnKeyType="done" [isEnabled]="!processing" formControlName="password" [ngClass]="displayFieldCss(\'password\')"></TextField>\r\n                    <StackLayout *ngIf="isFieldValid(\'password\')" class="invalid-feedback">\r\n                        <Label text="Password is required"></Label>\r\n                    </StackLayout>\r\n                </StackLayout>\r\n                <ActivityIndicator rowSpan="3" [busy]="processing"></ActivityIndicator>\r\n            </GridLayout>\r\n\r\n            <Button class="btn" text="Sign Up" [isEnabled]="!processing" (tap)="signUp()" backgroundColor="#41bffe" color="#fff" \r\n                width="100%">\r\n            </Button>\r\n\r\n            \x3c!-- <Button class="btn" text="facebook" (tap)="onTap($event)" backgroundColor="#4267B2"  color="#fff" width="100%">\r\n            </Button>\r\n\r\n            <Button class="btn" text="Google" (tap)="onTap($event)" backgroundColor="#EA4335"  color="#fff" width="100%">\r\n            </Button> --\x3e\r\n\r\n            <Label text="Back to login" class="tag-line-grey" [nsRouterLink]="[\'/login\']"></Label>\r\n\r\n        </StackLayout>\r\n    </StackLayout>\r\n</FlexboxLayout>'}}]);