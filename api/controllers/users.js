export const sendTempPassword = (req, res) => {

    const nodemailer = require('nodemailer');
    const randomstring = require('randomstring');
    
    const q = "SELECT * FROM users WHERE uid = ? AND email = ?";

    db.query(q, [req.body.uid, req.body.email], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json("User not found.");

        const tempPassword = randomstring.generate(10);

        const q2 = "UPDATE users SET password = ${tempPassword} WHERE uid = ? AND email = ?";
        db.query(q, [req.body.uid, req.body.email], (err, data) => {
            if (err) return res.status(500).json(err);
        });
        
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'csci3100DevTeam@gmail.com',
                pass: 'csci3100d5',
            },
        });

        const mailOptions = {
            from: 'csci3100DevTeam@gmail.com',
            to: data[0].email,
            subject: 'Course Selection System: Temporary Password',
            text: `As requested, Your temporary password is ${tempPassword}, please contact admin if you find any problem.`,
        };

        try {
            /*await*/ transporter.sendMail(mailOptions);
            return res.status(200).json({
                message: 'A temporary password has been sent to your email.',
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: 'Failed to send temporary password, please try again later.',
            });
        }
    });

};