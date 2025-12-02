// config.js

// Change ENV value only (UAT / PROD)
const ENV = "PROD";

const CONFIG = {
  UAT: {
    BASE_URL: "https://rsmsuatapi.suvidhaen.com/"
  },
  PROD: {
    BASE_URL: "https://rsmsapi.suvidhaen.com/"
  }
};

// Exported value used everywhere
const BASE_URL = CONFIG[ENV].BASE_URL;