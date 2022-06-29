/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "bg-img":
          "url('../src/assets/images/joel-ambass-9ewh3s3guV8-unsplash.jpg')",
      },
      colors: {
        "text-gray": "#B9BDCF",
        "text-blue": "#334680",
      },
      boxShadow: {
        blue: "0px 2px 4px rgba(0, 0, 0, 0.05)",
      },
      backgroundColor: {
        "bg-blue": "#f6f7fb",
      },
      height: {
        147: "147px",
        90: "90px",
      },
      width: {
        90: "90px",
      },
    },
    plugins: [],
  },
};
