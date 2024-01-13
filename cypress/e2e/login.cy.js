describe("User can login and logout to GoIT page", () => {
  it("login and logout", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.loginUser("user888@gmail.com", "1234567890");
    cy.get('[data-element-type="burger-menu"]').click();
    // cy.get(":nth-child(11) > .next-bve2vl").click();
    cy.get(".next-bve2vl").contains("Log out").click();
  });

  it("Other way to login and logout on another user", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.get("#user_email").type("testowyqa@qa.team");
    cy.get("[name=password]").type("QA!automation-1");
    cy.get('button[type="submit"]').click();
    cy.get('[data-element-type="burger-menu"]').click();
    cy.get(".next-bve2vl").contains("Log out").click();
  });
});
