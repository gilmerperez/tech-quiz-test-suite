import Quiz from "../../client/src/components/Quiz";

describe("Quiz E2E Test", () => {
  // Before each test begins
  beforeEach(() => {
    // Intercept with the mock question
    cy.intercept(
      { method: "GET", url: "/api/questions/random" },
      // From the pythonQuestions.json file
      { fixture: "pythonQuestions.json", statusCode: 200 }
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
    // Answer questions
    cy.get(".card").within(() => {
      for (let i = 0; i < 10; i++) {
        cy.get("button").contains(/^\w+$/).click();
      }
    });
  });

  it("should verify quiz completion", () => {
    cy.get("h2").contains("Quiz Completed");
    cy.get("div").contains("Your score:");
  });

  it("should restart the quiz after completion", () => {
    // Restart quiz
    cy.get("button").contains("Take New Quiz").click();
    // Verify the quiz is restarted
    cy.get(".card").should("be.visible");
    // Heading should have text displayed
    cy.get("h2").should("not.be.empty");
  });
});
