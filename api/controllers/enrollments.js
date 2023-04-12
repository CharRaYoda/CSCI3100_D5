import { db } from "../db.js";

export const getEnrollment = (req, res) => {
    const q = "SELECT C.cid,name,TIME_FORMAT(startTime, '%H:%i') AS startTime,TIME_FORMAT(endTime, '%H:%i')"+
    " AS endTime,place,department,instructor,capacity,current_capacity,Term,date,description,grade"
    +" FROM courses C JOIN enrollment E on C.cid=E.cid WHERE uid = ?";
  
    db.query(q, [req.params.uid], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);//array of objects
    });
};

export const getCgpa = (req, res) => {
    const q = "SELECT ROUND(AVG(point), 2) AS cgpa FROM enrollment WHERE uid = ?";

    db.query(q, [req.params.uid], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data[0].cgpa);
    });
};

export const dropEnrollment = (req, res) => {
    const q = "DELETE FROM enrollment WHERE uid = ? AND cid = ?";

    db.query(q, [req.body.uid, req.body.cid], (err, data) => {
      if (err) return res.status(500).json(err);
    });

    const q2 = "UPDATE courses SET current_capacity = current_capacity-1 WHERE cid = ?";
    db.query(q2, [req.body.cid], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Drop successfully.");
    })
};

export const GradeUpload = (req, res) => {
  if (req.body.grade === "select") return res.status(409).json("Please select a grade.");

  const q = "SELECT * FROM enrollment WHERE uid = ? AND cid = ?";

  db.query(q, [req.body.uid, req.body.cid], (err, data) => {
    if (err) return res.status(500).json(err);
    if (!data.length) return res.status(409).json("Wrong student ID or course ID.");

    let point;
    if (req.body.grade === "A") point = 4.0
    else if (req.body.grade === "A-") point = 3.70
    else if (req.body.grade === "B+") point = 3.30
    else if (req.body.grade === "B") point = 3.00
    else if (req.body.grade === "B-") point = 2.70
    else if (req.body.grade === "C+") point = 2.30
    else if (req.body.grade === "C") point = 2.00
    else if (req.body.grade === "C-") point = 1.70
    else if (req.body.grade === "D+") point = 1.30
    else if (req.body.grade === "D") point = 1.00
    else if (req.body.grade === "F") point = 0.00

    const q = "UPDATE enrollment SET grade = ?, point = ? WHERE uid = ? AND cid = ?";

    db.query(q, [req.body.grade, point, req.body.uid, req.body.cid], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Grade uploaded successfully.");
    });
  });
};