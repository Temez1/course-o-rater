const fs = require("fs")
const courseData = require("./data/sisu-course-data.json")

fs.writeFileSync("./data/course-example.json", JSON.stringify(courseData[0]))
