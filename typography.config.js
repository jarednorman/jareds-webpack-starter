const Typography = require("typography")

module.exports = new Typography({
  scaleRatio: 1.75,
  blockMarginBottom: 0.75,
  baseFontSize: "18px",
  baseLineHeight: 1.35,
  headerFontFamily: ["Inter", "sans-serif"],
  bodyFontFamily: ["Inter", "sans-serif"],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    a: {
      fontWeight: "bold",
      textDecoration: "none",
      color: "DeepPink",
    },
    "a:hover": {
      color: "RebeccaPurple",
    },
  }),
})
