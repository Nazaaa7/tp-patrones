import { NotifierFactory } from "./clases/NotifierFactory";

export function runFactory() {
  const email = NotifierFactory.create("email");
  email.send("ana@mail.com", "Bienvenida al sistema");

  const sms = NotifierFactory.create("sms");
  sms.send("+5491112345678", "Código de verificación: 1234");

  const wa = NotifierFactory.create("whatsapp");
  wa.send("+5491112345678", "Tu pedido ha sido enviado");
}
