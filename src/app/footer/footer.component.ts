import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  
  projectName:string;

  constructor() {
   this.projectName="Angular Tours" 
  }

  ngOnInit(): void {
  }

}
