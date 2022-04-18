import { Item, Types } from '../../models/Item';

class MenuPreparation {

    private apiURL;

    constructor() {
        this.apiURL = "http://localhost:8080/api/items"
    }

    prepareTest() {
        cy.request('GET', this.apiURL).then(resp => {
            resp.body.forEach((item: Item) => cy.request('DELETE', this.apiURL + "/" + item.id));
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
            cy.request('POST', this.apiURL+"/create", newItems)
        })
    }
}
export { MenuPreparation }