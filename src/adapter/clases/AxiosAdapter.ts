import { IHttpClient } from "../interfaces/IHttpClient";
import axios from "axios";

export class AxiosAdapter implements IHttpClient {
  async get<T>(url: string): Promise<T> {
    const res = await axios.get<T>(url);
    return res.data;
  }
}
//la promesa se resuelve con el tipo T que se pasa al llamar al método get
//el tipo T es genérico, puede ser cualquier tipo de dato, se especifica al llamar al método get
//axios.get devuelve una promesa que se resuelve con un objeto de tipo AxiosResponse<T>