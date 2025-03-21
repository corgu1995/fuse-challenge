import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private signInButton: Locator;
  private signInLink: Locator;
  private emailInput: Locator;
  private continueButton: Locator;
  private usePasswordButton: Locator;
  private passwordInput: Locator;
  private finalSignInButton: Locator;
  public errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = page
      .getByRole('banner')
      .getByRole('button', { name: 'Sign in' });
    this.signInLink = page.getByRole('link', { name: 'Sign in' });
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.usePasswordButton = page.getByRole('button', {
      name: 'Enter password instead',
    });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
  }

  async login(email: string, password: string) {
    await this.signInButton.click();
    await this.signInLink.click();
    await this.emailInput.fill(email);
    await this.continueButton.click();
    await this.usePasswordButton.click();
    await this.passwordInput.fill(password);
    await this.finalSignInButton.click();
  }
}
