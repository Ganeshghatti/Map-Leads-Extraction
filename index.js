const path = require("path");
const express = require("express");
const connectDatabase = require("./config/database");
const cors = require("cors");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/Admin");
const dotenv = require("dotenv");
const mapextractRoutes = require("./routes/MapExtract");
const emailextractRoutes = require("./routes/EmailExtract");
const leadsRoutes = require("./routes/Leads");
const leadsCollectionRoutes = require("./routes/LeadsCollection");
const outreachRoutes = require("./routes/Outreach");

dotenv.config();

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(adminRoutes);
app.use(mapextractRoutes);
app.use(emailextractRoutes);
app.use(leadsRoutes);
app.use(leadsCollectionRoutes);
app.use(outreachRoutes);

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

server.timeout = 300000;

app.get("/", (req, res) => {
  res.send("Welcome to The Squirrel backend");
});

connectDatabase();
