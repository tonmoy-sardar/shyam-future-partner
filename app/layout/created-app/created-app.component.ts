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
  
  constructor(
    private route: ActivatedRoute,
    private CreatedAppService: CreatedAppService
  ) {}

  ngOnInit() {
    this.app_id = this.route.snapshot.params["id"];
    
  }

}