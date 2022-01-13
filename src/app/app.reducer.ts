import { ActionReducerMap } from '@ngrx/store';
import { employeeReducer, State } from './store/reducers/employee.reducer';

export interface AppState {
  employee: State;
}

export const appReducer: ActionReducerMap<AppState> = {
  employee: employeeReducer,
};
