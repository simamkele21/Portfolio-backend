const express = require("express");
const projectRoutes = require("./routes/projectRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");
const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "Welcome to Simamkele's Backend" });
});

app.use("/projects", projectRoutes);
app.use("/Testimonials", testimonialRoutes);
app.use("/Resume", resumeRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
