const values  = {
  "0": "0",
  "1": "1px",
  "2": "2px",
  "4": "4px",
  "6": "6px",
  "8": "8px",
  "10": "10px",
  "12": "12px",
  "14": "14px",
  "16": "16px",
  "18": "18px",
  "24": "24px",
  "32": "32px",
  "40": "40px",
  "48": "48px",
  "64": "64px",
  "80": "80px",
  "96": "96px",
  "128": "128px",
  "152": "152px",
  "192": "192px",
  "210": "210px",
  "256": "256px",
  "384": "384px",
  "512": "512px",
  "640": "640px",
  "768": "768px",
  "full": "100%",
  "100vw": "100vw",
  "100vh": "100vh"
}

module.exports = {
  purge: ['./src/**/**/*.js', './public/index.html'],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        'proxima-nova': ["Proxima Nova"]
      },
      width: values,
      height: values,
      borderRadius: {
        "5": "5px",
        "10": "10px",
        "20": "20px",
        "50%": "50%",
        "full": "9999px"
      },
      spacing: values,
      backgroundImage: theme => ({
        "blurry-shapes": "url('/src/assets/images/background.png')"
      })
    },
    gradientColorStops: theme => ({
      "test": "rgba(255, 255, 255, 0.42)",
      "test2": "rgba(255, 255, 255, 0.06)"
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}