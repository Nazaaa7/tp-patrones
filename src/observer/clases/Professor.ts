import { IPublisher } from "../interfaces/IPublisher";
import { ISubscriber } from "../interfaces/ISubscribe";

export class Professor implements IPublisher {
  private subscribers: ISubscriber[] = [];

  subscribe(subscriber: ISubscriber): void {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber: ISubscriber): void {
    this.subscribers = this.subscribers.filter(s => s !== subscriber);
  }

  publish(task: string): void {
    console.log(`El profesor publicó: ${task}`);
    this.subscribers.forEach(s => s.update(task));
  }
}
