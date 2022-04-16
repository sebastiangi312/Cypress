class MenuContentPage {

    private menuContentPageURL: string
    private deleteItemButton: string;
    private remainingItem: string;
    private insightsMenu: string;

    constructor() {
        this.menuContentPageURL = 'http://localhost:4200/list'
        this.deleteItemButton = '.list-container > div:nth-child(3) > .mat-card > div:nth-child(5) > .mat-icon:nth-child(2)'
        this.remainingItem = '.list-container > div:nth-child(3) > .mat-card > div:nth-child(1)'
        this.insightsMenu = ".list-container > div:nth-child(1) > div > button:nth-child(2)"
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

    public goToDeleteItemMenu(): void {
        cy.get(this.deleteItemButton).click()
    }

    public checkItemDeleted(): void {
        cy.get(this.remainingItem).should("have.text", "Caza de Combate 2")
    }

    public goToInsightsMenu(): void {
        cy.get(this.insightsMenu).click()
    }


}
export { MenuContentPage }