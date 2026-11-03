import Producto from "./Producto";
import Electrodomestico from "./Electrodomestico";
import EquipoInformatico from "./EquipoInformatico";
import Inventario from "./Inventario";

// Ejemplos de seis funciones globales predefinidas de JavaScript RA4 a.
console.log("Number:", Number("25"));
console.log("parseInt:", parseInt("25 unidades", 10));
console.log("parseFloat:", parseFloat("3.5 euros"));
console.log("isFinite:", isFinite(25));
console.log("isNaN:", isNaN(Number("hola")));
// Codifica los caracteres especiales de un texto para poder usarlo en una URL.
// Por ejemplo, el espacio se codifica como %20.
console.log("encodeURIComponent:", encodeURIComponent("oferta especial"));

const lavadora = new Electrodomestico("Lavadora", 600, "Bosch", "A", 2);
const frigorifico = new Electrodomestico("Frigorífico", 800, "LG", "A++", 4);
const portatil = new EquipoInformatico("Portátil", 800, "Lenovo", 8, "Ryzen 5");
const macbook = new EquipoInformatico("MacBook", 1500, "Apple", 16, "M3");
const productos: Producto[] = [lavadora, frigorifico, portatil, macbook];

// Llamadas directas a setters para modificar propiedades.
lavadora.setGarantia(3);
portatil.setMemoriaRam(16);

// Añadimos productos al inventario; repetir uno aumenta su cantidad.
const inventario = new Inventario();
productos.forEach(producto => inventario.agregar(producto));
inventario.agregar(lavadora);

// Consultamos el inventario y buscamos un producto por su nombre.
console.log("Productos en el inventario:");
inventario.mostrarProductos();
console.log("Producto encontrado:", inventario.buscar("MacBook")?.getNombre());
console.log("Valor total:", inventario.valorTotal(), "€");
console.log("Cantidad total de productos:", inventario.cantidadTotal());

// Aplicamos descuentos y mostramos características específicas de cada tipo.
lavadora.aplicarDescuento(10);
macbook.aplicarDescuento(10);
console.log(`Lavadora: consumo ${lavadora.getConsumoEnergetico()}, garantía ${lavadora.getGarantia()} años`);
console.log(lavadora.mostrarInformacion());
console.log(`MacBook: ${macbook.getMemoriaRam()} GB de RAM, procesador ${macbook.getProcesador()}`);
console.log("Precio del MacBook con descuento:", macbook.getPrecio(), "€");

// Usamos las operaciones para quitar unidades y obtener estadísticas.
inventario.eliminar(lavadora);
console.log("Cantidad de productos de Apple:", Producto.contarPorMarca(productos, "Apple"));
console.log("Precio medio:", Producto.precioPromedio(productos).toFixed(2), "€");
console.log("Valor total tras los descuentos:", inventario.valorTotal(), "€");
console.log("Cantidad total de productos:", inventario.cantidadTotal());