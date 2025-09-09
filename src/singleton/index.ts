import { ConexionDB } from "./clases/ConexionBD";

export function runSingleton() {
  const db1 = ConexionDB.getInstance();
  db1.connect();
  console.log("Estado:", db1.getStatus());

  const db2 = ConexionDB.getInstance();

  db2.disconnect();
}
