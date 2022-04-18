import { Item, Types } from '../../integration/models/Item';

class MenuPreparation {

    private apiURL;

    constructor() {
        this.apiURL = "http://localhost:8080/api/items"
    }

    prepareTest() {
        cy.request('GET', this.apiURL).then(resp => {
            resp.body.forEach((item : Item) => cy.request('DELETE', this.apiURL + "/" + item.id));
            let newItem = {
                name: 'Caza de Combate 3',
                sellIn: 32,
                quality: 32,
                type: Types.NORMAL
            }
            cy.request('POST', this.apiURL, newItem)
        })
    }
}
export { MenuPreparation }