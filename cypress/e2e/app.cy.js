describe("inicio de la aplicacion", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("Incio de sesion", () => {
    cy.get(".input-group.mt-4 > .form-control").type("a@gmail.com");
    cy.get(".input-group.mt-1 > .form-control").type("t1");
    cy.get(".btn").click();
  });
  it.only("Incio de sesion Erroneo", () => {
    cy.get(".input-group.mt-4 > .form-control").type("a@gmail.com");
    cy.get(".input-group.mt-1 > .form-control").type("t1");
    cy.get(".btn").click();
    cy.get("#asd");
  });
});
