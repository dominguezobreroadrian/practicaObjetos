export default interface IProducto {
    nombre: string;
    precio: number;
    marca: string;

    aplicarDescuento(procentaje: number): void
    mostrarInformacion(): string
}