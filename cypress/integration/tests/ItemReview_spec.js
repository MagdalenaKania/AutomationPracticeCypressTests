const { clickOnEveningDressesLink } = require("../../support/pages/HomePage");
const { clickOnMoreButton } = require("../../support/pages/EveningDressesPage");
const {
  openingWriteAReviewWindow,
  inputTitle,
  inputComment,
  clickOnSendButton,
} = require("../../support/pages/ProductPage");
const userData = Cypress.env("userData");

describe("Item review tests", function () {
  beforeEach(function () {
    cy.visit("/");
  });
  before(function () {
    cy.visit("/");
    cy.login(userData.login, userData.password);
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
  it("Should add item review", function () {
    clickOnEveningDressesLink();
    cy.contains("More");
    clickOnMoreButton();
    cy.contains("Write a review");
    openingWriteAReviewWindow();
    inputTitle("Title");
    inputComment("Comment");
    clickOnSendButton();
    cy.contains("Popular");
  });
});
