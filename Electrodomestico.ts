import Producto from "./Producto";

export default class Electrodomestico extends Producto {
    // El "!" indica a TypeScript que estas propiedades se inicializan en el constructor mediante los setters.
    private consumoEnergetico!: string;
    private garantia!: number;

    /**
     * Constructor que llama a super(nombre, precio, marca);
     */
    constructor(nombre: string, precio: number, marca: string, consumoEnergetico: string, garantia: number) {
        super(nombre, precio, marca);
        this.setConsumoEnergetico(consumoEnergetico);
        this.setGarantia(garantia);
    }

    public getConsumoEnergetico(): string {
        return this.consumoEnergetico;
    }
    
    public getGarantia(): number {
        return this.garantia;
    }

    public setConsumoEnergetico(letra: string): void {
        const letras: string[] = ["A+++", "A++", "A+", "A", "B", "C", "D", "E", "F", "G"];
        const letraMayus = letra.toUpperCase();
        if (!letras.includes(letraMayus)) {
            throw new Error("Consumo energético no válido");
        }
        this.consumoEnergetico = letraMayus;
    }

    public setGarantia(anyos: number): void {
        if (anyos >= 0 && Number.isInteger(anyos)) {
            this.garantia = anyos;
        }
    }

    public override aplicarDescuento(descuento: number): boolean {
        const aplicado = super.aplicarDescuento(descuento);     // descuento general
        if (aplicado && this.getPrecio() > 500) {
            this.setPrecio(this.getPrecio() * 0.9);             // 10% adicional si es muy caro
        }
        return aplicado;
    }

    public override mostrarInformacion(): string {
        return `${super.mostrarInformacion()}\nConsumo energético: ${this.consumoEnergetico}\nGarantía: ${this.garantia} años`;
    }
}