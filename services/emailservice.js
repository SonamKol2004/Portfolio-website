const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
transporter.verify(function (error, success) {
    if (error) {
        console.log("Mail Server Error:");
        console.log(error);
    } else {
        console.log("Mail Server is Ready");
    }
});


const sendEmail = async (contact) => {

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,

        subject: "New Portfolio Contact Message",

        html: `
            <h2>New Contact Message</h2>

            <p><strong>Name:</strong> ${contact.name}</p>

            <p><strong>Email:</strong> ${contact.email}</p>

            <p><strong>Subject:</strong> ${contact.subject}</p>

            <p><strong>Message:</strong></p>

            <p>${contact.message}</p>
        `
    };

   try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Inside sendEmail");
    console.log("Email sent successfully!");
    console.log(info);
} catch (error) {
    console.log("Email Error:");
    console.log(error);
}
};

module.exports = sendEmail;