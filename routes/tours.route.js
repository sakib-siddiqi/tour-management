const { Router } = require("express");
const { getAllTours, saveTour, getTourByID, updateTour, getTranding, getCheapest } = require("../controllers/Tour.Controllers");

const tourRoute=Router();

tourRoute.route('/tours/trending').get(getTranding);
tourRoute.route('/tours/cheapest').get(getCheapest);

tourRoute.route('/tours').get(getAllTours).post(saveTour);
tourRoute.route('/tours/:id').get(getTourByID).patch(updateTour);

module.exports=tourRoute;