import React from 'react';
import Slider from 'react-slick';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';

export function PhotoCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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

  // Placeholder photos - en una implementación real, estas serían las fotos reales
  const photos = [
    {
      src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop',
      alt: 'Momento romántico 1',
      caption: 'Nuestro primer encuentro'
    },
    {
      src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop',
      alt: 'Momento romántico 2',
      caption: 'El día de la propuesta'
    },
    {
      src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
      alt: 'Momento romántico 3',
      caption: 'Preparando nuestro futuro'
    },
    {
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop',
      alt: 'Momento romántico 4',
      caption: 'Juntos para siempre'
    },
    {
      src: 'https://images.unsplash.com/photo-1594736797933-d0f8e29b2239?w=800&h=600&fit=crop',
      alt: 'Momento romántico 5',
      caption: 'Nuestros momentos especiales'
    }
  ];

  return (
    <Card className="overflow-hidden bg-white/95 border-emerald-300 shadow-2xl backdrop-blur-sm">
      <style jsx>{`
        .slick-dots {
          bottom: 30px;
        }
        .slick-dots li button:before {
          color: rgba(6, 78, 59, 0.8);
          font-size: 14px;
        }
        .slick-dots li.slick-active button:before {
          color: rgb(6, 78, 59);
        }
        .slick-arrow {
          z-index: 10;
        }
        .slick-arrow:before {
          color: rgb(6, 78, 59);
          font-size: 28px;
        }
        .slick-prev {
          left: 30px;
        }
        .slick-next {
          right: 30px;
        }
      `}</style>
      
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
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 border border-emerald-200">
                  <p className="text-xl font-medium text-emerald-800 text-center">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Card>
  );
}