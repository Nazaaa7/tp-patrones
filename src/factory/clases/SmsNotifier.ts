import { INotifier } from "../interfaces/INotifier";

export class SmsNotifier implements INotifier {
  send(to: string, message: string): void {
    console.log(`SMS enviado a ${to}: ${message}`);
  }
}
