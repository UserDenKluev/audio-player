import { createReducer, on } from '@ngrx/store';
import { loadAudioFailure, loadAudioSuccess } from './audio.actions';

export type RootObjectDTO = {
  headers: HeadersDTO;
  results: ResultDTO[];
};
export type ResultDTO = {
  id: string;
  name: string;
  website: string;
  joindate: string;
  image: string;
  tracks: TrackDTO[];
};
export type TrackDTO = {
  album_id: string;
  album_name: string;
  id: string;
  name: string;
  duration: string;
  releasedate: string;
  license_ccurl: string;
  album_image: string;
  image: string;
  audio: string;
  audiodownload: string;
  audiodownload_allowed: boolean;
};
export type HeadersDTO = {
  status: string;
  code: number;
  error_message: string;
  warnings: string;
  results_count: number;
};

export type TrackEntity = Pick<TrackDTO, 'id' | 'name' | 'audio'>;

export const COUNTER_KEY = 'counter';

export interface CounterState {
  audioList: TrackEntity[];
  error: string | null;
}

export const initalState: CounterState = {
  audioList: [],
  error: null,
};

export const counterReducer = createReducer(
  initalState,
  on(loadAudioSuccess, (state, { data }) => ({
    ...state,
    audioList: data,
  })),
  on(loadAudioFailure, (state, { error }) => ({
    ...state,
    error: error,
  }))
);
