import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ApiService } from '../../../../http/api.service';
import { loadAudio, loadAudioFailure, loadAudioSuccess } from './audio.actions';
import { RootObjectDTO } from './audio.reducer';
import { trackDTOAdapter } from './audio-dto.adapter';

@Injectable()
export class AudioEffects {
  loadAudio = createEffect(() => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);

    return actions$.pipe(
      ofType(loadAudio),
      switchMap(() =>
        apiService.getData().pipe(
          map((data: RootObjectDTO) =>{
            // return loadAudioSuccess({ data: data.results[0].tracks })
            return loadAudioSuccess({ data: data.results[0].tracks
              .map((track) => trackDTOAdapter.DTOtoEntity(track)),})
          }
          ),
          catchError((error: any) => {
            return of(loadAudioFailure({ error }));
          })
        )
      )
    );
  });
}
