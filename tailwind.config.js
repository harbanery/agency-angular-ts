/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        neutral: {
          black: "#263238",
          "dark-gray": "#4D4D4D",
          gray: "#717171",
          "light-gray": "#89939E",
          "gray-blue": "#ABBED1",
          silver: "#F5F7FA",
        },
        primary: "#28CB8B",
        secondary: "#263238",
        info: "#2194f3",
        shade: {
          100: "#43A046",
          200: "#388E3B",
          300: "#237D31",
          400: "#1B5E1F",
          500: "#103E13",
        },
        tint: {
          100: "#66BB69",
          200: "#81C784",
          300: "#A5D6A7",
          400: "#C8E6C9",
          500: "#E8F5E9",
        },
        action: {
          warning: "#FBC02D",
          error: "#E53835",
          success: "#2E7D31",
        },
      },
      fontSize: {
        "header-large": ["64px", { lineHeight: "76px", fontWeight: "600" }],
        "header-medium": ["36px", { lineHeight: "44px", fontWeight: "600" }],
        "header-small": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "header-xsmall": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "label-large": ["18px", { lineHeight: "28px", fontWeight: "500" }],
        "label-medium": ["16px", { lineHeight: "24px", fontWeight: "500" }],
        "label-small": ["14px", { lineHeight: "20px", fontWeight: "500" }],
        "label-xsmall": ["12px", { lineHeight: "16px", fontWeight: "500" }],
        "body-large": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-medium": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-small": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "body-xsmall": ["12px", { lineHeight: "16px", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};
