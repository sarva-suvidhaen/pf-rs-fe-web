// config.js

const ENV = "PROD";

const CONFIG = {
  UAT: {
    BASE_URL: "https://rsmsuatapi.suvidhaen.com/"
  },
  PROD: {
    BASE_URL: "https://rsmsapi.suvidhaen.com/"
  }
};

const BASE_URL = CONFIG[ENV].BASE_URL;
