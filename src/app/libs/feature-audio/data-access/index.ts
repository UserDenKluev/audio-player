import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import {
  AUDIO_KEY,
  counterReducer,
  AudioState,
} from './state/audio.reducer';

export interface State {
  [AUDIO_KEY]: AudioState;
}

export const reducers: ActionReducerMap<State> = {
  [AUDIO_KEY]: counterReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
