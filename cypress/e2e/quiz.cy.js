describe("Quiz E2E Test", () => {
  it("should start the quiz and display the first question", () => {
    // Visit homepage
    cy.visit("/");
    // Select "Start Quiz" button
    cy.get("button").contains("Start Quiz").click();
    // Quiz card should be visible
    cy.get("div").should("be.visible");
    // Heading should be visible
    cy.get("h2").should("be.visible");
  });

  it("should answer questions and complete the quiz", () => {
    cy.visit("/");
    cy.get("button").contains("Start Quiz").click();
    cy.get("div").should("be.visible");
    cy.get("h2").should("be.visible");
    // Answer questions
    cy.get(".card").within(() => {
      for (let i = 0; i < 10; i++) {
        cy.get("button").contains(/^\w+$/).click();
      }
    });
  });

  it("should verify quiz completion", () => {
    cy.visit("/");
    cy.get("button").contains("Start Quiz").click();
    cy.get("div").should("be.visible");
    cy.get("h2").should("be.visible");
    cy.get(".card").within(() => {
      for (let i = 0; i < 10; i++) {
        cy.get("button").contains(/^\w+$/).click();
      }
    });
    // "Quiz Completed" Heading should be visible
    cy.get("h2").contains("Quiz Completed");
    // User's score should be visible and display their score
    cy.get("div").contains("Your score: ");
  });

  it("should restart the quiz after completion", () => {
    cy.visit("/");
    cy.get("button").contains("Start Quiz").click();
    cy.get("div").should("be.visible");
    cy.get("h2").should("be.visible");
    cy.get(".card").within(() => {
      for (let i = 0; i < 10; i++) {
        cy.get("button").contains(/^\w+$/).click();
      }
    });
    cy.get("h2").contains("Quiz Completed");
    cy.get("div").contains("Your score: ");
    // Restart quiz
    cy.get("button").contains("Take New Quiz").click();
    // Verify the quiz is restarted
    cy.get("div").should("be.visible");
    // Heading should have text displayed
    cy.get("h2").should("be.visible");
  });
});
