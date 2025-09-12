import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  const musicUrl = 'https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3';

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
    }
  }, [volume]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.log('Error al reproducir audio:', err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

    return (
    <div className="fixed top-6 right-6 z-50">
      <Card className="bg-white/95 border-blue-200 shadow-2xl backdrop-blur-sm" style={{ borderColor: '#90a8c2' }}>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <audio
              ref={audioRef}
              src={musicUrl}
              onEnded={() => setIsPlaying(false)}
              onError={() => console.log('Error al cargar el audio')}
            />
            
            <Button
              variant="ghost"
              size="sm"
              onClick={togglePlayPause}
              className="hover:bg-blue-100"
              style={{ color: '#026b67' }}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMute}
              className="hover:bg-blue-100"
              style={{ color: '#026b67' }}
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </Button>
            
            <div className="volume-slider-container">
              <div className="volume-slider-track"></div>
              <div 
                className="volume-slider-fill" 
                style={{ width: `${volume * 100}%` }}
              ></div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider"
              />
            </div>
          </div>
          
          <div className="text-xs mt-2 text-center font-medium" style={{ color: '#026b67' }}>
            Nuestra canción
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
