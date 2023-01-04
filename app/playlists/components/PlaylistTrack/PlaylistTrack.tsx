import Image from 'next/image';

// Styles
import styles from './PlaylistTrack.module.scss';

// Types
import { Track } from '../../../tracks/tracks.types';

// Utils
import { minutesSecondsByMillisecondsGet } from '../../../../shared/utils/shared.utils';

type PlaylistTrackProps = {
  track: Track;
};

const PlaylistTrack = (props: PlaylistTrackProps) => {
  return (
    <div className={styles['playlist-track']}>
      <div className={styles['playlist-track-title']}>
        <div className={styles['playlist-track-title-image']}>
          <Image
            alt={props.track.track.album.name}
            height={40}
            src={props.track.track.album.images[2].url}
            width={40}
          />
        </div>
        <div className={styles['playlist-track-title-info']}>
          <div className={styles['playlist-track-title-info-name']}>
            {props.track.track.name}
          </div>
          <div className={styles['playlist-track-title-info-artists']}>
            {props.track.track.artists.map((artist, index) => (
              <div
                key={artist.id}
                className={styles['playlist-track-title-info-artists-item']}
              >{`${artist.name}${
                index < props.track.track.artists.length - 1 ? ',\xa0' : ''
              }`}</div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles['playlist-track-album']}>
        {props.track.track.album.name}
      </div>
      <div className={styles['playlist-track-added-at']}>
        {new Intl.DateTimeFormat('en-US').format(
          new Date(props.track.added_at)
        )}
      </div>
      <div className={styles['playlist-track-duration']}>
        {minutesSecondsByMillisecondsGet(props.track.track.duration_ms)}
      </div>
    </div>
  );
};

export default PlaylistTrack;
