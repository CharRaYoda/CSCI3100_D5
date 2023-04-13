import { db } from "../db.js";

export const getCourses = (req, res) => {
    const q = "SELECT C.cid,name,TIME_FORMAT(startTime, '%H:%i') AS startTime,TIME_FORMAT(endTime, '%H:%i')"+
    " AS endTime,place,department,instructor,capacity,current_capacity,Term,date,description"
    +" FROM courses C JOIN teach T on C.cid=T.cid WHERE uid = ?";
  
    db.query(q, [req.params.uid], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);//array of objects
    });
};