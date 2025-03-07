import Quiz from "../../client/src/components/Quiz";

describe("Quiz E2E Test", () => {
  // Before each test begins
  beforeEach(() => {
    cy.intercept(
      // Intercept with the mock question
      {
        method: "GET",
        url: "/api/questions/random",
      },
      {
        fixture: "pythonQuestions.json", // From the pythonQuestions.json file
        statusCode: 200,
      }
    ).as("getRandomQuestion");
  });

  it("should start the quiz and display the first question", () => {
    // Loads quiz component
    cy.mount(<Quiz />);
    // Selects "Start Quiz" button
    cy.get("button").contains("Start Quiz").click();
    // Quiz card should be visible
    cy.get(".card").should("be.visible");
    // Heading should have text displayed
    cy.get("h2").should("not.be.empty");
  });

  it("should answer questions and complete the quiz", () => {
    // Loads quiz component
    cy.mount(<Quiz />);
    // Selects "Start Quiz" button
    cy.get("button").contains("Start Quiz").click();
    // Answer questions
    cy.get(".card").within(() => {
      for (let i = 0; i < 10; i++) {
        cy.get("button").contains(/^\w+$/).click();
      }
    });
    // Verify quiz completion
    cy.get(".alert-success").should("be.visible").and("contain", "Your score");
  });

  it("should verify quiz completion", () => {
    cy.contains("Quiz Completed").should("be.visible");
    cy.contains("Your score:").should("be.visible");
  });

  it("should restart the quiz after completion", () => {
    // Loads quiz component
    cy.mount(<Quiz />);
    // Selects "Start Quiz" button
    cy.get("button").contains("Start Quiz").click();
    // Answer questions
    cy.get("button").contains(/^\w+$/).click();
    // Restart quiz
    cy.get("button").contains("Take New Quiz").click();
    // Verify the quiz is restarted
    cy.get(".card").should("be.visible");
    // Heading should have text displayed
    cy.get("h2").should("not.be.empty");
  });
});
