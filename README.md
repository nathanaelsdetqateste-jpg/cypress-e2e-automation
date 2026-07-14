# Cypress E2E Automation

A professional end-to-end (E2E) test automation framework built with **Cypress**, **TypeScript**, and the **Page Object Model (POM)**. This project demonstrates best practices for building scalable, maintainable, and reliable web UI test automation.

---

## Project Goals

This project was created to demonstrate practical SDET skills, including:

- End-to-End Web Testing
- Page Object Model (POM)
- TypeScript
- Test organization and maintainability
- Positive and negative test scenarios
- Business rule validation
- Custom Cypress Commands
- Test Fixtures
- Reusable utilities
- Reporting
- CI/CD integration (GitHub Actions)

---

## Tech Stack

- Cypress
- TypeScript
- Bun
- Page Object Model (POM)

---

## Project Structure

```text
cypress/
├── e2e/
│   ├── authentication/
│   ├── products/
│   ├── cart/
│   └── checkout/
│
├── fixtures/
│
├── pages/
│
├── support/
│
├── utils/
│
└── reports/
```

---

## Test Categories

The tests are organized into different categories to improve readability and maintainability.

- ✅ Positive Scenarios
- ❌ Negative Scenarios
- ✔️ Validations
- 📖 Business Rules

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
bun install
```

---

## Running Cypress

Open the Cypress Test Runner:

```bash
bunx cypress open
```

Run all tests in headless mode:

```bash
bunx cypress run
```

---

## Project Status

This project is under active development and new test scenarios, utilities, and automation best practices will be added continuously.

---

## Author

**Nathanael Henrique Souza Nunes**

Software Development Engineer in Test (SDET) | QA Automation Engineer

GitHub: https://github.com/nathanaelsdetqateste-jpg
