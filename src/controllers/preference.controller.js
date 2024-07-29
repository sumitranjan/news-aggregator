const {
  getUserPreferencesService,
  updateUserPreferencesService,
} = require("../services/users.service");

function getUserPreferences(req, res) {
  try {
    const { preferences } = getUserPreferencesService(req.userId);
    res.status(200).json({ preferences: preferences });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong : " + error,
      status: 500,
    });
  }
}

function updateUserPreferences(req, res) {
  try {
    const { preferences } = req.body;
    const { message, status } = updateUserPreferencesService(
      preferences,
      req.userId
    );
    res.status(200).json({ message, status });
  } catch (error) {
    res.statsu(500).json({
      message: "Something went wrong : " + error,
      status: 500,
    });
  }
}

module.exports = {
  getUserPreferences,
  updateUserPreferences,
};
