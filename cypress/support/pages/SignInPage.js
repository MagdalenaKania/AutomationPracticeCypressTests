const INPUT_EMAIL = "input#email";
const INPUT_PASSWORD = "input#passwd";
const BUTTON_SUBMIT = "button#SubmitLogin";
const INPUT_EMAIL_CREATE = "input#email_create";
const BUTTON_CREATE = "button#SubmitCreate";

const inputEmailToLogin = (email) => cy.get(INPUT_EMAIL).type(email);

const inputPasswordToLogin = (password) =>
  cy.get(INPUT_PASSWORD).type(password);

const clickOnSignInButton = () => cy.get(BUTTON_SUBMIT).click();

const inputEmailToCreateAnAccount = (email) =>
  cy.get(INPUT_EMAIL_CREATE).type(email);

const clickOnCreateAnAccountButton = () => cy.get(BUTTON_CREATE).click();

module.exports = {
  inputEmailToLogin,
  inputPasswordToLogin,
  clickOnSignInButton,
  inputEmailToCreateAnAccount,
  clickOnCreateAnAccountButton,
};
