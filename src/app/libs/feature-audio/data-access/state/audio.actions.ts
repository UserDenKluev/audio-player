import { createAction, props } from '@ngrx/store';
import { TrackEntity } from './audio.reducer';

export const loadAudio = createAction('[AUDIO] load audio');
export const loadAudioSuccess = createAction(
  '[AUDIO] load audio success',
  props<{ data: TrackEntity[] }>()
);
export const loadAudioFailure = createAction(
  '[AUDIO] load audio failure',
  props<{ error: any }>()
);
