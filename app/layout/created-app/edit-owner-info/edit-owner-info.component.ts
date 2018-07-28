import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterExtensions } from "nativescript-angular/router";
import { CreatedAppService } from "../../../core/services/created-app.service";

import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { UploadSingleImageModalComponent } from "../../../core/component/upload-single-image-modal/upload-single-image-modal.component";
import { SelectedIndexChangedEventData, ValueList } from "nativescript-drop-down";
import { LocationModalComponent } from '../../../core/component/location-modal/location-modal.component';
import * as Globals from '../../../core/globals';
import * as bgHttp from "nativescript-background-http";
import { ObservableArray } from "data/observable-array";
import * as fs from "file-system";
@Component({
    selector: 'edit-owner-info',
    moduleId: module.id,
    templateUrl: `edit-owner-info.component.html`,
    styleUrls: [`edit-owner-info.component.css`]
})

export class EditOwnerInfoComponent implements OnInit {
    form: FormGroup;
    processing = false;
    app_id: string;
    visible_key: boolean;
    app_details: any;
    owner_details: any = {
        owner_name: '',
        owner_designation: '',
        owner_pic: '',
        business_est_year: '',
        store_address: '',
        lat: '',
        long: ''
    }
    options = {
        context: {},
        fullscreen: false,
        viewContainerRef: this.vcRef
    };
    imageUrl: any;
    selectedIndex: number = null;
    hint = "Select Designation";
    designations: ValueList<string>;

    // upload 
    public tasks: bgHttp.Task[] = [];
    public events: { eventTitle: string, eventData: any }[] = [];
    private file: string;
    private url: string;
    private counter: number = 0;
    private session: any;
    constructor(
        private route: ActivatedRoute,
        private CreatedAppService: CreatedAppService,
        private modal: ModalDialogService,
        private vcRef: ViewContainerRef,
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
    ) {
        
    }

    ngOnInit() {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
        this.imageUrl = null;
        this.form = this.formBuilder.group({
            owner_name: ['', Validators.required],
            owner_designation: [''],
            owner_pic: [''],
            business_est_year: [''],
            store_address: [''],
            lat: [''],
            long: ['']
        });
        // this.file = fs.path.normalize(fs.knownFolders.currentApp().path + "/images/shyam-wheel.png");
        // this.file = "~/images/shyam-wheel.png";
        this.url = Globals.apiEndpoint + 'edit_owner_info/' + this.app_id + '/';
        this.session = bgHttp.session("image-upload");
        this.getDesignationDropdown();
    }

    onchange(args: SelectedIndexChangedEventData) {
        console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}. New value is "${this.designations.getValue(
            args.newIndex)}"`);
        this.owner_details.owner_designation = this.designations.getValue(
            args.newIndex);
    }

    getDesignationDropdown() {
        this.CreatedAppService.getDesignationDropdown().subscribe(
            (data: any[]) => {
                console.log(data);
                this.designations = new ValueList<string>();
                for (let i = 0; i < data.length; i++) {
                    this.designations.push({
                        value: data[i]['id'],
                        display: data[i]['designation_name'],
                    });
                }
                this.getAppOwnerDetails(this.app_id);
            },
            error => {
                console.log(error)
            }
        );
    };

    getAppOwnerDetails(id) {
        this.CreatedAppService.getOwnerInfo(id).subscribe(
            res => {
                this.owner_details = res;
                this.selectedIndex = this.designations.getIndex(this.owner_details.owner_designation.toString());
                console.log(this.selectedIndex)
                console.log(this.owner_details.owner_designation)
                this.visible_key = true
                console.log(res)
            },
            error => {
                console.log(error)
            }
        )
    }

    searchLocation() {
        var option = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(LocationModalComponent, option).then(res => {
            console.log(res);
            if (res.name != "") {
                this.owner_details.store_address = res.name;
                this.owner_details.lat = res.latitude;
                this.owner_details.long = res.longitude
                // data.structured_formatting.main_text
            }
        })
    }

    pickLogo() {
        this.modal.showModal(UploadSingleImageModalComponent, this.options).then(res => {
            console.log(res);
            if (res != undefined) {
                if (res.camera == true) {
                    console.log(res.image)
                    this.imageUrl = res.image
                    this.owner_details.owner_pic = res.image
                    this.file = res.image
                }
                else if (res.gallery == true) {
                    console.log(res.image)
                    this.imageUrl = res.image
                    this.owner_details.owner_pic = res.image
                    this.file = res.image
                }
            }
        })
    }


    updateOwnerInfo() {
        if (this.form.valid) {
            this.processing = true;
            this.CreatedAppService.editOwnerInfo(this.owner_details).subscribe(
                res => {
                    console.log(res);
                    this.processing = false;
                    this.getAppOwnerDetails(res['id'])
                },
                error => {
                    console.log(error)
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

    isFieldValid(field: string) {
        return !this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched);
    }

    displayFieldCss(field: string) {
        return {
            'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
            'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
        };
    }



    // 
    upload(args) {
        console.log("start")
        this.start_upload(false, false);
    }

    upload_error(args) {
        this.start_upload(true, false);
    }

    upload_multi(args) {
        this.start_upload(false, true);
    }

    start_upload(should_fail, isMulti) {
        console.log((should_fail ? "Testing error during upload of " : "Uploading file: ") + this.file + (isMulti ? " using multipart." : ""));

        const name = this.file.substr(this.file.lastIndexOf("/") + 1);
        const description = `${name} (${++this.counter})`;
        const request = {
            url: this.url,
            method: "PUT",
            headers: {
                "Content-Type": "application/octet-stream",
                "File-Name": name
            },
            description: description,
            androidAutoDeleteAfterUpload: false,
            androidNotificationTitle: 'NativeScript HTTP background',
        };

        if (should_fail) {
            request.headers["Should-Fail"] = true;
        }

        let task: bgHttp.Task;
        let lastEvent = "";
        if (isMulti) {
            const params = [
                { name: "test", value: "value" },
                { name: "owner_pic", filename: this.file, mimeType: 'image/jpeg' }
            ];
            task = this.session.multipartUpload(params, request);
        } else {
            task = this.session.uploadFile(this.file, request);
        }

        function onEvent(e) {
            if (lastEvent !== e.eventName) {
                // suppress all repeating progress events and only show the first one
                lastEvent = e.eventName;
            } else {
                return;
            }

            this.events.push({
                eventTitle: e.eventName + " " + e.object.description,
                eventData: JSON.stringify({
                    error: e.error ? e.error.toString() : e.error,
                    currentBytes: e.currentBytes,
                    totalBytes: e.totalBytes,
                    body: e.data
                })
            });
        }

        task.on("progress", onEvent.bind(this));
        task.on("error", onEvent.bind(this));
        task.on("responded", onEvent.bind(this));
        task.on("complete", onEvent.bind(this));
        lastEvent = "";
        this.tasks.push(task);
    }


}