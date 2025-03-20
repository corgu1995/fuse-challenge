# Test Case 1: Book a Flight + Hotel Package

**Test Case ID:** E2E-001
**Test Case Name:** Book a Flight + Hotel Package (Bundle/Save)
**Description/Goal:**
Verify that a user can search for and book a bundled flight + hotel package in a single transaction, ensuring both flight and hotel details are reflected correctly at checkout and on the confirmation page.
**Preconditions:**
User can access Expedia homepage (production or staging).
(Optional) User is signed in if collecting loyalty points or saved traveler data.
**Test Data:**

- Departure city: e.g., “SFO”
- Destination city: e.g., “LAS”
- Travel dates: valid future dates (departure and return)
- Payment info: valid credit card or sandbox payment details
  **Steps:**

1. Navigate to Expedia.com and select “Bundle and Save” or “Packages.”
2. Choose “Flight + Hotel.”
3. Enter departure city, destination city, and valid travel dates.
4. Click Search and wait for package results to load.
5. Select outbound flight and return flight.
6. On the next screen, pick a hotel.
7. Verify combined price summary.
8. Click Continue/Checkout.
9. Enter traveler details (names, contact info).
10. Provide payment details.
11. Complete the booking and note the confirmation page/number.
    **Expected Result:**
    User is presented with a confirmation page showing both flight and hotel details.
    Total price matches the sum of chosen flight and hotel.
    **Priority:** High
    **Additional Notes:**
    Confirm correct taxes/fees appear.
    Consider testing optional extras like travel insurance.

# Test Case 2: Multi-City Flight Booking

**Test Case ID:** E2E-002
**Test Case Name:** Multi-City Flight Booking
**Description/Goal:**
Validate that a user can successfully book multiple flight legs (e.g., SFO → JFK → LHR → SFO) within a single transaction, with correct pricing and date validation.
**Preconditions:**
User has access to the Flights tab on Expedia.
No login required if a guest booking is allowed.
**Test Data:**

- Leg 1: SFO → JFK, date = valid future date
- Leg 2: JFK → LHR, date = a few days after leg 1
- Leg 3: Optional return LHR → SFO
- Payment method details
  **Steps:**

1. Go to “Flights” section, select “Multi-city.”
2. Input all legs with valid destinations/dates.
3. Click Search.
4. Select flights for each leg from the results.
5. Verify total price updates after each leg is selected.
6. Proceed to checkout; fill in traveler details.
7. Enter payment info and finalize booking.
   **Expected Result:**
   User receives a single itinerary covering all legs with the correct total cost.
   System prevents selection of illogical or overlapping dates.
   **Priority:** High
   **Additional Notes:**
   Some airlines limit multi-city combos; ensure correct error handling for unavailable routes.

# Test Case 3: Search and Book a Rental Car (Standalone)

**Test Case ID:** E2E-003
**Test Case Name:** Rental Car Booking Only
**Description/Goal:**
Validate that a user can independently book a rental car, choose pickup/drop-off times, apply filters, and complete payment.
**Preconditions:**
User can navigate to Expedia’s “Cars” tab.
**Test Data:**

- Pickup location: e.g., LAX airport
- Pickup/Drop-off dates: valid future times
- Payment info
  **Steps:**

1. Click “Cars” on the homepage.
2. Enter pickup location and dates.
3. Click Search; wait for car listings.
4. (Optional) Apply filters (car type, price range).
5. Choose a car option; click “Reserve” or “Continue.”
6. Enter driver info (name, age).
7. Provide payment details.
8. Confirm booking.
   **Expected Result:**
   A booking confirmation displays with all car reservation details.
   Correct total cost includes any taxes/fees.
   **Priority:** Medium
   **Additional Notes:**
   Some rentals require deposit or driver’s license info—validate if applicable.

# Test Case 4: Verify Rewards/Points Redemption Flow

**Test Case ID:** E2E-004
**Test Case Name:** Rewards/Points Redemption
**Description/Goal:**
Ensure a logged-in user with sufficient Expedia Rewards points can partially or fully pay for a booking using available points.
**Preconditions:**
User is logged in to an account with a known points balance.
A test environment or real environment that supports reward redemption.
**Test Data:**

- Account: user with (for example) 10,000 points
- Booking type: hotel or flight (any city/date)
  **Steps:**

1. Sign in to Expedia Rewards account.
2. Search for a hotel or flight.
3. Add selection to the cart/checkout.
4. On payment page, choose “Use points” or apply partial points.
5. Observe updated payment total.
6. Finalize booking.
   **Expected Result:**
   Points are correctly deducted.
   The final price is reduced.
   Confirmation page reflects partial or full use of points.
   **Priority:** High
   **Additional Notes:**
   Post-booking, check new points balance in “My Account.”

# Test Case 5: Cancel or Modify an Existing Booking

**Test Case ID:** E2E-005
**Test Case Name:** Booking Modification/Cancelation
**Description/Goal:**
Verify that a user can locate an existing reservation and either cancel it or change travel dates under the allowed policies, seeing correct refunds or fees.
**Preconditions:**
An existing reservation in the system (flight/hotel/package).
User is logged in (or has the booking reference if guest).
**Test Data:**

