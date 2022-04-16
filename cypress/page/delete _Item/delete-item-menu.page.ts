class DeleteItemMenu {

    private confirmButton: string

    constructor() {
        this.confirmButton = '.delete-dialog-actions > button:nth-child(1)'
    }

    public deleteItem(): void {
        cy.get(this.confirmButton).click()
    }


}
export { DeleteItemMenu }