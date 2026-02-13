@saucedemo @regression
Feature: Flujo de Compra en Sauce Demo

  Background:
    Given que el usuario abre la página de Sauce Demo

  @login
  Scenario Outline: Validación de inicio de sesión con diferentes estados de usuario
    When ingresa el usuario "<user>" y la contraseña "<password>"
    And hace clic en el botón de ingresar
    Then debería ver el resultado esperado "<resultado>"

    Examples:
      | user            | password     | resultado |
      | standard_user   | secret_sauce | success   |
      | locked_out_user | secret_sauce | locked    |
      | user_invalid    | wrong_sauce  | failure   |

  @compra @smoke
  Scenario: Compra exitosa de un producto
    Given que el usuario ha iniciado sesión como "standard_user"
    When agrega el "Sauce Labs Backpack" al carrito
    And completa el checkout con "Juan", "Pérez" y "15001"
    Then el sistema confirma la compra con "Thank you for your order!"

  @carrito
  Scenario: Validar que el producto agregado se muestra en el carrito
    Given que el usuario ha iniciado sesión como "standard_user"
    When agrega el "Sauce Labs Backpack" al carrito
    And va al carrito de compras
    Then el carrito debería mostrar el producto "Sauce Labs Backpack"