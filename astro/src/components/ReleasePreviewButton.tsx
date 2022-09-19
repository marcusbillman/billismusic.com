import { FC, useRef, useState, useEffect } from 'react';
import type { ReleaseDocument } from './Release.astro';
import Icon from './Icon';

export interface Props {
  release: ReleaseDocument;
  primary?: boolean;
}

const ReleasePreviewButton: FC<Props> = ({ release, primary = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    audioElement?.addEventListener('timeupdate', (_) => {
      if (audioElement === null) return;

      const startTime = release.previewAudio.startTime || 0;
      const endTime = release.previewAudio.endTime || audioElement.duration;

      if (audioElement.ended || audioElement.currentTime >= endTime) {
        audioElement.pause();
      } else {
        setProgress(
          (audioElement.currentTime - startTime) / (endTime - startTime)
        );
      }
    });

    audioElement?.addEventListener('pause', (_) => {
      if (audioElement === null) return;

      setIsPlaying(false);
      setProgress(0);
    });
  }, []);

  const togglePlay = () => {
    const audioElement = audioRef.current;
    if (audioElement === null) return;

    if (audioElement.paused) {
      pauseAll();
      audioElement.currentTime = release.previewAudio.startTime || 0;
      audioElement.play();
      setIsPlaying(true);
    } else {
      audioElement.pause();
    }
  };

  const pauseAll = () => {
    document
      .querySelectorAll('audio')
      .forEach((audioElement) => audioElement.pause());
  };

  // Progress ring geometry
  const RADIUS = 56 / 2;
  const STROKE_WIDTH = 2;
  const normalizedRadius = RADIUS - STROKE_WIDTH * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <button
      onClick={() => togglePlay()}
      className={`relative flex items-center justify-center grow-0 w-max border cursor-pointer group hover:bg-white/30 hover:border-white transition-colors ${
        primary
          ? 'border-orange/30 hover:bg-orange/30 hover:border-orange'
          : 'border-white/30'
      } rounded-full p-4`}
    >
      <span className={primary ? 'text-orange' : 'text-white'}>
        <Icon name={isPlaying ? 'stop' : 'playArrow'} />
      </span>
      <audio src={release.previewAudioUrl} ref={audioRef}></audio>
      {isPlaying && (
        <svg
          height={RADIUS * 2}
          width={RADIUS * 2}
          className="absolute inset-0 -rotate-90"
        >
          <circle
            stroke="white"
            fill="transparent"
            strokeWidth={STROKE_WIDTH}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={RADIUS}
            cy={RADIUS}
          />
        </svg>
      )}
    </button>
  );
};

export default ReleasePreviewButton;
