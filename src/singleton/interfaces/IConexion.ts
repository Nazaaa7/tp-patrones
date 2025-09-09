export interface IConexionDB {
  connect(): void;
  disconnect(): void;
  getStatus(): string;
}
