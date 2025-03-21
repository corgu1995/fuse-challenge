import { Page, Locator } from '@playwright/test';

export class BookingSummaryPage {
  private page: Page;
  public bookingSummaryHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bookingSummaryHeader = page.locator('.booking-summary-header');
  }
}
