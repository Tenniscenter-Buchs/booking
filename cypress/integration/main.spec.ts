describe("Main page", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("Brings logo", () => {
        expect(cy.get(".logo-transition")).to.exist;
    });
    it("Unmounts logo", {defaultCommandTimeout: 10000}, () => {
        cy.get(".logo-transition").should("not.exist");
    })
});
