import Producto from "./Producto";

export default class Inventario {
    // La clave es el producto y el valor, cuántas unidades hay en el inventario.
    private productos: Map<Producto, number> = new Map();

    // Se compara por nombre y su uso es INTERNO por eso el private.
    private encontrarProductoPorNombre(nombreProducto: string): Producto | undefined {
        for (const producto of this.productos.keys()) {
            if (producto.getNombre() === nombreProducto) {
                return producto;
            }
        }

        return undefined;
    }

    public agregar(producto: Producto): boolean {
        const productoExistenteONo = this.encontrarProductoPorNombre(producto.getNombre());

        if (productoExistenteONo) {
            // "!" afirma que get devuelve una cantidad: la clave existe porque se acaba de encontrar el producto en el Map.
            const cantidadActual = this.productos.get(productoExistenteONo)!;
            this.productos.set(productoExistenteONo, cantidadActual + 1);
        } else {
            this.productos.set(producto, 1);
        }

        return true;
    }

    public eliminar(producto: Producto): boolean {
        const productoExistenteONo = this.encontrarProductoPorNombre(producto.getNombre());

        if (!productoExistenteONo) {
            return false;
        }

        // "!" afirma que get devuelve una cantidad: ya se comprobó que el producto existe en el Map.
        const cantidadActual = this.productos.get(productoExistenteONo)!;
        if (cantidadActual > 1) {
            this.productos.set(productoExistenteONo, cantidadActual - 1);
        } else {
            // Al quitar la última unidad, se elimina también el producto del Map.
            this.productos.delete(productoExistenteONo);
        }

        return true;
    }

    public buscar(nombreProducto: string): Producto | undefined {
        return this.encontrarProductoPorNombre(nombreProducto);
    }

    public mostrarProductos(): void {
        this.productos.forEach((cantidad, producto) => {
            const informacionProducto =
                `${producto.getNombre()} | ${producto.getMarca()} | ` +
                `${producto.getPrecio()} € | x${cantidad}`;

            console.log(informacionProducto);
        });
    }

    public valorTotal(): number {
        let valorTotal = 0;

        this.productos.forEach((cantidad, producto) => {
            valorTotal += producto.getPrecio() * cantidad;
        });

        return valorTotal;
    }

    public cantidadTotal(): number {
        let cantidadTotal = 0;

        this.productos.forEach((cantidad) => {
            cantidadTotal += cantidad;
        });

        return cantidadTotal;
    }
}