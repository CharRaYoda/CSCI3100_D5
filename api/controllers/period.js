import { db } from "../db.js";

export const getAllPeriods = (req, res) => {
    const q =
        "SELECT start_date, start_time, end_date, end_time FROM enrollment_period";
    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);//array of objects
    });
};

export const addPeriod = (req, res) => {
    const q = "SELECT * FROM enrollment_period WHERE start_date = ? AND start_time = ? AND end_date = ? AND end_time = ?";

    db.query(q, [req.body.start_date, req.body.start_time, req.body.end_date, req.body.end_time], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json("Period already exist.");

        const q = "INSERT INTO enrollment_period(`start_date`, `start_time`, `end_date`, `end_time`) VALUES (?)";
        const values = [req.body.start_date, req.body.start_time, req.body.end_date, req.body.end_time];

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("Period added successfully.");
        });
    });
};