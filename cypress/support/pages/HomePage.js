const SIGNIN_BUTTON = "a.login";
const EVENING_DRESSES_LINK =
  "#block_top_menu > ul > li:nth-child(2) > ul > li:nth-child(2) > a";

const clickOnSignInButton = () => cy.get(SIGNIN_BUTTON).click();

const clickOnEveningDressesLink = () =>
  cy.get(EVENING_DRESSES_LINK).click({ force: true });

module.exports = { clickOnSignInButton, clickOnEveningDressesLink };
