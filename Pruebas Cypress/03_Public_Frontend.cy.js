// Pruebas de usuario final.

describe('Experiencia de Usuario (Frontend)', () => {

    // CP-07: Formulario de Contacto
    it('Debería enviar un mensaje de contacto exitosamente', () => {
        cy.visit('https://automationintesting.online/');
        cy.get("#name").type("Ariel");
        cy.get("#email").type("gonzalomoreira1939@gmail.com");
        cy.get("#phone").type("099925084812");
        cy.get("#subject").type("Consulta Proyecto");
        cy.get("#description").type("Probando enviar un mensaje");
        cy.get("#contact > div > div > div > div > div > form > div.d-grid > button").click();
        
        cy.contains('h3', 'Thanks for getting in touch').should('be.visible');
    });

    // CP-08: Validación Visual (UI)
    it('Debería mostrar la información y logo del hotel correctamente', () => {
        cy.visit('https://automationintesting.online/');
        cy.contains('h1', 'Shady Meadows B&B').should('be.visible');
        cy.contains('p', 'Welcome to Shady Meadows').should('be.visible');
        cy.get('img').should('have.length.at.least', 1);
    });

    // CP-09: Navegación
    it('Debería navegar al panel de administración desde el menú', () => {
        cy.visit('https://automationintesting.online/');
        cy.contains('a', 'Admin panel').click();
        cy.url().should('include', 'admin');
        cy.get('#username').should('be.visible');
    });

    // CP-10: Reserva Fallida (Negativo)
    it('Debería mostrar error al intentar reservar sin datos', () => {
        cy.intercept('GET', '**/room').as('getRooms');
        cy.visit('https://automationintesting.online/');
        cy.wait('@getRooms'); 

        cy.get('#rooms > div > div.row.g-4 > div:nth-child(1)').first().find('a.btn.btn-primary').click();
        cy.get('#doReservation').should('be.visible').click();
        cy.get('#root-container > div > div.container.my-5 > div > div.col-lg-4 > div > div > form > button.btn.btn-primary.w-100.mb-3').should('be.visible').click();
        cy.get('.alert.alert-danger').should('be.visible');
    });
});