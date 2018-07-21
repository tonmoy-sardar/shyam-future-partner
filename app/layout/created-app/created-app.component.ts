import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CreatedAppService } from "../../core/services/created-app.service";

import * as Globals from '../../core/globals';
@Component({
  selector: 'created-app',
  moduleId: module.id,
  templateUrl: `created-app.component.html`,
  styleUrls: [`created-app.component.css`]
})
export class CreatedAppComponent implements OnInit {
  app_id: string;
  app_details: any;
  visible_key: boolean;
 
  constructor(
    private route: ActivatedRoute,
    private CreatedAppService: CreatedAppService
  ) {}

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