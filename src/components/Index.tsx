import WeekSection from "../components/WeekSection";
import trainingPlan from "../data/trainingPlan.json";
import type { PlanEntrenamiento, Dia } from "../types/interfaces";

const plan: PlanEntrenamiento = trainingPlan;

export default function Index() {

  return (
    <div className="container mx-auto p-4">
      {plan.semanas.map((semana) => (
        <WeekSection
          key={semana.semana}
          semana={semana}
        />
      ))}
    </div>
  );
}
