      # language: es

      Característica: Registro de usuario
      Como Usuario quiero Realizar el registro de usuario en el aplicativo Saucedemo y seleccionar un producto,
      Para verificar el registro en el aplicativo y la seleccion del producto

      Antecedentes:Ingreso al aplicativo
      Dado Angelica ingresa al aplicativo de Saucedemo

      @LoginSaucedemo
      Escenario: Registro de usuario exitoso en el aplicativo Saucedemo
      Cuando ingresa el usuario "<usuario>" y contrasena "<pass>"
      Y selecciona el producto "<producto>"
      Y debera ir al carrito
      Entonces verifica ingreso a la plataforma de Saucedemo y haya seleccionado el producto "<producto>"

      Ejemplos:
      | usuario       | pass         | producto          |
      | standard_user | secret_sauce | Sauce Labs Onesie |


