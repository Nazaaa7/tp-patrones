export interface IObserver { 
  update(estado: string, equipo: string): void; 
}

export interface ISubject { 
  agregarObservador(observer: IObserver): void; 
  cambiarEstado(estado: string): void; 
}

export class EquipoSubject implements ISubject {
  private observadores: IObserver[] = [];
  private estado: string;

  constructor(public nombre: string, public tipo: string, estado: string) {
    this.estado = estado;
  }

  agregarObservador(observer: IObserver) { 
    this.observadores.push(observer); 
  }

  cambiarEstado(estado: string) { 
    this.estado = estado; 
    this.notifyObservadores(); 
  }

  notifyObservadores() { 
    this.observadores.forEach(o => o.update(this.estado, this.nombre)); 
  }
}

export class Soporte implements IObserver {
  update(estado: string, equipo: string) { 
    console.log(`Soporte notificado: ${equipo} ha cambiado su estado a ${estado}`);
  }
}


const soporte = new Soporte();
const equipo = new EquipoSubject("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
