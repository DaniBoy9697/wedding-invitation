import React from 'react';
import Slider from 'react-slick';
import ImageWithFallback from './figma/ImageWithFallback';
import { Card } from './ui/card';

export function PhotoCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  // Actualiza las rutas para que tomen las imágenes de public/images
  const photos = [
    {
      src: '/images/photo1.jpg',
      alt: 'Momento romántico 1',
      caption: 'Nuestro primer encuentro'
    },
    {
      src: '/images/photo2.jpg',
      alt: 'Momento romántico 2',
      caption: 'El día de la propuesta'
    },
    {
      src: '/images/photo3.jpg',
      alt: 'Momento romántico 3',
      caption: 'Preparando nuestro futuro'
    },
    {
      src: '/images/photo4.jpg',
      alt: 'Momento romántico 4',
      caption: 'Juntos para siempre'
    },
    {
      src: '/images/photo6.jpg',
      alt: 'Momento romántico 5',
      caption: 'Nuestros momentos especiales'
    }
  ];

  return (
    <Card className="overflow-hidden bg-white/95 shadow-2xl backdrop-blur-sm" style={{ borderColor: '#90a8c2' }}>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index} className="relative">
            <div className="aspect-[4/3] md:aspect-[16/9] relative">
              <ImageWithFallback
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent" />
            </div>
          </div>
        ))}
      </Slider>
    </Card>
  );
}
