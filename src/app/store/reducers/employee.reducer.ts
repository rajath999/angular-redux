import { Action } from '@ngrx/store';
import * as EmployeeActions from '../actions/employee.actions';

export interface State {
  name: string;
  designation: string;
}

export const initialState: State = {
  name: 'X',
  designation: '',
};

export function employeeReducer(
  state = initialState,
  action: EmployeeActions.EmployeeActions
) {
  switch (action.type) {
    case EmployeeActions.GET_EMPLOYEES:
    console.log("THe PayLoad", action.payload);
      return {
        ...state,
        name: 'hello',
        designation: 'world',
      };
    default:
      return state;
  }
}
