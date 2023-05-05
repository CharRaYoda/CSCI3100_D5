import { db } from "../db.js";

// Register a new user
export const register = (req, res) => {
  if (req.body.role === "select") return res.status(409).json("Please select your role.");
  
  // Check if the user already exists
  const q = "SELECT * FROM users WHERE uid = ?";
  db.query(q, [req.body.uid], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists.");

    const q = "INSERT INTO users(`uid`,`password`, `name`, `email`,`role`) VALUES (?)";
    const values = [req.body.uid, req.body.password, req.body.name, req.body.email, req.body.role];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

// User login
export const login = (req, res) => {
  if (req.body.role === "select") return res.status(409).json("Please select your role.");

  const q = "SELECT * FROM users WHERE uid = ?";

  db.query(q, [req.body.uid], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found.");

    // Check if the entered password matches the stored password
    const isPasswordCorrect = req.body.password == data[0].password ? true : false;
    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password.");

    // Check if the entered role matches the stored role
    if (req.body.role !== data[0].role) {
      return res.status(400).json("The role does not match.");
    }

    return res.status(200).json(data[0]);
  });
};

// User logout
export const logout = (req, res) => {
  res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
  }).status(200).json("User has been logged out.");
};
