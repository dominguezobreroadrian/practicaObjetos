import Producto from "./Producto";

export default class EquipoInformatico extends Producto {
    // El "!" indica a TypeScript que estas propiedades se inicializan en el constructor mediante los setters.
    private memoriaRam!: number;
    private procesador!: string;

    /**
     *
     */
    constructor(nombre: string, precio: number, marca: string, memoriaRam: number, procesador: string) {
        super(nombre, precio, marca);
        this.setMemoriaRam(memoriaRam);
        this.setProcesador(procesador);
        
    }
    
    public getMemoriaRam(): number {
        return this.memoriaRam;
    }

    public getProcesador(): string {
        return this.procesador;
    }

    public setMemoriaRam(memoria: number): void {
        const memorias: number[] = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256];
        if (!memorias.includes(memoria)) {
            throw new Error("Memoria RAM no válida");
        }
        this.memoriaRam = memoria;
    }

    public setProcesador(procesador: string): void {
        this.procesador = procesador;
    }

    public override aplicarDescuento(descuento: number): boolean {
        const aplicado = super.aplicarDescuento(descuento);   // descuento general
        if (aplicado && this.getMarca() === "Apple") {
            this.setPrecio(this.getPrecio() * 0.95);          // 5% extra por la marca
        }
        return aplicado;
    }

}