class MenuContentPage {

    private menuContentPageURL: string
    private editItemMenu: string;
    private itemType: string;
    private insightsMenu: string;

    constructor() {
        this.menuContentPageURL = 'http://localhost:4200/list'
        this.editItemMenu = '.list-container > div:nth-child(3) > .mat-card > div:nth-child(5) > .mat-icon:nth-child(1)';
        this.itemType = ".list-container > div:nth-child(3) > .mat-card > div:nth-child(4)"
        this.insightsMenu = ".list-container > div:nth-child(1) > div > button:nth-child(2)"
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

    public goToEditItemMenu(): void {
        cy.get(this.editItemMenu).click()
    }

    public checkItemType(): void {
        cy.get(this.itemType).should("have.text", "TICKETS")
    }

    public goToInsightsMenu(): void {
        cy.get(this.insightsMenu).click()
    }


}
export { MenuContentPage }