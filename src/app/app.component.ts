import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetEmployees } from './store/actions/employee.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'redux-in-angular';

  constructor(private store: Store) {}

  getEmployees() {
    this.store.dispatch(new GetEmployees());
  }
}
