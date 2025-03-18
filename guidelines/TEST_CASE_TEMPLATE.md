# Test Case Template

## Test Case ID
A unique identifier (e.g., E2E-001). Ensures tracking and easy reference in test management tools (Jira, TestRail, etc.).

## Test Case Name
A short, descriptive name (e.g., “Book Flight + Hotel Package”).

## Description/Goal
High-level overview of the scenario: why we are testing it and what outcome we expect to validate.

## Preconditions
Any setup required before executing (e.g., user must be logged in, existing booking needed, specific environment).

## Test Data
Data inputs unique to this scenario: city names, dates, user credentials, coupons, etc.

## Steps
The sequential actions the tester (or automated script) will perform.

## Expected Result
What the application should do or display after the steps are followed.

## Priority
Indicates the importance (High, Medium, Low) or order in which this test should be run.

## Additional Notes
Space for any extra info: post-conditions, references to design docs, known issues, or clarifications.


# Test Case Example

## Test Case ID
E2E-001

## Test Case Name
Book Flight + Hotel Package

## Description/Goal
This test case verifies that a user can successfully book a flight and hotel package through the application. The goal is to ensure that the booking process works as expected and that the user receives a confirmation.

## Preconditions
- User must be logged in.
- User must have a valid payment method saved.
- The application must be in a state where booking is possible (e.g., no maintenance).

## Test Data
- Departure city: New York
- Destination city: Los Angeles
- Departure date: 2025-04-01
- Return date: 2025-04-10
- Hotel: Hilton Los Angeles
- User credentials: testuser@example.com / password123
- Coupon code: SPRINGSALE

## Steps
1. Navigate to the booking page.
2. Select "Flight + Hotel" package option.
3. Enter departure city as "New York".
4. Enter destination city as "Los Angeles".
5. Select departure date as "2025-04-01".
6. Select return date as "2025-04-10".
7. Choose "Hilton Los Angeles" from the hotel options.
8. Enter coupon code "SPRINGSALE".
9. Click "Search".
10. Select the desired flight and hotel package from the search results.
11. Click "Book Now".
12. Enter payment details if not already saved.
13. Confirm the booking.

## Expected Result
- The application should display a booking confirmation page with the details of the flight and hotel package.
- The user should receive a confirmation email with the booking details.

## Priority
High

## Additional Notes
- Ensure that the coupon code "SPRINGSALE" is valid and provides the expected discount.
- Verify that the booking details in the confirmation email match the selected options.