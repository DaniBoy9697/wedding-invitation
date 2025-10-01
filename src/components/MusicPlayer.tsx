import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [audioError, setAudioError] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // URL del archivo de audio local en formato m4a
  const musicUrl = '/audio/song.m4a';

  // Configuración inicial del audio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
    }
  }, []);

  // Intento de autoplay inmediato al cargar
  useEffect(() => {
    const attemptAutoplay = async () => {
      if (!audioRef.current || audioError) return;

      try {
        // Esperar a que el audio esté listo
        audioRef.current.addEventListener('canplaythrough', async () => {
          try {
            await audioRef.current!.play();
            setIsPlaying(true);
            console.log('Autoplay exitoso');
          } catch (err) {
            console.log('Autoplay bloqueado por el navegador');
            setAutoplayBlocked(true);
          }
        }, { once: true });

        // Cargar el audio
        audioRef.current.load();

      } catch (err) {
        console.error('Error en autoplay:', err);
        setAutoplayBlocked(true);
      }
    };

    // Pequeño delay para asegurar que el DOM esté listo
    const timer = setTimeout(attemptAutoplay, 500);
    
    return () => clearTimeout(timer);
  }, [audioError]);

  // Manejo de errores del audio
  useEffect(() => {
    const audioElement = audioRef.current;
    
    const handleError = () => {
      console.error('Error al cargar el audio');
      setAudioError(true);
    };

    const handleLoadStart = () => {
      console.log('Iniciando carga del audio...');
      setAudioError(false);
    };

    const handleLoadedData = () => {
      console.log('Audio cargado exitosamente');
      setAudioError(false);
    };

    if (audioElement) {
      audioElement.addEventListener('error', handleError);
      audioElement.addEventListener('loadstart', handleLoadStart);
      audioElement.addEventListener('loadeddata', handleLoadedData);

      return () => {
        audioElement.removeEventListener('error', handleError);
        audioElement.removeEventListener('loadstart', handleLoadStart);
        audioElement.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  const togglePlayPause = async () => {
    if (audioRef.current && !audioError) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          await audioRef.current.play();
          setIsPlaying(true);
          setAutoplayBlocked(false); // Ya no está bloqueado después de interacción manual
        }
      } catch (err) {
        console.error('Error al reproducir audio:', err);
        setAudioError(true);
      }
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
              preload="auto"
              onEnded={() => setIsPlaying(false)}
            />
            
            <Button
              variant="ghost"
              size="sm"
              onClick={togglePlayPause}
              className="hover:bg-blue-100 disabled:opacity-50"
              style={{ color: audioError ? '#6b7280' : '#026b67' }}
              disabled={audioError}
              title={audioError ? 'Audio no disponible' : (isPlaying ? 'Pausar música' : 'Reproducir música')}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMute}
              className="hover:bg-blue-100 disabled:opacity-50"
              style={{ color: audioError ? '#6b7280' : '#026b67' }}
              disabled={audioError}
              title={audioError ? 'Audio no disponible' : (isMuted ? 'Activar sonido' : 'Silenciar')}
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
            {audioError ? (
              <div className="text-red-600">
                ♫ Audio no disponible
                <div className="text-xs opacity-75 mt-1">
                  Coloca el archivo en /public/audio/song.m4a
                </div>
              </div>
            ) : (
              <>
                Nuestra canción ♫
                {autoplayBlocked && (
                  <div className="text-xs opacity-75 mt-1 animate-pulse">
                    Haz clic para reproducir
                  </div>
                )}
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
