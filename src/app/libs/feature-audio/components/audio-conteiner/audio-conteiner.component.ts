import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { AudioFacade } from '../../data-access/state/audio.facade';
import { TrackEntity } from '../../data-access/state/audio.reducer';

@Component({
  selector: 'app-audio-conteiner',
  templateUrl: './audio-conteiner.component.html',
  styleUrls: ['./audio-conteiner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioConteinerComponent implements OnInit {
  private readonly audioFacade = inject(AudioFacade);

  public readonly audioList$ = this.audioFacade.audioList$;
  public readonly errorAudioList$ = this.audioFacade.errorAudioList$;

  ngOnInit(): void {
    this.audioFacade.loadFolders();
  }

  selectAudio(row: TrackEntity): void {
    this.selectedAudio = {
      id: row.id,
      name: row.name,
      audio: row.audio,
    };
  }

  selectedAudio: TrackEntity = {
    id: '',
    name: '',
    audio: '',
  };
}