- Booking reference number
- Payment method (if a change results in additional charges)
  **Steps:**

1. Go to “My Trips” or “My Bookings.”
2. Select the reservation.
3. Click Cancel or Change booking.
4. If changing, pick new dates/flight; see cost difference.
5. Complete the change/cancelation.
   **Expected Result:**
   System shows any refund or fee.
   Booking status updates to canceled or changed.
   **Priority:** High
   **Additional Notes:**
   Some bookings are nonrefundable; ensure correct error messaging if changes are not allowed.

# Test Case 6: Forgot Password / Password Reset

**Test Case ID:** E2E-006
**Test Case Name:** Password Reset Flow
**Description/Goal:**
Validate that a user who forgets their password can reset it via email and log in successfully with the new credentials.
**Preconditions:**
A valid Expedia account with an accessible email inbox.
User is logged out.
**Test Data:**

- Email address of the test account (e.g., testuser@sample.com)
  **Steps:**

1. On Expedia homepage, click Sign In → “Forgot password?”
2. Enter the user’s email address.
3. Check the email inbox; open the reset link.
4. Enter and confirm a new password.
5. Log in with the new password.
   **Expected Result:**
   Reset link is received promptly.
   Password is successfully updated, and user can log in.
   **Priority:** Medium
   **Additional Notes:**
   If environment uses 2FA or other security steps, confirm those.

# Test Case 7: Check Currency Change / International Site Experience

**Test Case ID:** E2E-007
**Test Case Name:** Currency/Region Change
**Description/Goal:**
Ensure that switching to a different currency/region updates all displayed prices (and possibly language) site-wide.
**Preconditions:**
Currency or region switch is available on the site.
**Test Data:**

- Default currency: USD
- New currency: EUR
- Destination/cities for searching: any
  **Steps:**

1. From the homepage, scroll to currency settings (top or bottom).
2. Change from USD to EUR.
3. Search for a hotel or flight.
4. Observe displayed prices on the search results.
5. Proceed to checkout to confirm the currency remains EUR.
   **Expected Result:**
   All monetary amounts now show in EUR.
   Language or region might change if a full locale switch is done.
   **Priority:** Medium
   **Additional Notes:**
   Validate currency code, symbol, and numerical formatting.

# Test Case 8: Book an Activity or Tour (Standalone)

**Test Case ID:** E2E-008
**Test Case Name:** Standalone Activity/Tour Booking
**Description/Goal:**
Confirm that a user can browse and purchase a single activity (e.g., city tour, museum ticket) from search to checkout.
**Preconditions:**
User can navigate to “Things to Do” or “Activities.”
**Test Data:**

- Location: e.g., “Las Vegas”
- Activity date: valid future date
- Payment details
  **Steps:**

1. Click “Things to Do” tab.
2. Enter location and date.
3. Click Search; wait for activity listings.
4. Select an activity and schedule/time slot if needed.
5. Add to cart or proceed to booking.
6. Provide traveler info and payment method.
7. Complete purchase.
   **Expected Result:**
   Confirmation page details the activity, date, and meeting instructions.
   Booking reference or e-ticket provided.
   **Priority:** Medium
   **Additional Notes:**
   Validate any disclaimers or age restrictions.

# Test Case 9: Add Bags/Seats Post-Booking (Manage Trip)

**Test Case ID:** E2E-009
**Test Case Name:** Post-Booking Add-Ons (Baggage/Seats)
**Description/Goal:**
Confirm that a user can add baggage or select seats after purchasing a flight, verifying updated costs.
**Preconditions:**
Existing flight booking in “My Trips.”
Airline supports post-booking add-ons.
**Test Data:**

- Booking reference or user logged in.
- Additional bag fees or seat selection fees.
  **Steps:**

1. Go to “My Trips.”
2. Find the flight booking.
3. Click “Add baggage” or “Select seats.”
4. Choose seat or baggage quantity.
5. See updated price.
6. Provide payment for added fees.
7. Confirm updated reservation.
   **Expected Result:**
   Reservation now includes the extra bag or assigned seat.
   Price difference is charged.
   **Priority:** Medium
   **Additional Notes:**
   Some airlines or fares may not allow changes once booked—verify any restrictions.

# Test Case 10: Book a Hotel for Multiple Rooms with Different Occupancies

**Test Case ID:** E2E-010
**Test Case Name:** Multi-Room Hotel Booking
**Description/Goal:**
Validate booking 2+ rooms in a single hotel search, each with different adult/child occupancy.
**Preconditions:**
User can access the “Stays” or “Hotels” search.
**Test Data:**

- City: e.g., “Orlando”
- Travel dates: valid future date range
- Room/occupancy setup: e.g., Room 1 (2 adults), Room 2 (2 adults + 1 child)
  **Steps:**

