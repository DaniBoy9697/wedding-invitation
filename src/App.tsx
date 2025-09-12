import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import ImageWithFallback from './components/figma/ImageWithFallback';
import { PhotoCarousel } from './components/PhotoCarousel';
import { CountdownTimer } from './components/CountdownTimer';
import { MusicPlayer } from './components/MusicPlayer';
import { Heart, MapPin, Calendar, Clock, Users, Shirt, Gift, Ban } from 'lucide-react';

export default function App() {
  const weddingDate = new Date('2025-11-08T13:00:00');
  
  const ceremonyReligiosa = {
    name: "Ex-Convento de San Guillermo",
    address: "Ignacio Aldama, Purisima Concepción, 62830 Totolapan, Mor.",
    time: "1:00 PM",
    embedUrl: "https://maps.app.goo.gl/E5NCE1NCx2xxFoeL6"
  };

  const ceremoniaCivil = {
    name: "Jardín los Faroles",
    address: "Carretera Federal 113, Oaxtepec Xochimilco Km. 64, 2 Barrio, Santa Ana, 62540 Tlayacapan, Mor.",
    time: "3:30 PM",
    embedUrl: "https://maps.app.goo.gl/8GfKXR1A7BUM5ZVo7"
  };

  return (
    <div className="min-h-screen" style={{ 
      background: 'linear-gradient(to bottom right, #f1cc86, #90a8c2, rgba(144, 157, 139, 0.3))' 
    }}>
      <MusicPlayer />
      
      {/* Header with Background */}
      <header
        className="relative min-h-screen flex items-center justify-center text-center px-4 bg-fixed bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 49, 86, 0.4), rgba(2, 107, 103, 0.3)), url('/images/photo7.jpg')`
        }}
      >
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(to bottom, transparent, rgba(2, 107, 103, 0.2), rgba(11, 49, 86, 0.6))' 
        }}></div>
        <div className="relative z-10 max-w-6xl mx-auto text-white">
          <div className="flex items-center justify-center gap-6 mb-8">
            <Heart className="h-12 w-12 animate-pulse" style={{ color: '#f1cc86' }} />
            <h1 className="text-5xl md:text-7xl font-serif tracking-wide">
              Yanahi & Alfredo
            </h1>
            <Heart className="h-12 w-12 animate-pulse" style={{ color: '#f1cc86' }} />
          </div>
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl px-8 py-6 border border-white/20">
            <p className="text-xl md:text-2xl mb-4 font-light tracking-wide">
              Dijimos "Sí" a la vida juntos, y "Sí" a celebrarlo contigo
            </p>
            <p className="text-lg md:text-xl mb-6 italic" style={{ color: '#f1cc86' }}>
              "Tenemos tantas cosas esperando a que nos pasen"
            </p>
            <div className="flex items-center justify-center gap-3 text-white">
              <Calendar className="h-7 w-7" />
              <span className="text-2xl md:text-3xl font-light">08 de Noviembre, 2025</span>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4">
              <MapPin className="h-6 w-6" />
              <span className="text-lg">Tlayacapan, Morelos</span>
            </div>
          </div>
        </div>
      </header>

      {/* Countdown Timer Section */}
      <section 
        className="relative py-24 px-4 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.9)), url('https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="max-w-6xl mx-auto">
          <CountdownTimer targetDate={weddingDate} />
        </div>
      </section>

      {/* Photo Carousel Section */}
      <section 
        className="relative py-24 px-4 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(2, 107, 103, 0.1), rgba(11, 49, 86, 0.2)), url('/images/photo11.jpg')`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl mb-6 font-serif tracking-wide" style={{ color: '#026b67' }}>
              Nuestros Momentos
            </h2>
            <div className="w-32 h-1 mx-auto rounded-full" style={{ backgroundColor: '#026b67' }}></div>
          </div>
          <PhotoCarousel />
        </div>
      </section>

      {/* Wedding Details Section - Unificada con ubicaciones */}
      <section 
        className="relative py-24 px-4 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(245, 245, 244, 0.9)), url('/images/photo10.jpg')`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl mb-6 font-serif tracking-wide" style={{ color: '#026b67' }}>
              Detalles de la Boda
            </h2>
            <div className="w-32 h-1 mx-auto rounded-full" style={{ backgroundColor: '#026b67' }}></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Ceremonia Religiosa */}
            <Card className="bg-white/90 shadow-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300" style={{ borderColor: '#90a8c2' }}>
              <CardHeader className="text-center py-8">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl" style={{ color: '#026b67' }}>
                  <Clock className="h-8 w-8" />
                  Ceremonia Religiosa
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6 pb-8">
                <p className="text-3xl font-light" style={{ color: '#0b3156' }}>{ceremonyReligiosa.time}</p>
                <p className="text-xl" style={{ color: '#909d8b' }}>{ceremonyReligiosa.name}</p>
                <p className="text-stone-600">{ceremonyReligiosa.address}</p>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src={ceremonyReligiosa.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <Button 
                  className="w-full mt-4" 
                  style={{ backgroundColor: '#026b67', color: 'white' }}
                  onClick={() => window.open(ceremonyReligiosa.embedUrl, '_blank')}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Ver en Google Maps
                </Button>
              </CardContent>
            </Card>
            
            {/* Ceremonia Civil y Celebración */}
            <Card className="bg-white/90 shadow-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300" style={{ borderColor: '#90a8c2' }}>
              <CardHeader className="text-center py-8">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl" style={{ color: '#026b67' }}>
                  <Users className="h-8 w-8" />
                  Civil y Celebración
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6 pb-8">
                <p className="text-3xl font-light" style={{ color: '#0b3156' }}>{ceremoniaCivil.time}</p>
                <p className="text-xl" style={{ color: '#909d8b' }}>{ceremoniaCivil.name}</p>
                <p className="text-stone-600">{ceremoniaCivil.address}</p>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src={ceremoniaCivil.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <Button 
                  className="w-full mt-4" 
                  style={{ backgroundColor: '#026b67', color: 'white' }}
                  onClick={() => window.open(ceremoniaCivil.embedUrl, '_blank')}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Ver en Google Maps
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    {/* Consideraciones y protocolo Section */}
      <section 
        className="relative py-24 px-4 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(2, 107, 103, 0.1), rgba(11, 49, 86, 0.15)), url('https://images.unsplash.com/photo-1594736797933-d0f8e29b2239?w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl mb-6 font-serif tracking-wide" style={{ color: '#026b67' }}>
              Consideraciones y Protocolo
            </h2>
            <div className="w-32 h-1 mx-auto rounded-full" style={{ backgroundColor: '#026b67' }}></div>
          </div>
          <Card className="bg-white/90 text-center shadow-2xl backdrop-blur-sm" style={{ borderColor: '#90a8c2' }}>
            <CardHeader className="py-12">
              <CardTitle className="text-4xl text-center mb-8" style={{ color: '#026b67' }}>
                Formal
              </CardTitle>
            {/* Iconos de vestimenta formal */}
            <div className="flex items-center justify-center gap-16 mb-10">
              {/* Icono de vestido */}
              <div className="flex flex-col items-center">
                <div className="w-28 h-36 mb-4 flex items-center justify-center">
                  <ImageWithFallback
                    src="https://cdn-icons-png.flaticon.com/512/5626/5626322.png"
                    alt="Dama - Vestido formal"
                    className="w-full h-full object-contain"
                    style={{ filter: 'hue-rotate(180deg) saturate(1.2)' }}
                  />
                </div>
                <span className="text-base mt-4" style={{ color: '#026b67' }}>Dama</span>
              </div>
              
              {/* Icono de traje/smoking */}
              <div className="flex flex-col items-center">
                <div className="w-28 h-36 mb-4 flex items-center justify-center">
                  <ImageWithFallback
                    src="https://cdn-icons-png.flaticon.com/512/25/25978.png"
                    alt="Caballero - Traje formal"
                    className="w-full h-full object-contain"
                    style={{ filter: 'hue-rotate(180deg) saturate(1.2)' }}
                  />
                </div>
                <span className="text-base mt-4" style={{ color: '#026b67' }}>Caballero</span>
              </div>
            </div>
            </CardHeader>
            <CardContent className="space-y-8 pb-12">
              <p className="text-lg max-w-2xl mx-auto" style={{ color: '#0b3156' }}>
                Para nosotros es más importante que asistas cómodo para pasar un gran momento. 
                Solo te pedimos respetar los colores de los novios, damas de honor y caballeros de honor.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="flex flex-col items-center gap-3 p-4 rounded-xl border" style={{ borderColor: '#90a8c2', backgroundColor: 'rgba(241, 204, 134, 0.1)' }}>
                  <div className="w-12 h-12 rounded-full border-4 border-gray-300" style={{ backgroundColor: '#ffffff' }}></div>
                  <span className="font-medium text-sm" style={{ color: '#0b3156' }}>No Blanco</span>
                </div>
                <div className="flex flex-col items-center gap-3 p-4 rounded-xl border" style={{ borderColor: '#90a8c2', backgroundColor: 'rgba(241, 204, 134, 0.1)' }}>
                  <div className="w-12 h-12 rounded-full border-4 border-gray-300" style={{ backgroundColor: '#1e3a8a' }}></div>
                  <span className="font-medium text-sm" style={{ color: '#0b3156' }}>No Azul Marino</span>
                </div>
                <div className="flex flex-col items-center gap-3 p-4 rounded-xl border" style={{ borderColor: '#90a8c2', backgroundColor: 'rgba(241, 204, 134, 0.1)' }}>
                  <div className="w-12 h-12 rounded-full border-4 border-gray-300" style={{ backgroundColor: '#f5f5dc' }}></div>
                  <span className="font-medium text-sm" style={{ color: '#0b3156' }}>No Beige</span>
                </div>
                <div className="flex flex-col items-center gap-3 p-4 rounded-xl border" style={{ borderColor: '#90a8c2', backgroundColor: 'rgba(241, 204, 134, 0.1)' }}>
                  <div className="w-12 h-12 rounded-full border-4 border-gray-300" style={{ backgroundColor: '#22c55e' }}></div>
                  <span className="font-medium text-sm" style={{ color: '#0b3156' }}>No Verde</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 p-6 rounded-2xl" style={{ backgroundColor: 'rgba(144, 168, 194, 0.1)' }}>
                <Clock className="h-8 w-8" style={{ color: '#026b67' }} />
                <div className="text-center">
                  <h4 className="font-medium mb-2" style={{ color: '#0b3156' }}>Puntualidad</h4>
                  <p className="text-sm" style={{ color: '#909d8b' }}>
                    Eres especial para nosotros por eso te pedimos puntualidad para que nos acompañes en todo el evento
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-red-200 bg-red-50">
                <p className="text-red-700 font-medium">
                  ⚠️ Evento sin niños
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mesa de Regalos Section */}
      <section 
        className="relative py-24 px-4 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(245, 245, 244, 0.9)),  url('/images/photo3.jpg')`
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl mb-6 font-serif tracking-wide" style={{ color: '#026b67' }}>
              Mesa de Regalos
            </h2>
            <div className="w-32 h-1 mx-auto rounded-full" style={{ backgroundColor: '#026b67' }}></div>
          </div>
          <Card className="bg-white/90 text-center shadow-2xl backdrop-blur-sm" style={{ borderColor: '#90a8c2' }}>
            <CardHeader className="py-12">
              <CardTitle className="flex items-center justify-center gap-4 text-4xl" style={{ color: '#026b67' }}>
                <Gift className="h-10 w-10" />
                Regalos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 pb-12">
              <p className="text-lg max-w-2xl mx-auto" style={{ color: '#0b3156' }}>
                Lo más importante es tu presencia, pero si deseas hacer un regalo puede llegar con él, 
                si no sabes que regalarnos te dejamos opciones
              </p>
              
              <div className="p-6 rounded-2xl border" style={{ borderColor: '#90a8c2', backgroundColor: 'rgba(241, 204, 134, 0.1)' }}>
                <h4 className="font-medium mb-4" style={{ color: '#026b67' }}>Mesa de Regalos Liverpool</h4>
                <p className="mb-4" style={{ color: '#0b3156' }}>Evento: 51756414</p>
                <Button 
                  className="w-full" 
                  style={{ backgroundColor: '#026b67', color: 'white' }}
                  onClick={() => window.open('https://mesaderegalos.liverpool.com.mx/eventodebusqueda', '_blank')}
                >
                  <Gift className="mr-2 h-4 w-4" />
                  Ver Mesa de Regalos
                </Button>
              </div>

              <div className="p-6 rounded-2xl border" style={{ borderColor: '#90a8c2', backgroundColor: 'rgba(144, 168, 194, 0.1)' }}>
                <h4 className="font-medium mb-4" style={{ color: '#026b67' }}>Si de por si no sabes que regalarnos puedes apoyarnos a esta cuenta</h4>
                {/*<p className="text-sm" style={{ color: '#909d8b' }}>
                  12746 87931297834 90349034
                </p>*/}
                <p className="mt-2 font-mono text-sm p-3 rounded border" style={{ backgroundColor: 'white', borderColor: '#90a8c2' }}>
                  Detalles de cuenta bancaria 12746 87931297834 90349034
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="relative py-16 px-4 text-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 49, 86, 0.9), rgba(2, 107, 103, 0.8)), url('/images/photo8.jpg')`
        }}
      >
        <div className="max-w-6xl mx-auto text-white">
          <Heart className="h-12 w-12 mx-auto mb-8 animate-pulse" style={{ color: '#f1cc86' }} />
          <p className="text-2xl md:text-3xl mb-4 font-light">
            Gracias por acompañarnos en este día tan especial
          </p>
          <p className="text-xl font-serif" style={{ color: '#f1cc86' }}>
            Yanahi Andrea Ramírez Patrón & José Alfredo Velázquez González
          </p>
        </div>
      </footer>
    </div>
  );
}