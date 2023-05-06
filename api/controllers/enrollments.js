import { db } from "../db.js";

export const GetEnrollment = (req, res) => {
  // Retrieve enrollment information for a specific user
  const q = "SELECT C.cid, name, TIME_FORMAT(startTime, '%H:%i') AS startTime, TIME_FORMAT(endTime, '%H:%i') AS endTime, place, department, instructor, capacity, current_capacity, Term, date, description, grade " +
            "FROM courses C JOIN enrollment E on C.cid=E.cid WHERE uid = ?";

  db.query(q, [req.params.uid], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data); // Return an array of objects containing enrollment information
  });
};

export const GetCgpa = (req, res) => {
  // Retrieve the CGPA (Cumulative Grade Point Average) for a specific user
  const q = "SELECT ROUND(AVG(point), 2) AS cgpa FROM enrollment WHERE uid = ?";

  db.query(q, [req.params.uid], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data[0].cgpa); // Return the CGPA as a response
  });
};

export const SelectCourse = (req, res) => {
  // Select a course for a specific user
  const q = "SELECT * FROM enrollment_period";

  db.query(q, (err, data) => {
      if (err) return res.status(500).json(err);
      if (data[0].canSelect == 0) return res.status(409).json("The enrollment period is closed.");

      const q = "SELECT COUNT(*) AS count FROM enrollment WHERE uid = ?";
      db.query(q, [req.body.uid], (err, data) => {
          if (err) return res.status(500).json(err);
          if (data[0].count == 6) return res.status(409).json("You cannot exceed the course taking limit.");

          const q = "SELECT * FROM enrollment WHERE uid = ? AND cid = ?";
          db.query(q, [req.body.uid, req.body.cid], (err, data) => {
              if (err) return res.status(500).json(err);
              if (data.length) return res.status(409).json("Already enrolled in this course.");

              const q = "SELECT current_capacity, capacity FROM courses WHERE cid = ?";
              db.query(q, [req.body.cid], (err, data) => {
                  if (err) return res.status(500).json(err);
                  if (data[0].current_capacity == data[0].capacity) return res.status(409).json("This course is already full.");

                  const q = "INSERT INTO enrollment(`uid`,`cid`) VALUES (?)";
                  const values = [req.body.uid, req.body.cid];
                  db.query(q, [values], (err, data) => {
                      if (err) return res.status(500).json(err);
                      const q = "UPDATE courses SET current_capacity = current_capacity+1 WHERE cid = ?";
                      db.query(q, [req.body.cid], (err, data) => {
                          if (err) return res.status(500).json(err);
                          return res.status(200).json("Enrolled successfully.");
                      });
                  });
              });
          });
      });
  });
};

export const DropEnrollment = (req, res) => {
  // Drop a course enrollment for a specific user
  const q = "SELECT * FROM enrollment_period";

  db.query(q, (err, data) => {
      if (err) return res.status(500).json(err);
      if (data[0].canSelect == 0) return res.status(409).json("The enrollment period is closed.");

      const q = "DELETE FROM enrollment WHERE uid = ? AND cid = ?";

      db.query(q, [req.body.uid, req.body.cid], (err, data) => {
          if (err) return res.status(500).json(err);
          const q2 = "UPDATE courses SET current_capacity = current_capacity-1 WHERE cid = ?";
          db.query(q2, [req.body.cid], (err, data) => {
              if (err) return res.status(500).json(err);
              return res.status(200).json("Dropped successfully.");
          });
      });
  });
};

