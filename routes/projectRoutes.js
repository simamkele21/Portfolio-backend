const express = require("express");
const fixArrayID = require("../helpers");

const app = express.Router();

let projects = [
  {
    img: "https://i.postimg.cc/ZRWhVvKX/project.png",
    title: "MOCK PROJECT",
    id: 1,
    category: "HTML & CSS",
    source: "https://github.com/simamkele21/project",
    live: "https://eloquent-babbage-f22814.netlify.app/",
  },
  {
    img: "https://i.postimg.cc/9f8hdYVG/onlinestore.png",
    title: "ONLINE STORE",
    id: 2,
    category: "HTML & CSS",
    source: "https://github.com/simamkele21/project",
    live: "https://agitated-clarke-7afb9c.netlify.app/",
  },
  {
    img: "https://i.postimg.cc/ZY1JsHNH/mediaq.png",
    title: "MEDIA QUERIES",
    id: 3,
    category: "HTML & CSS",
    source: "https://github.com/simamkele21/Media-Queries",
    live: "https://gallant-wright-e119ca.netlify.app/",
  },
  {
    img: "https://i.postimg.cc/sgJyXRNH/fc.png",
    title: "Flipcards",
    id: 4,
    category: "HTML & CSS",
    source: "https://github.com/simamkele21/flipcards",
    live: "https://stoic-shannon-5c2e3b.netlify.app/",
  },
  {
    img: "https://i.postimg.cc/02jSjGxR/Screenshot-from-2022-02-01-09-38-05.png",
    title: "Box Model",
    id: 5,
    category: "HTML & CSS",
    source: "https://github.com/simamkele21/boxmodel",
    live: "https://keen-ptolemy-759e53.netlify.app/",
  },
  {
    img: "https://i.postimg.cc/DZFSQLXg/Screenshot-from-2022-02-01-09-09-01.png",
    title: "Reaction timer",
    id: 6,
    category: "Vue",
    source: "https://github.com/simamkele21/Reaction-timer",
    live: "https://awesome-leakey-bcfbbb.netlify.app/",
  },
  {
    img: "https://i.postimg.cc/xdH2fZqx/Screenshot-from-2022-02-01-09-21-33.png",
    title: "Kanye West API",
    id: 7,
    category: "Javascript",
    source: "https://codepen.io/simamkele21/pen/vYejjYr",
    live: "https://codepen.io/simamkele21/pen/vYejjYr",
  },
  {
    img: "https://i.postimg.cc/ryHh8NR3/Screenshot-from-2022-02-01-10-14-24.png",
    title: "Embeding",
    id: 8,
    category: "Javascript",
    source: "https://codepen.io/simamkele21/pen/WNOVwjO",
    live: "https://codepen.io/simamkele21/pen/WNOVwjO",
  },
  {
    img: "https://i.postimg.cc/4NjRBK20/Screenshot-from-2022-02-04-15-50-09.png",
    title: "Text effects",
    id: 9,
    category: "Javascript",
    source: "https://codepen.io/simamkele21/pen/WNZyBdp",
    live: "https://codepen.io/simamkele21/pen/WNZyBdp",
  },
  {
    img: "https://i.postimg.cc/d1Nx3Xzf/Screenshot-from-2022-02-04-15-53-14.png",
    title: "Pokemon API",
    id: 10,
    category: "Javascript",
    source: "https://codepen.io/simamkele21/pen/eYGKZmy",
    live: "https://codepen.io/simamkele21/pen/eYGKZmy",
  },
];

// GET ALL PROJECT
app.get("/", (req, res) => {
  res.send(projects);
});

//GET ONE PROJECT
app.get("/:id", (req, res) => {
  const project = projects.find((project) => project.id == req.params.id);
  if (!project)
    res.status(404).send("The item with the given id was not found");
  res.send(project);
});

// CREATE A PROJECT (push to array)
app.post("/", (req, res) => {
  let { img, title, category, source, live } = req.body;
  if (!img || !title || !category || !source || !live)
    res.status(404).send({ msg: "Not all information sent" });
  let newProject = {
    img,
    title,
    id: projects.length + 1,
    category,
    source,
    live,
  };
  projects.push(newProject);
  res.send(newProject);
});

// UPDATE A PROJECT (update item in array)
app.put("/:id", (req, res) => {
  let project = projects.find((project) => project.id == req.params.id);
  if (!project) res.status(404).send({ message: "Project not found" });

  let { img, title, category, source, live } = req.body;

  if (img) project.img = img;
  if (title) project.title = title;
  if (category) project.category = category;
  if (source) project.source = source;
  if (live) project.live = live;

  res.send(project);
});

// DELETE A PROJECT (remove from array)
app.delete("/:id", (req, res) => {
  projects = projects.filter((project) => project.id != req.params.id);
  fixArrayID(projects);
  res.send({ msg: "item deleted successfully" });
});

module.exports = app;
