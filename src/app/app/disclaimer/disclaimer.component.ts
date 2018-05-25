import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent implements OnInit {
  visible:boolean = false;
  constructor() { }

  ngOnInit() {
  }
 toggleDiv() {
  this.visible = !this.visible;
 }

}
