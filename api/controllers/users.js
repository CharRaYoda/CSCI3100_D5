import { db } from "../db.js";

// Add a user to the database
export const addUser = (req, res) => {
  // Check if a role is selected
  if (req.body.role === "select") return res.status(409).json("Please select a role");

  const q = "SELECT * FROM users WHERE uid = ?";
  db.query(q, [req.body.uid], (err, data) => {
    if (err) return res.status(500).json(err);

    // Check if the user already exists
    if (data.length > 0) return res.status(409).json("User already exists");

    const q = "INSERT INTO users(`uid`,`password`,`email`,`role`,`name`) VALUES (?)";
    const values = [req.body.uid, req.body.password, req.body.email, req.body.role, req.body.username];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User added successfully.");
    });
  });
};

// Get all users from the database
export const getAllUsers = (req, res) => {
  const q = "SELECT * FROM users";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data); // Array of user objects
  });
};

// Get user by ID from the database
export const getUsersByID = (req, res) => {
  const q = "SELECT uid, password, email, role, gpa FROM users WHERE uid = ?";

  db.query(q, [req.params.courseCode], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data); // Array of user objects
  });
};

// Get user by email from the database
export const getUsersByEmail = (req, res) => {
  const q = "SELECT uid, password, email, role, gpa FROM users WHERE email = ?";

  db.query(q, [req.params.courseCode], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data); // Array of user objects
  });
};

// Get users by GPA from the database
export const getUsersByGPA = (req, res) => {
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

// Drop a user from the database
export const dropUser = (req, res) => {
  const q = "DELETE FROM users WHERE uid = ?";

  db.query(q, [req.body.uid], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Drop successful.");
  });
};

// Delete a user from the database
export const delUser = (req, res) => {
  const q = "SELECT * FROM users WHERE uid = ?";

  db.query(q, [req.body.uid], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(409).json("User does not exist");

    const q = "DELETE FROM users WHERE uid = ?";
    const values = [req.body.uid];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User deleted successfully.");
    });
  });
};

// Update user password
export const updatePassword = (req, res) => {
  const q = 'SELECT password FROM users WHERE uid = ?';
  db.query(q, [req.body.uid], (err, data) => {
    if (data[0].password != req.body.currentPassword) return res.status(400).json("Current password does not match.");
    if (req.body.newPassword != req.body.newPasswordConfirmation) return res.status(400).json("New passwords do not match.");

    const q = 'UPDATE users SET password = ? WHERE uid = ?';

    db.query(q, [req.body.newPassword, req.body.uid], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Password changed successfully.");
    });
  });
};
