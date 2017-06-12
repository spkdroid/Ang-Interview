import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { 

  }
 appName="Test";
 gippyMail="This is a simple mail client completely written with the help of AngularJS2"

 
  ngOnInit() {
}

}
