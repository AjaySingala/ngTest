import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngTest';

  foo() {
    return 'OK';
  }

  getData() {
    return 111;
  }
}
