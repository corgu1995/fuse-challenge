# User Story 1: Search for a Hotel and Apply Filters

## Baseline Requirement:

“As a user, I want to search for hotels in a specific location and apply filters, so that I can find the most suitable accommodation for my trip.”

## Baseline Scenarios

### 1.1 Valid City Name Displays Available Hotels

**Description:** Verify that entering a valid city name shows relevant hotel listings.
**Preconditions:** User is on the Expedia homepage, with the “Stays” or “Hotels” tab selected.
**Test Steps:**

1. Enter a valid city (e.g., “New York”) in the “Where to?” field.
2. Choose check-in/check-out dates.
3. Click Search.
   **Expected Result:** A list of hotels in the specified city is displayed without errors.

### 1.2 Select Check-In and Check-Out Dates

**Description:** Ensure selecting valid date ranges updates the search results accordingly.
**Preconditions:** User is on the hotel search page.
**Test Steps:**

1. Enter a valid city.
2. Select future check-in and check-out dates (e.g., check-in in 2 weeks, check-out in 3 weeks).
3. Click Search.
   **Expected Result:** Search results reflect availability for the chosen date range.

### 1.3 Apply “Guest Rating: 4+” Filter

**Description:** Verify that applying a 4+ rating filter refines the hotel list correctly.
**Preconditions:** User has performed a hotel search and has results.
**Test Steps:**

1. In the results page, locate the filters section.
2. Select “Guest Rating: 4+.”
3. Observe the updated list.
   **Expected Result:** Displayed hotels all have guest ratings of at least 4.0.

### 1.4 Apply Price Range Filter

**Description:** Ensure selecting a specific price range displays hotels within that range.
**Preconditions:** User has performed a hotel search with visible results.
**Test Steps:**

1. In the filters, pick a price bracket (e.g., $100–$200).
2. Check the updated search results.
   **Expected Result:** Only hotels priced within $100–$200 remain visible.

### 1.5 Sort by “Lowest Price”

**Description:** Verify that sorting by “Lowest Price” orders the results in ascending price order.
**Preconditions:** User has a list of hotels loaded.
**Test Steps:**

1. Use the “Sort by” dropdown/menu.
2. Select “Price (Lowest).”
3. Observe new order.
   **Expected Result:** Hotels appear from cheapest to most expensive.

## Additional Scenarios and Their Rationale

### 1.6 Invalid or Misspelled City Name

**Rationale:** Tests user input error handling and ensures the system properly handles unknown destinations (e.g., “XyzCity!”).
**Test Steps:**

1. Enter an invalid location (like “XyzCity!”).
2. Select any valid future dates.
3. Click Search.
   **Expected Result:** The system should show an error or “No results found.”

### 1.7 Multiple Filter Combination (e.g., 4+ Rating + Price Range)

**Rationale:** Real users often apply multiple filters simultaneously; we need to ensure combined filters work correctly.
**Test Steps:**

1. Perform a standard hotel search.
2. Apply “Guest Rating: 4+” and a price bracket (e.g., $100–$200).
3. Observe resulting hotels.
   **Expected Result:** Only hotels meeting both criteria remain in the list.

### 1.8 Number of Guests/Room Type Filter

**Rationale:** Ensures correct handling of occupancy-based availability.
**Test Steps:**

1. On the main search form, select city, dates, and specify 2 adults + 2 children in 1 room (or multiple rooms).
2. Click Search.
   **Expected Result:** Search results show hotels available for the specified occupancy. Some hotels may be excluded if they can’t accommodate that occupancy.

# User Story 2: Flight Booking with Round Trip Selection

## Baseline Requirement:

“As a user, I want to book a round-trip flight, so that I can travel to and from my destination with a single booking.”

## Baseline Scenarios

### 2.1 “Round Trip” Option Enables Return Date

**Description:** Verify that when “Round Trip” is selected, the return date field becomes active.
**Preconditions:** User is on the Expedia homepage, “Flights” tab.
**Test Steps:**

1. Choose “Flights.”
2. Select “Round Trip.”
   **Expected Result:** Return date input is activated and required.

### 2.2 Entering Departure and Destination Cities

**Description:** Ensure providing valid “From” and “To” airports fetches flight options.
**Preconditions:** Round Trip is selected.
**Test Steps:**

1. Input departure city/airport (e.g., “JFK”).
2. Input arrival city/airport (e.g., “LAX”).
3. Select valid departure/return dates.
4. Click Search.
   **Expected Result:** A list of possible outbound and return flights is displayed.

### 2.3 Valid Departure/Return Dates Update Flight Options

