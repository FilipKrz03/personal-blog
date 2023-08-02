const contentful = require("contentful");
export const client = contentful.createClient({
  space: process.env
  accessToken: process.env
});
