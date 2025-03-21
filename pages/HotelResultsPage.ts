import { Page, Locator, expect } from '@playwright/test';

export class HotelResultsPage {
  private page: Page;
  public hotelResults: Locator;
  private guestRatingFilter: Locator;
  private priceRangeFilterMin: Locator;
  private priceRangeFilterMax: Locator;
  private sortByDropdown: Locator;
  private lowestPriceOption: Locator;
  private hotelPrices: Locator;
  private hotelRatings: Locator;

  constructor(page: Page) {
    this.page = page;
    this.hotelResults = page.locator('.hotel-results');
    this.guestRatingFilter = page.locator('.filter-guest-rating-4');
    this.priceRangeFilterMin = page.locator('#price-min');
    this.priceRangeFilterMax = page.locator('#price-max');
    this.sortByDropdown = page.locator('#sort-by-dropdown');
    this.lowestPriceOption = page.locator('.sort-lowest-price');
    this.hotelPrices = page.locator('.hotel-price');
    this.hotelRatings = page.locator('.hotel-rating');
  }

  async verifyCheckInCheckOutDates(checkIn: string, checkOut: string) {
    await expect(this.page.locator('.checkin-date')).toHaveText(checkIn);
    await expect(this.page.locator('.checkout-date')).toHaveText(checkOut);
  }

  async applyGuestRatingFilter() {
    await this.guestRatingFilter.click();
  }

  async verifyGuestRatings(minRating: number) {
    const ratings = await this.hotelRatings.allTextContents();
    for (const rating of ratings) {
      expect(parseFloat(rating)).toBeGreaterThanOrEqual(minRating);
    }
  }

  async applyPriceRangeFilter(minPrice: number, maxPrice: number) {
    await this.priceRangeFilterMin.fill(minPrice.toString());
    await this.priceRangeFilterMax.fill(maxPrice.toString());
    await this.page.keyboard.press('Enter');
  }

  async verifyPriceRange(minPrice: number, maxPrice: number) {
    const prices = await this.hotelPrices.allTextContents();
    for (const price of prices) {
      const priceValue = parseFloat(price.replace('$', ''));
      expect(priceValue).toBeGreaterThanOrEqual(minPrice);
      expect(priceValue).toBeLessThanOrEqual(maxPrice);
    }
  }

  async sortByLowestPrice() {
    await this.sortByDropdown.click();
    await this.lowestPriceOption.click();
  }

  async verifySortedByLowestPrice() {
    const prices = await this.hotelPrices.allTextContents();
    const priceValues = prices.map((price) =>
      parseFloat(price.replace('$', '')),
    );
    expect(priceValues).toEqual(priceValues.slice().sort((a, b) => a - b));
  }
}
