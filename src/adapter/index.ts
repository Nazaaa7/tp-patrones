import { FetchAdapter } from "./clases/FetchAdapter";
import { AxiosAdapter } from "./clases/AxiosAdapter";
import { SimpleHttpClient } from "./clases/SimpleHttpClient";
export async function runAdapter() {
  const client = new SimpleHttpClient(new FetchAdapter());

  console.log("Usando FetchAdapter:");
  const posts1 = await client.get<any[]>("https://jsonplaceholder.typicode.com/posts?_limit=2");
  console.log(posts1);

  console.log(" Cambiando a AxiosAdapter:");
  client.setAdapter(new AxiosAdapter());
  const posts2 = await client.get<any[]>("https://jsonplaceholder.typicode.com/posts?_limit=2");
  console.log(posts2);
}
