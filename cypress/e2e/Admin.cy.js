describe('Módulo de Administración - Reportes', () => {
  const modulo = 'Reporte realizado para el modulo de Recursos';

  beforeEach(() => {
    cy.visit('http://localhost:3000/components/Admin.html');
  });

  it('Muestra error si el campo está vacío', () => {
    cy.get('#btnGenerar').click();
    cy.get('#resultado')
      .should('be.visible')
      .and('contain.text', 'Por favor ingresa un nombre de módulo');
  });

  it('Crea un reporte correctamente', () => {
    cy.get('#modulo').type(modulo);
    cy.get('#btnGenerar').click();

    cy.get('#resultado')
      .should('be.visible')
      .and('contain.text', `✅ Reporte generado del módulo: ${modulo}`);

    cy.get('table tbody tr').should('contain.text', modulo);
  });

  it('Elimina un reporte desde la tabla', () => {
    cy.get('table tbody tr').contains(modulo).parent().find('button').click();

    cy.get('#resultado')
      .should('be.visible')
      .and('contain.text', 'Reporte eliminado exitosamente');
  });
});