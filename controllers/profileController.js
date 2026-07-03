const Profile = require("../models/Profile");

const getProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne();
        res.json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getProfile };