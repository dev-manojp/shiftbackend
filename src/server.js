// import dotenv from "dotenv";
// dotenv.config();

// console.log(process.env.PORT);
// console.log(process.env.FIREBASE_PROJECT_ID);

// import app from "./app.js";
// import connectDB from "./config/db.js";

// connectDB();

// const PORT = process.env.PORT;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


import "dotenv/config";

import app from "./app.js";
import connectDB from "./config/db.js";

connectDB();

console.log(process.env.PORT);
console.log(process.env.FIREBASE_PROJECT_ID);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});