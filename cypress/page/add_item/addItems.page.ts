class addItems{
    private menuContentPageURL: string
    private addItemButton: string
    private itemNameField: string
    private itemSellInField: string
    private itemQualityField: string
    private itemTypeSelector: string
    private itemTypeNormalOption: string
    private confirmAddItemButton: string

    constructor(){
        this.menuContentPageURL = "http://localhost:4200/list"
        this.addItemButton = "div:nth-child(1) > div > button:nth-child(1)"
        this.itemNameField = "#mat-input-0"
        this.itemSellInField = "#mat-input-1"
        this.itemQualityField = "#mat-input-2"
        this.itemTypeSelector = "#mat-select-value-1"
        this.itemTypeNormalOption = "#mat-option-1"
        this.confirmAddItemButton = "[data-automation=\"item-form-confirm-button\"]"
    }

    public visitItemsPage():void{
        cy.visit(this.menuContentPageURL)
    }

    public clickOnAddItemMenu():void{
        cy.get(this.addItemButton).click();
    }

    public fillItemName(itemName : string):void{
        cy.get(this.itemNameField).type(itemName);
    }

    public fillItemSellIn(itemSellIn: string):void{
        cy.get(this.itemSellInField).type(itemSellIn);
    }

    public fillItemQuality(itemQuality: string):void{
        cy.get(this.itemQualityField).type(itemQuality);
    }

    public openItemTypeSelector():void{
        cy.get(this.itemTypeSelector).click();
    }

    public selectItemTypeNormal():void{
        cy.get(this.itemTypeNormalOption).click();
    }

    public clickOnAddItem():void{
        cy.get(this.confirmAddItemButton).click();
    }
}
export{addItems}