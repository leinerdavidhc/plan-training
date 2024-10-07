export interface Ejercicio {
  nombre: string;
  duracion: number;
  serie: number;
  repeticion: number;
  descanso: number;
  imagen: string;
}

export interface Dia {
  dia: number;
  actividad: string;
  duracion: string;
  ejercicios: Ejercicio[];
}

export interface Semana {
  semana: number;
  dias: Dia[];
}

export interface PlanEntrenamiento {
  semanas: Semana[];
}
