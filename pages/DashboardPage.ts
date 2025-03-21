import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  private page: Page;
  public expediaLogo: Locator;
  private userProfileButton: Locator;
  private accountLink: Locator;
  private logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.expediaLogo = page.getByTestId('header-brand-logo-anchor');
    this.accountLink = page.getByRole('link', { name: 'Account' });
    this.userProfileButton = page.getByRole('button', {
      name: 'S Santiago Blue tier',
    });
    this.logoutButton = page.getByRole('link', { name: 'Sign out' });
  }

  async goToProfile() {
    await this.userProfileButton.click();
    await this.accountLink.click();
  }

  async logout() {
    await this.userProfileButton.click();
    await this.logoutButton.click();
  }
}
