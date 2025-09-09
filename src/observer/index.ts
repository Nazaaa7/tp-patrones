import { Professor } from "./clases/Professor";
import { Student } from "./clases/Student";

export function runObserver() {
  const prof = new Professor();
  const s1 = new Student("Naza");
  const s2 = new Student("Juan");
  const s3 = new Student("Lucia");

  prof.subscribe(s1);
  prof.subscribe(s2);
  prof.subscribe(s3);

  prof.publish("Tarea 1: Algoritmos y estructuras de datos");
  prof.unsubscribe(s2);
  prof.publish("Tarea 2: Ejercicios de TypeScript");
}
