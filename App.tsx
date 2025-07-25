import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { PhotoCarousel } from './components/PhotoCarousel';
import { CountdownTimer } from './components/CountdownTimer';
import { MusicPlayer } from './components/MusicPlayer';
import { Heart, MapPin, Calendar, Clock, Users, Shirt } from 'lucide-react';

export default function App() {
  const weddingDate = new Date('2025-12-15T16:00:00');
  
  const ceremonyLocation = {
    name: "Iglesia San José",
    address: "Calle Principal 123, Ciudad",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093686!2d144.9537353153169!3d-37.8162799797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1547191426298"
  };

  const receptionLocation = {
    name: "Salón de Eventos El Jardín",
    address: "Avenida de los Rosales 456, Ciudad",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093686!2d144.9537353153169!3d-37.8162799797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1547191426298"
  };

  const padrinos = [
    { tipo: "Padrino", nombre: "Juan Pérez", relacion: "Hermano del novio" },
    { tipo: "Madrina", nombre: "María García", relacion: "Hermana de la novia" },
    { tipo: "Padrino", nombre: "Carlos López", relacion: "Mejor amigo" },
    { tipo: "Madrina", nombre: "Ana Martínez", relacion: "Prima de la novia" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 to-emerald-50">
      <MusicPlayer />
      
      {/* Header with Background */}
      <header 
        className="relative min-h-screen flex items-center justify-center text-center px-4 bg-fixed bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 46, 22, 0.4), rgba(6, 78, 59, 0.3)), url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/20 to-emerald-950/60"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-white">
          <div className="flex items-center justify-center gap-6 mb-8">
            <Heart className="text-emerald-300 h-12 w-12 animate-pulse" />
            <h1 className="text-6xl md:text-8xl font-serif tracking-wide">
              Isabella & Santiago
            </h1>
            <Heart className="text-emerald-300 h-12 w-12 animate-pulse" />
          </div>
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl px-8 py-6 border border-white/20">
            <p className="text-2xl md:text-3xl mb-6 font-light tracking-wide">
              Nos complace invitarte a celebrar nuestro amor
            </p>
            <div className="flex items-center justify-center gap-3 text-emerald-100">
              <Calendar className="h-7 w-7" />
              <span className="text-2xl md:text-3xl font-light">15 de Diciembre, 2025</span>
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
          backgroundImage: `linear-gradient(rgba(6, 78, 59, 0.1), rgba(5, 46, 22, 0.2)), url('https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl text-emerald-800 mb-6 font-serif tracking-wide">
              Nuestros Momentos
            </h2>
            <div className="w-32 h-1 bg-emerald-600 mx-auto rounded-full"></div>
          </div>
          <PhotoCarousel />
        </div>
      </section>

      {/* Wedding Details Section */}
      <section 
        className="relative py-24 px-4 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(245, 245, 244, 0.9)), url('https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl text-emerald-800 mb-6 font-serif tracking-wide">
              Detalles de la Boda
            </h2>
            <div className="w-32 h-1 bg-emerald-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white/90 border-emerald-200 shadow-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center py-8">
                <CardTitle className="flex items-center justify-center gap-3 text-emerald-800 text-2xl">
                  <Clock className="h-8 w-8" />
                  Ceremonia Religiosa
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4 pb-8">
                <p className="text-3xl text-emerald-700 font-light">4:00 PM</p>
                <p className="text-xl text-stone-700">{ceremonyLocation.name}</p>
                <p className="text-stone-600">{ceremonyLocation.address}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90 border-emerald-200 shadow-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center py-8">
                <CardTitle className="flex items-center justify-center gap-3 text-emerald-800 text-2xl">
                  <Users className="h-8 w-8" />
                  Recepción
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4 pb-8">
                <p className="text-3xl text-emerald-700 font-light">6:00 PM</p>
                <p className="text-xl text-stone-700">{receptionLocation.name}</p>
                <p className="text-stone-600">{receptionLocation.address}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section 
        className="relative py-24 px-4 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 78, 59, 0.1), rgba(5, 46, 22, 0.15)), url('https://images.unsplash.com/photo-1594736797933-d0f8e29b2239?w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl text-emerald-800 mb-6 font-serif tracking-wide">
              Código de Vestimenta
            </h2>
            <div className="w-32 h-1 bg-emerald-600 mx-auto rounded-full"></div>
          </div>
          <Card className="bg-white/90 border-emerald-200 text-center shadow-2xl backdrop-blur-sm">
            <CardHeader className="py-12">
              <CardTitle className="flex items-center justify-center gap-4 text-emerald-800 text-4xl">
                <Shirt className="h-10 w-10" />
                Formal / Cocktail
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 pb-12">
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 text-lg px-6 py-3">
                  Hombres: Traje
                </Badge>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 text-lg px-6 py-3">
                  Mujeres: Vestido Cocktail
                </Badge>
              </div>
              <p className="text-lg text-stone-600 italic max-w-md mx-auto">
                Por favor evita usar blanco o colores muy similares
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Maps Section */}
      <section 
        className="relative py-24 px-4 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(245, 245, 244, 0.9)), url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl text-emerald-800 mb-6 font-serif tracking-wide">
              Ubicaciones
            </h2>
            <div className="w-32 h-1 bg-emerald-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white/90 border-emerald-200 shadow-2xl backdrop-blur-sm">
              <CardHeader className="text-center py-8">
                <CardTitle className="flex items-center justify-center gap-3 text-emerald-800 text-2xl">
                  <MapPin className="h-8 w-8" />
                  Ceremonia
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-8">
                <div className="aspect-video rounded-xl overflow-hidden mb-6 shadow-lg">
                  <iframe
                    src={ceremonyLocation.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <p className="text-center text-lg text-stone-700">
                  {ceremonyLocation.name}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90 border-emerald-200 shadow-2xl backdrop-blur-sm">
              <CardHeader className="text-center py-8">
                <CardTitle className="flex items-center justify-center gap-3 text-emerald-800 text-2xl">
                  <MapPin className="h-8 w-8" />
                  Recepción
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-8">
                <div className="aspect-video rounded-xl overflow-hidden mb-6 shadow-lg">
                  <iframe
                    src={receptionLocation.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <p className="text-center text-lg text-stone-700">
                  {receptionLocation.name}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Padrinos Section */}
      <section 
        className="relative py-24 px-4 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 78, 59, 0.1), rgba(5, 46, 22, 0.15)), url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl text-emerald-800 mb-6 font-serif tracking-wide">
              Nuestros Padrinos
            </h2>
            <div className="w-32 h-1 bg-emerald-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {padrinos.map((padrino, index) => (
              <Card key={index} className="bg-white/90 border-emerald-200 shadow-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Badge className="mb-6 bg-emerald-600 text-white text-lg px-4 py-2">
                    {padrino.tipo}
                  </Badge>
                  <h3 className="text-xl text-emerald-800 mb-3 font-medium">
                    {padrino.nombre}
                  </h3>
                  <p className="text-stone-600">{padrino.relacion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="relative py-16 px-4 text-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 46, 22, 0.9), rgba(6, 78, 59, 0.8)), url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="max-w-6xl mx-auto text-white">
          <Heart className="h-12 w-12 mx-auto mb-8 text-emerald-200 animate-pulse" />
          <p className="text-2xl md:text-3xl mb-4 font-light">
            Gracias por acompañarnos en este día tan especial
          </p>
          <p className="text-xl text-emerald-200 font-serif">
            Isabella & Santiago
          </p>
        </div>
      </footer>
    </div>
  );
}