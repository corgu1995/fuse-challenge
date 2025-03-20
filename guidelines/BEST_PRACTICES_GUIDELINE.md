# Best Practices for Playwright Project with TypeScript

## Project Setup

1. **Initialize the Project**: Start by initializing a new Node.js project and installing Playwright and TypeScript.

   ```sh
   npm init -y
   npm install playwright typescript ts-node @types/node
   ```

2. **Configure TypeScript**: Create a `tsconfig.json` file to configure TypeScript.

   ```json
   {
     "compilerOptions": {
       "target": "ESNext",
       "module": "commonjs",
       "strict": true,
       "esModuleInterop": true,
       "skipLibCheck": true,
       "forceConsistentCasingInFileNames": true,
       "outDir": "dist"
     },
     "include": ["src/**/*.ts"],
     "exclude": ["node_modules"]
   }
   ```

3. **Project Structure**: Organize your project files for better maintainability.
   ```
   /project-root
   ├── src
   │   ├── tests
   │   │   └── example.spec.ts
   │   ├── pages
   │   │   └── example.page.ts
   │   └── utils
   │       └── helper.ts
   ├── tsconfig.json
   ├── package.json
   └── playwright.config.ts
   ```

## Naming Conventions

- **Files**: Use camelCase for file names (e.g., `examplePage.ts`).
- **Classes**: Use PascalCase for class names (e.g., `ExamplePage`).
- **Variables and Functions**: Use camelCase for variables and functions (e.g., `pageTitle`).
- **Test Files**: Use the `.spec.ts` extension for test files (e.g., `example.spec.ts`).
- **Utility Files**: Use the `.ts` extension for utility files (e.g., `helper.ts`).
- **Configuration Files**: Use descriptive names (e.g., `playwright.config.ts`).
- **Directories**: Use lowercase and separate words with hyphens (e.g., `page-objects`).
- **Test Descriptions**: Write clear and descriptive test names (e.g., `should display correct title`).

## Writing Tests

1. **Use Page Object Model (POM)**: Structure your tests using the Page Object Model to enhance readability and reusability.

   ```typescript
   // filepath: src/pages/example.page.ts
   import { Page } from 'playwright';

   export class ExamplePage {
     constructor(private page: Page) {}

     async navigate() {
       await this.page.goto('https://example.com');
     }

     async getTitle() {
       return this.page.title();
     }
   }
   ```

2. **Create Utility Functions**: Extract common functions into utility files.

   ```typescript
   // filepath: src/utils/helper.ts
   export const delay = (ms: number) =>
     new Promise((resolve) => setTimeout(resolve, ms));
   ```

3. **Write Clear and Concise Tests**: Ensure your test cases are clear and concise.

   ```typescript
   // filepath: src/tests/example.spec.ts
   import { test, expect } from '@playwright/test';
   import { ExamplePage } from '../pages/example.page';

   test('should display correct title', async ({ page }) => {
     const examplePage = new ExamplePage(page);
     await examplePage.navigate();
     const title = await examplePage.getTitle();
     expect(title).toBe('Example Domain');
   });
   ```

## Configuration and Execution

1. **Playwright Configuration**: Configure Playwright settings in `playwright.config.ts`.

   ```typescript
   // filepath: playwright.config.ts
   import { PlaywrightTestConfig } from '@playwright/test';

   const config: PlaywrightTestConfig = {
     use: {
       headless: true,
       viewport: { width: 1280, height: 720 },
       ignoreHTTPSErrors: true,
     },
     testDir: 'src/tests',
     retries: 2,
   };

   export default config;
   ```

2. **Running Tests**: Use npm scripts to run your tests.
   ```json
   // filepath: package.json
   {
     "scripts": {
       "test": "playwright test"
     }
   }
   ```

## Best Practices

1. **Keep Tests Independent**: Ensure tests do not depend on each other.
2. **Use Fixtures**: Utilize Playwright fixtures for setup and teardown.
3. **Avoid Hard-Coding Values**: Use environment variables or configuration files.
4. **Run Tests in CI/CD**: Integrate your tests into a CI/CD pipeline for continuous testing.
5. **Monitor Test Performance**: Keep an eye on test execution time and optimize where necessary.

By following these best practices, you can create a robust and maintainable Playwright project using TypeScript.
