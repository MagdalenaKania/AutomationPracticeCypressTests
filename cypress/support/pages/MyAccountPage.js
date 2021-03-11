const SIGNOUT_BUTTON = "a.logout";
const HOME_BUTTON = 'a[title="Home"]';
const clickOnSignOutButton = () => cy.get(SIGNOUT_BUTTON).click();

const clickOnHomeButton = () => cy.get(HOME_BUTTON).click();

module.exports = { clickOnSignOutButton, clickOnHomeButton };
