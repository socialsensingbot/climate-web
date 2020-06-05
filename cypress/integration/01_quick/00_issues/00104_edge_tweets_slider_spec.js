describe('Slider and tweet interaction : https://github.com/socialsensingbot/frontend/issues/104', function () {
  beforeEach(function () {
    cy.visit('http://localhost:4200/map');
    cy.stubLiveJson("live-02-06-2020");
    cy.login();
  });

  it('Reproduce Issue', () => {
    Cypress.currentTest.retries(0);
    console.debug("Tests ");
    const url = "http://localhost:4200/map?selected=greater%20london&min_offset=-1557&max_offset=0";
    cy.visitAndWait(url);
    cy.log("Click on London")
    cy.get("div.leaflet-pane.leaflet-overlay-pane > svg > g > path[stroke='#EA1E63']").then(london => {
      const londonPath = london.index();
      cy.tweetCountTotal(49);
      cy.log("Set slider to whole 5 days (be great if tweets updated as you did this)");
      cy.moveMinDateSliderLeft(8);
      cy.wait(20000);
      cy.url({timeout: 20000}).should("equal",
                                      "http://localhost:4200/map?selected=greater%20london&min_offset=-5757&max_offset=0");
      cy.tweetCountTotal(148);
      cy.log("Click out of London in any other county");
      cy.get("div.leaflet-pane.leaflet-overlay-pane > svg > g > path[stroke='white']").first().click();
      cy.wait(4000);
      cy.tweetCountTotal(6);
      cy.log("Click back into London");
      cy.get("div.leaflet-pane.leaflet-overlay-pane > svg > g > path:nth-child(" + londonPath + ")").click({force: true});
      cy.wait(4000);
      cy.tweetCountTotal(148);
      cy.log("Move time slider back to 1 day back from latest time");
      cy.moveMinDateSliderRight(7);

      cy.wait(20000);
      cy.log("Click out of London in any other county");
      cy.get("div.leaflet-pane.leaflet-overlay-pane > svg > g > path[stroke='white']").first().click();
      cy.tweetCountTotal(1);
      cy.log("Click back into London.");
      cy.get("div.leaflet-pane.leaflet-overlay-pane > svg > g > path:nth-child(" + londonPath + ")").click({force: true});
      cy.tweetCountTotal(49);
      cy.url({timeout: 20000}).should("equal", url);

    })


  });


});