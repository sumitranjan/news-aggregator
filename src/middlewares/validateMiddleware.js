function validate(scehma) {
  return (req, res, next) => {
    const { error } = scehma.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    next();
  };
}

module.exports = { validate };
