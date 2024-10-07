import React from 'react';
import type { Semana } from '../types/interfaces';

interface WeekSectionProps {
  semana: Semana;
}

const WeekSection: React.FC<WeekSectionProps> = ({ semana }) => {
  return (
    <div className="my-6 p-6 border border-gray-700 rounded-lg shadow-md bg-gray-800">
      <h2 className="text-2xl font-extrabold text-gray-50">Semana {semana.semana}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 mt-4">
        {semana.dias.map((dia) => (
          <a 
            key={dia.dia} 
            href={`/${dia.dia}`} // Adjust the URL as needed
            className="block p-5 bg-orange-600 text-white rounded-lg cursor-pointer hover:bg-orange-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h3 className="text-lg font-bold">Día {dia.dia}</h3>
            <p className="text-sm">{dia.actividad}</p>
            <p className="text-sm italic">{dia.duracion}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default WeekSection;
