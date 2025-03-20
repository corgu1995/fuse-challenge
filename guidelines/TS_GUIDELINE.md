# Selectors Guideline for Playwright

## Introduction

Selectors are a crucial part of writing tests in Playwright. They allow you to locate elements on a page and interact with them. This guideline provides best practices for using selectors effectively in your Playwright tests.

## Types of Selectors

1. **CSS Selectors**: Use CSS selectors for their simplicity and performance.

   ```typescript
   await page.click('button.submit');
   ```

2. **Text Selectors**: Use text selectors to locate elements by their text content.

   ```typescript
   await page.click('text="Submit"');
   ```

3. **XPath Selectors**: Use XPath selectors for complex queries.

   ```typescript
   await page.click('//button[text()="Submit"]');
   ```

4. **Role Selectors**: Use role selectors for accessibility and to target elements by their ARIA roles.
   ```typescript
   await page.click('role=button[name="Submit"]');
   ```

## Best Practices

1. **Prefer CSS Selectors**: CSS selectors are generally faster and more readable. Use them whenever possible.

   ```typescript
   // Good
   await page.click('button.submit');

   // Avoid
   await page.click('//button[@class="submit"]');
   ```

2. **Use Data Attributes**: Use data attributes to create stable and unique selectors.

   ```html
   <button data-test-id="submit-button">Submit</button>
   ```

   ```typescript
   await page.click('[data-test-id="submit-button"]');
   ```

3. **Avoid Fragile Selectors**: Avoid using selectors that are likely to change frequently, such as those based on class names or element indexes.

   ```typescript
   // Avoid
   await page.click('.btn-primary');
   await page.click('div:nth-child(3) > button');
   ```

4. **Leverage Text Selectors**: Use text selectors for elements with unique and stable text content.

   ```typescript
   await page.click('text="Submit"');
   ```

5. **Combine Selectors**: Combine multiple selectors to create more specific and reliable queries.

   ```typescript
   await page.click('form#login button.submit');
   ```

6. **Use Role Selectors for Accessibility**: Use role selectors to target elements by their ARIA roles, improving accessibility.

   ```typescript
   await page.click('role=button[name="Submit"]');
   ```

7. **Test Selectors in Browser DevTools**: Test your selectors in the browser's DevTools to ensure they match the intended elements.
   ```sh
   $0.querySelector('button.submit')
   ```

## Examples

1. **Clicking a Button by CSS Selector**:

   ```typescript
   await page.click('button.submit');
   ```

2. **Filling a Form Field by Data Attribute**:

   ```typescript
   await page.fill('[data-test-id="username-input"]', 'myUsername');
   ```

3. **Selecting an Element by Text**:

   ```typescript
   await page.click('text="Login"');
   ```

4. **Using XPath Selector**:

   ```typescript
   await page.click('//button[text()="Submit"]');
   ```

5. **Using Role Selector**:
   ```typescript
   await page.click('role=button[name="Submit"]');
   ```

By following these guidelines, you can write more reliable and maintainable Playwright tests using effective selectors.
