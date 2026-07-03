const Contact = require("../models/Contact");
const sendEmail = require("../services/emailservice"); // Check filename

const saveContact = async (req, res) => {
    try {
        const contact = new Contact(req.body);

        await contact.save();
        console.log("Contact Saved");

        await sendEmail(contact);   // ✅ This was missing
        console.log("Email Sent");

        res.status(201).json({
            message: "Message Saved Successfully"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = { saveContact };