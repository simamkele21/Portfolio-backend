const express = require("express");
const fixArrayID = require("../helpers");

const app = express.Router();

let Testimonials = [
  {
    Description:
      "He is a humble,kind and caring person who always does what is right, very dedicated to what he does and always trys to help others. Simamkele easly addapts to new situations and thinks quickly on his feet.To add to that he does not shy away from hard work and always puts his best foot foward",
    id: 1,
    img: "https://i.postimg.cc/kMQFYYXf/Na-aim1.jpg",
    Name: "Na-aim Fredericks",
    title: "Colleague",
  },
  {
    Description:
      "Simamkele is a hardworking person who always seeks help when stuck whick makes him a goal-driven person.",
    id: 2,
    img: "https://i.postimg.cc/kXBTDFyC/lilitha.jpg",
    Name: "Lilitha Ngele",
    title: "Colleague",
  },
  {
    Description:
      "Great humor and great person to work with. Always has a smile on his face and always works hard to finish the task at hand.",
    id: 3,
    img: "https://i.postimg.cc/9f73THtW/Muneeb3.jpg",
    Name: "Mogamat Muneeb Davids",
    title: "Colleague",
  },
  {
    Description:
      "Simamkele, the little man with big ideas. A very determined individual. You can always count on him to deliver good work. You Won't regret working with him!",
    id: 4,
    img: "https://i.postimg.cc/VNcgGyPs/Tursha.png",
    Name: "Tursha Arendse",
    title: "Colleague",
  },
  {
    Description:
      "Simamkele is a personable and easy to work with. He would be a valuable addition to your any coding team due to his personality.",
    id: 5,
    img: "https://i.postimg.cc/pdTrtrHs/Godwin.jpg",
    Name: "Godwin Dzapatsva",
    title: "Head of Curriculum and Learning",
  },
  {
    Description:
      "Simamkele is a bright individual. He analyses and continously finds ways to improve on himself and his technical abilities.",
    id: 6,
    img: "https://i.postimg.cc/Y2m49vmV/Alex.jpg",
    Name: "Alex Sexwale",
    title: "Senior Full-stack developer",
  },
];

// GET ALL TESTIMONIAL
app.get("/", (req, res) => {
  res.send(Testimonials);
});
//GET ONE TESTIMONIAL
app.get("/:id", (req, res) => {
  const Testimonial = Testimonials.find(
    (Testimonial) => Testimonial.id == req.params.id
  );
  if (!Testimonial)
    res.status(404).send("The item with the given id was not found");
  res.send(Testimonial);
});

// CREATE A TESTIMONIAL (push to array)
app.post("/", (req, res) => {
  let { Description, img, Name, title } = req.body;
  if (!Description || !img || !Name || !title)
    res.status(404).send({ msg: "Not all information sent" });
  let newTestimonial = {
    Description,
    img,
    id: Testimonials.length + 1,
    Name,
    title,
  };
  Testimonials.push(newTestimonial);
  res.send(newTestimonial);
});

// UPDATE A TESTIMONIAL (update item in array)
app.put("/:id", (req, res) => {
  let Testimonial = Testimonials.find(
    (Testimonial) => Testimonial.id == req.params.id
  );
  if (!Testimonial) res.status(404).send({ message: "Testimonial not found" });

  let { Description, img, Name, title } = req.body;

  if (Description) Testimonial.Description = Description;
  if (img) Testimonial.img = img;
  if (Name) Testimonial.Name = Name;
  if (title) Testimonial.title = title;

  res.send(Testimonial);
});

// DELETE A TESTIMONIAL (remove from array)
app.delete("/:id", (req, res) => {
  Testimonials = Testimonials.filter(
    (Testimonial) => Testimonial.id != req.params.id
  );
  fixArrayID(Testimonials);
  res.send({ msg: "item deleted successfully" });
});

module.exports = app;
