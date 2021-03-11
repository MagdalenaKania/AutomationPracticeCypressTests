import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import MyAccountPage from "../pages/MyAccountPage";
import EveningDressesPage from "../pages/EveningDressesPage";
import ProductPage from "../pages/ProductPage";
import { describe, it } from "mocha";

describe("Item review tests", function () {
  const homePage = new HomePage();
  const signInPage = new SignInPage();
  const myAccountPage = new MyAccountPage();
  const eveningDressesPage = new EveningDressesPage();
  const productPage = new ProductPage();
  beforeEach(function () {
    cy.visit("/");
  });
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  it("Should add item review", function () {
    homePage.clickOnSignInButton();
    signInPage.inputEmailToLogin("testuser@example.com");
    signInPage.inputPasswordToLogin("Password1234");
    signInPage.clickOnSignInButton();
    myAccountPage.clickOnHomeButton();
    cy.contains("Popular");
    homePage.clickOnEveningDressesLink();
    cy.contains("More");
    eveningDressesPage.clickOnMoreButton();

    cy.contains("Write a review");
    productPage.openingWriteAReviewWindow();
    productPage.inputTitle("Title");
    productPage.inputComment("Comment");
    productPage.clickOnSendButton();
    cy.contains("Popular");
  });
});
