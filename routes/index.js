var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  res.status(200).json({ level1 })
});

var level1 = [
  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
  ['B', 'VS', 'F1', 'F1', 'F1', 'F1', 'I1', 'F1', 'F1', 'F1', 'F1', 'B', 'B', 'B', 'B', 'B'],
  ['B', 'F1', 'F1', 'B', 'B', 'B', 'B', 'P1', 'B', 'B', 'B', 'F1', 'B', 'B', 'B', 'B'],
  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'F1', 'B', 'B', 'B', 'B'],
  ['B', 'B', 'E', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'F1', 'F1', 'F1', 'F1', 'F1', 'B'],
  ['B', 'B', 'F1', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'F1', 'B'],
  ['B', 'B', 'F1', 'B', 'B', 'F1', 'F1', 'F1', 'F1', 'B', 'B', 'B', 'B', 'F1', 'B', 'B'],
  ['B', 'B', 'F1', 'B', 'B', 'F1', 'B', 'B', 'F1', 'B', 'B', 'B', 'B', 'F1', 'B', 'B'],
  ['B', 'P3', 'I3', 'B', 'B', 'F1', 'B', 'B', 'F1', 'B', 'F1', 'F1', 'F1', 'I2', 'P2', 'B'],
  ['B', 'B', 'F1', 'F1', 'F1', 'F1', 'B', 'B', 'F1', 'F1', 'F1', 'B', 'B', 'B', 'B', 'B'],
  ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B']
]



module.exports = router;
