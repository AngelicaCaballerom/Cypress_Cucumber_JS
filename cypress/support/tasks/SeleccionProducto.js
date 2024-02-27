const Elementos = require("../userinterfaces/Localizadores");



class SeleccionProducto {
  pasos = {
    accion1: () => cy.get(Elementos.BTN_AGREGAR_PRODUCTO, { timeout: 10000 }),
    accion2: () => cy.xpath(Elementos.BTN_CARRITO, { timeout: 10000 }),
    tiempo:() =>cy.wait(2000),
    foto:() => cy.screenshot(),
  };

  seleccionarProducto(producto) {
    this.pasos.foto();
    this.pasos.tiempo();
    cy.xpath("//div[normalize-space()='"+producto+"']//ancestor::a", { timeout: 10000 }).click({ force: true });
    this.pasos.tiempo();
    this.pasos.accion1().click({ force: true });
    this.pasos.tiempo();
    this.pasos.foto();
    this.pasos.accion2().click({ force: true });
    this.pasos.tiempo();
  
  }
}

module.exports = new SeleccionProducto ();