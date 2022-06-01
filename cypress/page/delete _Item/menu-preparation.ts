import { Item, Types } from '../../models/Item';

class MenuPreparation {

    private apiURL;

    private oldData: any[];
    constructor() {
        this.apiURL = "http://localhost:8081/api/items"
        this.oldData = []
    }

    prepareTest() {
        cy.request('GET', this.apiURL).then(resp => {
            resp.body.forEach((item: Item) => {
                cy.request('DELETE', this.apiURL + "/" + item.id)
                this.oldData.push(item);
            });
            let newItems = [
                {
                    name: 'Caza de Combate 1',
                    sellIn: 31,
                    quality: 31,
                    type: Types.TICKETS
                },
                {
                    name: 'Caza de Combate 2',
                    sellIn: 32,
                    quality: 32,
                    type: Types.NORMAL
                }
            ]
            cy.request('POST', this.apiURL + "/create", newItems)
        })
    }


    restoreOldData(){
        cy.request('GET', this.apiURL).then(resp => {
            resp.body.forEach((item: Item) => {
                cy.request('DELETE', this.apiURL + "/" + item.id)
            });
            cy.request('POST', this.apiURL + "/create", this.oldData)
        })
    }
}
export { MenuPreparation }