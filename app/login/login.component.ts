import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from "../core/services/login.service";
import { getString, setString, getBoolean, setBoolean, clear } from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";
import { Color } from "tns-core-modules/color";
import { LoadingIndicator } from "nativescript-loading-indicator"
import { registerElement } from 'nativescript-angular/element-registry';
registerElement("Gradient", () => require("nativescript-gradient").Gradient);

@Component({
  selector: "login",
  moduleId: module.id,
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  processing = false;

  private feedback: Feedback;

  loader = new LoadingIndicator();
  lodaing_options = {
    message: 'Loading...',
    progress: 0.65,
    android: {
      indeterminate: true,
      cancelable: false,
      cancelListener: function (dialog) { console.log("Loading cancelled") },
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
  }

  constructor(
    private page: Page,
    private router: RouterExtensions,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.page.actionBarHidden = true;
    this.feedback = new Feedback();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched);
  }

  displayFieldCss(field: string) {
    return {
      'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
      'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
    };
  }

  signIn() {
    if (this.form.valid) {
      this.loader.show(this.lodaing_options);
      //this.processing = true;
      this.loginService.login(this.form.value).subscribe(
        res => {
          console.log(res)
          clear();
          setBoolean("isLoggedin", true)
          setString('email', res.email)
          setString('contact_no', res.contact_no.toString())
          setString('user_id', res.user_id.toString())
          this.loader.hide();
          this.router.navigate(['/'])          
        },
        error => {
          this.loader.hide();
          console.log(error)
          this.feedback.error({
            title: error.error.message,
            backgroundColor: new Color("red"),
            titleColor: new Color("black"),
            position: FeedbackPosition.Bottom,
            type: FeedbackType.Custom
          });
        }
      )
    }
    else {
      this.markFormGroupTouched(this.form)
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        control.controls.forEach(c => this.markFormGroupTouched(c));
      }
    });
  }

  skip() {
    setBoolean("isSkipped", true)
    this.router.navigate(['/'])    
  }


  forgotPassword() {
    prompt({
      title: "Forgot Password",
      message: "Enter the email address you used to register for Shyam Future Store to reset your password.",
      inputType: "email",
      defaultText: "",
      okButtonText: "Ok",
      cancelButtonText: "Cancel"
    }).then((data) => {
      if (data.result) {

      }
    });
  }

}