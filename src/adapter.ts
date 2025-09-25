
export class InventarioViejo {
  private items: string[] = [];
  addItem(nombre: string) { this.items.push(nombre); }
  listarItems() { return this.items; }
}

export class AdaptadorInventario {
  private equipos: { nombre: string; tipo: string; estado: string }[] = [];
  constructor(private inventarioViejo: InventarioViejo) {}

  agregarEquipo(nombre: string, tipo: string, estado: string) {
    this.inventarioViejo.addItem(nombre);
    this.equipos.push({ nombre, tipo, estado });
  }

  listarEquipos() { return this.equipos; }
}


const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Router Cisco", "Red", "disponible");
console.log(adaptador.listarEquipos());