import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cant-quit-form',
  templateUrl: './cant-quit-form.component.html',
  styleUrls: ['./cant-quit-form.component.scss']
})
export class CantQuitFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  canQuit(): boolean {
    return false;
  }
}
