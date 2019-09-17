const express = require("express");

const app = express();

const path = require("path");

const cors = require("cors");

const bp = require("body-parser");

const port = process.env.PORT || 3001;

app.use(cors());

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.get("/studentdash", (req, res) => {
  res.json({
    name: "dewindi",
    class: "10A",
    subjectsenroled: [
      { subjectname: "sinhala", meterial: ["assingment 1 ","assingment 51 ","assingment 12 "] },
      { subjectname: "english", meterial: ["assingment 3 "] }
    ]
  });
});

app.listen(port, () => {
  console.log("listing");
});
