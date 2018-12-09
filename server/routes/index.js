const { Router } = require("express");
const weatherApi = require("../controller");

const router = Router();

router.get('/**', weatherApi.getWeather);
module.exports = router;