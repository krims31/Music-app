import { useRef, useState } from "react";
import {
  FaHeart,
  FaPause,
  FaPlay,
  FaStepBackward,
  FaStepForward,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { playlists, type Song } from "../data/music";
import "./PlaylistPage.scss";

export default function PlaylistPage() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [likedSongs, setLikedSongs] = useState<number[]>([]);

  const audioRef = useRef<HTMLAudioElement>(null);

  const { id } = useParams();
  const playlist = playlists.find((p) => p.id === Number(id));
  if (!playlist) return <h2>Плейлист не найден</h2>;

  const playSong = (song: Song) => {
    setCurrentSong(song);
    if (!audioRef.current) return;

    audioRef.current.src = song.audioUrl;
    audioRef.current.load();

    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch((err) => {
        console.log("Audio play failed:", err);
      });
  };

  const togglePlayPause = () => {
    if (!audioRef.current || !currentSong) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const playNextSong = () => {
    if (!currentSong) return;
    const index = playlist.songs.findIndex((s) => s.id === currentSong.id);
    const nextIndex = (index + 1) % playlist.songs.length;
    playSong(playlist.songs[nextIndex]);
  };

  const playPrevSong = () => {
    if (!currentSong) return;
    const index = playlist.songs.findIndex((s) => s.id === currentSong.id);
    const prevIndex = index === 0 ? playlist.songs.length - 1 : index - 1;
    playSong(playlist.songs[prevIndex]);
  };

  const toggleLike = (songId: number) => {
    setLikedSongs((prev) =>
      prev.includes(songId)
        ? prev.filter((id) => id !== songId)
        : [...prev, songId]
    );
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? volume : 0;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current && !isMuted) audioRef.current.volume = vol;
  };

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="playlist-page">
      <div className="playlist-header">
        <img src={playlist.coverUrl} alt={playlist.name} />
        <div>
          <h1>{playlist.name}</h1>
          <p>{playlist.songs.length} tracks</p>
        </div>
      </div>

      <div className="playlist-tracks">
        {playlist.songs.map((song, index) => (
          <div key={song.id} className="playlist-track">
            <span className="track-index">{index + 1}</span>
            <button
              className="play-btn"
              onClick={() =>
                currentSong?.id === song.id ? togglePlayPause() : playSong(song)
              }
            >
              {currentSong?.id === song.id && isPlaying ? (
                <FaPause />
              ) : (
                <FaPlay />
              )}
            </button>
            <div className="track-info">
              <span>{song.title}</span>
              <small>{song.artist}</small>
            </div>
            <span className="track-duration">{song.duration}</span>
            <button
              className={`like-btn ${
                likedSongs.includes(song.id) ? "liked" : ""
              }`}
              onClick={() => toggleLike(song.id)}
            >
              <FaHeart />
            </button>
          </div>
        ))}
      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={() => {
          if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) setDuration(audioRef.current.duration);
        }}
        onEnded={playNextSong}
      />

      {currentSong && (
        <div className="music-player">
          <div className="player-left">
            <img src={currentSong.coverUrl} alt={currentSong.title} />
            <div className="player-song-info">
              <h4>{currentSong.title}</h4>
              <p>{currentSong.artist}</p>
            </div>
          </div>

          <div className="player-center">
            <div className="controls">
              <button onClick={playPrevSong}>
                <FaStepBackward />
              </button>
              <button onClick={togglePlayPause}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button onClick={playNextSong}>
                <FaStepForward />
              </button>
            </div>

            <div className="progress-container">
              <span>{formatTime(currentTime)}</span>
              <input
                type="range"
                min={0}
                max={duration}
                value={currentTime}
                onChange={(e) => {
                  const time = Number(e.target.value);
                  if (audioRef.current) audioRef.current.currentTime = time;
                  setCurrentTime(time);
                }}
              />
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="player-right">
            <button onClick={toggleMute}>
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}
