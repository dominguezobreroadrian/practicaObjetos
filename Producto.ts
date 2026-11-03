import IProducto from "./IProducto";

export default class Producto implements IProducto {
    nombre: string;
    // El "!" indica que el precio se inicializa en el constructor llamando a setPrecio.
    precio!: number;
    marca: string;

    public static precioPromedio(productos: Producto[]): number {
        const suma: number = productos.reduce(
            (acumulador, valorActual) => acumulador + valorActual.getPrecio(),
            0
        );
        return suma / productos.length;
    }

    public static contarPorMarca(productos: Producto[], marca: string): number {
        return productos.filter(prod => prod.getMarca() === marca).length;
    }

    constructor(nombre: string, precio: number, marca: string) {
        this.nombre = nombre;
        this.setPrecio(precio);
        this.marca = marca;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setPrecio(precio: number): void {
        if (precio > 0) {
            this.precio = precio;
        }
    }

    public setMarca(nombre: string): void {
        this.marca = nombre;
    }

    public aplicarDescuento(descuento: number): boolean {
        let aplicado: boolean = false;
        if (descuento > 0 && descuento < 100) {
            const totalQuitar = (this.precio / 100) * descuento;
            this.setPrecio(this.precio - totalQuitar);
            aplicado = true;
        }
        return aplicado;
    }

    public mostrarInformacion(): string {
        return `Nombre: ${this.getNombre()} \n
                Precio: ${this.getPrecio()} \n
                Marca:  ${this.getMarca()}`;
    }
}