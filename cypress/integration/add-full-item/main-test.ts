import {addItems} from "../../page/add_item/addItems.page"

describe("Add a full item", () => {

  let add_item: addItems;
  let expectedItemName : string;
  let expectedItemSellIn : string;
  let expectedItemQuality : string;

  before(() => {
    add_item = new addItems();
    add_item.visitItemsPage();
    cy.wait(2000)
  });

  it("The user has clicked on ADD (+) button", () => {
    add_item.clickOnAddItemMenu();
  });

  it("The user fills out all required information", () => {
    expectedItemName = "Miel"
    expectedItemSellIn = "20"
    expectedItemQuality = "50"
    add_item.fillItemName(expectedItemName);
    add_item.fillItemSellIn(expectedItemSellIn);
    add_item.fillItemQuality(expectedItemQuality);
    add_item.openItemTypeSelector();
    add_item.selectItemTypeNormal();
  });

  it("The user clicks on ADD button", () => {
    add_item.clickOnAddItem();
    cy.wait(2000)
  });

  it("The information set is displayed according to added in creation step.", () => {
    cy.get(".list-container > div:last-child div.list-col:first-child")
      .should("have.text", "Miel"); 
  });

  after(() => {
    add_item.visitItemsPage();
    it("Delete", () => {
        cy.get(".list-container > div:last-child div.list-col:last-child .mat-icon:nth-child(2)")
          .click(); 
        cy.get(".delete-dialog-actions > button:nth-child(1)").click();
      });
      cy.wait(2000)
  });

  });

  