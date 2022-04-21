import { DeleteItemMenu, InsightMenu, MenuContentPage, MenuPreparation } from "../../page/delete _Item";


const deleteItemMenu = new DeleteItemMenu()
const menuContentPage = new MenuContentPage()
const insights = new InsightMenu()
const menuPreparation = new MenuPreparation()


describe("Deleting one item", () => {
  before(() => {
    menuPreparation.prepareTest()
  })

    it("then the item is deleted Insights is updated too", () => {

        menuContentPage.visitMenuContentPage()
        menuContentPage.goToDeleteItemMenu()

        deleteItemMenu.deleteItem()

        menuContentPage.checkItemDeleted()
        menuContentPage.goToInsightsMenu()

        insights.checkTicketsCount()

    }); 
    
    after(() => {
      menuPreparation.restoreOldData()
  })
  });

 