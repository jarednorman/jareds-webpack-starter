const Typography = require("typography")

module.exports = new Typography({
  scaleRatio: 1.75,
  blockMarginBottom: 0.75,
  baseFontSize: "16px",
  baseLineHeight: 1.3,
  headerFontFamily: ["Work Sans", "sans-serif"],
  bodyFontFamily: ["Work Sans", "sans-serif"],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    a: {
      fontWeight: "bold",
      textDecoration: "none",
      color: "RebeccaPurple",
    },
    "a:hover": {
      color: "DeepPink",
    },
  }),
})
