class EditItemMenu {

    private typeBox: string
    private ticketsType: string;
    private updateButton: string;

    constructor() {
        this.typeBox = '#cdk-overlay-0 > mat-dialog-container > item-form-dialog > div > div:nth-child(2) > mat-form-field:nth-child(4)'
        this.ticketsType = '#cdk-overlay-1> div > div > mat-option:nth-child(4)';
        this.updateButton = "#cdk-overlay-0 > mat-dialog-container > item-form-dialog > div > div:nth-child(3) >   button:nth-child(1)"
    }

    public openTypeBox(): void {
        cy.get(this.typeBox).click()
    }

    public selectTicketsType(): void {
        cy.get(this.ticketsType).click()
    }

    
    public updateItem(): void {
        cy.get(this.updateButton).click()
    }

}
export { EditItemMenu }