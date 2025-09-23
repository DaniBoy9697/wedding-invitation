import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [hasStarted, setHasStarted] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [canAutoplay, setCanAutoplay] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // URL del archivo de audio local en formato m4a
  const musicUrl = '/audio/song.m4a';

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
      

      const handleError = (e = {}) => {
        console.error('Error al cargar el audio:', e);
        setAudioError(true);
        setCanAutoplay(false);
      };

      const handleCanPlay = () => {
        setAudioError(false);
      };

      audioRef.current.addEventListener('error', handleError);
      audioRef.current.addEventListener('canplay', handleCanPlay);
      
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('error', handleError);
          audioRef.current.removeEventListener('canplay', handleCanPlay);
        }
      };
    }
  }, [volume, hasStarted]);

  // Auto-reproducir al cargar la página
  useEffect(() => {
    const autoPlay = async () => {
      if (audioRef.current && !hasStarted && !audioError && canAutoplay) {
        try {
          // Esperar 2 segundos para que la página se cargue completamente
          const timer = setTimeout(async () => {
            if (audioRef.current && !hasStarted) {
              // Verificar si el audio está listo
              if (audioRef.current.readyState >= 2) { // HAVE_CURRENT_DATA
                await audioRef.current.play();
                setIsPlaying(true);
                setHasStarted(true);
                console.log('Reproducción automática iniciada');
              } else {
                // Si no está listo, esperar a que se cargue
                const handleCanPlayThrough = async () => {
                  if (audioRef.current && !hasStarted) {
                    await audioRef.current.play();
                    setIsPlaying(true);
                    setHasStarted(true);
                    console.log('Reproducción automática iniciada (después de carga)');
                  }
                };
                audioRef.current.addEventListener('canplaythrough', handleCanPlayThrough, { once: true });
              }
            }
          }, 2000);

          return () => clearTimeout(timer);
        } catch (err) {
          console.log('Autoplay bloqueado por el navegador:', err);
          setCanAutoplay(false);
          // Mostrar indicación visual de que el usuario debe hacer clic
        }
      }
    };

    autoPlay();
  }, [hasStarted, audioError, canAutoplay]);

  const togglePlayPause = async () => {
    if (audioRef.current && !audioError) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          await audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      } catch (err) {
        console.error('Error al reproducir audio:', err);
        setAudioError(true);
        setCanAutoplay(false);
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
              onError={(e) => {
                setAudioError(true);
                setCanAutoplay(false);
              }}
              onCanPlayThrough={() => {
                console.log('Audio listo para reproducir');
                setAudioError(false);
              }}
              onLoadStart={() => {
                console.log('Iniciando carga del audio...');
              }}
              onLoadedData={() => {
                console.log('Audio cargado exitosamente');
                setAudioError(false);
              }}
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
                  Coloca el archivo en /public/audio/wedding-song.m4a
                </div>
              </div>
            ) : (
              <>
                Nuestra canción ♫
                {!canAutoplay && !hasStarted && (
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