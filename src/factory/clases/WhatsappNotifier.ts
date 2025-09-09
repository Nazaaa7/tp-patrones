import { INotifier } from "../interfaces/INotifier";

export class WhatsappNotifier implements INotifier {
  send(to: string, message: string): void {
    console.log(` WhatsApp enviado a ${to}: ${message}`);
  }
}
