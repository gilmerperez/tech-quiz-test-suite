# Tech Quiz Test Suite

## Project Summary

The **Tech Quiz Test Suite** is a comprehensive testing implementation for a **MERN stack-based Tech Quiz application**. This project focuses on integrating **Cypress** for **component** and **end-to-end (E2E) testing**, ensuring the application's reliability, functionality, and user experience. 

The Tech Quiz app allows users to test their knowledge through a quiz consisting of **ten random questions**, displaying the final score at the end. The testing suite ensures that the application's core functionality—such as starting a quiz, progressing through questions, and displaying the final score—is fully validated and works correctly across different environments.

The primary objective of this project is to:
- Introduce **automated testing** to a real-world MERN stack application.
- Utilize **Cypress** for component and E2E testing.
- Ensure the quiz application behaves as expected under various conditions.
- Enhance **developer confidence** by preventing regressions and breaking changes.

By implementing thorough test coverage, this project demonstrates the importance of **modern software testing** in web applications, helping developers ship reliable and bug-free applications efficiently.

## Table of Contents

- [Usage](#usage)
- [Mock-Up](#mock-up)
- [Instructions](#instructions)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Additional Resources](#additional-resources)

## Usage

To run the application and execute tests, use the following commands:

### 1. Install Dependencies:
    npm install

### 2. Run Cypress Tests:
    npm run test

## Mock Up

The following animation demonstrates the application functionality:

![A GIF demonstrates a functioning quiz.](./assets/19-testing-homework-demo.gif)

## Instructions

### 1. Setup and Installation:

- Clone this repository.
- Ensure Node.js and MongoDB are installed on your system.
- Configure the required environment variables through a `.env` file.
- Run `npm install` to install all dependencies.

### 2. Running the Application:

- Start the development server using `npm run start:dev`
- Open the application in a browser.
- Begin the quiz and answer the questions to test your knowledge.

### 3. Running Cypress Tests:

- Open Cypress with npx cypress open and choose the desired test type.
- Run all tests via `npm run test`

## Key Features

* **Cypress Component Testing:** Ensures individual quiz components function correctly.

* **End-to-End Testing:** Validates the entire quiz flow, from start to finish.

* **Automated Test Execution:** Run tests efficiently using a single command.

* **Reliable MERN Stack Application:** The quiz app integrates MongoDB, Express.js, React, and Node.js.

* **Error Prevention:** Helps catch potential bugs before deployment.

* **Developer Confidence:** Ensures updates and modifications do not break existing functionality.

## Technology Stack

- **MongoDB** - Stores quiz questions and user scores.

- **Express.js** - Manages server-side logic and API endpoints.

- **React** - Handles the front-end user interface.

- **Node.js** - Provides the runtime environment for the backend.

- **Cypress** - Automates testing for both components and full user workflows.

## Additional Resources

- Cypress Documentation: [Why Cypress?](https://docs.cypress.io/guides/overview/why-cypress)

- Walkthrough Video: [Link to walkthrough video]()

- GitHub Repository: [gilmerperez/tech-quiz-test-suite](https://github.com/gilmerperez/tech-quiz-test-suite)
