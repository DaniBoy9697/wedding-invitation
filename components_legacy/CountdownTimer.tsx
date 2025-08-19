import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Heart } from 'lucide-react';

interface CountdownTimerProps {
  targetDate: Date;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Días', value: timeLeft.days, icon: '📅' },
    { label: 'Horas', value: timeLeft.hours, icon: '🕐' },
    { label: 'Minutos', value: timeLeft.minutes, icon: '⏰' },
    { label: 'Segundos', value: timeLeft.seconds, icon: '⚡' }
  ];

  return (
    <Card className="bg-white/95 border-emerald-300 shadow-2xl backdrop-blur-sm overflow-hidden">
      <CardContent className="p-12">
        <div className="text-center mb-12">
          <Heart className="h-12 w-12 mx-auto mb-6 text-emerald-600 animate-pulse" />
          <h3 className="text-4xl md:text-5xl text-emerald-800 mb-4 font-serif tracking-wide">
            Faltan para el gran día
          </h3>
          <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {timeUnits.map((unit, index) => (
            <div key={index} className="text-center group">
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-2xl p-8 mb-4 shadow-xl transform group-hover:scale-105 transition-all duration-300 border-2 border-emerald-200">
                  <div className="text-sm mb-2 opacity-75">{unit.icon}</div>
                  <div className="text-4xl md:text-5xl font-light tracking-wider">
                    {unit.value.toString().padStart(2, '0')}
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-emerald-300 to-emerald-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
              </div>
              <div className="text-lg text-emerald-700 font-medium tracking-wide">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && (
          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-100 to-emerald-50 rounded-2xl p-8 border border-emerald-200">
              <p className="text-4xl text-emerald-600 font-serif mb-4">
                ¡Es hoy! 🎉
              </p>
              <p className="text-xl text-emerald-700">
                El día más especial ha llegado
              </p>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-emerald-50 px-8 py-4 rounded-full border border-emerald-200">
            <Heart className="h-5 w-5 text-emerald-600" />
            <span className="text-emerald-700 font-medium">Con amor, Isabella & Santiago</span>
            <Heart className="h-5 w-5 text-emerald-600" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}