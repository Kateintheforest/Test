describe("My first test", () => {
  it("перейти в Гугл", () => {
    cy.visit("https://google.com");
  });

  it("найти в поиске", () => {
    cy.get("input[title='Поиск']").type("Byndyusoft").type("{enter}");
  });
  it("первая ссылка", () => {
    cy.get("div#search a").first().click();
  });

  it("нажать кнопку", () => {
    cy.contains("Заказать презентацию").click();
  });

  it("проверить почту", () => {
    cy.contains("sales@byndyusoft.com");
  });

  it("проверить телефон", () => {
    cy.contains("8 800 775-15-21");
  });
});
