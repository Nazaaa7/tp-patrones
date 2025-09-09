import { ISubscriber } from "../interfaces/ISubscribe";

export class Student implements ISubscriber {
  constructor(private name: string) {}

  update(message: string): void {
    console.log(` ${this.name} recibió la tarea: ${message}`);
  }
}
