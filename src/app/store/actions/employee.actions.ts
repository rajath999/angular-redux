import { Action } from '@ngrx/store';

export const GET_EMPLOYEES = 'GET_EMPLOYEES';

export class GetEmployees implements Action {
  readonly type = GET_EMPLOYEES; 
   payload = {
      name: 'payload',
      designation: 'angular'
  }
  constructor(){}
}

export type EmployeeActions = GetEmployees;