export const GradeUpload = (req, res) => {
  // Upload the grade for a specific user in a specific course
  if (!req.body.uid) return res.status(409).json("Please enter student ID.");
  if (!req.body.cid) return res.status(409).json("Please enter course code.");
  if (req.body.grade === "select") return res.status(409).json("Please select a grade.");

  const q = "SELECT * FROM enrollment WHERE uid = ? AND cid = ?";

  db.query(q, [req.body.uid, req.body.cid], (err, data) => {
      if (err) return res.status(500).json(err);
      if (!data.length) return res.status(409).json("Wrong student ID or course ID.");

      let point;
      if (req.body.grade === "A") point = 4.0;
      else if (req.body.grade === "A-") point = 3.70;
      else if (req.body.grade === "B+") point = 3.30;
      else if (req.body.grade === "B") point = 3.00;
      else if (req.body.grade === "B-") point = 2.70;
      else if (req.body.grade === "C+") point = 2.30;
      else if (req.body.grade === "C") point = 2.00;
      else if (req.body.grade === "C-") point = 1.70;
      else if (req.body.grade === "D+") point = 1.30;
      else if (req.body.grade === "D") point = 1.00;
      else if (req.body.grade === "F") point = 0.00;

      const q = "UPDATE enrollment SET grade = ?, point = ? WHERE uid = ? AND cid = ?";

      db.query(q, [req.body.grade, point, req.body.uid, req.body.cid], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json("Grade uploaded successfully.");
      });
  });
};

export const SetPeriod = (req, res) => {
  // Set the enrollment period to open or closed
  const period = req.body.period;

  if (period === "Select") {
      return res.status(409).json("Please select an option.");
  }

  const canSelect = period === "Open" ? 1 : 0;

  const q = "UPDATE enrollment_period SET canSelect = ?";

  db.query(q, [canSelect], (err, data) => {
      if (err) {
          return res.status(500).json(err);
      }
      return res.status(200).json("Set enrollment period successfully.");
  });
};

export const SpecialAddDrop = (req, res) => {
  // Perform Special Add Drop
  const uid = req.body.uid;
  const cid = req.body.cid;
  const action = req.body.action;

  if (!uid) {
      return res.status(409).json("Please enter student ID.");
  }

  if (!cid) {
      return res.status(409).json("Please enter course code.");
  }

  if (action === "select") {
      return res.status(409).json("Please select an action.");
  }

  if (action === "Add") {
      const checkEnrollmentQuery = "SELECT * FROM enrollment WHERE uid = ? AND cid = ?";
      db.query(checkEnrollmentQuery, [uid, cid], (err, data) => {
          if (err) {
              return res.status(500).json(err);
          }

          if (data.length) {
              return res.status(409).json("The student is already in this course.");
          }

          const addEnrollmentQuery = "INSERT INTO enrollment(`uid`, `cid`) VALUES (?,?)";
          db.query(addEnrollmentQuery, [uid, cid], (err, data) => {
              if (err) {
                  return res.status(500).json(err);
              }

              const updateCapacityQuery = "UPDATE courses SET current_capacity = current_capacity+1 WHERE cid = ?";
              db.query(updateCapacityQuery, [cid], (err, data) => {
                  if (err) {
                      return res.status(500).json(err);
                  }

                  return res.status(200).json("Special added successfully.");
              });
          });
      });
  }

  if (action === "Drop") {
      const checkEnrollmentQuery = "SELECT * FROM enrollment WHERE uid = ? AND cid = ?";
      db.query(checkEnrollmentQuery, [uid, cid], (err, data) => {
          if (err) {
              return res.status(500).json(err);
          }

          if (!data.length) {
              return res.status(409).json("Wrong student ID or course code.");
          }

          const dropEnrollmentQuery = "DELETE FROM enrollment WHERE uid = ? AND cid = ?";
          db.query(dropEnrollmentQuery, [uid, cid], (err, data) => {
              if (err) {
                  return res.status(500).json(err);
              }

              const updateCapacityQuery = "UPDATE courses SET current_capacity = current_capacity-1 WHERE cid = ?";
              db.query(updateCapacityQuery, [cid], (err, data) => {
                  if (err) {
                      return res.status(500).json(err);
                  }

                  return res.status(200).json("Special dropped successfully.");
              });
          });
      });
  }
};
