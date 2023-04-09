import { db } from "../db.js";

export const getEnrollment = (req, res) => {
    const q = "SELECT C.cid,name,TIME_FORMAT(startTime, '%H:%i') AS startTime,TIME_FORMAT(endTime, '%H:%i')"+
    " AS endTime,place,department,instructor,capacity,current_capacity FROM courses C JOIN enrollment E on C.cid=E.cid"
    +" WHERE uid = ?";
  
    db.query(q, [req.params.uid], (err, data) => {
      
      if (err) return res.status(500).json(err);
      console.log(data);
      return res.status(200).json(data);//array of objects
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