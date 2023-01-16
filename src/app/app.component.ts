import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = 'Joaquim';
  userData = {
    email: 'joaqui@data.com.br',
    role: 'Admin'
  }

  title = 'angular1';
}
