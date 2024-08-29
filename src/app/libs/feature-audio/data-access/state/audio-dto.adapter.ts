import { TrackDTO, TrackEntity } from './audio.reducer';

type TrackDTOAdapter = {
  DTOtoEntity(dto: TrackDTO): TrackEntity;
};

export const trackDTOAdapter: TrackDTOAdapter = {
  DTOtoEntity(dto) {
    const { id, name, audio } = dto;

    return { id, name, audio };
  },
};
