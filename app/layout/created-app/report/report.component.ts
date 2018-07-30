import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterExtensions } from "nativescript-angular/router";
import { CreatedAppService } from "../../../core/services/created-app.service";
@Component({
    selector: 'report',
    moduleId: module.id,
    templateUrl: `report.component.html`,
    styleUrls: [`report.component.css`]
})

export class ReportComponent implements OnInit {
    form: FormGroup;
    processing = false;
    app_id: string;
    visible_key: boolean;
    order_list: any = [];
    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private router: RouterExtensions,
        private createdAppService: CreatedAppService
    ) { }

    ngOnInit() {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
        this.getOrderList(this.app_id)
    }

    getOrderList(id) {
        this.createdAppService.getAppOrderList(id).subscribe(
            (res: any[]) => {
                console.log(res)
                // res.forEach(x => {
                //     var sum = 0
                //     x.order_details.forEach(y => {
                //         sum += y.total_cost
                //     })
                //     x['total_cost'] = sum;
                //     this.order_list.push(x);
                // })
                this.order_list = res;                
                this.visible_key = true;
            },
            error => {
                console.log(error)
            }
        )
    }


}