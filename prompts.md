# Building a Spending Tracker MVP with Cursor AI: Step-by-Step Guide

This markdown file outlines the steps to build a Spending Tracker Minimum Viable Product (MVP) using Cursor AI, providing generation prompts for each step.

## I. Project Setup

1.  **Create a new Expo project with TypeScript:**

    *   **Prompt:** "Create a new Expo project named 'Nudge' using the 'blank' template and TypeScript."
    *   **Expected Outcome:** Cursor generates a new Expo project.

2.  **Install necessary dependencies:**

    *   **Prompt:** "Install the following packages: `@react-navigation/native`, `@react-navigation/stack`, `react-native-safe-area-context`, `react-native-screens`, `react-native-paper` (or your preferred UI library), `expo-notifications`, `expo-location`, and any other relevant packages."
    *   **Expected Outcome:** Dependencies are added to `package.json` and installed.

## II. User Signup/Onboarding (Screen 1)

1.  **Create a Signup/Onboarding screen:**

    *   **Prompt:** "Create a functional component named 'OnboardingScreen' that handles user signup/onboarding. Include fields for username, email, and password (or a simplified version for MVP)."
    *   **Expected Outcome:** `OnboardingScreen` component is created.

2.  **Form handling:**

    *   **Prompt:** "Implement form handling in 'OnboardingScreen' using `useState` to manage input values.  Add a 'Sign Up' button.  For the MVP, a simple console log of the form data is sufficient when the button is pressed."
    *   **Expected Outcome:** Form inputs are managed, and button press logs data.

3.  **Basic Styling:**

    *   **Prompt:** "Add basic styling to the 'OnboardingScreen' to make it look presentable."
    *   **Expected Outcome:** Basic styles are applied.

4.  **Navigation (After Signup):**

    *   **Prompt:** "After the 'Sign Up' button is pressed (and data is logged), navigate to the 'AddLocationsScreen' (the next screen in the flow)."
    *   **Expected Outcome:** Navigation is implemented.

## III. Add Common Spending Locations (Screen 2)

1.  **Create AddLocationsScreen component:**

    *   **Prompt:** "Create a functional component named 'AddLocationsScreen' where users can add common spending locations."
    *   **Expected Outcome:** `AddLocationsScreen` is created.

2.  **Input for location names:**

    *   **Prompt:** "In 'AddLocationsScreen', add a `TextInput` field for entering location names and an 'Add Location' button."
    *   **Expected Outcome:** Input and button are added.

3.  **Location list:**

    *   **Prompt:** "Display the added locations in a list (e.g., using `FlatList`).  For MVP, store the locations in state using `useState`."
    *   **Expected Outcome:** Added locations are displayed.

4.  **Navigation (After Adding Locations):**

    *   **Prompt:** "Add a 'Next' button that navigates to the 'SetBudgetScreen' after at least one location is added."
    *   **Expected Outcome:** Navigation is implemented.

## IV. Set Basic Budget Limits (Screen 3)

1.  **Create SetBudgetScreen component:**

    *   **Prompt:** "Create a functional component named 'SetBudgetScreen' for setting budget limits."
    *   **Expected Outcome:** `SetBudgetScreen` is created.

2.  **Input for budget limit:**

    *   **Prompt:** "Add a `TextInput` for entering the budget limit.  Use appropriate input type (e.g., numeric)."
    *   **Expected Outcome:** Input field is added.

3.  **"Set Budget" button:**

    *   **Prompt:** "Add a 'Set Budget' button.  For MVP, log the budget limit to the console when pressed."
    *   **Expected Outcome:** Button logs the budget limit.

4.  **Navigation (After Setting Budget):**

    *   **Prompt:** "After the 'Set Budget' button is pressed, navigate to the 'SpendingTrackerScreen' (the main screen)."
    *   **Expected Outcome:** Navigation is implemented.

## V. Receive Notifications at Locations (Background Task/Location Services)

1.  **Expo Notifications setup:**

    *   **Prompt:** "Set up Expo Notifications.  Request permissions for notifications.  For MVP, trigger a test notification when the app starts."
    *   **Expected Outcome:** Notifications are set up.

2.  **Expo Location setup:**

    *   **Prompt:** "Set up Expo Location.  Request location permissions.  For MVP, get the user's current location and log it to the console."
    *   **Expected Outcome:** Location services are set up.

3.  **Background location tracking (for notifications):**

    *   **Prompt:** "Implement background location tracking (using `react-native-background-actions` or a suitable alternative).  For MVP, when the user's location is near a stored spending location (within a defined radius), trigger a local notification.  This will require some research.  Focus on a basic implementation."
    *   **Expected Outcome:** Background location triggers notifications (this will be the most complex part).

## VI. Track Basic Spending (Screen 4)

1.  **Create SpendingTrackerScreen component:**

    *   **Prompt:** "Create a functional component named 'SpendingTrackerScreen' to track spending."
    *   **Expected Outcome:** `SpendingTrackerScreen` is created.

2.  **Display budget and remaining balance:**

    *   **Prompt:** "Display the total budget and the remaining balance on the 'SpendingTrackerScreen'."
    *   **Expected Outcome:** Budget and balance are displayed.

3.  **"Add Spending" functionality:**

    *   **Prompt:** "Add a button or form to allow the user to add new spending entries. Include input fields for the amount spent and the location (which can be a dropdown of the common locations added earlier)."
    *   **Expected Outcome:** Spending input is added.

4.  **Update balance and display spending history:**

    *   **Prompt:** "When a spending entry is added, update the remaining balance and display the spending history in a list."
    *   **Expected Outcome:** Balance is updated, and history is displayed.

## VII. Testing and Refinement (Throughout the Process)

1.  **Test frequently:** Test each feature as you develop it.
2.  **Refine UI/UX:** Improve the user interface and experience.
3.  **Address bugs:** Fix any bugs that are discovered.

This detailed guide provides a step-by-step approach to building your Spending Tracker MVP with Cursor AI. Remember to break down complex tasks into smaller, manageable prompts.  The background location tracking and notifications will require research and careful implementation.  Focus on a basic, functional version for the MVP, and then iterate and improve it later.  Good luck!