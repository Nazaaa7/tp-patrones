import { ISubscriber } from "./ISubscribe";

export interface IPublisher {
  subscribe(subscriber: ISubscriber): void;
  unsubscribe(subscriber: ISubscriber): void;
  publish(message: string): void;
}
