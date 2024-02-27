const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
const INGRESAR = require("../../support/tasks/IngresoSaucedemo");
const AGREGAR_PRODUCTO= require("../../support/tasks/SeleccionProducto");
const VERIFICAR_PRODUCTO_CARRITO = require("../../support/questions/VerificarSeleccionProducto");

Given("Angelica ingresa al aplicativo de Saucedemo", () => {
  cy.viewport(1280, 800);
  cy.visit("/");
  cy.wait(3000);
});

When("ingresa el usuario {string} y contrasena {string}", (usuario, pass) => {
  INGRESAR.iniciarSesion(usuario, pass);
});

When("selecciona el producto {string}", (producto) => {
  AGREGAR_PRODUCTO.seleccionarProducto(producto);
});
When("debera ir al carrito", () => {
});

Then(
  "verifica ingreso a la plataforma de Saucedemo y haya seleccionado el producto {string}",(producto) => {
  VERIFICAR_PRODUCTO_CARRITO.verificarProductoCarrito(producto);
  });
