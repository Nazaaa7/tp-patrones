import { IConexionDB } from "../interfaces/IConexion";

export class ConexionDB implements IConexionDB {
  private static instance: ConexionDB;
  private connected = false;

  private constructor(
    private host: string,
    private port: number,
    private user: string
  ) {}

  static getInstance(): ConexionDB {
    if (!ConexionDB.instance) {
      ConexionDB.instance = new ConexionDB("localhost", 5432, "admin");
    }
    return ConexionDB.instance;
  }

  connect(): void {
    if (!this.connected) {
      this.connected = true;
      console.log(`Conectado a DB en ${this.host}:${this.port} como ${this.user}`);
    }
  }

  disconnect(): void {
    if (this.connected) {
      this.connected = false;
      console.log("Conexión cerrada");
    }
  }

  getStatus(): string {
    return this.connected ? "Conectado" : "Desconectado";
  }
}
