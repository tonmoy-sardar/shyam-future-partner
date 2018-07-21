import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CreatedAppService } from "../../../core/services/created-app.service";

@Component({
    selector: 'manage-app',
    moduleId: module.id,
    templateUrl: `manage-app.component.html`,
    styleUrls: [`manage-app.component.css`]
})

export class ManageAppComponent implements OnInit {
    app_id: string;
    app_details: any;
    visible_key: boolean;
    constructor(
        private route: ActivatedRoute,
        private CreatedAppService: CreatedAppService
    ) { }

    ngOnInit() {
        this.app_id = this.route.snapshot.params["id"];
        console.log(this.route.snapshot.params["id"]);
        this.getAppDetails(this.app_id);
    }

    getAppDetails(id) {
        this.CreatedAppService.getCreatedAppDetails(id).subscribe(
          res => {
            this.app_details = res;
           
            this.visible_key = true
            console.log(res)
            
          },
          error => {
            console.log(error)
          }
        )
      }


}