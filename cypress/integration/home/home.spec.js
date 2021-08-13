/// <reference types="cypress" />

describe("Testing personal website", () => {
    it("should go to the web app", () => {
        cy.visit("");
    });
    describe("Testing header", () => {
        describe("Testing header desktop buttons", () => {
            context("800x600 resolution", () => {
                beforeEach(() => {
                    cy.viewport(1280, 720);
                });
                it("should render the title in the header", () => {
                    cy.get("#header-title").should("be.visible");
                });
                it("should render the home button", () => {
                    cy.get("#header-home-button").should("be.visible");
                });
                it("should render the about me button", () => {
                    cy.get("#header-about-me-button").should("be.visible");
                });
                it("should render the experience button", () => {
                    cy.get("#header-experience-button").should("be.visible");
                });
                it("should render the projects button", () => {
                    cy.get("#header-projects-button").should("be.visible");
                });
            });
        });
        describe("Testing header mobile buttons", () => {
            context("iPhone X resolution", () => {
                beforeEach(() => {
                    cy.viewport("iphone-x");
                });
                it("should render the title in the header", () => {
                    cy.get("#header-title").should("be.visible");
                });
                it("should set the viewport to mobile", () => {
                    cy.viewport("iphone-x");
                });
                it("should render the menu button and open the menu", () => {
                    cy.get("#header-mobile-menu-icon").click();
                });
                it("should render the home button", () => {
                    cy.get("#header-mobile-home-button").should("be.visible");
                });
                it("should render the about me button", () => {
                    cy.get("#header-mobile-about-me-button").should(
                        "be.visible"
                    );
                });
                it("should render the experience button", () => {
                    cy.get("#header-mobile-experience-button").should(
                        "be.visible"
                    );
                });
                it("should render the projects button", () => {
                    cy.get("#header-mobile-projects-button").should(
                        "be.visible"
                    );
                });
                it("should render the menu button and close the menu", () => {
                    cy.get("#header-mobile-menu-icon").click();
                });
            });
        });
    });
});
