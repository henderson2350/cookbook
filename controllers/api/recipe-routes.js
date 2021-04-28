const router = require('express').Router();
const { Model, DataTypes } = require('sequelize');

const sequelize = require("../../config/connection");

class Recipe extends Model {}

module.exports = router;