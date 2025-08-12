/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        pastelPurple: {
          primary: "#A78BFA",
          secondary: "#F9A8D4",
          accent: "#FBBF24",
          neutral: "#1F2937",
          "base-100": "#F3F4F6",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
