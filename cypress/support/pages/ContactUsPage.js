const SELECT_SUBJECT = "select#id_contact";
const TEXT_AREA = "textarea#message";
const FILE_UPLOAD_INPUT = "input#fileUpload";
const SUBMIT_BUTTON = "button#submitMessage";
const INPUT_EMAIL = "input#email";
const SELECT_ORDER = 'select[name="id_order"]';
import "cypress-file-upload";

const fixtureFile = "test.txt";

const attachFile = () => cy.get(FILE_UPLOAD_INPUT).attachFile(fixtureFile);
const selectSubject = (subject) => cy.get(SELECT_SUBJECT).select(subject);
const inputOrderId = (order_id) => cy.get(SELECT_ORDER).select(order_id);
const inputContactMessage = (message) => cy.get(TEXT_AREA).type(message);
const clickOnSendButton = () => cy.get(SUBMIT_BUTTON).click();
const inputEmailAddress = (email) => cy.get(INPUT_EMAIL).type(email);

module.exports = {
  attachFile,
  selectSubject,
  inputContactMessage,
  clickOnSendButton,
  inputOrderId,
  inputEmailAddress,
};
