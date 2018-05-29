// Client ID 294121248181-6msg1oue34p5hou28plrqsghjgh79t0k.apps.googleusercontent.com
// Client Secret XtPa8emOw_tzwITJhs5ty9h5
if (process.env.NODE_ENV === "production") {
  // we are in production
  module.exports = require("./prod");
} else {
  //we are in development
  module.exports = require("./dev");
}
