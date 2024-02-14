require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");

app.use(cors());
app.use(express.json()); // parse requests of content-type - application/json

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
