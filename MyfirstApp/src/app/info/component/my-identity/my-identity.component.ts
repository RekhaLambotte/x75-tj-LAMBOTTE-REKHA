import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-identity',
  templateUrl: './my-identity.component.html',
  styleUrls: ['./my-identity.component.scss']
})
export class MyIdentityComponent implements OnInit {
  @Input() firstname!: string;
  @Input() lastname!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
