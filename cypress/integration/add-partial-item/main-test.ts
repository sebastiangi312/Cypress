import {addItems} from "../../page/add_item/addItems.page"

describe("Add a full item", () => {

  let add_item: addItems;
  let expectedItemName2 : string;
  let expectedItemQuality2 : string;

  before(() => {
    add_item = new addItems();
    add_item.visitItemsPage();
  });

  it("The user has clicked on ADD (+) button", () => {
    add_item.clickOnAddItemMenu();
  });

  it("The user fills out the name", () => {
    expectedItemName2 = "Galletas";
    add_item.fillItemName(expectedItemName2);
  });

  it("The user fills the quality with negative value", () => {
    expectedItemQuality2 = "-30";
    add_item.fillItemQuality(expectedItemQuality2);
    cy.focused().blur()
  });

  it("Then the add button is disabled", () => {
    cy.get("[data-automation=\"item-form-confirm-button\"]")
      .should("be.disabled");
  });

  it("Expected value between 0 and 80 message is displayed on quality field", () => {
    cy.get("#mat-error-0")
      .should("have.text", " Expected value between 0 and 80 ");
  });
});

/*describe("Add an item with missing information", () => {

    it("then the t-shirt should be bought", () => {
      cy.visit("http://localhost:4200/list");
      cy.get("div:nth-child(1) > div > button:nth-child(1)").click();
      cy.get("#mat-input-0").type("Chocorramo");
      cy.get("#mat-input-2").type("-10");
      cy.focused().blur();
      cy.get("[data-automation=\"item-form-confirm-button\"]")
      .should("be.disabled");
      cy.get("#mat-error-0")
      .should("have.text", " Expected value between 0 and 80 ");

    });
  });*/