1. Click “Stays.”
2. Enter city, check-in, check-out dates.
3. Adjust the “Rooms & Guests” to 2 rooms with specified occupancy.
4. Click Search.
5. Select a suitable hotel.
6. Provide guest details for both rooms.
7. Proceed to checkout and complete booking.
   **Expected Result:**
   The system finds hotels that can accommodate both rooms.
   Total price includes costs for each room.
   Booking confirmation shows details for both rooms.
   **Priority:** Medium
   **Additional Notes:**
   Validate any extra fees for children or occupancy limits.

# Test Case 11: Payment with Alternative Methods (PayPal, Affirm, etc.)

**Test Case ID:** E2E-011
**Test Case Name:** Alternative Payment Methods
**Description/Goal:**
Verify that users can check out with a payment option other than a standard credit card (e.g., PayPal, Affirm).
**Preconditions:**
Site has alternative payment methods available.
(Optional) User is logged in if required for some methods.
**Test Data:**

- Any flight/hotel search
- Active PayPal test account or Affirm sandbox
  **Steps:**

1. Search and add a flight/hotel to cart.
2. Click Checkout.
3. Select alternative payment (e.g., PayPal).
4. Redirect to PayPal login.
5. Complete payment.
6. Return to Expedia and see booking confirmation.
   **Expected Result:**
   Payment is approved and recorded.
   Confirmation page shows successful transaction.
   **Priority:** Medium
   **Additional Notes:**
   Validate partial vs. full payment if the method supports it.

# Test Case 12: Use a Coupon or Discount Code

**Test Case ID:** E2E-012
**Test Case Name:** Coupon/Promo Code Redemption
**Description/Goal:**
Ensure that applying a valid promo code at checkout reduces the total cost accordingly.
**Preconditions:**
A valid coupon or promotional code is available.
**Test Data:**

- City/dates for booking
- Coupon code: e.g., “SUMMER2025”
  **Steps:**

1. Search for a flight/hotel.
2. Proceed to checkout.
3. Locate “Apply coupon” or “Promo code” field.
4. Enter the coupon code.
5. Verify the discount is applied to total.
6. Complete the booking with updated price.
   **Expected Result:**
   Discounted price is correct.
   Confirmation page indicates the coupon usage.
   **Priority:** Medium
   **Additional Notes:**
   Validate any coupon restrictions like min spend, date constraints, or participating hotels/flights.

# Test Case 13: End-to-End Registration + First Booking

**Test Case ID:** E2E-013
**Test Case Name:** New User Account Creation & Booking
**Description/Goal:**
Validate the entire flow: user creates a new Expedia account, then makes a first booking as a logged-in user.
**Preconditions:**
The user’s email is not previously registered.
Access to that email inbox for verification (if needed).
**Test Data:**

- Email: e.g., newtestuser@example.com
- Password: chosen by user
- Travel details: any flight/hotel search
  **Steps:**

1. On the homepage, click Sign in → “Create an account.”
2. Enter name, email, password.
3. Verify email if required.
4. Log in with newly created credentials.
5. Search for flight/hotel.
6. Add selection to cart, proceed to checkout.
7. Provide payment details.
8. Complete booking.
   **Expected Result:**
   Account creation is successful.
   Booking completes while logged in, appearing in “My Trips.”
   **Priority:** Medium
   **Additional Notes:**
   Useful for testing the user acquisition funnel.

# Test Case 14: Guest Booking → Account Linking

**Test Case ID:** E2E-014
**Test Case Name:** Convert Guest Booking to Registered Account
**Description/Goal:**
Check that a user who books as a guest can later create or link an account with the same email and see that booking in “My Trips.”
**Preconditions:**
User is not logged in initially.
The system supports merging guest bookings to an account if the email matches.
**Test Data:**

- Guest email: guestuser@example.com
- Flight/hotel details for the booking
  **Steps:**

1. As a guest, search for a flight/hotel, proceed to checkout.
2. Enter guestuser@example.com and payment info.
3. Complete booking.
4. After booking confirmation, create a new account using the same email.
5. Log in and check “My Trips.”
   **Expected Result:**
   The guest booking is recognized and appears under the new account.
   **Priority:** Low/Medium (depends on how critical guest-to-user conversion is)
   **Additional Notes:**
   Might require some time or manual claim of the booking.

# Test Case 15: High-Traffic Stress Scenario (Concurrent Bookings)

**Test Case ID:** E2E-015
**Test Case Name:** Concurrency/Load Test for Bookings
**Description/Goal:**
Simulate multiple simultaneous searches and bookings to ensure system stability and no performance bottlenecks.
**Preconditions:**
Staging or production environment that supports load testing.
Tools/scripts to generate concurrent sessions.
**Test Data:**

- 10–20 sets of flight/hotel data.
- Payment details for each user session (or mock payments).
  **Steps:**

1. Launch multiple sessions (e.g., 10 in parallel).
2. Each session searches for a flight/hotel, proceeds to checkout, and attempts payment.
3. Monitor response times, error rates.
4. Validate each session receives a confirmation or an appropriate error.
   **Expected Result:**
   All or most bookings complete successfully within acceptable response times.
   No system crashes, errors, or major slowdowns.
   **Priority:** Varies (often high for performance-critical sites)
   **Additional Notes:**
   Typically done with load testing tools (JMeter, Gatling, etc.) rather than manual.
