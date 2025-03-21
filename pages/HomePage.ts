import { Page, Locator } from '@playwright/test';

export class HomePage {
  private page: Page;
  public flightRecommendations: Locator;
  public dateErrorMessage: Locator;
  private flightTab: Locator;
  private roundTripOption: Locator;
  private leavingFromButton: Locator;
  private leavingFromInput: Locator;
  private goingToButton: Locator;
  private goingToInput: Locator;
  private searchButton: Locator;
  private destinationInput: Locator;
  private checkInDateInput: Locator;
  private checkOutDateInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.flightTab = page.getByRole('tab', { name: 'Flights' });
    this.roundTripOption = page.getByRole('tab', { name: 'Roundtrip' });
    this.leavingFromButton = page.getByRole('button', { name: 'Leaving from' });
    this.leavingFromInput = page.getByRole('textbox', { name: 'Leaving from' });
    this.goingToButton = page.getByRole('button', { name: 'Going to' });
    this.goingToInput = page.getByRole('textbox', { name: 'Going to' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.flightRecommendations = page.locator(
      '[data-test-id="listings-header-recommended"]',
    );
    this.dateErrorMessage = page.locator('.date-error');
    this.destinationInput = page.locator('#hotel-destination');
    this.checkInDateInput = page.locator('#hotel-checkin');
    this.checkOutDateInput = page.locator('#hotel-checkout');
  }

  async goToFlights() {
    await this.flightTab.click();
  }

  async selectRoundTrip() {
    await this.roundTripOption.click();
  }

  async enterFlightDetails(departure: string, destination: string) {
    await this.leavingFromButton.click();
    await this.leavingFromInput.fill(departure);
    await this.goingToButton.click();
    await this.goingToInput.fill(destination);
    await this.searchButton.click();
  }

  async searchFlights() {
    await this.searchButton.click();
  }

  async searchForHotels(
    destination: string,
    checkIn: string,
    checkOut: string,
  ) {
    await this.destinationInput.fill(destination);
    await this.checkInDateInput.fill(checkIn);
    await this.checkOutDateInput.fill(checkOut);
    await this.searchButton.click();
  }
}
