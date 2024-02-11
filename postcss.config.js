const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const tailwindcssNesting = require("tailwindcss/nesting");
module.exports = {
  plugins: [tailwindcssNesting, tailwindcss, autoprefixer],
};
