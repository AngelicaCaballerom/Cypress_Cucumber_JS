const Elementos = require("../userinterfaces/Localizadores");



class VerificarSeleccionProducto {
  pasos = {
    accion1: () => cy.get(Elementos.LBL_PRODUCTO_CARRITO, { timeout: 10000 }),
    tiempo:() =>cy.wait(2000),
    foto:() => cy.screenshot(),
  };

  verificarProductoCarrito(producto) {
    this.pasos.foto();
    this.pasos.tiempo();
    this.pasos.accion1().invoke('text').then(textoExtraido => {
        expect(textoExtraido.trim()).to.equal(producto.trim());
      });
    this.pasos.tiempo();
  
  }
}

module.exports = new VerificarSeleccionProducto ();
