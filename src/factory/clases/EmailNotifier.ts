import { INotifier } from "../interfaces/INotifier";

export class EmailNotifier implements INotifier {
  send(to: string, message: string): void {
    console.log(`Email enviado a ${to}: ${message}`);
  }
}
