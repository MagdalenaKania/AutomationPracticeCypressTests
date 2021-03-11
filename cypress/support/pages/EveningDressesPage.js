const MORE_BUTTON = 'a[title ="View"]';
const clickOnMoreButton = () => cy.contains(MORE_BUTTON).click({ force: true });

module.exports = { clickOnMoreButton };
