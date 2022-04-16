class InsightMenu {

    private ticketsCount: string

    constructor() {
        this.ticketsCount = ".insights-grid > .insights-value:nth-child(10)"
    }

    public checkTicketsCount(): void {
        cy.get(this.ticketsCount).should("have.text", " 4 ")
    }

}
export { InsightMenu }