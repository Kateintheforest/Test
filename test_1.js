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
    cy.get('[class="know-more"]')
      //.get('[class*="btn--info"]')    можно вместо привязки к секции привязать к классу самой кнопки
      .contains("Заказать презентацию")
      //.should("have.css", "background-color", "rgb(255, 214, 87)")  привязка именно к цвету кнопки
      .click();
  });

  it("проверить почту", () => {
    cy.contains("sales@byndyusoft.com");
  });

  it("проверить телефон", () => {
    cy.contains("8 800 775-15-21");
  });
});
