import Tech from "../models/tech.js";

async function getALLTech(req, res, next) {
  try {
    const technology = await Tech.find();
    return res.status(200).json(technology);
  } catch (error) {
    next(error);
  }
}

async function buyNEWTech(req, res, next) {
  try {
    const newTech = await Tech.create(req.body);

    return res.status(201).send(newTech);
  } catch (error) {
    next(error);
  }
}
// /tech/:id
function getSingleTech(req, res, next) {
  try {
    res.send(`GET request received on /tech/:id with id: ${req.params.id}.`); // req.params.id
  } catch (error) {
    next(error);
  }
}

function updateTech(req, res, next) {
  try {
    res.send("Update Movie");
  } catch (error) {
    next(error);
  }
}

function deleteTech(req, res, next) {
  try {
    res.send("POST request recieved by GetSingleTech");
  } catch (error) {
    next(error);
  }
}

export default {
  getALLTech,
  buyNEWTech,
  getSingleTech,
  updateTech,
  deleteTech,
};
