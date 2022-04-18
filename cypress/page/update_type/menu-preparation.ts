import { Item, Types } from '../../models/Item';

class MenuPreparation {

    private apiURL;
    private oldData: any[];

    constructor() {
        this.apiURL = "http://localhost:8080/api/items"
        this.oldData = []
    }

    prepareTest() {
        cy.request('GET', this.apiURL).then(resp => {
            resp.body.forEach((item: Item) => {
                this.oldData.push(item);
                cy.request('DELETE', this.apiURL + "/" + item.id)
            });
            
            let newItem = {
                name: 'Caza de Combate 3',
                sellIn: 32,
                quality: 32,
                type: Types.NORMAL
            }
            cy.request('POST', this.apiURL, newItem)
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