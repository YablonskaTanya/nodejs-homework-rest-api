const mongoose = require("mongoose");
const app = require("./app");
const { DB_HOST } = require("./config");

// const PORT = 3000;
// mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3000))
  .catch((error) => console.log(error.message), process.exit(1));

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });

// <!-- xhD3by4Te4.v7!* -->
