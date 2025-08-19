import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  // URL de una canción romántica de ejemplo (en una implementación real, sería la canción elegida por los novios)
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
      <Card className="bg-white/95 border-emerald-200 shadow-2xl backdrop-blur-sm">
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
              className="text-emerald-600 hover:text-emerald-800 hover:bg-emerald-100"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMute}
              className="text-emerald-600 hover:text-emerald-800 hover:bg-emerald-100"
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </Button>
            
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer emerald-slider"
            />
          </div>
          
          <div className="text-xs text-emerald-600 mt-2 text-center font-medium">
            Nuestra canción
          </div>
        </CardContent>
      </Card>
    </div>
  );
}