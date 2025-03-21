import { Page, Locator, expect } from '@playwright/test';

export class FlightResultsPage {
  private page: Page;
  public flightResults: Locator;
  private firstFlightOption: Locator;
  private proceedToCheckoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.flightResults = page.locator('.flight-results');
    this.firstFlightOption = page.locator('.flight-result-item').first();
    this.proceedToCheckoutButton = page.locator('#proceed-to-checkout');
  }

  async verifyDates(departureDate: string, returnDate: string) {
    await expect(this.page.locator('.departure-date')).toHaveText(
      departureDate,
    );
    await expect(this.page.locator('.return-date')).toHaveText(returnDate);
  }

  async selectFirstAvailableFlight() {
    await this.firstFlightOption.click();
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutButton.click();
  }
}
