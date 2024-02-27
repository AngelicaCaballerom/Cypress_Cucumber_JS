const Elementos = require("../userinterfaces/Localizadores");



class IngresoSauceDemo {
  pasos = {
    accion1: () => cy.get(Elementos.INPUT_USUARIO, { timeout: 10000 }),
    accion2: () => cy.get(Elementos.INPUT_PASS, { timeout: 10000 }),
    accion3: () => cy.get(Elementos.BTN_LOGIN_SAUCEDEMO, { timeout: 10000 }),
    tiempo:() =>cy.wait(2000),
    foto:() => cy.screenshot(),
  };

  iniciarSesion(usuario, pass) {
    this.pasos.foto();
    this.pasos.tiempo();
    this.pasos.accion1().type(usuario,{ force: true });
    this.pasos.tiempo();
    this.pasos.accion2().type(pass,{ force: true });
    this.pasos.tiempo();
    this.pasos.foto();
    this.pasos.accion3().click({ force: true });
    this.pasos.tiempo();
  
  }
}

module.exports = new IngresoSauceDemo ();
