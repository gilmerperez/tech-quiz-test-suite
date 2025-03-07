import Quiz from "../../client/src/components/Quiz";

describe("Quiz Component", () => {
  // Before each test begins
  beforeEach(() => {
    cy.intercept( // Intercept with the mock question
      {
        method: "GET",
        url: "/api/questions/random",
      },
      {
        fixture: "questions.json", // From the questions.json file
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
    // Select answer that has "1" in it (The correct answer)
    cy.get("button").contains("1").click();
    // Verify quiz completion
    cy.get(".alert-success").should("be.visible").and("contain", "Your score");
  });

  it("should restart the quiz after completion", () => {
    // Loads quiz component
    cy.mount(<Quiz />);
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
