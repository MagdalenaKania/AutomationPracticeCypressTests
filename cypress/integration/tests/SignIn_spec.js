const { clickOnSignOutButton } = require("../../support/pages/MyAccountPage");
const userData = Cypress.env("userData");

describe("SignIn tests", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  before(function () {
    cy.visit("/");
    cy.login(userData.login, userData.password);
  });

  it("Should successfully log out", function () {
    clickOnSignOutButton();
    cy.contains("Sign in");
  });
});
