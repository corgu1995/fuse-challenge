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
   SLACK_WEBHOOK_URL=your_slack_webhook_url
   BROWSERSTACK_USERNAME=your_browserstack_username
   BROWSERSTACK_ACCESS_KEY=your_browserstack_access_key
   ```
4. How to get the OpenAI API key:

   - Go to the OpenAI website and sign up for an account.
   - Create an API key in the API section.
   - Copy the API key and add it to the `.env` file.

5. How to get the browserstack credentials:
   - Go to the BrowserStack website and sign up for an account.
   - Go to the Automate section and click on the "Access Key" tab.
   - Copy the username and access key and add them to the `.env` file.

## Scripts

- **Run tests**:

  ```sh
  pnpm test
  ```

- **Run tests on BrowserStack**:

  ```sh
  pnpm test:browser-stack
  ```

- **Run flaky tests**:

  ```sh
  pnpm flaky
  ```

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

- **Generate Allure report**:

  ```sh
  pnpm run report:generate
  ```

- **Open Allure report**:

  ```sh
  pnpm run report:open
  ```

- **Send Slack report**:

  ```sh
  pnpm run slack:report
  ```

## GitHub Actions

The project includes a GitHub Actions workflow to run tests on every push to the `main` branch. The workflow is defined in `.github/workflows/tests.yml`.

## Notes

- Ensure you have `pnpm` installed globally to manage dependencies.
- The project uses Playwright for end-to-end testing, ESLint for linting, and Prettier for code formatting.
- Allure is used for generating test reports, and Slack integration is configured for reporting test results.

## Loom videos

- Infrastructure setup: https://www.loom.com/share/ad5dfa3246394b27aa8920bfa7dea265?sid=8b8fae0a-86e0-488d-adea-469851303f3c
- Development life cycle: https://www.loom.com/share/530b1a274b3b44afa67f0eddb67cb93c?sid=00f2c474-b571-446a-a061-3be0ce9b5225


## Time spent
- Infrastructure setup: 2 hours
- Framework setup: 2 hours
- Development life cycle: 3 hours
- AI analysis: 1 hour
- Live reporting: 2 hours
- Documentation: 3 hours
- Test case implementation: 2 hours
- Total: 15 hours distributed over 3 days

## Next steps
- Update skeleton features to match the website
- Implement more test cases
- Update selectors to be more robust
- Attach AI analysis to the allure report
- Use AI for data generation