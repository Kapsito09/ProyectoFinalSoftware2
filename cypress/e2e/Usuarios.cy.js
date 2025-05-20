describe('Gestión de Usuarios', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/components/Usuarios.html');
  });

  it('Debería cargar la página de usuarios correctamente', () => {
    cy.url().should('include', 'http://localhost:3000/components/Usuarios.html');
    cy.contains('Gestión de Usuarios').should('be.visible');
    cy.get('#tablaUsuarios').should('be.visible');
  });

  it('Debería mostrar un mensaje de error si se intenta crear un usuario sin completar el formulario', () => {
    cy.get('#btnCrear').click();

    cy.get('#mensaje')
      .should('be.visible')
      .contains('Por favor ingresa nombre y correo.');
  });

  it('Debería crear un nuevo usuario y mostrarlo en la tabla', () => {
    cy.get('#nombre').type('Carlos Parra');
    cy.get('#correo').type('caliparra@ucompensar.edu.co');

    cy.get('#btnCrear').click();

    cy.get('#mensaje')
      .should('be.visible')
      .contains('✅ Usuario creado con éxito');

    cy.get('#tablaUsuarios tbody tr')
      .last()
      .should('contain', 'Carlos Parra')
      .and('contain', 'caliparra@ucompensar.edu.co');
  });

  it('Debería eliminar un usuario correctamente', () => {

    cy.get('#tablaUsuarios tbody tr').first().within(() => {

      cy.get('button').click();
    });

    cy.get('#mensaje')
      .should('be.visible')
      .contains('Usuario eliminado con éxito.');

    cy.get('#tablaUsuarios tbody tr').should('have.length', 0);
  });

});