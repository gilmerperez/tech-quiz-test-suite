describe("Quiz E2E Test", () => {
  // Before each test begins
  beforeEach(() => {
    // Visit homepage
    cy.visit("/");
    // Intercept with the mock question
    // cy.intercept(
    //   { method: "GET", url: "/api/questions/random" },
    //   // From the pythonQuestions.json file
    //   { fixture: "pythonQuestions.json", statusCode: 200 }
    // ).as("getRandomQuestion");
  });

  it("should start the quiz and display the first question", () => {
    // Selects "Start Quiz" button
    cy.get("button").contains("Start Quiz").click();
    // Quiz card should be visible
    cy.get(".card").should("be.visible");
    // Heading should have text displayed
    cy.get("h2").should("not.be.empty");
  });

  it("should answer questions and complete the quiz", () => {
    // Selects "Start Quiz" button
    cy.get("button").contains("Start Quiz").click();
    // Quiz card should be visible
    cy.get(".card").should("be.visible");
    // Heading should have text displayed
    cy.get("h2").should("not.be.empty");
    // Answer questions
    cy.get(".card").within(() => {
      for (let i = 0; i < 10; i++) {
        cy.get("button").contains(/^\w+$/).click();
      }
    });
  });

  it("should verify quiz completion", () => {
    // Selects "Start Quiz" button
    cy.get("button").contains("Start Quiz").click();
    // Quiz card should be visible
    cy.get(".card").should("be.visible");
    // Heading should have text displayed
    cy.get("h2").should("not.be.empty");
    // Answer questions
    cy.get(".card").within(() => {
      for (let i = 0; i < 10; i++) {
        cy.get("button").contains(/^\w+$/).click();
      }
    });
    cy.get("h2").contains("Quiz Completed");
    cy.get("div").contains("Your score:");
  });

  it("should restart the quiz after completion", () => {
    // Selects "Start Quiz" button
    cy.get("button").contains("Start Quiz").click();
    // Quiz card should be visible
    cy.get(".card").should("be.visible");
    // Heading should have text displayed
    cy.get("h2").should("not.be.empty");
    // Answer questions
    cy.get(".card").within(() => {
      for (let i = 0; i < 10; i++) {
        cy.get("button").contains(/^\w+$/).click();
      }
    });
    cy.get("h2").contains("Quiz Completed");
    cy.get("div").contains("Your score:");
    // Restart quiz
    cy.get("button").contains("Take New Quiz").click();
    // Verify the quiz is restarted
    cy.get(".card").should("be.visible");
    // Heading should have text displayed
    cy.get("h2").should("not.be.empty");
  });
});

