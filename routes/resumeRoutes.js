const express = require("express");
const fixArrayID = require("../helpers");

const app = express.Router();

let Resume = [
  {
    id: 1,
    year: "2013 - 2018",
    institution: "Garlandale High",
    role: "Student",
    responsibilities: [
      "attending classes on time and regularly",
      "being prepared for classes with all necessary supplies",
      "taking good care of school property",
      "completing all homework assignments.",
      "doing their best.",
    ],
  },
  {
    id: 2,
    year: "2019 - 2020",
    institution: "Department of Local Government",
    role: "Intern",
    responsibilities: [
      "Administration",
      "Creating and maintaining databases",
      "Stakeholder liaising",
    ],
  },
  {
    id: 3,
    year: "2020 - 2021",
    institution: "iCOLLEGE",
    role: "Student",
    responsibilities: [
      "Complete your work tasks as required by your employer digitally",
      "Have access to recorded and pre-recorded lectures",
      "Download PoE's, Tasks and Assignments on the App",
      "Learn from anywhere as long as you have access to a stable internet connection",
      "Submit your tasks, assignments and PoE's",
    ],
  },
  {
    id: 4,
    year: "2021 - current",
    institution: "Life Choices Academy",
    role: "Student",
    responsibilities: [
      "attending classes on time and regularly",
      "being prepared for classes with all necessary supplies",
      "taking good care of school property",
    ],
  },
];

// GET ALL Resume
app.get("/", (req, res) => {
  res.send(Resume);
});
//GET ONE Resume
app.get("/:id", (req, res) => {
  const bio = Resume.find((bio) => bio.id == req.params.id);
  if (!bio) res.status(404).send("The item with the given id was not found");
  res.send(bio);
});

// CREATE A Resume (push to array)
app.post("/", (req, res) => {
  let { year, institution, role, responsibilities } = req.body;
  if (!year || !institution || !role || !responsibilities)
    res.status(404).send({ msg: "Not all information sent" });
  let newBio = {
    id: Resume.length + 1,
    year,
    institution,
    role,
    responsibilities,
  };
  Resume.push(newBio);
  res.send(newBio);
});

// UPDATE A Resume (update item in array)
app.put("/:id", (req, res) => {
  let bio = Resume.find((bio) => bio.id == req.params.id);
  if (!bio) res.status(404).send({ message: "Resume not found" });

  let { year, institution, role, responsibilities } = req.body;

  if (year) bio.year = year;
  if (institution) bio.institution = institution;
  if (role) bio.role = role;
  if (responsibilities) bio.responsibilities = responsibilities;

  res.send(bio);
});

// DELETE A Resume (remove from array)
app.delete("/:id", (req, res) => {
  Resume = Resume.filter((bio) => bio.id != req.params.id);
  fixArrayID(Resume);
  res.send({ msg: "item deleted successfully" });
});

module.exports = app;
