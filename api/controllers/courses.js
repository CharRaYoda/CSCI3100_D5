import { db } from "../db.js";

// Add a course
export const addCourse = (req, res) => {
  const q = "SELECT * FROM courses WHERE cid = ?";
  
  // Check if the course already exists
  db.query(q, [req.body.cid], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("Course already exists.");
    
    const q = "INSERT INTO courses(`cid`,`name`,`startTime`,`endTime`,`place`,`department`,`instructor`,`capacity`,`current_capacity`,`description`,`Term`,`date`) VALUES (?)";
    const values = [
      req.body.cid,
      req.body.name,
      req.body.startTime,
      req.body.endTime,
      req.body.place,
      req.body.department,
      req.body.instructor,
      req.body.capacity,
      req.body.current_capacity,
      req.body.description,
      req.body.Term,
      req.body.date,
    ];
    
    // Add the course to the database
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Course added successfully.");
    });
  });
};

// Delete a course
export const delCourse = (req, res) => {
  const q = "SELECT * FROM courses WHERE cid = ?";
  
  // Check if the course exists
  db.query(q, [req.body.cid], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(409).json("Course does not exist.");
    
    const q = "DELETE FROM courses where cid = ?";
    const values = [req.body.cid];
    
    // Delete the course from the database
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Course deleted successfully.");
    });
  });
};

// Get a course by ID
export const getCourseByID = (req, res) => {
  const q = "SELECT cid,name,TIME_FORMAT(startTime, '%H:%i') AS startTime,TIME_FORMAT(endTime, '%H:%i') AS endTime,place,department,instructor,capacity,current_capacity,Term,date,description FROM courses WHERE cid = ?";
  
  // Retrieve the course from the database based on the ID
  db.query(q, [req.params.courseId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data); // Array of objects
  });
};

// Get a course by name
export const getCourseByName = (req, res) => {
  const q = "SELECT cid,name,TIME_FORMAT(startTime, '%H:%i') AS startTime,TIME_FORMAT(endTime, '%H:%i') AS endTime,place,department,instructor,capacity,current_capacity,Term,date,description FROM courses WHERE name = ?";
  
  // Retrieve the course from the database based on the name
  db.query(q, [req.params.courseName], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data); // Array of objects
  });
};

// Get courses by department
export const getCourseByDepartment = (req, res) => {
  const q = "SELECT cid,name,TIME_FORMAT(startTime, '%H:%i') AS startTime,TIME_FORMAT(endTime, '%H:%i') AS endTime,place,department,instructor,capacity,current_capacity,Term,date,description FROM courses WHERE department = ?";

  // Retrieve the courses from the database based on the department
  db.query(q, [req.params.courseDepartment], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data); // Array of objects
  });
};

// Get courses by time range
export const getCourseByTime = (req, res) => {
  const q = "SELECT cid,name,TIME_FORMAT(startTime, '%H:%i') AS startTime,TIME_FORMAT(endTime, '%H:%i') AS endTime,place,department,instructor,capacity,current_capacity,Term,date,description FROM courses WHERE startTime BETWEEN ? AND ?";

  // Retrieve the courses from the database based on the time range
  db.query(q, [req.body.startRange, req.body.endRange], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data); // Array of objects
  });
};

// Get courses taught by an instructor
export const getCourseTeaching = (req, res) => {
  const q = "SELECT cid,name,TIME_FORMAT(startTime, '%H:%i') AS startTime,TIME_FORMAT(endTime, '%H:%i') AS endTime,place,department,instructor,capacity,current_capacity,Term,date,description FROM courses WHERE instructor = ?";

  // Retrieve the courses from the database taught by the instructor
  db.query(q, [req.params.instructor], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data); // Array of objects
  });
};

// Get all courses
export const getAllCourses = (req, res) => {
  const q = "SELECT * FROM courses";
  
  // Retrieve all courses from the database
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data); // Array of objects
  });
};

// Update a course's description
export const courseUpdate = (req, res) => {
  const q = "SELECT * FROM courses WHERE cid =?";
  
  // Check if the course exists
  db.query(q, [req.body.cid], (err, data) => {
    if (err) return res.status(500).json(err);
    if (!data.length) return res.status(409).json("Please enter the correct course code.");
    
    const q = "UPDATE courses SET description = ? WHERE cid = ?";
    
    // Update the course's description in the database
    db.query(q, [req.body.description, req.body.cid], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Course updated successfully.");
    });
  });
};

// Update a course's classroom
export const ClassroomUpdate = (req, res) => {
  const qq = "SELECT * FROM courses WHERE (startTime BETWEEN ? AND ?)";
  
  // Check if there are any conflicting courses in the given time range
  db.query(qq, [req.body.startTime, req.body.endTime], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length != 0) return res.status(409).json("There is no such course or you entered wrong information");
    const qqu = "UPDATE courses SET place = ? WHERE cid = ?";
    db.query(qqu, [req.body.place, req.body.cid], (err, data) => {
      if (err) return res.status(500).json(err);
      if (!err) return res.status(200).json("Course updated successfully.");
    });
  });
};

