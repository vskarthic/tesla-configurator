import { Component } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Angular';

}
