describe('When: I use the reading list feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should see my reading list', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );
  });
  it('After clicking remove button in reading list I should see the undo button in the snackbar',()=>{
    cy.get('#mat-input-0').type('Java');
    cy.get('form').submit();
    cy.get('[data-testing="add-book-to-reading-list"]').last().click()
    cy.get('[data-testing="add-book-to-reading-list"]').last().should("be.disabled");
    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('[data-testing="remove-from-reading-list"]').last().click();
    cy.wait(300);
    cy.contains('button', 'UNDO').click();
    cy.get('[data-testing="add-book-to-reading-list"]').last().should("be.disabled");

});
});
