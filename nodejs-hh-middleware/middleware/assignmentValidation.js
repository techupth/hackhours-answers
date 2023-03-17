function validateAssignmentData(req, res, next) {
  const body = req.body;
  
  if (body.title.length > 35) {
    return res.status(401).json({ message: "Title must not be over 35 characters" });
  }
  
  if (body.description > 150) {
    return res.status(401).json({ message: "Description must not exceed 150 characters" });
  }
  
  if (!Array.isArray(body.catergories) || body.catergories.length < 1) {
    return res.status(401).json({ message: "Categories must be an array with at least 1 value" });
  }

  next();
}

export default validateAssignmentData;