
interface IEquipo {
  detalles(): string;
}


class Notebook implements IEquipo {
  constructor(private nombre: string, private ram: string, private procesador: string) {}
  detalles() {
    return `tipo: notebook, nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Desktop implements IEquipo {
  constructor(private nombre: string, private ram: string, private procesador: string) {}
  detalles() {
    return `tipo: desktop, nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Servidor implements IEquipo {
  constructor(private nombre: string, private ram: string, private procesador: string) {}
  detalles() {
    return `tipo: dervidor, nombre: ${this.nombre}, RAM: ${this.ram}, procesador: ${this.procesador}`;
  }
}


class EquipoFactory {
  crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): IEquipo {
    switch (tipo.toLowerCase()) {
      case "notebook":
        return new Notebook(nombre, ram, procesador);
      case "desktop":
        return new Desktop(nombre, ram, procesador);
      case "servidor":
        return new Servidor(nombre, ram, procesador);
      default:
        throw new Error("tipo de equipo no reconocido");
    }
  }
}

const factory = new EquipoFactory();
const server = factory.crearEquipo("Servidor", "Dell PowerEdge", "32GB", "Xeon");
console.log(server.detalles());
