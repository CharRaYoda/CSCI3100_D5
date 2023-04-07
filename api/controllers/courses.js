import { db } from "../db.js";

export const getCourseByID = (req, res) => {
    const q =
      "SELECT cid, name, time, place, department, instructor, capacity FROM courses WHERE cid = ?";
  
    db.query(q, [req.params.courseCode], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);//array of objects
    });
  };

export const selectCourse = (req, res) => {
    const q = "SELECT * FROM enrollment WHERE uid = ? AND cid = ?";

    db.query(q, [req.body.uid, req.body.cid], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("Already enrolled in this course.");

    const q = "INSERT INTO enrollment(`uid`,`cid`) VALUES (?)";
    const values = [req.body.uid, req.body.cid];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Enrolled successfully.");
    });
  });
};