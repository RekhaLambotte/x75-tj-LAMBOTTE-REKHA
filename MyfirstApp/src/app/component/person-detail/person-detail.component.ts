import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {isNil} from "lodash";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  id?:number;

  constructor(public activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    if (!isNil(id)){
      this.id = parseInt(id, 10);
    }
  }

}
