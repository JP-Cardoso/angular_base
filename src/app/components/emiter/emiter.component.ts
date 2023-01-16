import { Component } from '@angular/core';

@Component({
  selector: 'app-emiter',
  templateUrl: './emiter.component.html',
  styleUrls: ['./emiter.component.css']
})
export class EmiterComponent {

  myNumber: number = 0;

  onChangeNumber(): void {
    this.myNumber = Math.floor(Math.random() * 10);
  };

  
}
