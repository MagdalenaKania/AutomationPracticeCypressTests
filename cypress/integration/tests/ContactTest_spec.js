const { clickOnContactusButton } = require("../../support/pages/HomePage");
const {
  attachFile,
  selectSubject,
  inputContactMessage,
  clickOnSendButton,
  inputOrderId,
  inputEmailAddress,
} = require("../../support/pages/ContactUsPage");
const userData = Cypress.env("userData");
describe("Contact tests", function () {
  before(function () {
    cy.visit("/");
    cy.login(userData.login, userData.password);
  });
  it("Should send contact form with attachment", function () {
    clickOnContactusButton();
    selectSubject("Customer service");
    inputOrderId("LMBWOQWCE - 02/18/2021");
    inputContactMessage("Test");
    attachFile();
    clickOnSendButton();
    cy.contains("Your message has been successfully sent to our team.");
  });
});
