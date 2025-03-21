import { Page, Locator } from '@playwright/test';

export class ProfilePage {
  private page: Page;
  private updateProfileButton: Locator;
  private firstNameInput: Locator;
  private bioInput: Locator;
  private saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.updateProfileButton = page.getByRole('button', {
      name: 'Edit basic information',
    });
    this.firstNameInput = page.getByRole('textbox', { name: 'First name' });
    this.bioInput = page.getByRole('textbox', { name: 'Bio' });
    this.saveButton = page.getByRole('button', { name: 'Save' });
  }

  async updateProfileInfo(firstName: string, bio: string) {
    await this.updateProfileButton.click();
    await this.firstNameInput.fill(firstName);
    await this.bioInput.fill(bio);
    await this.saveButton.click();
  }
}
