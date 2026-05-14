// API configuration
// When running locally, API calls go to the Firebase emulator.
// When on Firebase Hosting, it proxies to the Cloud Function.

const BASE = import.meta.env.DEV
  ? "https://api-oyjmjvjo2q-el.a.run.app"
  : "";

export const API_BASE = BASE;
