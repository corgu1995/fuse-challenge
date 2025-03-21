import { test, expect } from '../fixtures/debug.fixture';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { ProfilePage } from '../pages/ProfilePage';
import { faker } from '@faker-js/faker';
import dotenv from 'dotenv';

dotenv.config();

test.describe('Expedia Authentication Tests', () => {
  const userEmailAddress = process.env.EXPEDIA_USER_EMAIL || '';
  const userPassword = process.env.EXPEDIA_PASSWORD || '';
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL || '');
  });

  test('Logging in with valid credentials redirects to dashboard', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.login(userEmailAddress, userPassword);
    await expect(dashboardPage.expediaLogo).toBeVisible();
  });

  test('Entering incorrect credentials should display an error message', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(faker.internet.email(), faker.internet.password());
    await expect(loginPage.errorMessage).toContainText(
      'Incorrect email or password',
    );
  });

  test('Updating profile information successfully saves changes', async ({
    page,
  }) => {
    const bio = faker.string.uuid();
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const profilePage = new ProfilePage(page);

    await loginPage.login(userEmailAddress, userPassword);
    await dashboardPage.goToProfile();

    await profilePage.updateProfileInfo(faker.person.fullName(), bio);
    await expect(page.getByText(bio)).toBeVisible();
  });

  test('Logging out should redirect to the home page', async ({
    page,
    baseURL,
  }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.login(userEmailAddress, userPassword);
    await dashboardPage.logout();

    await expect(page).toHaveURL(baseURL || '');
  });
});
