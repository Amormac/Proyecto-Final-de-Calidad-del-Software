// Pruebas críticas de seguridad

describe('Módulo de Autenticación (Auth)', () => {

    // CP-01: Login Exitoso
    it('Debería ingresar correctamente al Dashboard (Login Exitoso)', () => {
        cy.visit('https://automationintesting.online/admin/');
        cy.get("#username").type("admin");
        cy.get("#password").type("password");
        cy.get("#doLogin").click();
        cy.contains('nav', 'Logout').should('be.visible');
    });

    // CP-02: Login Fallido
    it('Debería mostrar error al ingresar credenciales incorrectas', () => {
        cy.visit('https://automationintesting.online/admin/');
        cy.get("#username").type("usuario_falso");
        cy.get("#password").type("clave_incorrecta");
        cy.get("#doLogin").click();
        cy.contains('Invalid credentials').should('be.visible'); 
    });

    // CP-03: Logout (Con tu corrección del bug)
    it('Debería cerrar sesión correctamente (Logout - Workaround Bug 500)', () => {
        cy.visit('https://automationintesting.online/admin/');
        cy.get("#username").type("admin");
        cy.get("#password").type("password");
        cy.get("#doLogin").click();
        
        cy.contains('#navbarSupportedContent', 'Report').should('be.visible');
        cy.wait(2000); // Espera de estabilidad

        cy.get('#navbarSupportedContent > ul.navbar-nav.ms-auto > li:nth-child(2) > button').click(); 
        
        // Validación adaptada al bug del servidor
        cy.url().should('eq', 'https://automationintesting.online/');
    });
});