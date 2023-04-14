import { db } from "../db.js";

export const addUser = (req, res) => {
    if (req.body.role === "select") return res.status(409).json("Please select a role");
    const q = "SELECT * FROM users WHERE uid = ?";
    db.query(q, [req.body.uid], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length>0) return res.status(409).json("User already exist");

    const q = "INSERT INTO users(`uid`,`password`,`email`,`role`,`name`) VALUES (?)";
    const values = [req.body.uid, req.body.password, req.body.email, req.body.role, req.body.username];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User added successfully.");
    });
  });
};

export const getAllUsers = (req, res) => {
  const q =
    "SELECT * FROM users";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);//array of objects
  });
};


export const getUsersByID = (req, res) => {
    const q =
      "SELECT uid, password, email, role, gpa FROM users WHERE uid = ?";
  
    db.query(q, [req.params.courseCode], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);//array of objects
    });
  };

  export const getUsersByEmail = (req, res) => {
    const q =
      "SELECT uid, password, email, role, gpa FROM users WHERE email = ?";
  
    db.query(q, [req.params.courseCode], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);//array of objects
    });
  };

export const getUsersBygpa = (req, res) => {
    const q = "SELECT * FROM users WHERE gpa = ?";

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

export const dropUser = (req, res) => {
  const q = "DELETE FROM users WHERE uid = ?";

  db.query(q, [req.body.uid], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Drop successfully.");
  });

};

export const delUser = (req, res) => {
  const q = "SELECT * FROM users WHERE uid = ?";

  db.query(q, [req.body.uid], (err, data) => {
  if (err) return res.status(500).json(err);
  if (data.length === 0) return res.status(409).json("User NOT exist");

  const q = "DELETE FROM users where uid = ?";
  const values = [req.body.uid];
  
  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("User deleted successfully.");
  });
});
};

export const updatePassword = (req, res) => {
  const q = 'SELECT password FROM users WHERE uid = ?';
  db.query(q, [req.body.uid], (err, data) => {
    if (data[0].password != req.body.currentPassword) return res.status(400).json("Current password not match.");
    if (req.body.newPassword != req.body.newPasswordConfirmation) return res.status(400).json("New password not match.");

    const q = 'UPDATE users SET password = ? WHERE uid = ?';
        
    db.query(q, [req.body.newPassword, req.body.uid], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Changed password successfully.");
    });
  });
}