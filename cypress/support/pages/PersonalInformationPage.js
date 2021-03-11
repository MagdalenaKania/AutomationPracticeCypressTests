const INPUT_FIRSTNAME = "customer_firstname";
const INPUT_LASTNAME = "customer_lastname";
const INPUT_PASSWORD = "input#passwd";
const INPUT_COMPANY = "input#company";
const INPUT_ADDRESS = "input#address1";
const INPUT_CITY = "input#city";
const SELECT_STATE = "select#id_state";
const INPUT_POSTAL_CODE = "input#postcode";
const INPUT_MOBILE_PHONE = "input#phone_mobile";
const BUTTON_REGISTER = "button#submitAccount";

const inputFirstName = (firstName) => cy.get(INPUT_FIRSTNAME).type(firstName);

const inputLastName = (lastName) => cy.get(INPUT_LASTNAME).type(lastName);

const inputPassword = (password) => cy.get(INPUT_PASSWORD).type(password);

const inputCompany = (company) => cy.get(INPUT_COMPANY).type(company);

const inputAddress = (address) => cy.get(INPUT_ADDRESS).type(address);

const inputCity = (city) => cy.get(INPUT_CITY).type(city);

const selectState = (selectedState) =>
  cy.get(SELECT_STATE).select(selectedState);

const inputPostalCode = (postalCode) =>
  cy.get(INPUT_POSTAL_CODE).type(postalCode);

const inputMobilePhone = (mobilePhone) =>
  cy.get(INPUT_MOBILE_PHONE).type(mobilePhone);

const clickOnRegisterButton = () => cy.get(BUTTON_REGISTER).click();

module.exports = {
  inputFirstName,
  inputLastName,
  inputPassword,
  inputCompany,
  inputAddress,
  inputCity,
  selectState,
  inputPostalCode,
  inputMobilePhone,
  clickOnRegisterButton,
};
