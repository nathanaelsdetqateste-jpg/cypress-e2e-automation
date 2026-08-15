# Cypress E2E Automation

A professional **End-to-End (E2E) test automation project** built with **Cypress**, **TypeScript**, and **Bun**, focused on scalable test architecture, maintainability, reusable components, and business-rule validation.

This project demonstrates practical **QA Automation / SDET** practices through automated web application testing, covering positive and negative scenarios, field validations, business rules, reusable test utilities, test data management, and automated reporting.

---

## Project Goals

The main goal of this project is to demonstrate practical skills in **Software Testing and Test Automation**, including:

- End-to-End (E2E) testing
- Test scenario design
- Positive and negative testing
- Field and input validation
- Business-rule validation
- Test data management with Fixtures
- Dynamic test data generation with Faker
- Custom Cypress Commands
- Reusable helper functions
- TypeScript for test development
- Test organization and maintainability
- Automated test reporting
- CI/CD integration with GitHub Actions

---

## Tech Stack

- **Cypress** — E2E test automation
- **TypeScript** — Type-safe test development
- **Bun** — Runtime and package manager
- **Faker** — Dynamic test data generation
- **Mochawesome** — Test reporting
- **GitHub Actions** — CI/CD
- **Custom Commands & Helpers** — Reusable test components

---

## Project Structure

```text
cypress/
├── downloads/
│   └── invoice.txt
│
├── e2e/
│   ├── authentication/
│   ├── cart/
│   ├── checkout/
│   └── productComments/
│
├── factories/
│   ├── card/
│   └── user/
│
├── fixtures/
│   └── loginUser.json
│
├── interface/
│   ├── birthdate/
│   ├── card/
│   └── user/
│
├── reports/
│   └── mochawesome-report/
│       └── index.html
│
├── screenshots/
│   ├── authentication/
│   └── productComments/
│
├── support/
│   ├── helpers/
│   ├── commands.ts
│   ├── e2e.ts
│   └── index.d.ts
│
└── types/
    └── cypress-mochawesome-reporter...

docs/
└── observed-issues/
    ├── BUGS_FOUND.md
    ├── test-scenarios-business-rules/
    └── test-scenarios-validations/

node_modules/

.gitignore
bun.lock
cypress.config.ts
package.json
README.md
```

### Architecture

The project separates test responsibilities to improve **readability, reusability, and maintainability**.

- **E2E** — Contains the automated test scenarios, organized by feature and test purpose.
- **Fixtures** — Stores reusable and predefined test data.
- **Support** — Contains Cypress configuration, custom commands, and reusable helpers.
- **Helpers** — Contains reusable functions that encapsulate common test operations.
- **Utils** — Contains generic utilities used throughout the project.
- **Reports** — Stores generated test execution reports.

---

## Test Organization

Test scenarios are organized according to their purpose and expected behavior.

### Positive Scenarios

Tests that validate that the application behaves correctly when valid data and expected flows are used.

Examples:

- Successful user registration
- Successful login
- Valid product interactions
- Successful checkout

### Negative Scenarios

Tests designed to verify how the application behaves when invalid or unexpected data is provided.

Examples:

- Invalid credentials
- Invalid input formats
- Missing required fields
- Invalid user information

### Validations

Tests focused specifically on application validations and input constraints.

Examples:

- Required fields
- Invalid email format
- Invalid password format
- Invalid name format
- Field constraints

### Business Rules

Tests that validate rules defined by the application's business requirements.

Examples:

- User authentication rules
- Registration restrictions
- Product-related rules
- Checkout restrictions

---

## Reusable Test Components

The project uses reusable components to reduce code duplication and improve maintainability.

### Custom Commands

Reusable Cypress commands are created for common application actions.

Example:

```typescript
cy.login("loginUser");
```

This allows frequently used flows to be centralized and reused across multiple test scenarios.

### Helpers

Reusable helper functions are used for operations that do not belong directly to a specific test scenario.

This helps keep test cases focused on **what is being tested**, rather than implementation details.

Example:

```typescript
fillCommentsForm(name, email, comment);
```

### Fixtures

Fixtures are used to store reusable test data, such as predefined users and other application data.

```text
cypress/
└── fixtures/
    └── test-data/
```

### Dynamic Test Data

**Faker** is used when dynamic or unique data is required during test execution.

This is especially useful for scenarios such as user registration, where duplicate data can cause tests to become unreliable.

---

## Test Reporting

The project uses **Mochawesome** to generate test execution reports.

After running the Cypress tests, reports can be generated containing information such as:

- Test execution status
- Passed tests
- Failed tests
- Test duration
- Test suites
- Execution details

Reports are stored under:

```text
cypress/reports/mochawesome-report/
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd <project-directory>
```

Install dependencies:

```bash
bun install
```

---

## Running the Tests

Open Cypress in interactive mode:

```bash
bunx cypress open
```

Run all tests in headless mode:

```bash
bunx cypress run
```

---

## CI/CD

The project is designed to support automated test execution through **GitHub Actions**.

The CI pipeline can be used to:

1. Install project dependencies
2. Run Cypress tests
3. Execute the test suite in headless mode
4. Generate test reports
5. Make test results available as part of the CI process

This allows automated tests to be executed consistently during the development lifecycle.

---

## Test Evidence

Test execution results and relevant evidence are documented when necessary, especially for scenarios involving:

- Validation failures
- Unexpected application behavior
- Business-rule violations
- Negative scenarios
- Defects identified during testing

This helps provide traceability between the **test scenario, expected behavior, actual behavior, and evidence**.

---

## Project Status

The project is continuously evolving as new test scenarios and automation practices are implemented.

Current focus areas include:

- Expanding E2E test coverage
- Improving test architecture
- Increasing reusable components
- Adding additional validation scenarios
- Automating business-rule scenarios
- Improving test reporting
- Expanding CI/CD integration

---

## Author

| [<img src="https://github.com/nathanaelsdetqateste-jpg.png" width="75px;"/><br /><sub><b>Nathanael Henrique Souza Nunes</b></sub>](https://github.com/nathanaelsdetqateste-jpg) |
| --- |
| QA Engineer / SDET |
