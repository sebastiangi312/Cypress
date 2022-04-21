
import { EditItemMenu, InsightMenu, MenuContentPage, MenuPreparation } from "../../page/update_type/index"

const editItemMenu = new EditItemMenu()
const insightsMenu = new InsightMenu()
const menuContentPage = new MenuContentPage()
const menuPreparation = new MenuPreparation()


describe("Updating type of item", () => {
  
  before(() => {
    menuPreparation.prepareTest()
  })
  
    it("then the type is updated in list view and Insights is updated too", () => {

      menuContentPage.visitMenuContentPage();
      menuContentPage.goToEditItemMenu();

      editItemMenu.openTypeBox();
      editItemMenu.selectTicketsType();
      editItemMenu.updateItem();

      menuContentPage.checkItemType()
      menuContentPage.goToInsightsMenu()

      insightsMenu.checkTicketsCount();
    });

    after(() => {
      menuPreparation.restoreOldData()
  })
  });

 