import { useEffect, useState } from "react";
import type { Dia, PlanEntrenamiento } from "../types/interfaces";
import trainingPlan from "../data/trainingPlan.json";

interface DayDetailsProps {
  id: string | number;
}

const DayDetails: React.FC<DayDetailsProps> = ({ id }) => {
  const [dia, setDia] = useState<Dia | null>(null);

  useEffect(() => {
    const plan: PlanEntrenamiento = trainingPlan;

    const dia = plan.semanas
      .flatMap((semana) => semana.dias)
      .find((dia) => dia.dia.toString() === id);

    if (dia) {
      setDia(dia);
    }
  }, [id]);

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-md">
      <a
        href="/"
        className="mb-4 w-max block bg-orange-600 text-white p-3 rounded hover:bg-orange-500 transition duration-200"
      >
        Volver al Home
      </a>
      <h2 className="text-2xl font-bold text-orange-600">
        Día {dia?.dia}: {dia?.actividad}
      </h2>
      <p className="text-gray-300 mt-2">Duración: {dia?.duracion}</p>
      <div className="mt-4 space-y-4">
        {dia?.ejercicios.map((ejercicio, index) => (
          <div
            className="p-4 bg-gray-700 rounded-lg border border-gray-600 flex flex-col gap-2"
            key={index}
          >
            <div className="flex flex-col md:flex-row justify-between gap-3">
              <div className="flex flex-col gap-2 border border-gray-600 p-2 rounded-md items-center flex-1">
                <h3 className="w-full text-2xl text-white font-bold block bg-orange-600 text-center p-2 rounded-md">
                  Ejercicio
                </h3>
                <h4 className="w-full text-center text-lg">
                  {ejercicio.nombre}
                </h4>
              </div>
              <div className="flex flex-col gap-2 border border-gray-600 p-2 rounded-md items-center flex-1">
                <h3 className="w-full text-2xl text-white font-bold block bg-orange-600 text-center p-2 rounded-md">
                  Duración
                </h3>
                <h4 className="w-full text-center text-lg">
                  {ejercicio.duracion}
                </h4>
              </div>
              <div className="flex flex-col gap-2 border border-gray-600 p-2 rounded-md items-center flex-1">
                <h3 className="w-full text-2xl text-white font-bold block bg-orange-600 text-center p-2 rounded-md">
                  Series
                </h3>
                <h4 className="w-full text-center text-lg">
                  {ejercicio.serie}
                </h4>
              </div>
              <div className="flex flex-col gap-2 border border-gray-600 p-2 rounded-md items-center flex-1">
                <h3 className="w-full text-2xl text-white font-bold block bg-orange-600 text-center p-2 rounded-md">
                  Repeticiones
                </h3>
                <h4 className="w-full text-center text-lg">
                  {ejercicio.repeticion}
                </h4>
              </div>
              <div className="flex flex-col gap-2 border border-gray-600 p-2 rounded-md items-center flex-1">
                <h3 className="w-full text-2xl text-white font-bold block bg-orange-600 text-center p-2 rounded-md">
                  Descanso
                </h3>
                <h4 className="w-full text-center text-lg">
                  {ejercicio.descanso}
                </h4>
              </div>
              <div className="flex flex-col gap-2 border border-gray-600 p-2 rounded-md items-center flex-1">
                <h3 className="w-full text-2xl text-white font-bold block bg-orange-600 text-center p-2 rounded-md">
                  Imagen
                </h3>
                <img
                  src={ejercicio.imagen}
                  alt={ejercicio.nombre}
                  className="w-40 rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayDetails;
