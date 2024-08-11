/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        subNavbarTxtColor: "#EB4C6B",
        horizontalLineColor: "#E5E5E5",
        filterTextColor: "#888792",
        ProductBackGroundColor: "hsl(0, 0%, 90%)",
        FooterBackgroundColor: "#000000",
        ButtonBorderColor: "#BDBDBD",
        ProductImageBackGround: "#E0E0E0",
      },
      fontFamily: {
        textfont: ["Simplon Norm", "sans-serif"],
        FilterNavfornt: ["Adobe Caslon Pro"],
        TotlaProductCount: ["Simplon Norm"],
      },
      fontSize: {
        textSize: "45px",
        secondsetofText: "50px",
        thirdSetoftext: "64px",
        subHeadingSize: "20px",
        CheckBoxText: "20px",
        FooterHeadingText: "22px",
        FootersubHeading: "17px",
      },
      lineHeight: {
        customLineHeight: "72px",
        subHeadingLineHeight: "30px",
      },
      letterSpacing: {
        customLetterSpacing: "1px",
      },
      height: {
        ProductCardHeight: "400px",
        Imageheight: "300px",
      },
      Width: {
        fullscreenWidth: "300px",
        SmallScrrenWidth: "168px",
      },
      
    },
  },
  plugins: [],
};
