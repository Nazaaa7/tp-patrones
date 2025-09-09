import { runObserver } from "./observer";
import { runAdapter } from "./adapter";
import { runSingleton } from "./singleton";
import { runFactory } from "./factory";

async function main() {
  console.log("===  Observer ===");
  runObserver();

  console.log("===  Adapter ===");
  await runAdapter(); //await porque usa fetch

  console.log("===  Singleton ===");
  runSingleton();

  console.log("===  Factory ===");
  runFactory();
}

main();
