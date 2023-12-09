describe('index', () => {
    beforeEach(()=>{
        cy.visit("http://localhost:5173/")
    })
    it("Verificar que el acordeon de lista se Abre", ()=>{

        cy.get('.nav-pills > :nth-child(3) > :nth-child(1)').click({force: true}).as("ClickOffers")
        cy.get("#ul-test").should("have.css","display","block")
        cy.get('@ClickOffers').click({force: true})
        cy.get("#ul-test").should("have.css","display","none")
        // cy.debug()
        // cy.get('@ClickOffers').click({force: true})
        // cy.get("#ul-test").should("have.css","display","none")


        // cy.contains('.nav-treeview', 'Texto esperado en el contenido del acordeón').should('be.visible')
        // cy.get('.nav-pills > :nth-child(3) > :nth-child(1) .nav-treeview',).should('be.visible')
    })
    it.only("Visitar ofertas",()=>{
        cy.visit("http://localhost:5173/servicios/servicio")
        
        
    })
    
});
