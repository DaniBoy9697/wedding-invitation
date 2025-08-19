import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PhotoCarousel } from '../components/PhotoCarousel';
import { CountdownTimer } from '../components/CountdownTimer';
import { MusicPlayer } from '../components/MusicPlayer';
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
      {/* ...rest of the code... */}
    </div>
  );
}
