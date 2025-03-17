# fuse-challenge

Fuse QA Take-Home Challenge

## Project Overview

This project is a take-home challenge elaborated for Fuse. It includes configurations for ESLint, Prettier, and Playwright for testing.

## Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/fuse-challenge.git
   cd fuse-challenge
   ```

2. Install dependencies using pnpm:
   ```sh
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your OpenAI API key:
   ```sh
   OPENAI_API_KEY=your_openai_api_key
   ```

## Scripts

- **Lint the code**:
  ```sh
  pnpm run lint
  ```

- **Check code formatting**:
  ```sh
  pnpm run format:check
  ```

- **Format the code**:
  ```sh
  pnpm run format
  ```

## GitHub Actions

This project includes GitHub Actions workflows for linting and formatting checks on pull requests.

- **Lint Check**: `.github/workflows/lint-check.yml`
- **Format Check**: `.github/workflows/format-check.yml`

## Notes

- Ensure you have Node.js version 20 installed.
- The project uses pnpm as the package manager.
