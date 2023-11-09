import { ActionReducerMap } from '@ngrx/store';
import {
  counterFeatureName,
  reducer as counterReducer,
} from './counter/counter.reducer';

export const appReducer: ActionReducerMap<any> = {
  [counterFeatureName]: counterReducer,
};
