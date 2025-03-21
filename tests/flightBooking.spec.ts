import { test, expect } from '../fixtures/debug.fixture';
import { HomePage } from '../pages/HomePage';
import { FlightResultsPage } from '../pages/FlightResultPage';
import { BookingSummaryPage } from '../pages/BookingSummaryPage';

test.describe('Expedia Flight Booking Tests', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL || '');
    const homePage = new HomePage(page);
    await homePage.goToFlights();
  });

  test('Selecting the “Round Trip” option should enable the return date field', async ({
    page,
  }) => {
    const homePage = new HomePage(page);

    await homePage.selectRoundTrip();
    await expect(homePage.flightRecommendations).toBeVisible();
  });

  test('Entering departure and destination cities should fetch available flights', async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const flightResultsPage = new FlightResultsPage(page);

    await homePage.enterFlightDetails('New York', 'Los Angeles');
    await homePage.searchFlights();

    await expect(flightResultsPage.flightResults).toBeVisible();
  });

  test('Selecting a flight and proceeding to checkout should redirect to the booking summary page', async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const flightResultsPage = new FlightResultsPage(page);
    const bookingSummaryPage = new BookingSummaryPage(page);

    await homePage.enterFlightDetails('San Francisco', 'Seattle');
    await homePage.searchFlights();

    await flightResultsPage.selectFirstAvailableFlight();
    await flightResultsPage.proceedToCheckout();

    await expect(bookingSummaryPage.bookingSummaryHeader).toBeVisible();
  });
});
