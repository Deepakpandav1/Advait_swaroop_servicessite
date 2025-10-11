// Amadeus API Configuration
export const AMADEUS_CONFIG = {
  // Your actual Amadeus API credentials
  API_KEY: "vH8BZl89N3MCX7NyqccoxpSAUngjw1vd",
  API_SECRET: "gCoNiszuj8fuFBho",
  
  // API Base URLs
  BASE_URL: {
    TEST: "https://test.api.amadeus.com",
    PRODUCTION: "https://api.amadeus.com"
  },
  
  // Current environment (change to 'production' for live data)
  ENVIRONMENT: "test" as "test" | "production", // Using test environment for development
  
  // API Endpoints
  ENDPOINTS: {
    TOKEN: "/v1/security/oauth2/token",
    FLIGHT_OFFERS: "/v2/shopping/flight-offers",
    FLIGHT_OFFERS_PRICE: "/v1/shopping/flight-offers/pricing",
    FLIGHT_CREATE_ORDER: "/v1/booking/flight-orders"
  }
};

// Helper function to get the current base URL
export const getAmadeusBaseUrl = () => {
  return AMADEUS_CONFIG.ENVIRONMENT === "production" 
    ? AMADEUS_CONFIG.BASE_URL.PRODUCTION 
    : AMADEUS_CONFIG.BASE_URL.TEST;
};

// Helper function to get full endpoint URL
export const getAmadeusEndpoint = (endpoint: string) => {
  return `${getAmadeusBaseUrl()}${endpoint}`;
};