**Description:** Confirm that selecting valid future dates yields results that reflect those dates.
**Preconditions:** Round Trip is selected, city fields are populated.
**Test Steps:**

1. Choose departure date (e.g., 1 month from now).
2. Choose return date (e.g., 1 month + 1 week).
3. Click Search.
   **Expected Result:** Flight list matches the chosen departure and return.

### 2.4 Invalid Date Selection (Return Before Departure)

**Description:** Verify an error message triggers if the user tries to pick a return date earlier than the departure date.
**Preconditions:** Round Trip is selected.
**Test Steps:**

1. Enter departure date: “July 10.”
2. Attempt to set return date: “July 5.”
3. Click Search.
   **Expected Result:** Error is shown or the UI prevents this invalid selection.

### 2.5 Select Flight and Proceed to Checkout

**Description:** Confirm that once a user chooses outbound and return flights, they can advance to the booking/checkout page.
**Preconditions:** A valid round-trip search has been performed.
**Test Steps:**

1. From the search results, select an outbound flight.
2. Select a return flight.
3. Click “Continue” or “Checkout.”
   **Expected Result:** User is redirected to a summary/booking page, with fare details, seat info, etc.

## Additional Scenarios and Rationale

### 2.6 Filter by Number of Stops or Preferred Airlines

**Rationale:** Users frequently filter flights by airline preferences or stops. This scenario checks if applying filters refines results accurately.
**Test Steps:**

1. Perform a round-trip flight search.
2. In the filters, select “Nonstop only” or a preferred airline (e.g., Delta).
3. Observe updated results.
   **Expected Result:** Only flights matching the filter remain.

### 2.7 Passenger Count and Cabin Class

**Rationale:** Some users book for multiple passengers or prefer business class. This ensures correct seat availability and pricing for multiple travelers.
**Test Steps:**

1. Select “Round Trip,” pick 2 adults, 1 child.
2. Choose “Business” or “Premium Economy” if available.
3. Search flights.
   **Expected Result:** Valid seat availability is shown for all passengers. Pricing aligns with the chosen cabin class.

### 2.8 Verifying Price on Summary vs. Search

**Rationale:** Sometimes the total price on the summary page changes due to taxes/fees. This test ensures consistency or appropriate breakdown.
**Test Steps:**

1. Note the flight price from the search results.
2. Click through to the summary page.
3. Compare displayed total with initial search price (plus any taxes/fees).
   **Expected Result:** The difference, if any, is clearly explained (taxes, fees). No hidden or incorrect charges appear.

# User Story 3: User Login and Account Profile Update

## Baseline Requirement:

“As a registered user, I want to log in to my Expedia account and update my profile information, so that my account details remain up to date.”

## Baseline Scenarios

### 3.1 Logging in with Valid Credentials

**Description:** Verify that logging in with correct username/password redirects the user to their account dashboard.
**Preconditions:** User has a valid Expedia account. User is on the homepage, logged out.
**Test Steps:**

1. Click Sign in.
2. Enter valid email/password.
3. Click Sign in again.
   **Expected Result:** User is taken to the account dashboard, displaying user’s name or account info.

### 3.2 Incorrect Credentials Show Error

**Description:** Ensure an error message is displayed for invalid credentials.
**Preconditions:** User is logged out.
**Test Steps:**

1. Click Sign in.
2. Enter invalid username/password.
3. Click Sign in.
   **Expected Result:** Error message (e.g., “Incorrect username or password”) is shown. Remains on login page.

### 3.3 Update Profile Information

**Description:** Confirm that changes to profile fields (like name, phone) are saved.
**Preconditions:** User is logged in, on their profile/account settings page.
**Test Steps:**

1. Change a profile field (first name, phone number, etc.).
2. Click Save.
3. Refresh or revisit the profile page.
   **Expected Result:** Updated details persist in the user’s account.

### 3.4 Logging Out

**Description:** Verify that logging out brings the user back to the home page, ending their session.
**Preconditions:** User is logged in, on any page.
**Test Steps:**

1. Click Sign out from the account menu.
2. Observe redirection.
   **Expected Result:** User is returned to the main homepage. Any account-specific elements are no longer visible.

## Additional Scenarios and Rationale

### 3.5 Email/Password Change Flow

**Rationale:** Typical account management includes changing login credentials, which can reveal issues with session security or email confirmations.
**Test Steps:**

1. User logs in with current password.
2. Navigates to “Account Settings.”
3. Changes password or updates email.
4. Logs out, tries to log in with new credentials.
   **Expected Result:** User can log in with the updated credentials, old ones no longer valid. Possibly, an email confirmation if the user changed the email.
