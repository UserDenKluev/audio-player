import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TrackEntity } from '../../data-access/state/audio.reducer';

@Component({
  selector: 'app-audio-list',
  templateUrl: './audio-list.component.html',
  styleUrls: ['./audio-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioListComponent {
  @Input() audioList$!: Observable<TrackEntity[]>;
  @Output() selectAudio = new EventEmitter<TrackEntity>();
  displayedColumns: string[] = ['id', 'name'];
}
