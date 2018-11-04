import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task-Project';
  userName: String;
  password: String;

  Onlogin = () => {
    if (this.userName !== '' && this.password !== '') {
          this.OnClear();
    }
  }
  OnClear = () => {
    this.userName = '';
    this.password = '';
  }

}

