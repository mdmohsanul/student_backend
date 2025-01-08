const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  marks: Number,
  attendance: Number,
  grade: String,
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = { Student };
