import Package from "../models/Package.js";

export const createPackage = async (req, res) => {
  const data = await Package.create(req.body);
  res.json(data);
};

export const getPackages = async (req, res) => {
  const data = await Package.find();
  res.json(data);
};

export const deletePackage = async (req, res) => {
  await Package.findByIdAndDelete(req.params.id);
  res.json("Deleted");
};