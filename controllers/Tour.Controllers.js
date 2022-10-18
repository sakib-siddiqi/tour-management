const { TourModel } = require("../schema/Tour.schema");

/**
 * @api /tours
 * @METHOD GET
 * @desc GET all tours
 */

module.exports.getAllTours = async (req, res, next) => {
  try {
    const limit = +req.query.limit || 10;
    const page = +req.query.page >= 1 ? +req.query.page : 1;
    const fields = (req?.query?.fields || "").split(",").join(" ");
    const sort = (req?.query?.sort || "").split(",").join(" ");

    const result = await TourModel.find({})
      .select(fields)
      .sort(sort)
      .limit(limit)
      .skip(limit * (page - 1));
    res.status(200).json(result);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
};

/**
 * @api /tours
 * @METHOD POST
 * @desc save a tour
 */

module.exports.saveTour = async (req, res, next) => {
  try {
    const result = await TourModel.create(req.body);
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json(e);
  }
};

/**
 * @api /tours/:id
 * @METHOD GET
 * @desc get tour by id
 */

module.exports.getTourByID = async (req, res, next) => {
  try {
    const ID = req.params.id;
    const update_res = await TourModel.updateOne(
      { _id: ID },
      { $inc: { views: 1 } },
      { runValidators: true }
    );
    if (update_res) {
      const result = await TourModel.findById(ID);
      res.status(200).json(result);
    } else {
      throw new Error(`_id:(${ID}), tour not found`);
    }
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
};

/**
 * @api /tours/:id
 * @METHOD PETCH
 * @desc update a tour
 */

module.exports.updateTour = async (req, res, next) => {
  try {
    const update = req.body || {};
    const ID = req.params.id;
    const update_res = await TourModel.updateOne({ _id: ID }, update, {
      runValidators: true,
    });
    if (update_res) {
      const result = await TourModel.findById(ID);
      res.status(200).json(result);
    } else {
      throw new Error(`_id:(${ID}), tour not found`);
    }
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
};

/**
 * @api /tours/trending
 * @METHOD GET
 * @desc get Tranding
 */

module.exports.getTranding = async (req, res, next) => {
  try {
    const result = await TourModel.find()
      .limit(3)
      .sort({ views: -1, price: -1 });
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json(e);
  }
};

/**
 * @api /tours/cheapest
 * @METHOD GET
 * @desc get cheapest
 */

module.exports.getCheapest = async (req, res, next) => {
  try {
    const result = await TourModel.find()
      .limit(3)
      .sort({ price: 1, views: -1 });
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json(e);
  }
};
