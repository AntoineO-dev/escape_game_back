const express = require('express');
const router = express.Router();
const escape_gamesController = require('../controllers/escape_gamesController');

//GET /escape_games
router.get('/', escape_gamesController.getAllEscapeGames);

//GET /escape_games/available
router.get('/available', escape_gamesController.getAvailableEscapeGames);

//GET /escape_games/numberofplayers
router.get('/numberofplayers/:Number_of_players', escape_gamesController.getEscapeGameByNumberOfPlayers);

//GET /escape_games/priceAbove/:price
router.get('/priceAbove/:price', escape_gamesController.getEscapeGameByPriceAbove);

//GET /escape_games/priceBelow/:price
router.get('/priceBelow/:price', escape_gamesController.getEscapeGameByPriceAbove);

//GET /escape_games/status/:status
router.get('/status/:status', escape_gamesController.getEscapeGameByStatus);

//GET /escape_games/:id
router.get('/:id', escape_gamesController.getEscapeGameById);

module.exports = router;