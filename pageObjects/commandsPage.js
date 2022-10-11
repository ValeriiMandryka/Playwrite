class CommandsPage {
  /**
   * @param {import('playwright').Page} page 
   */
  constructor(page) {
    this.page = page;
      }
  async openURL(link) {
      await this.page.goto(link);
      await this.page.waitForLoadState('load');
    }

    async findElement(element) {
       return await this.page.locator(element);
    }

    async clickElement(element) {
        await (await this.findElement(element)).click();
    }


    async setValue(element, text) {
         await (await this.findElement(element)).fill(text);
    }

    async press(element, text) {
      await (await this.findElement(element)).press(text);
 }


   
    

}
module.exports = { CommandsPage };