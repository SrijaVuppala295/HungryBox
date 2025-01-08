
# Contributing Guidelines

Thank you for your interest in contributing to this project! Contributions, whether big or small, are highly appreciated. By contributing, you help improve this project for everyone. Below are the guidelines to follow when contributing to the repository.

---

## **Table of Contents**
1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [How to Contribute](#how-to-contribute)
   - [Reporting Bugs](#reporting-bugs)
   - [Suggesting Features](#suggesting-features)
   - [Submitting Pull Requests](#submitting-pull-requests)
4. [Code Standards](#code-standards)
5. [Commit Message Guidelines](#commit-message-guidelines)
6. [Testing Your Changes](#testing-your-changes)
7. [Getting Help](#getting-help)

---

## **Code of Conduct**
By participating in this project, you agree to adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md). Please take a moment to review it.

---

## **Getting Started**
### Prerequisites:
1. **Fork the Repository:**
   - Navigate to the repository's page.
   - Click the **Fork** button in the top-right corner to create a copy under your GitHub account.
   
2. **Clone the Repository:**
   ```bash
   git clone https://github.com/<your-username>/<repository-name>.git
   cd <repository-name>
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Set Up the Development Environment:**  
   Follow the instructions in the `README.md` file to set up the project locally.

---

## **How to Contribute**

### 1. Reporting Bugs
- Go to the [Issues](../../issues) tab and click **New Issue**.
- Provide a descriptive title.
- Clearly explain the problem with steps to reproduce.
- If applicable, include screenshots, logs, or code snippets.

### 2. Suggesting Features
- Open a new issue with the tag **enhancement**.
- Describe the feature, its use case, and benefits.
- Be as detailed as possible and provide examples if needed.

### 3. Submitting Pull Requests
- Ensure your branch is up to date with the latest changes from the `main` branch:
  ```bash
  git checkout main
  git pull origin main
  ```
- Create a feature branch:
  ```bash
  git checkout -b feature/<short-description>
  ```
- Make your changes and commit them (see [Commit Message Guidelines](#commit-message-guidelines)).
- Push your branch:
  ```bash
  git push origin feature/<short-description>
  ```
- Open a Pull Request (PR):
  - Provide a clear and detailed description of the changes.
  - Reference any related issues (e.g., `Closes #123`).
  - Ensure the PR is marked as **Ready for Review** once completed.

---

## **Code Standards**
- Use clear and concise variable/function names.
- Follow the [JavaScript Standard Style](https://standardjs.com/) (or the project's preferred linting style).
- Ensure all files are properly formatted (use `Prettier` or the provided linting tools).
- Adhere to the project’s existing folder structure and naming conventions.

---

## **Commit Message Guidelines**
Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for writing commit messages:
- **Format:** `<type>(<scope>): <description>`
- **Examples:**
  - `feat(auth): add login functionality`
  - `fix(cart): resolve incorrect price calculation`
  - `docs: update contributing guidelines`

### Types:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (e.g., formatting, missing semicolons)
- `refactor`: Code refactoring without changing functionality
- `test`: Adding or updating tests
- `chore`: Miscellaneous tasks (e.g., updating dependencies)

---



Thank you for contributing!
