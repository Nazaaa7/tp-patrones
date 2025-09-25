
export interface ISingleton {
  obtenerInstancia(): void;
}

class Configuracion {
  private static instance: Configuracion;
  private config: Record<string, any> = {};

  private constructor() {}

  static obtenerInstancia(): Configuracion {
    if (!Configuracion.instance) {
      Configuracion.instance = new Configuracion();
    }
    return Configuracion.instance;
  }

  set(key: string, value: any) {
    this.config[key] = value;
  }

  get(key: string) {
    return this.config[key];
  }
}

export class Singleton implements ISingleton{
  private static instance: Singleton;

  private constructor() {}

  static obtenerInstancia(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
  
  obtenerInstancia(): void {
    
  }
}

const conf1 = Configuracion.obtenerInstancia();
const conf2 = Configuracion.obtenerInstancia();
conf1.set("modo", "produccin");
console.log(conf2.get("modo"))






