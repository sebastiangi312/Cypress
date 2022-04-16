import { DeleteItemMenu, InsightMenu, MenuContentPage } from "../../page/delete _Item";


const deleteItemMenu = new DeleteItemMenu()
const menuContentPage = new MenuContentPage()
const insights = new InsightMenu()


describe("Deleting one item", () => {

    it("then the item is deleted Insights is updated too", () => {

        menuContentPage.visitMenuContentPage()
        menuContentPage.goToDeleteItemMenu()

        deleteItemMenu.deleteItem()

        menuContentPage.checkItemDeleted()
        menuContentPage.goToInsightsMenu()

        insights.checkTicketsCount()

    });
  });