const MORE_BUTTON = 'a[title ="View"]';
const clickOnMoreButton = () => cy.get(MORE_BUTTON).click({ force: true });

module.exports = { clickOnMoreButton };
