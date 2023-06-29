const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,

} = require('../../controllers/thought-controller');



//router.route('/').get(getThoughts).post(createThought);
router
  .route('/:thoughtId')
  .get(getSingleThought)

module.exports = router;