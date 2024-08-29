import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COUNTER_KEY, CounterState } from './audio.reducer';

export const featureSelector = createFeatureSelector<CounterState>(COUNTER_KEY);

export const audioListSelector = createSelector(
  featureSelector,
  (state) => state.audioList
);
