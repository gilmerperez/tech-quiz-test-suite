import Quiz from "../../client/src/components/Quiz";

describe("Quiz Component Test", () => {
  // Before each test begins
  beforeEach(() => {
    // Loads quiz component
    cy.mount(<Quiz />);
    // Intercept with the mock question
    cy.intercept(
      { method: "GET", url: "/api/questions/random" },
      // From the questions.json file
      { fixture: "questions.json", statusCode: 200 }
    ).as("getRandomQuestion");
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
    // Select answer that has "1" in it (The correct answer)
    cy.get("button").contains("1").click();
    // Verify quiz completion
    cy.get(".alert-success").should("be.visible").and("contain", "Your score");
  });

  it("should restart the quiz after completion", () => {
    // Selects "Start Quiz" button
    cy.get("button").contains("Start Quiz").click();
    // Answer questions
    cy.get("button").contains("1").click();
    // Restart quiz
    cy.get("button").contains("Take New Quiz").click();
    // Verify the quiz is restarted
    cy.get(".card").should("be.visible");
    // Heading should have text displayed
    cy.get("h2").should("not.be.empty");
  });
});
