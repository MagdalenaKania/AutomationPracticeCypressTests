const WRITE_A_REVIEW = "div#product_comments_block_extra";
const INPUT_TITLE = "input#comment_title";
const COMMENT_TEXTAREA = "textarea#content";
const BUTTON_SEND = "button#submitNewMessage";

const openingWriteAReviewWindow = () =>
  cy.get(WRITE_A_REVIEW).click({ force: true });

const inputTitle = (title) => cy.get(INPUT_TITLE).type(title, { force: true });

const inputComment = (comment) =>
  cy.get(COMMENT_TEXTAREA).type(comment, { force: true });

const clickOnSendButton = () => cy.get(BUTTON_SEND).click({ force: true });

module.exports = {
  openingWriteAReviewWindow,
  inputTitle,
  inputComment,
  clickOnSendButton,
};
