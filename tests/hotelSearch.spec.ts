import { test, expect } from '../fixtures/debug.fixture';
import { HomePage } from '../pages/HomePage';
import { HotelResultsPage } from '../pages/HotelResultsPage';

test.describe('Expedia Hotel Search and Filtering Tests', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL || '');
  });

  test('Entering a valid city name should display available hotels', async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const hotelResultsPage = new HotelResultsPage(page);

    await homePage.searchForHotels('New York', '2025-09-15', '2025-09-20');
    await expect(hotelResultsPage.hotelResults).toBeVisible();
  });

  test('Selecting a check-in and check-out date should update the search results accordingly', async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const hotelResultsPage = new HotelResultsPage(page);

    await homePage.searchForHotels('Chicago', '2025-10-10', '2025-10-15');
    await expect(hotelResultsPage.hotelResults).toBeVisible();
    await hotelResultsPage.verifyCheckInCheckOutDates(
      '2025-10-10',
      '2025-10-15',
    );
  });

  test('Applying a “Guest Rating: 4+” filter should correctly update the results', async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const hotelResultsPage = new HotelResultsPage(page);

    await homePage.searchForHotels('Miami', '2025-11-05', '2025-11-10');
    await hotelResultsPage.applyGuestRatingFilter(4);
    await hotelResultsPage.verifyGuestRatings(4);
  });

  test('Applying a “Price Range” filter should display hotels within the selected price range', async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const hotelResultsPage = new HotelResultsPage(page);

    await homePage.searchForHotels('San Francisco', '2025-12-01', '2025-12-06');
    await hotelResultsPage.applyPriceRangeFilter(100, 300);
    await hotelResultsPage.verifyPriceRange(100, 300);
  });

  test('Sorting by “Lowest Price” should reorder the results as expected', async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const hotelResultsPage = new HotelResultsPage(page);

    await homePage.searchForHotels('Los Angeles', '2026-01-10', '2026-01-15');
    await hotelResultsPage.sortByLowestPrice();
    await hotelResultsPage.verifySortedByLowestPrice();
  });
});
