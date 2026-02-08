// Pruebas de gestión de datos

describe('Gestión de Habitaciones (Admin)', () => {

    // HOOK: Esto se ejecuta ANTES de cada prueba de este archivo
    // Así no tienes que copiar el código de login 3 veces. ¡Esto es muy profesional!
    beforeEach(() => {
        cy.visit('https://automationintesting.online/admin/');
        cy.get("#username").type("admin");
        cy.get("#password").type("password");
        cy.get("#doLogin").click();
        cy.contains('#navbarSupportedContent', 'Report').should('be.visible');
    });

    // CP-04: Crear Habitación
    it('Debería crear una nueva habitación (Happy Path)', () => {
        cy.wait(1000); 
        cy.get('#roomName').type('909'); // Usamos el 909 para poder borrarlo luego
        cy.get('#type').select('Double');
        cy.get('#accessible').select('true');
        cy.get('#roomPrice').type('150');
        cy.get('#wifiCheckbox').click();
        cy.get('#createRoom').click();

        cy.contains('div', '909').should('be.visible');
    });

    // CP-05: Validación Negativa (Sin precio)
    it('Debería impedir crear una habitación sin precio', () => {
        cy.wait(1000);
        cy.get('#roomName').type('105');
        cy.get('#type').select('Single');
        cy.get('#accessible').select('true');
        // No llenamos precio
        cy.get('#createRoom').click();
        cy.get('.alert.alert-danger').should('be.visible');
    });

    // CP-06: Borrar Habitación (Limpieza)
    it('Debería eliminar la habitación creada anteriormente', () => {
        cy.wait(2000); // Esperamos que cargue la lista
        // Buscamos la 909 y la borramos
        cy.contains('div', '909')
            .parent()
            .find('.fa-remove')
            .click();
        cy.contains('div', '909').should('not.exist');
    });
});