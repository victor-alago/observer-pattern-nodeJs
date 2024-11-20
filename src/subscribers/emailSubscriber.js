const nodemailer = require("nodemailer");

// Define the email subscriber
const emailSubscriber = (data) => {
    const { name, createdAt } = data;

    // Create an Ethereal test account
    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.error("Failed to create a testing account:", err.message);
            return;
        }

        // Configure transporter using Ethereal credentials
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
                user: account.user, // Generated test account user
                pass: account.pass  // Generated test account password
            }
        });

        // Email options
        const mailOptions = {
            from: '"Observer App" <observer@example.com>',
            to: "test@example.com", // Replace with any test email address
            subject: `New Resource Created: ${name}`,
            text: `A new resource has been created with the following details:\n\nName: ${name}\nCreated At: ${createdAt}`
        };

        // Send email
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error("Error sending email:", err.message);
            } else {
                console.log("Email sent successfully!");
                console.log("Preview URL:", nodemailer.getTestMessageUrl(info)); // Preview URL
            }
        });
    });
};

module.exports = emailSubscriber;