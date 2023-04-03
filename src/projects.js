const dogs = require("./images/parkplay.png");
const trucks = require("./images/seattle.png");
const workday = require("./images/calendars.png");
const notes = require("./images/notes.png");
const blog = require("./images/blog.png");
const readme = require("./images/readme.png");


const projects = [
    {
        title: "DoggieDates",
        url: "https://doggiedatesfrontend.herokuapp.com/",
        src: dogs,
        alt: "Doggie Dates screenshot",
        blurb: "A fun place to schedule dog play-dates.",
        techs: "React, Node.js, Express, Tailwind, Google APIs, Day.js, bcrypt, Sequelize, dotenv, JSONWebToken",
    },
    {
        title: "Rent-A-Truck",
        url: "https://github.com/SprocketCreations/truck-rental",
        src: trucks,
        alt: "Rent-a-truck screenshot",
        blurb: "Need a truck? Find one here!",
        techs: "Node.js, Sequelize, Handlebars, ",
    },
    {
        title: "Note-Taker",
        url: "https://github.com/error201/NoteTaker",
        src: notes,
        alt: "Note-Taker screenshot",
        blurb: "Take noted on anything.",
        techs: "Node.js, Heroku, Express.js",
    },
    {
        title: "Tech-Blog",
        url: "https://github.com/error201/TechBlog",
        src: blog,
        alt: "Tech-Blog screenshot",
        blurb: "A blog style comment system.",
        techs: "Node.js, Express.js, Sequelize, Handlebars",
    },
    {
        title: "Readme-Generator",
        url: "https://github.com/error201/ReadmeGenerator",
        src: readme,
        alt: "Readme-Generator screenshot",
        blurb: "Generate README.md files for your repositories.",
        techs: "Node.js, Inquirer",
    },
    {
        title: "Workday-Scheduler",
        url: "https://github.com/error201/WorkDayScheduler",
        src: workday,
        alt: "Workday-Scheduler screenshot",
        blurb: "Schedule your meetings easily.",
        techs: "Node.js, JQuery, Bootstrap, Day.js",
    },
]

export default projects;