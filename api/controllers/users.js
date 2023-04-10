import { db } from "../db.js";

// ChangePassword
export const updatePassword = (req, res) => {
  try {
    
    const q2 = 'SELECT password FROM users WHERE uid = ?';
    db.query(q2, [req.body.uid], (err, data) => {
        if (data[0].password != req.body.currentPassword) return res.status(400).json("Current password not match!");
    });

    if (req.body.newPassword != req.body.newPasswordConfirmation) return res.status(400).json("New password not match!");

    // SQL query
    const q = 'UPDATE users SET password = ? WHERE uid = ?';
    
    // execute the query
    db.query(q, [req.body.newPassword, req.body.uid], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("ChangePassword successfully.");
      });
    
  } catch (error) {
    console.error(error);
    throw error;
  }
}
