import { IHttpClient } from "../interfaces/IHttpClient";

export class FetchAdapter implements IHttpClient {
  async get<T>(url: string): Promise<T> {
    const res = await fetch(url);
    return await res.json() as T;
  }
}

//